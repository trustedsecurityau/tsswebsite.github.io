<template>
    <div class="router-wrapper">
        <router-link
            :to="to"
            class="template">
            <div class="grid-container">
                <div :style="{ backgroundImage: 'url(' + image + ')' }"
                     class="background">
                    <div :style="{ opacity: opacity }"
                         class="shade"/>
                </div>
                <div class="grid-x grid-padding-x align-center-middle">
                    <div class="cell small-12 medium-8 large-6 text-center">
                        <slot>
                            <h3>Heading</h3>
                            <span to="/">Test Link Routing</span>
                        </slot>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        image: {
            type: String,
            default: ''
        },
        opacity: {
            type: Number,
            default: 0.7
        },
        to: {
            type: String | Object,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../../../assets/scss/settings';

    .router-wrapper {
        position: relative;
        border-bottom: 40px solid #010E0B;
    }

    .template {
        overflow: hidden;
        // position: relative;
        width: 100%;
        /*margin-bottom: 20px;*/
        // border-bottom: 40px solid #010E0B;
        /*padding-bottom: 40px;*/

        @include breakpoint(medium) {
            // margin-bottom: 0;
        }

        .grid-x {
            height: 280px;
            position: relative;
            z-index: 4;

            @include breakpoint(medium) {
                height: 400px;
            }

            @include breakpoint(xlarge) {
                height: 500px;
            }
        }

        .background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            -webkit-background-size: cover;
            background-size: cover;
            background-position: center;

            .shade {
                transition: all .4s;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                content: '';
                opacity: 0.7;
                background-color: #131219;
                z-index: 3;
            }
        }

        &:after {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            content: '';
            background-color: lighten($primary-color, 4%);
            opacity: 0;
            z-index: 3;
            transition: all .4s;
        }

        &:hover, &:focus {
            /*-webkit-filter: grayscale(60%); !* Safari 6.0 - 9.0 *!*/
            /*filter: grayscale(60%);*/

            /deep/ span {
                color: #1c1a24;
            }
            &:after {
                opacity: 0.8 !important;
            }
        }

        video {
            object-fit: cover;
            position: absolute;
            width: 100%;
            z-index: 1;
        }

        /deep/ {
            h2, h3, h4 {
                color: $white;
                font-weight: 600;
                margin-bottom: 0;
            }
            p {
                color: $white;
                opacity: 0.7;
            }
            span {
                transition: background-color .2s;
                color: $primary-color;
                font-weight: 500;

                &:after {
                    content: '›';
                    padding-left: 5px;
                }
            }
        }
    }
</style>
