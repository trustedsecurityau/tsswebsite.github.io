<template>
    <div
        v-if="gp"
        id="gp"
        class="gratuitous-parallax">
        <div
            v-if="!light"
            class="rellax shape shape-1"
            data-rellax-speed="-4"/>
        <div
            class="rellax shape shape-2"
            data-rellax-speed="-13"/>

        <div class="rellax glow glow-2"
             data-rellax-speed="-13">
            <div></div>
        </div>

        <div class="rellax glow glow-2-rotate"
             data-rellax-speed="-13">
            <div></div>
        </div>

        <div
            class="rellax shape shape-3"
            data-rellax-speed="-7"/>

        <div class="rellax glow glow-3"
             data-rellax-speed="-7">
            <div></div>
        </div>


        <div class="rellax glow glow-3-rotate"
             data-rellax-speed="-7">
            <div></div>
        </div>

        <div
            v-if="!light"
            class="rellax shape shape-4"
            data-rellax-speed="1"/>
        <div
            v-if="!light"
            class="rellax shape shape-5"
            data-rellax-speed="-3"/>
    </div>
</template>

<script>
import Rellax from 'rellax'

export default {
    name: 'GP',
    props: {
        gp: {
            type: Boolean,
            default: false
        },
        light: {
            type: Boolean,
            default: false
        }
    },
    mounted: function () {
	    if (!matchMedia("(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)").matches) {
		    if (this.gp) {
			    new Rellax('.rellax', {
				    // speed: -2,
				    center: true,
				    // round: true,
				    vertical: true,
				    horizontal: false
			    })
		    }
	    }

    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '../../../assets/scss/settings';
    @import '../../../assets/scss/infinite';

    .gratuitous-parallax {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -2;
        pointer-events: none;
        opacity: 0.6;

        .flip {
            transform: scaleX(-1);
        }

        .glow {
            position: absolute;
            z-index: -2;
            left: 50%;
            width: 50%;
            min-width: 750px;
            min-height: 805px;

            > div {
                width: 100%;
                height: 100%;
                min-height: 805px;
                background-image: url('/img/home/home_shine_2x_alt.png');
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;

                will-change: opacity;
                animation: opacityPulse 20s ease-out;
                animation-iteration-count: infinite;
                opacity: 0;
            }

            &.glow-2, &.glow-2-rotate, &.glow-3, &.glow-3-rotate {
                opacity: 0.8;
                top: -20%;
                left: 5%;

                #hero.light & {
                    opacity: 0.3;
                }
            }

            &.glow-2-rotate {
                opacity: 0.2;

                > div { transform: scale(-1); }
            }

            &.glow-3, &.glow-3-rotate {
                opacity: 0.4;
                top: -10%;
                left: 35%;

                > div { transform: scaleX(-1); }

                &.glow-3-rotate {
                    opacity: 0.1;

                    > div { transform: scaleY(-1); }
                }
            }

            @include breakpoint(medium) {
                &.glow-2, &.glow-2-rotate {
                    top: 20%;
                    left: 5%;
                }
            }
        }

        .shape {
            position: absolute;
            z-index: -3;
            left: 50%;
            width: 50%;
            min-width: 750px;
            min-height: 805px;
            -webkit-background-size: contain;
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;

            &.shape-1 {
                left: 0;
                background-image: url('/img/home/home_shape_01.svg');
                display: none;
            }

            &.shape-2 { /** Green */
                top: -20%;
                left: 5%;
                background-image: url('/img/home/home_shape_02.svg');
            }

            &.shape-3 {
                top: -10%;
                left: 35%;
                background-image: url('/img/home/home_shape_03.svg');
                display: none;
            }

            &.shape-4 {
                top: -40%;
                left: 60%;
                background-image: url('/img/home/home_shape_04.svg');
            }

            &.shape-5 {
                top: 40%;
                left: 60%;
                background-image: url('/img/home/home_shape_05.svg');
            }

            @include breakpoint(medium) {
                &.shape-1 {
                    left: 0;
                    background-image: url('/img/home/home_shape_01.svg');
                    display: block;
                }

                &.shape-2 { /** Green */
                    top: 20%;
                    left: 5%;
                    background-image: url('/img/home/home_shape_02.svg');
                    display: block;
                }

                &.shape-3 {
                    top: -10%;
                    left: 35%;
                    background-image: url('/img/home/home_shape_03.svg');
                    display: block;
                }

                &.shape-4 {
                    top: -40%;
                    left: 40%;
                    background-image: url('/img/home/home_shape_04.svg');
                    display: block;
                }

                &.shape-5 {
                    top: 20%;
                    left: 60%;
                    background-image: url('/img/home/home_shape_05.svg');
                    display: block;
                }
            }
        }

    }
</style>
