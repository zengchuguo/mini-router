/**
 * TODO 回去看看
 * 路由信息的注册，这里会生成一个matcher，但是这个又有什么作用的
 * 1、要基于history创建监听事件，发现变化的时候触发nagivate（触发路由事件）
 * 2、routerView要要基于current匹配正确的路由信息
 */
import { routerKey, routerLocationKkey, defaultCurrentRoute } from './const'
import RouterLink from './components/routerLink'
import RouterView from './components/routerView'
import { shallowRef } from 'vue'

export const createRouter = options => {
    const history = options.history
    const route = options.route
    const currentRoute = shallowRef(defaultCurrentRoute)
    const router = {
        install(app) {
            app.component('RouterLink', RouterLink)
            app.component('RouterView', RouterView)
        },

        push(to) {

        },


        resolve(to) {
            
        }
    }

    app.provide(routerKey, router)
    app.provide(routerLocationKkey, currentRoute)
}