<template>
    <div id="app">
        <div
            id="cover"
            class="test"/>
        <vue-progress-bar/>
        <transition name="fade">
            <router-view :key="$route.fullPath"/>
        </transition>

    </div>
</template>

<script>
import Vue from 'vue'
import VueProgressBar from 'vue-progressbar'
import Header from './components/partials/HeaderView'
import bowser from 'bowser'
import VueScroll from 'vue-scrollto'

Vue.use(VueScroll, {
    offset: -150
})

Vue.use(VueProgressBar, {
    color: 'rgba(255,255,255,0.6)',
    failedColor: '#c53e2d',
    thickness: '10px',
    autoRevert: true,
    zIndex: -2,
    transition: {
        speed: '0.4s',
        opacity: '0.4s',
        termination: 500
    }
})

Vue.mixin({
    mounted: function () {
        // We can assume that if it has a title, it's a page.
        if (this.$route.meta.title) {
            this.$Progress.finish()
        }
    }
})

export default {
    components: {
        Header
    },
    mounted () {
        this.$Progress.finish()

        this.$router.beforeEach((to, from, next) => {
            if (to.meta.progress !== undefined) {
                let meta = to.meta.progress
                this.$Progress.parseMeta(meta)
            }
            this.$Progress.start()
            next()
        })

        /* eslint-disable no-new */
        if (!bowser.msie || bowser.version > 9) {
            // new Uncover(this.$router, document.querySelector('#cover'))
        }
    },
    created () {
        //  [App.vue specific] When App.vue is first loaded start the progress bar
    }
}
</script>

<style lang="scss" scoped>
    .fade-enter-active {
        transition: all .5s ease;
        transition-delay: .5s;
    }
    .fade-leave-active {
        transition: all .5s ease;
        position: absolute;
        width: 100%;
        height: calc(100% - 10px);
        overflow: hidden;
    }
    .fade-enter {
        // transform: translateX(10px);
        opacity: 0;
    }
    .fade-leave-to {
        opacity: 0;
    }
</style>

<style lang="scss">
    @import '/assets/scss/app.scss';

    html, body {
        z-index: -100;
        position: relative;
        background-color: #000;
    }

    #cover {
        width: 100vw;
        height: 100vh;
        position: fixed;
        z-index: 99999;
        pointer-events: none;

        .uncover {
            overflow: hidden;
            background-image: none !important;
            position: relative;
            pointer-events: none;
        }

        .uncover__img {
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: 50% 50%;
        }

        .uncover__slices {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            pointer-events: none;
        }

        .uncover__slices--vertical {
            flex-direction: row;
            pointer-events: none;
        }

        .uncover__slices--horizontal {
            flex-direction: column;
            pointer-events: none;
        }

        .uncover__slices--horizontal-double {
            display: grid;
            grid-template-columns: 50% 50%;
            pointer-events: none;
        }

        .uncover__slices--vertical-double {
            display: grid;
            grid-template-rows: 50% 50%;
            pointer-events: none;
        }

        .uncover__slice {
            color: #fff;
            background-color: currentColor;
            flex: 1;
            pointer-events: none;
        }

        .uncover__slices--vertical .uncover__slice {
            box-shadow: 1px 0 0 currentColor;
            pointer-events: none;
        }

        .uncover__slices--horizontal .uncover__slice {
            box-shadow: 0 1px 0 currentColor;
            pointer-events: none;
        }
    }
</style>
