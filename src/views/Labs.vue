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
                TSS regularly performs vulnerability assessments, penetration tests and security research across a wide range of solutions, technologies and configurations for a broad client base. As TSS provides in-depth and high-quality engagements, they often result in previously undiscovered vulnerabilities in vendor products which are generally utilised by a larger client base. In these instances, TSS’ Coordinated Vulnerability Disclosure policy is geared towards not only helping our direct client(s), but the broader client base and community the affected product serves across the globe.
            </p>
            <p>
                See our CVEs and public vulnerability disclosures <router-link :to="{ name: 'cves' }"
                                                     class="more">Learn more</router-link>
            </p>
        </SectionModule>
        <SectionModule
            skrim
            side="left">

            <h3>Security</h3>
            <h2>Research</h2>

            <p>
                TSS prides itself in our security research program which provides additional and ongoing benefits to our clients and the broader security community. During engagements, TSS maintain a record of technologies and applications which our clients utilise. We then base our ongoing security research efforts against the actual technologies and systems that our clients use. This allows us to perform targeted security research and provide additional value to our clients. 
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
