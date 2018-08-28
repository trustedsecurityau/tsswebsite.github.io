<template>
    <div class="contact">
        <header-view theme="dark"/><Hero
            :gp="true"
            no-fixed-height
            remove-padding
            theme="dark">
            <h1/>
        </Hero>

        <section id="contact">
            <div class="grid-container">
                <div class="grid-x grid-padding-x">
                    <div class="cell small-12">
                        <h1>Contact Us</h1>
                    </div>
                    <div class="cell small-12 medium-auto">
                        <h3>How to get in touch</h3>
                        <div class="grid-x email-block">
                            <div class="cell small-12 large-6">
                                <p>
                                    <i class="fas fa-comments icon"></i>
                                    <b>General enquiries</b>
                                    <a href="mailto:team@tsscyber.com.au">team@tsscyber.com.au</a>
                                    <a href="/img/contact/team-pub-key.asc" class="key"><i class="fa fa-key"></i> PGP Key</a>
                                </p>
                            </div>
                            <div class="cell small-12 large-6 locations">
                                <p>
                                    <i class="fas fa-building icon"></i>
                                    <b>Careers related enquiries</b>
                                    <a href="mailto:work@tsscyber.com.au">work@tsscyber.com.au</a>
                                    <a href="/img/contact/work-pub-key.asc" class="key"><i class="fa fa-key"></i> PGP Key</a>
                                </p>
                            </div>
                        </div>
                        <p>
                            Or if you prefer to call us, phone <a href="phone:+61261522200">+61 2 6152 2200</a>.
                        </p>
                    </div>

                    <div class="cell small-12 medium-shrink locations">

                        <h3>Locations</h3>

                        <div class="map-wrapper">
                            <div class="map"></div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

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
import CareersRouter from '@/components/modules/routers/Careers'
import AboutRouter from '@/components/modules/routers/About'

export default {
    components: {
        HeaderView,
        FooterView,
        HelloWorld,
        Hero,
        PanelGroup,
        Panel,
        SectionModule,
        CareersRouter,
        AboutRouter
    },
    mounted: function() {

    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/scss/settings';

    section#contact {
        background-color: $white;
        padding: 80px 0;
        position: relative;
        z-index: 0;

        ul {
            margin-top: -10px;

            li {
                margin-left: 10px;
                padding-left: 10px;
            }
        }

        h1, h2, h3, h4, h5, .cell {
            // position: relative;
            // z-index: 4;
        }

        h3 {
            color: $primary-color;
        }

        h1 {
            margin-bottom: 50px;
        }

        .icon {
            color: $header-color;
            font-size: 26px;
        }

        b {
            color: $header-color;
            display: block;
        }

        p a {
            font-weight: 500;
        }

        a.key {
            display: block;
            font-size: 14px;
            color: $body-color;
            opacity: 0.5;
            margin-top: 8px;

            &:hover {
                color: $primary-color;
            }
        }

        .email-block {
            margin-top: 50px;

            @include breakpoint(medium) {
                margin-bottom: 40px;
            }

            .cell {
                margin-bottom: 40px;
            }
        }

        .locations {


            .map-wrapper {
                position: relative;
                width: 100%;
                min-width: 390px;
                min-height: 400px;

                @include breakpoint(large) {
                    min-width: 550px;
                    min-height: 500px;
                }

                .map {
                    width: 175%;
                    height: 550px;
                    background-repeat: no-repeat;
                    background-image: url('/img/contact/map@2x.jpg');
                    background-position: right center;
                    -webkit-background-size: contain;
                    background-size: contain;
                    position: absolute;
                    right: 80px;
                    top: -150px;
                    z-index: -1;

                    @include breakpoint(large) {
                        width: 1116px;
                        height: 661px;
                        right: 50px;
                    }
                }
            }
        }




    }
</style>
