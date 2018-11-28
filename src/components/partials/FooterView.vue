<template>
    <footer>

        <div class="grid-container">
            <nav class="grid-x grid-padding-x align-justify">
                <div class="cell small-11 medium-shrink">
                    <router-link :to="{ name :'home' }">
                        <Logo class="logo"/>
                    </router-link>
                </div>
                <div class="cell small-11 medium-shrink">
                    <h5>Company</h5>
                    <router-link :to="{ name :'about' }">About</router-link>
                    <!--<router-link to="/labs">Labs</router-link>-->
                    <router-link :to="{ name :'careers' }">Careers</router-link>
                </div>
                <div class="cell small-11 medium-auto">
                    <h5>Services</h5>
                    <div class="strategic">
                        <router-link v-for="service in Services.consulting.list"
                                     v-if="service.showInFooter"
                                     :key="service.footerTitle"
                                     :to="{ name: 'consulting', hash: '#' + service.id}">
                            {{ service.footerTitle }}
                        </router-link>
                    </div>
                </div>
                <div class="cell small-11 medium-auto">
                    <h5 class="show-for-medium">&nbsp;</h5>
                    <div class="tactical">
                        <router-link v-for="service in Services.mso.list"
                                     v-if="service.showInFooter"
                                     :key="service.footerTitle"
                                     :to="{ name: 'mso', hash: '#' + service.id}">
                            {{ service.footerTitle }}
                        </router-link>
                    </div>
                </div>
                <div class="cell small-11 medium-auto">
                    <h5 class="show-for-medium">&nbsp;</h5>
                    <div class="operational">
                        <router-link v-for="service in Services.securitytesting.list"
                                     v-if="service.showInFooter"
                                     :key="service.footerTitle"
                                     :to="{ name: 'securitytesting', hash: '#' + service.id}">
                            {{ service.footerTitle }}
                        </router-link>
                    </div>
                </div>

                <div class="cell small-11 medium-shrink">
                    <h5>Connect</h5>
                    <a href="https://twitter.com/TSSCyber">Twitter</a>
                    <a href="https://medium.com/tsscyber">Medium</a>
                    <!--<router-link to="#">Events</router-link>-->
                    <router-link :to="{ name :'contact' }">Contact Us</router-link>
                </div>
            </nav>
            <div class="locations grid-x grid-padding-x small-up-1 medium-up-2 large-up-4">
                <div class="cell canberra">
                    <div class="grid-x align-middle">
                        <div class="cell shrink">
                            <div class="icon"/>
                        </div>
                        <div class="cell auto">
                            <div class="primary">
                                TSS Canberra
                            </div>
                            <p>
                                Level 5, 71 Northbourne Avenue <br >Canberra ACT 2601
                            </p>
                        </div>
                    </div>
                </div>
                <div class="cell brisbane">
                    <div class="grid-x align-middle">
                        <div class="cell shrink">
                            <div class="icon"/>
                        </div>
                        <div class="cell auto">
                            <div class="primary">
                                TSS Brisbane
                            </div>
                            <p>
                                Level 18, 333 Ann Street<br>Brisbane QLD 4000
                            </p>
                        </div>
                    </div>
                </div>
                <div class="cell sydney">
                    <div class="grid-x align-middle">
                        <div class="cell shrink">
                            <div class="icon"/>
                        </div>
                        <div class="cell auto">
                            <div class="primary">
                                TSS Sydney
                            </div>
                            <p>
                                1 Julius Ave<br >North Ryde NSW 2113
                            </p>
                        </div>
                    </div>
                </div>
                <div class="cell melbourne">
                    <div class="grid-x align-middle">
                        <div class="cell shrink">
                            <div class="icon"/>
                        </div>
                        <div class="cell auto">
                            <div class="primary">
                                TSS Melbourne
                            </div>
                            <p>
                                190 City Rd <br >South Melbourne VIC 3205
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright grid-x">
                <div class="cell auto">
                    <p>Copyright © {{ (new Date()).getFullYear() }} TSS Cyber Pty Ltd. ABN: 84 151 241 253 <br >All rights reserved. - <router-link :to="{ name: 'privacy' }">Privacy Policy</router-link></p>
                </div>
            </div>
        </div>
    </footer>

</template>

<script>
import Logo from '@/components/partials/footer/Logo'
import GratParallax from '@/components/modules/custom/GP'
import Services from '@/components/services-list'

export default {
    name: 'Footer',
    components: {
        Logo,
        GratParallax
    },
    data: function () {
        return {
            Services
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../../assets/scss/settings';

    footer {
        position: relative;
        background-color: #010e0b;
        overflow: hidden;
        padding: 50px 0;

        @include breakpoint(medium) {
            padding: 100px 0 20px;
        }

        .grid-container {
            position: relative;
            z-index: 2;
            padding: 0 20px;
        }

        .gp {
            top: 0;
            position: absolute;
            left: 0;
            z-index: 0;
        }

        nav {
            .logo {
                margin-right: 0px;
            }

            .cell.shrink {
                margin-right: 10px;
                margin-left: 10px;
            }

            .cell {
                margin-bottom: 40px;

                @include breakpoint(medium) {
                    margin-bottom: 20px;
                }
            }

            h1, h2, h3, h4, h5, h6 {
                color: $primary-color;
                margin-bottom: 5px;

                @include breakpoint(medium) {
                    margin-bottom: 1.5rem;
                }
            }
            a {
                display: block;
                color: $white;
                transition: transform .25s;

                &:hover, &.router-link-exact-active {
                    color: $primary-color;
                }
                &:hover {
                    transform: translateY(-1px);
                }
            }

            .strategic, .tactical, .operational {

                a {
                    position: relative;
                    padding-left: 35px;

                    &:before {
                        content: "";
                        display: inline-block;
                        vertical-align: middle;
                        position: absolute;
                        left: 0px;
                        margin-right: 20px;
                        top: 4px;
                        -webkit-background-size: contain;
                        background-size: contain;
                        background-position: top;
                        background-repeat: no-repeat;
                        width: 15px;
                        height: 15px;
                        transition: all .5s;
                    }
                }
            }

            .strategic {
                a {
                    &:before {
                        background-image: url('/img/global/footer/strategic_2x.png');
                    }
                    &:hover, &.router-link-exact-active {
                        color: #5274fb;

                        &:before {
                            transform: rotate(120deg);
                        }
                    }
                }
            }

            .operational {
                a {
                    &:before {
                        background-image: url('/img/global/footer/operational_2x.png');
                    }
                    &:hover, &.router-link-exact-active {
                        color: #fb3e3e;

                        &:before {
                            transform: translateY(-2px);
                            color: $white;
                        }
                    }
                }
            }

            .tactical {
                a {
                    &:before {
                        background-image: url('/img/global/footer/tactical_2x.png');
                    }
                    &:hover, &.router-link-exact-active {
                        color: #46dcaf;
                        &:before {
                            transform: rotate(60deg) scale(1.1);
                        }
                    }
                }
            }
        }

        .locations {
            margin-top: 30px;

            @include breakpoint(medium) {
                margin-bottom: 100px;
            }

            .canberra, .sydney, .melbourne, .brisbane {
                margin-bottom: 20px;

                @include breakpoint(medium) {
                    margin-bottom: 0;
                }

                .icon {
                    display: inline-block;
                    width: 50px;
                    height: 50px;
                    -webkit-background-size: 50px 50px;
                    background-size: 50px 50px;
                    background-repeat: no-repeat;
                    margin-right: 18px;
                }

                .primary {
                    color: $primary-color;
                }

                p {
                    color: desaturate(darken(lighten($primary-color, 60%), 60%), 50%);
                    font-size: 12px;
                    margin: 0;
                }
            }
            .canberra .icon {
                background-image: url('/img/global/footer/canberra.png');
            }

            .sydney .icon {
                background-image: url('/img/global/footer/sydney.png');
            }

            .melbourne .icon {
                background-image: url('/img/global/footer/melbourne.png');
            }

            .brisbane .icon {
                background-image: url('/img/global/footer/brisbane.png');
            }
        }

        .copyright {
            text-align: center;
            margin-top: 50px;

            @include breakpoint(medium) {
                margin-bottom: 80px;
            }

            p {
                font-size: 12px;
                color: darken($primary-color, 20%);
            }
        }
    }
</style>
