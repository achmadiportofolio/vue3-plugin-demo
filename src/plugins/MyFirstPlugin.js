import MyHeader from '../components/MyHeader.vue'
export default {
    install: (app, options) => {
        /* declare global component */      
        console.log('options', options)
        app.component('my-header', MyHeader)
        app.directive('font-size-dir', (el, binding, vnode) => {
            var size = 16
            switch (binding.arg) {
                case "small":
                    // size = 10
                    size = options.fontSize.small
                    break;
                case "large":
                    // size = 20
                    size = options.fontSize.large
                    break;
                case "medium":
                    // size = 18
                    size = options.fontSize.medium
                    break;
                default:
                    size = 14
                    break;
            }
            el.style.fontSize = size + "px"
        })
        app.mixin({
            data(){
                return {
                    featuredLink: "http: tog.com"
                }
            },
            created() {
                console.log('console from MyfirstPlugin')
            },
        })
        const logout = ()=>{
            console.log('logout form plugin')
            alert("lokgout")
        }
        app.provide('pluginLogout', logout)
    }
}