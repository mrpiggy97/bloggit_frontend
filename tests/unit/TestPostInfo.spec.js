import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import PostInfo from '@/components/PostInfo'

const localVue = createLocalVue()
localVue.use(Vuex)
jest.mock("@/services/PostServices/likePost")

describe('test PostInfo component when user is not authenticated', () => {

    //mainly to mock vuex
    let wrapperConfig = {
        propsData: {
            previewMode: true,
            info: {
                owner:{
                    username: 'mrpiggy97',
                    profile_pic: null
                },
                date: '11 april 2019',
                title: 'this is the title',
                text: 'this is the text',
                communities: ['mocks'],
                likes: 1,
                liked: null,
                reported: null
            }
        },
        computed:{
            //for components that use vuex to pass tests we have to mock (override)
            //any method of computed property that uses store
            authenticated(){
                return false
            }
        },
        localVue
    }

    let wrapper = shallowMount(PostInfo, wrapperConfig)

    it('checks post-body does not render if previewMode is true', () => {
        expect(wrapper.find('.post-body').exists()).toBe(false)
    })

    it('checks post-body renders if previewMode is false', () => {
        wrapper.setProps({previewMode: false})

        expect(wrapper.find('.post-body').exists()).toBe(true)
    })

    it('checks that elements and methods work as expected ', async () => {
        expect(wrapper.find('.inactive').exists()).toBe(true)
        await wrapper.vm.like()
        //if like is invoked when user is not authenticated method should return
        //null therefore not doing anything that affects liked and likes fields
        expect(wrapper.find('.inactive').exists()).toBe(true)
        expect(wrapper.vm.likes).toBe(1)
        expect(wrapper.vm.liked).toBe(null)
    })
})

describe('test that features dependant on authentication work properly', () => {

    let wrapperConfig = {
        propsData: {
            info: {
                owner: {username: 'testuser', profile_pic: null},
                date: "13 april 2020",
                title: "this is a post",
                text: "this is the text",
                communities: ['mock'],
                likes: 1,
                liked: false,
                reported: false
            },
            previewMode: true
        },
        computed:{
            authenticated(){
                return true
            }
        },
        methods:{
            removeUserCredentials(){
                this.authenticated = false
            }
        },
        localVue
    }

    let wrapper = shallowMount(PostInfo, wrapperConfig)

    it('checks that like method works as expected', async () => {
        expect(wrapper.find('.inactive').exists()).toBe(true)
        await wrapper.vm.like()
        expect(wrapper.vm.likes).toBe(2)
        expect(wrapper.vm.liked).toBe(true)

        //once a like has been given the function should not affect the dom
        //anymore
        expect(wrapper.find('.inactive').exists()).toBe(false)
        expect(wrapper.find('.active').exists()).toBe(true)
    })
})