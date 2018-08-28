<template>
    <section id="hero">
        <div class="main rellax"
             data-rellax-speed="-2"/>
        <div class="sub rellax"
             data-rellax-speed="2.5"/>
        <div class="grid-container">
            <div class="grid-x grid-padding-x align-middle align-center text-center">
                <div class="small-12 medium-6 cell">
                    <img :src="serviceType.image"
                         alt="" class="image">
                    <img :src="serviceType.icon"
                         alt="" class="icon">
                    <h1>{{ serviceType.title }}</h1>
                    <p v-html="serviceType.description"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        serviceType: {
            type: Object,
            default: {}
        }
    }
}
</script>

<style lang="scss" scoped>
	@import '../../../assets/scss/settings';

	section#hero {
		z-index:4;
		height: 90vh;
        min-height: 950px;
		position: relative;
		margin-bottom: -60px;
        background-color: $white;

		@include breakpoint(medium) { margin-bottom: -70px; }

		@include breakpoint(large) { margin-bottom: -100px; }

		@include breakpoint(xlarge) { margin-bottom: -120px; }

		@include breakpoint(xxlarge) { margin-bottom: -150px; }

		.main {
			z-index: -4;
			position: absolute;
			width: 100%;
			height: 100%;
			-webkit-background-size: cover;
			background-size: cover;
			background-position: bottom center;
			background-image: url('/img/services/strategic/strategic_main_2x.png');
			background-repeat: no-repeat;
		}
		.sub {
			z-index: -5;
			position: absolute;
			width: 100%;
			height: 100%;
			-webkit-background-size: cover;
			background-size: cover;
			background-position: bottom center;
			background-image: url('/img/services/strategic/strategic_sub_2x.png');
			background-repeat: no-repeat;
		}

		.grid-x {
			height: 80vh;
            min-height: 700px;
		}


        img.image {
            max-width: 100px;
            margin-bottom: 20px;

            @include breakpoint(medium) {
                max-width: 180px;

            }
        }

		img.icon {
			max-width: 100px;
			margin-bottom: 20px;

            @include breakpoint(medium) {
                max-width: 130px;

            }
		}

		h1 {
			line-height: 1.1;
			color: $white;
		}

		p {
			opacity: 0.9;
			color: lighten($strategic-color, 15%);
		}
	}
</style>
