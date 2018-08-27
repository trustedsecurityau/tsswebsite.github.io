<template>
    <section :class="[side, { grey }, { waves }]" >
        <div
            v-if="skrim"
            class="skrim"/>
        <div
            v-if="image"
            :style="{ backgroundImage: 'url(' + image + ')'}"
            :class="[ 'image', 'size-' + imageSize ]" />
        <div class="grid-container">
            <div
                :class="{ 'align-center': (side === 'center') }"
                class="grid-x grid-padding-x align-middle">
                <div
                    v-if="side === 'left'"
                    class="cell small-12 medium-6 large-7"/>
                <div
                    :class="[{ 'text-center medium-8 large-7': (side === 'center'), 'medium-6 large-5': (side !== 'center' && side !== 'none') }, addedCellClass ]"
                    class="cell small-12">
                    <div
                        :class="{parallax}"
                        data-rellax-speed="0.98">
                        <slot>
                            <h3>24×7</h3>
                            <h2>‘Round the Clock<br >Security</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </slot>
                    </div>
                </div>
                <div
                    v-if="side === 'right'"
                    class="cell small-12 large-8"/>
            </div>
        </div>
    </section>
</template>

<script>
import Rellax from 'rellax'

export default {
    name: 'Section',
    props: {
        image: {
            type: String,
            default: ''
        },
        imageSize: {
            type: String,
            default: 'cover'
        },
        side: {
            type: String,
            default: 'none'
        },
        grey: {
            type: Boolean,
            default: false
        },
        parallax: {
            type: Boolean,
            default: false
        },
        skrim: {
            type: Boolean,
            default: false
        },
        waves: {
            type: Boolean,
            default: false
        },
        addedCellClass: {
            type: String,
            default: ''
        }
    },
    mounted: function () {
        let _this = this

        if (window.innerWidth > 640) {
            if (this.parallax) {
                let el = this.$el.getElementsByClassName('parallax')[0]

                let rellax = new Rellax(el, {
                    center: true
                })
            }
        }

        if (this.skrim) {
            let el = this.$el.getElementsByClassName('skrim')[0]
            function updateScrim () {
                let amount = ((window.height / 3) > 500) ? 500 : window.innerHeight / 3
                let earlyAmount = 200
                let offset = (el.getBoundingClientRect().top + el.offsetHeight)
                if (offset < 0 || offset > amount + earlyAmount) {
                    el.style.opacity = 0
                    return
                }

                let opacity = (amount - offset) / (amount - earlyAmount)
                el.style.opacity = opacity
            }
            window.addEventListener('scroll', updateScrim)
            window.addEventListener('resize', updateScrim)
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../../assets/scss/settings';
    $small-padding: 80px;

    section {
        position: relative;
        padding: $small-padding 0;
        background-color: #fff;

        @include breakpoint(medium) {
            padding: 90px 0;
        }

        @include breakpoint(large) {
            padding: 140px 0;
        }

        @include breakpoint(xlarge) {
            padding: 170px 0;
        }

        @include breakpoint(xxlarge) {
            padding: 220px 0;
        }

        &.grey {
            background-color: #fcfbfc;
        }

        &.waves {
            &:before {
                height: 450px;
                width: 100%;
                background: url('https://i.imgur.com/s0B1aR2.png') center top;
                -webkit-background-size: cover;
                background-size: cover;
                position: absolute;
                bottom: 0;
                content: '';
                z-index: -5;
            }
        }

        .skrim {
            top: 0;
            left: 0;
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,.3);
            // background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(255,0,0,0.2) 100%);
            transition: opacity .1s;
            pointer-events: none;
            opacity: 0;
            z-index: 5;
        }

        h3 {
            color: $primary-color;
            margin: 0;
        }

        b {
            color: $header-color;
            font-weight: 500;
        }
    }

    .image {
         width: 100%;
         min-height: 200px;
         max-height: 350px;
         height: 75vw;
         -webkit-background-size: cover;
         background-size: cover;
         background-position: center;
         background-repeat: no-repeat;
         margin-bottom: 30px;
         margin-top: -$small-padding;

         @include breakpoint(medium) {
             width: 50%;
             height: 100%;
             min-height: revert;
             max-height: none;
             position: absolute;
             top: 0;
             bottom: 0;
             margin-bottom: 0;
             margin-top: 0;

             .left & {
                 left: 0;
             }

             .right & {
                 right: 0;
             }
         }

        &.size-feature {
            -webkit-background-size: contain;
            background-size: contain;

            @include breakpoint(medium) {
                -webkit-background-size: contain;
                background-size: contain;
            }
        }

         .center &, .none & {
             display: none;
         }
     }

</style>
