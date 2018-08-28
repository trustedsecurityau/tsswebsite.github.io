<template>
    <div class="research">
        <header-view/>
        <Hero
            theme="dark"
            :gp="true">
            <div class="eyebrow">TSS Labs</div>
            <h2>Trusted Research Division</h2>
            <p>An integral part of our process is maintaining awareness of the current security landscape, giving back to the community and sharing our findings, where appropriate.</p>
        </Hero>


        <SectionModule
            skrim
            side="right">

            <h3>Coordinated</h3>
            <h2>Vulnerability Disclosure</h2>

            <p>
                [[ TODO ]]
            </p>
        </SectionModule>
        <div class="grid-x grid-padding-x">
            <careers-router class="medium-auto small-12 cell"/>
            <about-router class="medium-auto small-12 cell"/>
        </div>
        <footer-view/>
    </div>
</template>

<script>
const HeaderView = () => import('@/components/partials/HeaderView')
const FooterView = () => import('@/components/partials/FooterView')
const HelloWorld = () => import('@/components/HelloWorld.vue')
const Hero = () => import('@/components/modules/Hero')
const PanelGroup = () => import('@/components/modules/custom/PanelGroup')
const Panel = () => import('@/components/modules/custom/Panel')
const SectionModule = () => import('@/components/modules/Section')
const CareersRouter = () => import('@/components/modules/routers/Careers')
const AboutRouter = () => import('@/components/modules/routers/About')

export default {
    name: 'Home',
    components: {
        HelloWorld,
        Hero,
        PanelGroup,
        Panel,
        HeaderView,
        FooterView,
        SectionModule,
        AboutRouter,
        CareersRouter
    },
    props: {
    },
    mounted: function () {
        this.$Progress.finish()
    }
}
</script>
