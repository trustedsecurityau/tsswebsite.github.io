<template>
    <div class="services">
        <header-view theme="light"/>
        <Hero
            theme="light"
            gp
            overflow
            light>
            <div class="eyebrow">Services</div>
            <h1>Serving premium cyber security to the Australian&nbsp;market.</h1>
            <p>TSS offers a range of consulting, security testing and managed security services. Our experience across a broad range of markets means we can assist your organisation in meeting its cyber security needs.</p>
        </Hero>

        <section class="services">
            <div class="grid-container">
                <div class="grid-x grid-padding-x">
                    <div class="cell small-12">
                        <div class="service consulting">
                            <div class="grid-x grid-padding-x">
                                <div class="small-12 cell">
                                    <img src="/img/home/strategic_2x.png"
                                         class="service-logo" alt="">
                                </div>
                                <div class="small-12 large-4 cell">
                                    <h2>{{ services.consulting.title }}</h2>
                                    <p class="description">
                                        <span v-html="services.consulting.description"/>
                                        <br >
                                        <router-link :to="{ name: 'consulting' }"
                                                     class="more">Learn more</router-link>
                                    </p>
                                </div>
                                <div class="small-12 large-auto cell">
                                    <div class="grid-x grid-padding-x">
                                        <div v-for="service in services.consulting.list"
                                             class="small-12 medium-6 cell">
                                            <router-link :to="{ name: 'consulting', hash: '#' + service.id }"
                                                         class="individual">
                                                <!--<img :src="service.icon" alt="" class="icon">-->
                                                <img :src="service.icon"
                                                     alt="" class="icon">
                                                <h5>{{ service.footerTitle }}</h5>
                                                <p>
                                                    {{ BillShorten(service.paragraph) }}<br >
                                                    <router-link :to="{ name: 'consulting', hash: '#' + service.id }"
                                                                 class="more">Learn more</router-link>
                                                </p>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="service mso">
                            <div class="grid-x grid-padding-x">
                                <div class="small-12 cell">
                                    <img src="/img/home/tactical_2x.png"
                                         class="service-logo" alt="">
                                </div>
                                <div class="small-12 large-4 cell">
                                    <h2>{{ services.mso.title }}</h2>
                                    <p class="description">
                                        <span v-html="services.mso.description"/>
                                        <br >
                                        <router-link :to="{ name: 'mso' }"
                                                     class="more">Learn more</router-link>
                                    </p>
                                </div>
                                <div class="small-12 large-auto cell">
                                    <div class="grid-x grid-padding-x">
                                        <div v-for="service in services.mso.list"
                                             class="small-12 medium-6 cell">
                                            <router-link :to="{ name: 'mso', hash: '#' + service.id }"
                                                         class="individual">
                                                <!--<img :src="service.icon" alt="" class="icon">-->
                                                <img :src="service.icon"
                                                     alt="" class="icon">
                                                <h5>{{ service.footerTitle }}</h5>
                                                <p>
                                                    {{ BillShorten(service.paragraph) }}<br >
                                                    <router-link :to="{ name: 'mso', hash: '#' + service.id }"
                                                                 class="more">Learn more</router-link>
                                                </p>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="service securitytesting">
                            <div class="grid-x grid-padding-x">
                                <div class="small-12 cell">
                                    <img src="/img/home/operational_2x.png"
                                         class="service-logo" alt="">
                                </div>
                                <div class="small-12 large-4 cell">
                                    <h2>{{ services.securitytesting.title }}</h2>
                                    <p class="description">
                                        <span v-html="services.securitytesting.description"/>
                                        <br >
                                        <router-link :to="{ name: 'securitytesting' }"
                                                     class="more">Learn more</router-link>
                                    </p>
                                </div>
                                <div class="small-12 large-auto cell">
                                    <div class="grid-x grid-padding-x">
                                        <div v-for="service in services.securitytesting.list"
                                             class="small-12 medium-6 cell">
                                            <router-link :to="{ name: 'securitytesting', hash: '#' + service.id }"
                                                         class="individual">
                                                <!--<img :src="service.icon" alt="" class="icon">-->
                                                <img :src="service.icon"
                                                     alt="" class="icon">
                                                <h5>{{ service.footerTitle }}</h5>
                                                <p>
                                                    {{ BillShorten(service.paragraph) }}<br >
                                                    <router-link :to="{ name: 'securitytesting', hash: '#' + service.id }"
                                                                 class="more">Learn more</router-link>
                                                </p>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="grid-x grid-padding-x">
            <about-router class="small-12 cell"/>
            <careers-router class="small-12 cell"/>
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
import SectionModule from '@/components/modules/Section'
import AboutRouter from '@/components/modules/routers/About'
import CareersRouter from '@/components/modules/routers/Careers'

import ServiceList from '@/components/services-list'

export default {
    components: {
        HeaderView,
        FooterView,
        HelloWorld,
        Hero,
        PanelGroup,
        Panel,
        SectionModule,
        AboutRouter,
        CareersRouter
    },
    data: function () {
        return {
            services: ServiceList
        }
    },
    mounted: function () {

    },
    methods: {
        BillShorten (string) {
            let length = 100
            if (string.length > length) {
                for (let i = length; i < string.length; i++) {
                    if (string[i] == ' ') {
                        string = string.slice(0, i) + '...'
                        break
                    }
                }
            }

            return string
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/scss/settings';

    section.services {
        margin-top: -150px;
        padding-bottom: 100px;
        position: relative;

        &:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: $white;
            z-index: -30;
        }

        .service {
            position: relative;
            z-index: 1;
            display: block;
            width: 100%;
            background-color: $white;
            box-shadow: 0 10px 30px 0 rgba($navypurple-color, 0.1);
            border-radius: $global-radius;
            margin-bottom: 40px;
            padding: 50px 30px 30px;

            @include breakpoint(medium) {
                padding: 80px 60px 30px;
            }

            p.description {
                margin-bottom: 40px;

                @include breakpoint(large) {
                    margin-bottom: 0;
                    margin-right: 20px;
                    // text-align: justify;
                }
            }

            a.individual {
                display: block;
                margin-top: 20px;
                @extend h5;

                @include breakpoint(large) {
                    margin-top: -40px;
                    margin-bottom: 80px;
                }

                .icon {
                    display: inline-block;
                    vertical-align: middle;
                    width: 40px;
                    margin-bottom: 10px;
                    transition: transform .5s;
                }

                h5 {
                    margin: 0;
                }

                p {
                    color: $body-font-color
                }

                &:hover {

                    .icon {
                        transform: translateY(-3px);
                    }

                }
            }

            &.consulting {
                border-left: 5px solid #5274fb;

                h2, a.more {
                    color: #5274fb;
                }
                a h5 {
                    transition: color .15s;
                }
                a {
                    &:hover h5 {
                        color: #5274fb;
                    }
                }
            }
            &.mso {
                border-left: 5px solid #30c699;

                h2, a.more {
                    color: #30c699;
                }
                a h5 {
                    transition: color .15s;
                }
                a {
                    &:hover h5 {
                        color: #30c699;
                    }
                }
            }
            &.securitytesting {
                border-left: 5px solid #fb3e3e;

                h2, a.more {
                    color: #fb3e3e;
                }
                a h5 {
                    transition: color .15s;
                }
                a {
                    &:hover h5 {
                        color: #fb3e3e;
                    }
                }
            }

            .service-logo {
                width: 80px;
                margin-bottom: 20px;
            }
        }

    }
</style>
