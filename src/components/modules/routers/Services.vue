<template>
    <template-router
        id="services-router"
        :to="{ name: 'services' }"
        image="/img/global/router/services_router_2x.jpg">
        <h3>Services</h3>
        <p>See what TSS has to offer.</p>
        <span>Learn More</span>
    </template-router>
</template>

<script>
import TemplateRouter from '@/components/modules/routers/RouterTemplate'

export default {
    components: {
        TemplateRouter
    }
}
</script>

<style lang="scss">
    @import '../../../assets/scss/settings';

    #services-router {
        &:before {
            opacity: 0;
        }

        /deep/ {

            h3 {
                color: $navypurple-color;
            }

            p {
                color: rgba($navypurple-color, 0.8);
                // color: $primary-color;
            }

            span {
                color: rgba($navypurple-color, 0.8);
            }
            .shade {
                background-color: $primary-color;
                opacity: 0.1 !important
            }
        }
    }
</style>
