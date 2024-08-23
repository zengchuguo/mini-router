import { defineComponent, h } from "vue"

const RouterViewImpl = defineComponent({
    name: 'RouterView',
    props: {

    },
    setup(props, { slots }) {
        
        return () => {
            h(
                'div'
            )
        }
    }
})

export const RoueterView = RouterViewImpl