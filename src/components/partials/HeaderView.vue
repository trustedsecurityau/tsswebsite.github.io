<template>
    <div
        class="header-wrapper"
        :class="theme">
        <headroom
            :z-index="999"
            :offset="100"
            class="HR">
            <header
                :class="theme">
                <div class="grid-container">
                    <div class="grid-x grid-padding-x align-middle">
                        <div class="shrink cell">
                            <div class="logo">
                                <router-link :to="{ name: 'home' }" @mouseover.native="show_services = false">
                                    <Logo :theme="theme"/>
                                </router-link>
                            </div>
                        </div>

                        <mobile-menu
                            :theme="theme"
                            class="cell auto hide-for-medium"/>

                        <div class="auto cell text-right show-for-medium">
                            <nav class="grid-x grid-padding-x align-right">
                                <router-link
                                    @mouseover.native="show_services = false"
                                    :to="{ name: 'about' }"
                                    class="cell shrink">About</router-link>
                                <router-link
                                    :to="{ name: 'services' }"
                                    @mouseover.native="show_services = true"
                                    class="cell shrink dropdown">Services</router-link>
                                <!--<router-link-->
                                    <!--:to="{ name: 'labs' }"-->
                                    <!--class="cell shrink">Labs</router-link>-->
                                <router-link
                                    @mouseover.native="show_services = false"
                                    :to="{ name: 'careers' }"
                                    class="cell shrink">Careers</router-link>
                                <router-link
                                    @mouseover.native="show_services = false"
                                    :to="{ name: 'contact' }"
                                    class="cell shrink">Contact</router-link>
                                <a
                                    @mouseover.native="show_services = false"
                                    href="https://medium.com/tsscyber"
                                    target="_blank"
                                    class="cell shrink">Blog</a>
                                <a
                                    @mouseover.native="show_services = false"
                                    href="https://www.linkedin.com/company/tss-cyber/"
                                    target="_blank"
                                    class="cell shrink linkedin"><i class="fab fa-linkedin"/></a>
                                <a
                                    @mouseover.native="show_services = false"
                                    href="https://twitter.com/TSSCyber"
                                    target="_blank"
                                    class="cell shrink twitter"><i class="fab fa-twitter-square"/></a>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

            <transition name="fade">
                <div class="fixed services-dropdown" v-if="show_services">
                    <div class="grid-y full-height">
                        <div class="cell shrink">
                            <div class="grid-x services-home">
                                <router-link :to="{ name: 'services' }" class="small-12 cell text-center ">
                                    <div class="full-height grid-x align-center-middle">
                                        <div class="cell shrink anchor-more">
                                            View all Services
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                        <div class="cell auto">
                            <div class="grid-x full-height services-list">
                                <router-link :to="{ name: 'consulting' }" class="service consulting small-12 medium-4 cell">
                                    <div class="bgi"></div>
                                    <div class="grid-x align-middle full-height">
                                        <div class="cell small-12 medium-10 large-9">
                                            <img src="/img/home/strategic_2x.png" alt="">
                                            <h4>{{ Services.consulting.title }}</h4>
                                            <p v-html="Services.consulting.showDescription"></p>
                                        </div>
                                    </div>
                                </router-link>
                                <router-link :to="{ name: 'mso' }" class="service mso small-12 medium-4 cell">
                                    <div class="bgi"></div>
                                    <div class="grid-x align-middle full-height">
                                        <div class="cell small-12 medium-10 large-9">
                                            <img src="/img/home/tactical_2x.png" alt="">
                                            <h4>{{ Services.mso.title }}</h4>
                                            <p v-html="Services.mso.showDescription"></p>
                                        </div>
                                    </div>
                                </router-link>
                                <router-link :to="{ name: 'securitytesting' }" class="service securitytesting small-12 medium-4 cell">
                                    <div class="bgi"></div>
                                    <div class="grid-x align-middle full-height">
                                        <div class="cell small-12 medium-10 large-9">
                                            <img src="/img/home/operational_2x.png" alt="">
                                            <h4>{{ Services.securitytesting.title }}</h4>
                                            <p v-html="Services.securitytesting.showDescription"></p>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
            <transition name="fade">
                <div class="services-exit fixed" @mouseover="show_services = false" v-if="show_services">
                </div>
            </transition>
        </headroom>
    </div>
</template>

<script>
	import { headroom } from 'vue-headroom'
	import Services from '@/components/services-list'

    const Logo = () => import('@/components/partials/header/Logo')
    const MobileMenu = () => import('@/components/partials/header/MobileMenu')


export default {
    name: 'Header',
    components: {
        headroom,
        Logo,
        MobileMenu
    },
    props: {
        theme: {
            type: String,
            default: 'dark'
        },
        topBarColour: {
            type: String,
            default: 'rgba(255,255,255,0.7)'
        }
    },
    data: function () {
        return {
            menu_open: false,
            show_services: false,
	        Services
        }
    },
    mounted: function() {
        setTimeout(() => {
            new Image().src = '/img/services/strategic/strategic_excerpt_2x.png';
            new Image().src = '/img/services/tactical/tactical_excerpt_2x.png';
            new Image().src = '/img/services/operational/operational_excerpt_2x.png';

            new Image().src = '/img/home/strategic_2x.png';
            new Image().src = '/img/home/tactical_2x.png';
            new Image().src = '/img/home/operational_2x.png';
        }, 1500)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '../../assets/scss/settings';

    .HR:not(.headroom) {
        position: fixed;
    }

    .header-wrapper {
        &:after {
            content: '';
            z-index: 999;
            width: 100%;
            position: fixed;
            border-top: 10px solid $primary-color;
        }

        &.dark:after {}
        &.light:after {}
        &.green:after {
            border-color: $primary-color;
        }
        &.red:after {
            border-color: $operational-color;
        }
        &.blue:after {
            border-color: $strategic-color;
        }
    }

    header {
        // margin-top: 10px;
        width: 100%;
        padding: 40px 0 30px;
        transition: all .2s;

        @include breakpoint(medium) {
            padding: 50px 0 30px;
        }

        html.no-js & {
            background-color: rgba(3, 5, 4, 0.9) !important;

            nav {
                a {
                    color: $white !important;

                    &:hover, &.router-link-active, i {
                        color: $primary-color !important;
                    }

                    i {
                        color: $primary-color !important;

                        &:hover {
                            color: $white !important;
                        }
                    }
                }
            }
        }

        &.dark {
            background-color: rgba(3, 5, 4, 0.3);

            nav {
                a {
                    color: $white;

                    &:hover, &.router-link-active, i {
                        color: $primary-color;
                    }

                    i {
                        color: $primary-color;

                        &:hover {
                            color: $white;
                        }
                    }
                }
            }

            /deep/.headroom--not-top & {
                transition: all .2s;
                background-color: rgba(3, 5, 4, 0.9);
                -webkit-backdrop-filter: blur(6px);
                backdrop-filter: blur(6px);
            }

            /deep/.headroom--unpinned & {
                opacity: 0;
            }
        }

        &.light {

            nav {
                a {
                    color: $header-color;

                    &:hover, &.router-link-active, i {
                        color: $primary-color;
                    }
                }
            }

            /deep/.headroom--not-top & {
                transition: all .2s;
                background-color: rgba(3, 5, 4, 0.9);
                -webkit-backdrop-filter: blur(6px);
                backdrop-filter: blur(6px);

                nav {
                    a {
                        color: $white;

                        &:hover {
                            color: $primary-color;
                        }

                        i {
                            color: $primary-color;

                            &:hover {
                                color: $white;
                            }
                        }
                    }
                }
            }

            /deep/.headroom--unpinned & {
                background-color: rgba(255, 255, 255, 0.9);
                opacity: 0;
            }
        }

        &.green {
            nav {
                a {
                    color: $white;

                    &:hover, &.router-link-active, i {
                        color: $primary-color;
                    }

                    i {
                        color: $primary-color;

                        &:hover {
                            color: $white;
                        }
                    }
                }
            }

            /deep/.headroom--not-top & {
                transition: all .2s;
                background-color: rgba(3, 5, 4, 0.9);
                -webkit-backdrop-filter: blur(6px);
                backdrop-filter: blur(6px);
            }

            /deep/.headroom--unpinned & {
                opacity: 0;
            }
        }

        &.red {
            nav {
                a {
                    color: $white;

                    &:hover, &.router-link-active, i {
                        color: $operational-color;
                    }

                    i {
                        color: $operational-color;

                        &:hover {
                            color: $white;
                        }
                    }
                }
            }

            /deep/.headroom--not-top & {
                transition: all .2s;
                background-color: rgba(3, 5, 4, 0.9);
                -webkit-backdrop-filter: blur(6px);
                backdrop-filter: blur(6px);
            }

            /deep/.headroom--unpinned & {
                opacity: 0;
            }
        }

        &.blue {
            nav {
                a {
                    transition: transform .2s;
                    color: $white;

                    &:hover, &.router-link-active, i {
                        color: $strategic-color;
                    }

                    i {
                        color: $strategic-color;

                        &:hover {
                            color: $white;
                        }
                    }
                }
            }

            /deep/.headroom--not-top & {
                transition: all .2s;
                background-color: rgba(3, 5, 4, 0.9);
                -webkit-backdrop-filter: blur(6px);
                backdrop-filter: blur(6px);
            }

            /deep/.headroom--unpinned & {
                opacity: 0;
            }
        }
    }
    .cell {
      // margin: 0 20px;
    }

    nav {
        a {
            font-size: 14px;
            text-transform: uppercase;
            font-weight: 500;

            html:not(.no-js) &.dropdown {
                &:after {
                    content: " ";
                    font-weight: 900;
                    font-family: 'Font Awesome 5 Free', sans-serif;
                }
            }

            i {
                font-size: 20px;

            }

            &.twitter {
                padding-right: 8px;
                > i {
                    color: #1dcaff !important;
                }

            }
            &.linkedin {
                padding-right: 8px;
                > i {
                    color: rgb(84,194,243) !important;
                    position: relative;
                }

            }
        }
    }

    .services-dropdown {
        display: block;
        background-color: #000;
        box-shadow: 0 10px 100px 0 rgba(0,0,0,0.5);

        &.fixed {
            left: 0;
            height: 350px;
            width: 100%;
            position: fixed;

            @include breakpoint(large) {
                height: 300px;
            }

            #app > .services & {
                height: 300px;
                
                @include breakpoint(large) {
                    height: 250px;
                }
            }
        }

        .services-home {
            /deep/ a {
                background: linear-gradient(75deg, #010205, #142f26);
                color: $white;
                height: 50px;
                font-weight: 500;

                .light & {
                    background: linear-gradient(75deg, #a9efda, #cdf7e8);
                    color: $header-color;
                }

                #app > .services & {
                    display: none;
                }
            }
        }

        .services-list {
        }

        .service {
            height: 100%;
            background-color: #000;
            // -webkit-background-size: 1000px;
            // background-size: 1000px;
            -webkit-background-size: cover;
            background-size: cover;
            background-position: top center;
            padding: 20px 40px;
            position: relative;

            .bgi {
                position: absolute;
                display: block;
                height: 100%;
                width: 100%;
                top: 0;
                left: 0;
                background-color: rgba(0,0,0,0.2);
                transition: opacity .2s;
                opacity: 0;
                z-index: -1;
            }

            &:hover {

                img {
                    transform: translateY(-5px);
                }
                .bgi {
                    opacity: 1;
                }
            }

            h4 {
                color: $white;
                margin: 0;

            }

            p {
                margin: 0;
                font-size: 12px;
                color: rgba($white, 0.5);
            }


            img {
                transition: transform .2s;
                padding: 0 0 10px;
                height: 60px;
            }
        }

        .consulting {
            background-image: url('/img/services/strategic/strategic_excerpt_2x.png');

            h4 {
                color: $strategic-color;
            }

            p {
                opacity: 0.7;
                color: lighten($strategic-color, 15%);
            }
        }
        .mso {
            background-image: url('/img/services/tactical/tactical_excerpt_2x.png');

            h4 {
                color: $tactical-color;
            }

            p {
                opacity: 0.7;
                color: lighten($tactical-color, 25%);
            }
        }
        .securitytesting {
            background-image: url('/img/services/operational/operational_excerpt_2x.png');

            h4 {
                color: $operational-color;
            }

            p {
                opacity: 0.7;
                color: lighten($operational-color, 25%);
            }
        }
    }

    .services-exit {
        &.fixed {
            position: fixed;
            z-index: -1;
            background-color: rgba(0,0,0,0.8);
            width: 100%;
            height: 100vh;
        }
    }

</style>

<style lang="scss" scoped>

    /* Enter and leave animations can use different */
    /* durations and timing functions.              */
    .fade-enter-active {
        transition: all .5s;
    }
    .fade-leave-active {
        transition: all .2s;
    }
    .fade-enter, .fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateY(10px);
        opacity: 0;
    }
</style>
