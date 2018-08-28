<template>
    <div class="cell">
        <router-link
            :to="to"
            :style="{ borderTop: color + ' 5px solid', borderBottom: color + ' 5px solid', }"
            class="callout">
            <div class="image">
                <img :src="image"
                     alt="">
            </div>

            <div
                class="name">
                <slot name="name"/>
            </div>

            <slot>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </slot>
            <a
                :style="{ color }"
                href="#"
                class="more">Learn More</a>
        </router-link>
    </div>
</template>

<script>

export default {
    props: {
        color: {
            type: String,
            default: ''
        },
        image: {
            type: String,
            default: '/img/home/operational_icon.png'
        },
        to: {
            default: '/services'
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../../../assets/scss/settings';

    .image {
        margin: 0 auto;
        padding: 30px 0;
        /*height: 196px;*/
        /*position: relative;*/
        display: block;
        height: 150px;
        /*height: 100px;*/

        img {
            width: 90px;
            transition: transform .5s;
        }
    }
    .name {
        /deep/ {
            h1, h2, h3, h4, h5, h6 {
                // color: inherit;
                margin-bottom: 10px;
            }
        }
    }
    .callout {
        padding-top: 0;
        padding-bottom: 60px;
        color: #8b85aa;

        @include breakpoint(medium) {
            height: 100%;
            border-top: 0;
        }

        &:hover {
            img {
                transform: translateY(-5px);
            }
        }
    }
    .more {
        position: absolute;
        bottom: 40px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 15px;
        font-weight: 500;
    }

    /deep/ p {
        // text-align: justify;
    }

    /deep/ b {
        color: $header-color;
        font-weight: 500;
    }

    /deep/ i {
        display: none;

        @include breakpoint(medium) {
            display: block;
        }
    }
</style>
