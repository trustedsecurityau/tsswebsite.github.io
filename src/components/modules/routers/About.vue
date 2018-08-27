<template>
    <template-router
        id="about-router"
        :opacity="0.7"
        :to="{ name: 'about' }"
        image="/img/global/router/about_router_2x.jpg">
        <h3>About Us</h3>
        <p>Premier Cyber Security Services to the Australian & Global markets.</p>
        <span>Learn More</span>
    </template-router>
</template>

<script>
import TemplateRouter from '@/components/modules/routers/RouterTemplate'

export default {
    components: {
        TemplateRouter
    }
}
</script>

<style lang="scss">
    .about-router {
        &:before {
            opacity: 0;
        }
    }
</style>
