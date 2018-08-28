<template>
    <template-router
        id="mso-router"
        :opacity="0.2"
        :to="{ name: 'mso' }"
        image="/img/services/tactical/tactical_excerpt_2x.png">
        <h3>Managed Security Operations</h3>
        <p>
            Our <b>Managed Security Overwatch</b> and <b>Monitoring</b> division
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

    #mso-router {
        /deep/ {
            .template:after {
                background-color: $tactical-color;
            }

            span {
                color: $tactical-color;
            }

            &:hover {
                span {
                    color: $black;
                }
            }
        }
    }
</style>
