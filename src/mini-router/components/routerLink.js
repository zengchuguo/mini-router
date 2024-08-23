import { computed, defineComponent, h, inject } from "vue"
import { routerKey } from "../const"

const useLink = (props) => {
    const router = inject(routerKey)

    const route = computed(_ => {
        const to = props.to
        return router.resolve(to)
    })    

    const navigate = e => {
        router.push(props.to)
    }
    return {
        href: computed(_ => route.value.href),
        navigate,
    }
}

const RouterLinkImpl = defineComponent({
    name: 'RouterLink',
    props: {
        to: {
            type: String,
            required: true,
        }
    },
    setup(props, { slots }) {
        const link = useLink(props)
        return () => {
            // 获取到子节点
            const children = slots.default()
            h(
                'a',
                {
                    href: link.href,
                    onClick: link.navigate,
                },
                children
            )
        }
    }
})

export const RouterLink = RouterLinkImpl