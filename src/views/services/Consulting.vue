<template>
    <div class="strategic">
        <header-view theme="blue"
                     top-bar-colour="#6b87f9"/>

        <ServiceHero :service-type="Services.consulting"/>

        <ServiceFeatured v-for="service in Services.consulting.list"
                         v-if="service.type === 'feature'"
                         :key="service.id"
                         :service="service"
                         skrim
                         waves />

        <ServiceRow
            v-for="service in Services.consulting.list"
            v-if="service.type === 'row'"
            :service="service"
            :key="service.id" />

        <ServiceSectionFeaturettes :service-list="Services.consulting.list"
                                   skrim/>

        <div class="grid-x grid-padding-x">
            <careers-router class="medium-auto small-12 cell"/>
            <mso-router class="medium-auto small-12 cell"/>
        </div>
        <footer-view/>
    </div>
</template>

<script>
import HeaderView from '@/components/partials/HeaderView'
import FooterView from '@/components/partials/FooterView'
import HelloWorld from '@/components/HelloWorld.vue'
import Hero from '@/components/modules/Hero'
import PanelGroup from '@/components/modules/custom/PanelGroup'
import Panel from '@/components/modules/custom/Panel'

import ServiceHero from '@/components/modules/Services/ServiceHero'
import ServiceFeatured from '@/components/modules/Services/ServiceFeatured'
import ServiceRow from '@/components/modules/Services/ServiceRow'
import ServiceSectionFeaturettes from '@/components/modules/Services/ServiceSectionFeaturettes'

import CareersRouter from '@/components/modules/routers/Careers'
import MsoRouter from '@/components/modules/routers/MSO'

import Rellax from 'rellax'
import Services from '@/components/services-list'

export default {
    components: {
        HeaderView,
        FooterView,
        HelloWorld,
        Hero,
        PanelGroup,
        Panel,
        ServiceHero,
        ServiceFeatured,
        ServiceRow,
        ServiceSectionFeaturettes,
        CareersRouter,
        MsoRouter
    },
    data: function () {
        return {
            Services
        }
    },
    mounted: function () {
        let main = this.$el.getElementsByClassName('rellax')[0]
        let sub = this.$el.getElementsByClassName('rellax')[1]

        Rellax(main, {
            center: true
        })

        Rellax(sub, {
            center: true
        })
    }
}
</script>

<style lang="scss" scoped>
    @import '../../assets/scss/settings';

    /deep/ {
        section:not(#hero) {
            &:nth-child(even) {
                background-color: #fafafa;
            }
        }
        section#hero {
            .main {
                background-image: url('/img/services/strategic/strategic_main_2x.png');
            }
            .sub {
                background-image: url('/img/services/strategic/strategic_sub_2x.png');
            }

            p {
                opacity: 0.9;
                color: lighten($strategic-color, 15%);
            }
        }
        section.feature {
            h2 {
                color: $strategic-color !important;
            }
        }
        section.section-service-row {
            h3 {
                color: $strategic-color !important;
            }

            &#grc {
                .image {
                    @include breakpoint(xlarge) {
                        top: 204px;
                        height: calc(100% - 324px);
                        bottom: 120px;
                    }
                }
            }
        }
        section#featurettes {
            h4 {
                color: $strategic-color !important;
            }
        }
    }
</style>
