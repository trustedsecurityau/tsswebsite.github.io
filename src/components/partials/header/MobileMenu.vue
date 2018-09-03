<template>
    <div class="text-right">
        <div
            class="mobile-menu hide-for-medium"
            @click="menu_open = !menu_open">
            <div class="bar"/>
        </div>
        <div
            :class="theme"
            class="mobile-menu-popup">
            <div
                :class="{ active: menu_open }"
                class="popup">
                <a
                    class="popupCloseButton"
                    @click="menu_open = false">Close</a>
                <h4>Main Menu</h4>
                <router-link
                    :to="{ name: 'home' }"
                    class="cell shrink">Home</router-link>
                <router-link
                    :to="{ name: 'about' }"
                    class="cell shrink">About</router-link>
                <router-link
                    :to="{ name: 'services' }"
                    class="cell shrink">Services</router-link>
                <!--<router-link-->
                <!--:to="{ name: 'research' }"-->
                <!--class="cell shrink">Research</router-link>-->
                <a
                    href="https://medium.com/tsscyber"
                    class="cell shrink">Blog</a>
                <router-link
                    :to="{ name: 'careers' }"
                    class="cell shrink">Careers</router-link>
                <router-link
                    :to="{ name: 'contact' }"
                    class="cell shrink">Contact</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        theme: {
            type: String,
            default: 'green'
        }
    },
    data: function () {
        return {
            menu_open: false
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../../../assets/scss/settings';
    .mobile-menu {
        position: relative;

        .headroom--top & {
            margin-top: -4px;
        }

        .bar {
            position: absolute;
            right: 20px;

            &, &:before, &:after {
                display: block;
                width: 25px;
                height: 3px;
                background-color: #FFF;
                border-radius: 10px;

                .light & {
                    background-color: $header-color;
                }

                .headroom--not-top .light & {
                    background-color: $white;
                }
            }
            &:before, &:after {
                content: "";
                position: absolute;
                width: 100%;
            }
            &:before {
                top: -8px;
            }
            &:after {
                top: 8px;
            }
        }
    }

    .mobile-menu-popup {
        position: absolute;
        left: 10px;
        top: 50px;
        right: 10px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: end;
        justify-content: flex-end;
        pointer-events: none;
        perspective: 2000px;
        transition: top .5s;

        .headroom--not-top & {
            top: 30px;
        }

        .popup {
            margin: 0;
            text-align: left;
            background: #fff;
            box-shadow: 0 50px 100px rgba(50,50,93,.1), 0 15px 35px rgba(50,50,93,.15), 0 5px 15px rgba(0,0,0,.1);
            border-radius: 4px;
            overflow: hidden;
            position: relative;
            font-size: 17px;
            line-height: 40px;
            white-space: nowrap;
            -ms-flex-positive: 1;
            flex-grow: 1;
            transform: scale(.95);
            transform-origin: 100% 0;
            opacity: 0;
            will-change: transform,opacity;
            transition-property: transform,opacity;
            transition-duration: .25s;
            padding: 40px 20px;

            &.active {
                transform: none;
                opacity: 1;
                pointer-events: auto;
            }

            h4 {
                font-size: 14px;
                font-weight: 600;
                letter-spacing: .025em;
                color: #a4b7cd;
                text-transform: uppercase;
                margin: 0 0 0 20px;
            }

            a {
                display: block;
                padding: 8px 20px;
                font-size: 18px;
            }

            hr {
                margin: 10px 0;
                border-bottom-color: #eee;
            }

            .popupCloseButton {
                position: absolute;
                right: 0;
                top: 0;
                width: 51px;
                height: 51px;
                font-size: 0;
                cursor: pointer;

                &:after,
                &:before {
                    content: '';
                    position: absolute;
                    background: $primary-color;
                    border-radius: 1px;
                    left: 14px;
                    right: 14px;
                    top: 24px;
                    height: 3px;
                    transform: rotate(45deg);
                    transition: background 0.1s;
                }

                &:after {
                    transform: rotate(-45deg);
                }

                &:hover:after,
                &:hover:before {
                    background: #32325d;
                }
            }
        }
        &.blue {
            .popup {
                a {
                    color: $strategic-color
                }

                .popupCloseButton {

                    &:after,
                    &:before {
                        background: $strategic-color;
                    }

                    &:hover:after,
                    &:hover:before {
                        background: #32325d;
                    }
                }
            }
        }
        &.green {
            .popup {
                a {
                    color: $tactical-color
                }

                .popupCloseButton {

                    &:after,
                    &:before {
                        background: $tactical-color;
                    }

                    &:hover:after,
                    &:hover:before {
                        background: #32325d;
                    }
                }
            }
        }
        &.red {
            .popup {
                a {
                    color: $operational-color
                }

                .popupCloseButton {

                    &:after,
                    &:before {
                        background: $operational-color;
                    }

                    &:hover:after,
                    &:hover:before {
                        background: #32325d;
                    }
                }
            }
        }
    }

</style>
