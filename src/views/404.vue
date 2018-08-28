<template>
    <div class="FourOhFour">
        <header-view/>
        <div id="fourOhFourVideo">
            <video id="vid" video autobuffer autoplay loop muted>
                <source id="mp4" src="/video/404.mp4" type="video/mp4">
            </video>
        </div>
        <div class="content">
            <div class="grid-container">
                <div class="grid-x grid-padding-x align-center-middle">
                    <div class="cell auto text-center">
                        <h3>Page not found</h3>
                        <h1>Error Code 404.</h1>
                        <p>
                             <br>
                            <router-link class="more" :to="{ name: 'home' }">Home</router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <footer-view/>
    </div>
</template>

<script>
import HeaderView from '@/components/partials/HeaderView'
import FooterView from '@/components/partials/FooterView'


export default {
    components: {
        HeaderView,
        FooterView
    },
    mounted: function () {
        this.$Progress.fail()
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/scss/settings';

    .FourOhFour {
        background-color: $black;
        position: relative;

        #fourOhFourVideo {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 50%;
            display: block;
            -webkit-background-size: cover;
            background-size: cover;
            background-position: center;
            background-image: url(/img/404/CSICyber.jpg);
            opacity: 0.4;
            padding-bottom: 200px;

            #vid {
                position: absolute;
                top: 50%;
                left: 50%;
                -webkit-transform: translateX(-50%) translateY(-50%);
                transform: translateX(-50%) translateY(-50%);
                min-width: 100%;
                min-height: 100%;
                width: auto;
                height: auto;
                z-index: -1000;
                overflow: hidden;
            }
        }

        .image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: block;
            -webkit-background-size: cover;
            background-size: cover;
            background-position: center;
            background-image: url(/img/404/CSICyber.jpg);
            opacity: 0.2;
        }
        .grid-x {
            padding-top: 100px;
            position: relative;
            z-index: 5;
            min-height: 80vh;

            h1 {
                color: $white;
            }
            h3 {
                margin: 0;
                color: $primary-color;
            }
        }
    }
</style>
