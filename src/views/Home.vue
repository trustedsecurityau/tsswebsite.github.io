<template>
    <div class="home">
        <header-view/>
        <Hero
            center

            :gp="true">
            <h3>Australia's Leading</h3>
            <h1>Cyber Security Company</h1>
            <p>
                TSS is a specialist information security company founded by former Australian Government intelligence and cyber security specialists. We work with public and private sector organisations to mitigate risk and enhance cyber resilience.
            </p>
            <router-link :to="{ name: 'about' }" class="more">Learn More</router-link>
            <!--<p>-->
                 <!--Our knowledge of the Australian cyber threat landscape is derived from our experience with real world offensive security techniques, as well as the defensive security services we provide.-->
            <!--</p>-->
        </Hero>

        <div class="white-bg">
            <div class="grid-container">
                <PanelGroup>
                    <Panel
                        :to="{ name: 'consulting' }"
                        color="#5274fb"
                        image="/img/home/strategic_2x.png">
                        <h5 slot="name">{{ Services.consulting.title }}</h5>
                        <p>
                            <b v-for="service in Services.consulting.list">{{ service.footerTitle }}<br /></b>
                            <br />
                            <i v-html="'&quot;' + Services.consulting.quote + '&quot;'"></i>
                        </p>
                    </Panel>
                    <Panel
                        :to="{ name: 'mso' }"
                        color="#30c699"
                        image="/img/home/tactical_2x.png">
                        <h5 slot="name">{{ Services.mso.title }}</h5>
                        <p>
                            <b v-for="service in Services.mso.list">{{ service.footerTitle }}<br /></b>
                            <br />
                            <i v-html="'&quot;' + Services.mso.quote + '&quot;'"></i>
                        </p>
                    </Panel>
                    <Panel
                        :to="{ name: 'securitytesting' }"
                        color="#fb3e3e"
                        image="/img/home/operational_2x.png">
                        <h5 slot="name">{{ Services.securitytesting.title }}</h5>
                        <p>
                            <b v-for="service in Services.securitytesting.list">{{ service.footerTitle }}<br /></b>
                            <br />
                            <i v-html="'&quot;' + Services.securitytesting.quote + '&quot;'"></i>
                        </p>
                    </Panel>
                </PanelGroup>
            </div>
        </div>

        <SectionModule
            skrim
            waves
            side="center">
            <h3>About Us</h3>
            <!--<h2>Attack. Identify.<br />Defend. Respond.</h2>-->
            <h2>Our Story</h2>
            <p>TSS was established in 2011 by former Australian Government intelligence & cyber security specialists. We aim to deliver outcome focused security solutions to best meet your business needs.</p>
            <router-link class="more"
                         :to="{ name: 'about' }">Learn More</router-link>
        </SectionModule>

        <SectionModule
            skrim
            grey
            side="left"
            image="/img/home/best_brightest_2x.jpg">
            <h3>Seeking the</h3>
            <h2>Best and Brightest</h2>
            <p>TSS is always looking for passionate and motivated information security practitioners who are seeking challenging and enjoyable security work.</p>
            <router-link :to="{ name: 'careers' }" class="more">Apply now</router-link>
            <!--<div class="button typeform-button more" @click="openTypeform">Apply Now</div>-->
        </SectionModule>

        <social/>

        <div class="grid-x grid-padding-x">
            <about-router class="medium-auto small-12 cell"/>
        </div>

        <div class="grid-x grid-padding-x">
            <careers-router class="medium-auto small-12 cell"/>
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
const Social = () => import('@/components/modules/custom/Social')


import ServiceList from '@/components/services-list'
// require('@typeform/embed')

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
        CareersRouter,
        Social
    },
    data: function() {
        return {
        	Services: ServiceList,
	        typeformSupported: true
        }
    },
    props: {
    },
    methods: {
    	openTypeform: function() {

        }
    },
    mounted: function () {

    }
}
</script>
