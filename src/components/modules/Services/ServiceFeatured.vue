<template>
    <section :id="service.id"
             :class="[{ waves }]"
             class="feature">
        <div class="skrim"/>
        <div class="grid-container">
            <div class="grid-x grid-padding-x align-center">
                <div class="cell small-12 medium-10 large-8 text-center">
                    <img :src="service.image"
                         alt="" class="image">
                    <img :src="service.icon"
                         alt="" class="icon" v-if="!service.image">
                    <div v-if="service.violator"
                         class="violator hollow">Premiere Service</div>
                    <h2>{{ service.eyebrow }}</h2>
                    <h1>{{ service.title }}</h1>
                    <p v-html="service.paragraph"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        service: {
            type: Object,
            default: {}
        },
        skrim: {
            type: Boolean,
            default: false
        },
        waves: {
            type: Boolean,
            default: false
        }
    },
    mounted: function () {
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
	@import '../../../assets/scss/settings';

	section.feature {
		position: relative;
		padding: 100px 0;
        background-color: $white;

		@include breakpoint(medium) { padding: 140px 0; }
		@include breakpoint(large) { padding: 180px 0; }
		@include breakpoint(xlarge) { padding: 240px 0; }
		@include breakpoint(xxlarge) { padding: 260px 0; }

		&.grey {
			background-color: #fcfbfc;
		}

		&:first-child {
			margin-top: -50px;
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

        &#siemaas {
            .image {
                margin-bottom: -30px;

                @include breakpoint(medium) {
                    margin-bottom: -80px;
                }
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


        img.image {
            max-width: 180px;
            display: block;
            margin: 0 auto 40px;

            @include breakpoint(medium) {
                max-width: 380px;
            }
        }

		img.icon {
			max-width: 100px;
			display: block;
			margin: 0 auto 40px;

			@include breakpoint(medium) {
				max-width: 150px;
			}
		}

		.violator {
			font-size: 11px;
			font-weight: 600;
			text-transform: uppercase;
			background-color: #ff5e00;
			color: $white;
			display: inline-block;
			padding: 5px 15px 4px;
			margin-bottom: 10px;
			border-radius: 5px;

			&.hollow {
				border: 1px solid #ff5e00;
				background-color: transparent;
				color: #ff5e00;
			}
		}

		/deep/ {
			h2 {
				margin-bottom: -7px;
				color: $strategic-color;
			}
		}
	}
</style>
