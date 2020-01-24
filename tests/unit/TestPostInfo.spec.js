import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import PostInfo from '@/components/PostInfo'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('test if PostInfo component renders normally', () => {

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
})