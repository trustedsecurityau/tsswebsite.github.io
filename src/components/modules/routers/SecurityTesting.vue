<template>
    <template-router
        id="security-testing-router"
        :opacity="0.2"
        :to="{ name: 'securitytesting' }"
        image="/img/services/operational/operational_excerpt_2x.png">
        <h3>Security Testing Services</h3>
        <p>
            Our <b>Red Teaming</b>, <b>Pentesting</b> and <b>Secure Code Review</b> division
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

    #security-testing-router {
        /deep/ {
            .template:after {
                background-color: $operational-color;
            }

            span {
                color: $operational-color;
            }

            &:hover {
                span {
                    color: $black;
                }
            }
        }
    }
</style>
