<template>
    <template-router
        :to="{ name: 'careers' }"
        :opacity="0.7"
        image="/img/global/router/careers_router_2x.jpg">
        <h3>Join the Team</h3>
        <p>Help us build the next forefront of Australia's&nbsp;digital&nbsp;security.</p>
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
