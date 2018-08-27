<template>
    <section id="featurettes">
        <div class="skrim"/>
        <div class="grid-container">
            <div class="grid-x grid-padding-x text-center">
                <div class="cell auto">
                    <h2>Other services</h2>
                </div>
            </div>
            <div class="grid-x grid-padding-x small-up-1 medium-up-2 large-up-3 align-center text-center">
                <div v-for="(service, index) in ServiceList"
                     v-if="service.type === 'featurette'"
                     :key="service.id"
                     :id="service.id"
                     class="cell service">
                    <img :src="service.icon"
                         alt="" class="icon">
                    <h4>{{ service.eyebrow }}</h4>
                    <h3>{{ service.title }}</h3>
                    <p v-html="service.paragraph"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        ServiceList: {
            type: Array,
            default: []
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

	section#featurettes {
		position: relative;
		padding: 80px 0;
        background-color: $white;

		@include breakpoint(medium) { padding: 90px 0; }
		@include breakpoint(large) { padding: 120px 0; }
		@include breakpoint(xlarge) { padding: 140px 0; }
		@include breakpoint(xxlarge) { padding: 180px 0; }

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

		h2 {
			margin-bottom: 90px;
		}

		.service {
			margin-bottom: 50px;

			&:last-child {
				margin: 0;
			}

			.icon {
				max-width: 40px;
				display: block;
                margin: 0 auto 10px;

                @include breakpoint(medium) {
					max-width: 60px;
                    margin-bottom: 20px;
				}
			}

			@include breakpoint(medium) {
				margin: 0;
			}
		}

		/deep/ {
			h4 {
				margin: 0;
				color: $strategic-color !important;
			}
		}
	}
</style>
