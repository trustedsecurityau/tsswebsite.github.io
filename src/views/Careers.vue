<template>
    <div class="careers">
        <header-view/>
        <Hero
            theme="dark"
            gp
            no-fixed-height
            header-padding
            overflow>
            <div class="eyebrow">Do your greatest work</div>
            <h1>While learning from our bright and talented staff</h1>
            <p>TSS is always looking for passionate and motivated information security practitioners who are seeking challenging and enjoyable security work.</p>

        </Hero>

        <section id="open-positions">
            <div class="grid-container">
                <div class="grid-x grid-padding-x">
                    <div class="auto cell">
                        <div class="wrapper">

                            <div class="grid-x grid-padding-x jobs text-center align-center">
                                <div class="cell small-12 medium-8">
                                    <h3>Open Positions</h3>

                                    <p>
                                        No matter where you're based in Australia, you’ll be part of a group of people working together to build solutions to business-critical problems in a company that values the very best ideas. There’s a role here for you—whether you're a new grad or have years of experience.
                                    </p>
                                </div>
                            </div>

                            <div class="grid-x grid-padding-x jobs">

                                <div v-for="(jobs, key, index) in categories"
                                     v-if="index % 2 === 0 && jobs.some((job) => job.hiring)"
                                     :key="key, index"
                                     class="category cell small-12 medium-6">
                                    <h6>{{ key, index }}</h6>
                                    <a
                                        v-for="(job, i) in jobs"
                                        v-if="job.hiring"
                                        :href="job.link"
                                        :key="i"
                                        class="job">
                                        <span v-if="job.priority"
                                              class="violator">Priority</span>
                                        <span class="title">{{ job.title }}</span>
                                        <span class="location">{{ job.location }}</span>
                                    </a>
                                </div>

                                <div v-for="(jobs, key, index) in categories"
                                     v-if="index % 2 === 1 && jobs.some((job) => job.hiring)"
                                     :key="key, index"
                                     class="category cell small-12 medium-6">
                                    <h6>{{ key, index }}</h6>
                                    <a
                                        v-for="(job, i) in jobs"
                                        v-if="job.hiring"
                                        :href="job.link"
                                        :key="i"
                                        class="job">
                                        <span v-if="job.priority"
                                              class="violator">Priority</span>
                                        <span class="title">{{ job.title }}</span>
                                        <span class="location">{{ job.location }}</span>
                                    </a>
                                </div>

                            </div>

                            <div
                                v-if="categories.length === 0"
                                class="no-jobs text-center">
                                No jobs currently available! Stay tuned for updates
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="grid-x grid-padding-x">
            <about-router class="medium-auto small-12 cell"/>
        </div>
        <footer-view/>
    </div>
</template>

<script>
import HeaderView from '@/components/partials/HeaderView'
import FooterView from '@/components/partials/FooterView'
import HelloWorld from '@/components/HelloWorld.vue'
import Hero from '@/components/modules/Hero'
import PanelGroup from '@/components/modules/custom/PanelGroup'
import Panel from '@/components/modules/custom/Panel'
import SectionModule from '@/components/modules/Section'
import AboutRouter from '@/components/modules/routers/About'

import Axios from 'axios'
import Vue from 'vue'
import { Collapse, CollapseItem } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Collapse)
Vue.use(CollapseItem)

export default {
    components: {
        HeaderView,
        FooterView,
        HelloWorld,
        Hero,
        PanelGroup,
        Panel,
        SectionModule,
        AboutRouter
    },
    data: function () {
        return {
            categories: []
        }
    },
    mounted: function () {
        Axios.get('/jobs.json').then((response) => {
            this.categories = response.data
            console.log(this.categories)
        })
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/scss/settings';

    section#open-positions {
        background-color: #fafafa;

        .wrapper {
            z-index: 5;
            border-radius: $global-radius;
            // margin-top: -150px;
            margin-bottom: 40px;
            // background-color: #fff;
            padding: 60px 30px 40px;

            @include breakpoint(medium) {
                padding: 80px 0;
                margin-bottom: 100px;
            }
            h6 {
                color: $black;
	            opacity: 0.6;
                font-weight: 500;
                text-transform: uppercase;
                margin-bottom: 10px;
            }

            .jobs {
                margin-top: 100px;
            }

            .category {
                margin-bottom: 50px;

                .job {
                    display: block;
                    width: 100%;
                    padding: 8px 0px;
                    background-color: #fafafa;
                    border-top: 1px solid #e3e3e3;

                    &:last-child {
                        border-bottom: 1px solid #e3e3e3;
                    }

                    &:hover {
                        .title {
                            transform: translateX(5px);
                        }
                        .location {
                            transform: translateX(10px);
                        }
                    }

                    .title {
                        display: block;
                        color: $black;
                        font-weight: 600;
                        transition: transform .35s;

                        @include breakpoint(medium) {
                            display: inline-block;
                        }
                    }

                    .location {
                        display: block;
                        color: $primary-color;
                        font-weight: 500;
                        transition: transform .35s;

                        @include breakpoint(medium) {
                            display: inline-block;
                            margin-left: 5px;
                        }
                    }

                    .violator {
                        transform: translateY(-1px);
                        font-size: 10px;
                        font-weight: 600;
                        text-transform: uppercase;
                        background-color: #ff7800;
                        color: $white;
                        display: inline-block;
                        padding: 4px 13px 3px;
                        border-radius: 5px;

                        @include breakpoint(medium) {
                            display: inline-block;
                            margin-right: 10px;
                        }

                        &.hollow {
                            border: 1px solid #ff7800;
                            background-color: transparent;
                            color: #ff7800;
                        }
                    }
                }
            }
        }
    }
</style>
