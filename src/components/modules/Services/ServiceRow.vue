<template>
    <SectionModule
        :id="service.id"
        :image="service.image"
        :side="service.side ? service.side : 'left'"
        class="section-service-row"
        skrim
        image-size="feature">
        <img :src="service.icon"
             alt="" class="icon">
        <h3>{{ service.eyebrow }}</h3>
        <h2>{{ service.title }}</h2>
        <p v-html="service.paragraph"/>
    </SectionModule>
</template>

<script>
import SectionModule from '@/components/modules/Section'

export default {
    components: {
        SectionModule
    },
    props: {
        service: {
            type: Object,
            default: {}
        }
    }
}
</script>

<style lang="scss" scoped>
	@import '../../../assets/scss/settings';

	section.section-service-row {
		.icon {
			max-width: 40px;
			display: block;
			margin-bottom: 10px;

			@include breakpoint(medium) {
				max-width: 70px;
			}
		}

		h3 {
			color: $strategic-color !important;
		}
	}
</style>
