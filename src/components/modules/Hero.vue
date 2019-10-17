<template>
    <section
        id="hero"
        :class="[ theme, {overflow, loaded} ]">
        <div
            v-if="image"
            :style="{ backgroundImage: 'url(' + image + ')'}"
            class="image"/>
        <grat-parallax
            :gp="gp"
            :light="light"
            class="gp"/>
        <div class="grid-container">
            <energy v-if="energy"/>
            <div v-if="headerPadding"
                 class="header-padding"/>
            <div
                :class="{ 'align-center': center, 'noFixedHeight': noFixedHeight, 'removePadding': removePadding }"
                class="grid-x grid-padding-x align-middle">
                <div
                    :class="[{ 'text-center': center }, center ? 'medium-8' : 'medium-6 large-7', { 'small-12 medium-12 large-12': fullWidth }]"
                    class="content cell small-auto small-order-2 medium-order-1">
                    <slot>
                        <h3>Trusted Security</h3>
                        <h2>Actionable Intelligence</h2>
                    </slot>
                </div>
                <div
                    v-if="featureImage"
                    :style="{ position: 'relative' }"
                    :class="[{ 'text-center': center }, center ? 'medium-4' : 'medium-6 large-5', { 'small-12 medium-12 large-12': fullWidth }]"
                    class="cell small-auto small-order-1 medium-order-2">
                    <div class="">
                        <img :src="featureImage"
                             class="featureImage"
                             alt="">
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
import Rellax from 'rellax'
import GratParallax from '@/components/modules/custom/GP'
import Energy from '@/components/modules/custom/Energy'

export default {
    name: 'Hero',
    components: {
        GratParallax,
        Energy
    },
    props: {
        center: {
            type: Boolean,
            default: false
        },
        fullWidth: {
            type: Boolean,
            default: false
        },
        noFixedHeight: {
            type: Boolean,
            default: false
        },
        removePadding: {
            type: Boolean,
            default: false
        },
        theme: {
            type: String,
            default: 'dark'
        },
        gp: {
            type: Boolean,
            default: false
        },
        light: {
            type: Boolean,
            default: false
        },
        overflow: {
            type: Boolean,
            default: false
        },
        energy: {
            type: Boolean,
            default: false
        },
        image: {
            type: String,
            default: ''
        },
        featureImage: {
            type: String,
            default: ''
        },
        headerPadding: {
            type: Boolean,
            default: false
        }
    },
    data: function () {
        return {
            loaded: false
        }
    },
    mounted: function () {
        setTimeout(() => {
            this.loaded = true
        }, 100)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '../../assets/scss/settings';

    #hero {
        position: relative;
        overflow: hidden;

        .grid-container {
            // z-index: 0;
            position: relative;
        }

        .gp {
            z-index: -1;
        }

        .header-padding {
            height: 100px;
        }

        .image {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            -webkit-background-size: cover;
            background-size: cover;
            background-position: center;
            opacity: 0.08;
        }

        > .grid-container > .grid-x {
            min-height: 700px;
            max-height: 1000px;

            @include breakpoint(medium) {
                height: 95vh;
            }

            &.noFixedHeight {
                height: auto;
                max-height: none;
                min-height: 200px; // Header Height

                > .content {

                }
            }

            &.removePadding {
                > .content {
                    padding-top: 0px;
                    padding-bottom: 0px;
                }
            }

            > .content {
                padding-top: 250px;
                padding-bottom: 250px;
            }
        }

        h2, h3, h4, h5, h6 {
            margin: 0;
            line-height: 1.1;
        }

        h1 {
            line-height: 1;
        }

        &.overflow {
            overflow: visible;
        }

        .eyebrow {
            font-size: 21px;
            font-weight: 600;
            text-transform: uppercase;
        }

        .featureImage {
            position: relative;
            left: 20px;
            display: block;
            max-width: 350px;
            margin: auto;
            margin-top: 200px;
            margin-bottom: -180px;

            @include breakpoint(medium) {
                opacity: 1;
                position: absolute;
                max-width: none;
                width: 150%;
                margin-top: -73%;
            }
        }

        &:before {
            width: 100%;
            height: 100%;
            content: "";
            position: absolute;
            z-index: -4;
        }

        &.dark {
            &:before {
                transition: opacity 5s;
                opacity: 0.0;
                background: linear-gradient(45deg, #010205, #113d2e);
            }

            &.loaded {
                &:before {
                    opacity: 1;
                }
            }

            h1, h2, h3, h4, h5, h6 {
                color: $white;
            }
            h1, h2 {
                color: $primary-color;
            }
            p {
                // color: #7fa195;
                color: darken($white, 10%);
            }
            .eyebrow {
                color: $white;
            }
            a.more {
                // color: $white;
                color: $primary-color;
            }
        }

        &.green {
            &:before {
                // background: #1c835c linear-gradient(#1f9b70, #1c835c);
                background: #1c835c linear-gradient(140deg, #1f9b70, #04291b);
            }

            h1, h2, h3, h4, h5, h6 {
                color: $primary-color;
            }
            h1, h2 {
                color: $white;
            }
            .eyebrow {
                color: $primary-color;
            }
            p {
                color: #b5e3d2;
            }
        }

        &.image {
            &:before {
                background: #000000;
            }

            h1, h2, h3, h4, h5, h6 {
                color: $primary-color;
            }
            h1, h2 {
                color: $white;
            }
            .eyebrow {
                color: $primary-color;
            }
            p {
                color: #b5e3d2;
            }
        }

        &.light {
            &:before {
                background: linear-gradient(hsl(162, 69%, 80%), #fff);
            }

            // background-color: $white;
            h1, h2, h3, h4, h5, h6 {
                // color: $primary-color;
            }
            h1, h2 {
                // color: $white; // TODO move to theme
            }
            .eyebrow {
                color: #2cad86;
            }
            p {
                color: #6a867d;
            }
        }
    }

</style>
