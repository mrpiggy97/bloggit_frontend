import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Home from '@/views/Home'

jest.mock('@/services/PostServices/getPosts')
const localVue = createLocalVue()
localVue.use(Vuex)

describe('Tests for home view', () => {

    let wrapperConfig = {
        methods:{
            removeUserCredentials(){
                this.authenticated = false
            }
        },

        computed:{
            authenticated(){
                return false
            }
        },

        localVue
    }

    let wrapper = shallowMount(Home, wrapperConfig)

    it('checks if app gets posts when created', () => {
        expect(wrapper.vm.posts.length).toBe(1)
    })

    it('checks that there is a second page at the beggining', () => {
        expect(wrapper.vm.nextPage).toBe(2)
        expect(wrapper.vm.previousPage).toBe(null)
    })

    it('checks that getPostsPage method works as expected', async () => {
        await wrapper.vm.getPagePosts(2)
        expect(wrapper.vm.nextPage).toBe(null)
        expect(wrapper.vm.previousPage).toBe(1)
    })
})