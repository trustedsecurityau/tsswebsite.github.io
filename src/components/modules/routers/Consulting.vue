<template>
    <template-router
        id="consulting-router"
        :to="{ name: 'consulting' }"
        :opacity="0.1"
        image="/img/services/strategic/strategic_excerpt_2x.png">
        <h3>Security Assurance</h3>
        <p>
            Our <b>Security Snapshot</b> and <b>Security Architecture Review</b> services
        </p>
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

    #consulting-router {
        /deep/ {
            .template:after {
                background-color: $strategic-color;
            }

            span {
                color: $strategic-color;
            }

            &:hover {
                span {
                    color: $black;
                }
            }
        }
    }
</style>
