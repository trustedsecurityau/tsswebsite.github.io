<template>
    <section class="social">
        <div class="grid-container">
            <div class="grid-x grid-padding-x">
                <div class="cell auto">

                    <h3>Top Stories</h3>

                    <div class="stories grid-x grid-padding-x align-stretch large-up-2">

                        <div v-for="media in shuffledMedia"
                             class="cell small-12 medium-6 large-4" >
                            <a
                                v-if="media.type === 'tweet'"
                                :href="media.permalinkURL"
                                target="_blank"
                                class="tweet">

                                <div class="twitter_username"><i class="fab fa-twitter"/> TSSCyber</div>

                                <span v-html="media.tweet"/>

                                <img
                                    v-if="media.image"
                                    :src="media.image"
                                    alt="">
                            </a>

                            <a v-if="media.type === 'article'" :style="{ backgroundImage: 'url(' + 'https://cdn-images-1.medium.com/max/600/' + media.virtuals.previewImage.imageId + ')' }"
                               :href="'https://medium.com/tsscyber/' + media.id"
                               target="_blank"
                               class="article">
                                <div class="medium_username"><i class="fab fa-medium"/> TSSCyber</div>
                                <h4>{{ media.title }}</h4>
                            </a>

                        </div>

                    </div>
                </div>

                <div class="cell small-12 medium-3">
                    <h3>Events</h3>
                    <div class="events">
                        <div
                            v-for="event in events"
                            :key="event.tid"
                            :href="'#'"
                            target="_blank"
                            class="event">
                            <div class="grid-x text-center">
                                <div class="cell small-12">
                                    {{ event.summary }}
                                </div>

                                <div class="cell small-12">
                                    <span class="date">
                                        {{ event.start_moment }} - {{ event.end_moment }}
                                    </span>
                                </div>

                                <div class="cell small-12">
                                    <span v-if="event.location"
                                          class="location">
                                        <i class="fas fa-location-arrow"/> {{ event.location | truncate(38) }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import twitterFetcher from 'twitter-fetcher'
import axios from 'axios'
import ical from 'ical'
import moment from 'moment'

export default {
    name: 'Social',
    filters: {
        truncate: function (text, length, clamp) {
            text = text || ''
            clamp = clamp || '...'
            length = length || 30

            if (text.length <= length) return text

            var tcText = text.slice(0, length - clamp.length)
            var last = tcText.length - 1

            while (last > 0 && tcText[last] !== ' ' && tcText[last] !== clamp[0]) last -= 1

            // Fix for case when text dont have any `space`
            last = last || length - clamp.length

            tcText = tcText.slice(0, last)

            return tcText + clamp
        }
    },
    props: {
    },
    data: function () {
        return {
            events: [],
            tweetsAndMedium_articles: []
        }
    },
    computed: {
        shuffledMedia: function () {
            Array.prototype.shuffle = function () {
                var input = this

                for (var i = input.length - 1; i >= 0; i--) {
                    var randomIndex = Math.floor(Math.random() * (i + 1))
                    var itemAtIndex = input[randomIndex]

                    input[randomIndex] = input[i]
                    input[i] = itemAtIndex
                }
                return input
            }

            return this.tweetsAndMedium_articles.shuffle()
        }
    },
    mounted: function () {
        let _this = this

        /**
         * Twitter
         */

        twitterFetcher.fetch({
            'dataOnly': true,
            'maxTweets': 4,
            'profile': { 'screenName': 'TSSCyber' },
            'customCallback': function (tweets) {
                tweets.forEach(tweet => { tweet.type = 'tweet'; return tweet })
                // console.log(tweets)
                _this.tweetsAndMedium_articles = _this.tweetsAndMedium_articles.concat(tweets)
            }
        })

        /**
         * Medium
         */
        axios.get('https://proxy.sinn.io/tss/medium/').then((response) => {
            let articles = response.data.response
            articles.forEach(article => { article.type = 'article'; return article })
            articles = articles.slice(0, 4)
            // console.log(articles)
            _this.tweetsAndMedium_articles = _this.tweetsAndMedium_articles.concat(articles)
        })

        /**
         * Events
         */
        // let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        // let url = 'https://calendar.google.com/calendar/ical/ct9vg8ej2uc6suu4m89t9mcms0%40group.calendar.google.com/public/basic.ics'
        ical.fromURL('https://proxy.sinn.io/tss/cal/', {}, function (err, data) {
            let events = Object.keys(data).map(function (key) { return data[key] }).filter(event => moment(event.end).isAfter(moment()))

            console.log(events)

            for (let i = 0; i < events.length; i++) {
                events[i].start_moment = moment(events[i].start).format('Do MMM YY')
                events[i].end_moment = moment(events[i].end).format('Do MMM YY')
            }

            events = events.sort((a, b) => a.start.getTime() < b.start.getTime() ? -1 : 1)

            _this.events = events
        })
    }
}
</script>

<style lang="scss" scoped>
    @import '~foundation-sites/scss/foundation';
    @import '../../../assets/scss/settings';

    .social {
        padding: 120px 0;
        background-image: url('/img/home/social_bg.jpg');
        -webkit-background-size: cover;
        background-size: cover;

        html.no-js & {
            display: none !important;
        }

        h1, h2, h3, h4 {
            color: $white;
        }

        .stories {
            .cell {
                margin-bottom: 30px;

                &:last-child {
                    @include xy-cell-base('auto');
                }
            }
        }

        .tweet {
            overflow-wrap: break-word;
            display: block;
            padding: 20px;
            height: 100%;
            margin: 10px 0;
            // background-color: rgba(0, 0, 0, 0.1);
            background-color: rgba(3, 5, 4, 0.4);
            border: 1px solid #2aa3ef;
            // box-shadow: 0 10px 70px 0 rgba(#2aa3ef, 0.3);
            color: $white;
            transition: transform .2s;
            border-radius: 5px;
            -webkit-background-size: cover;
            background-size: cover;

            &:hover {
                transform: translateY( -5px );
            }

            .twitter_username {
                color: #2aa3ef;
                font-weight: 500;
            }
        }

        .article {
            overflow-wrap: break-word;
            position: relative;
            display: block;
            padding: 20px;
            height: 100%;
            margin: 10px 0;
            background-color: rgba(3, 5, 4, 0.4);
            color: $white;
            transition: transform .2s;
            border-radius: 5px;
            -webkit-background-size: cover;
            background-size: cover;
            border: 1px solid $primary-color;
            // box-shadow: 0 10px 70px 0 rgba($primary-color, 0.3);

            &:after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba($black, .5);
                z-index: 0;
            }

            &:hover {
                transform: translateY( -5px );
            }

            > * {
                position: relative;
                z-index: 1;
            }

            .medium_username {
                color: $primary-color;
                font-weight: 500;
            }
        }

        .events {
            overflow-wrap: break-word;
            padding-top: 1px;

            .event {
                position: relative;
                display: block;
                padding: 20px;
                margin: 10px 0 30px;
                background-color: rgba($primary-color, .2);
                border: 1px solid $primary-color;
                color: $white;
                border-radius: 5px;
                -webkit-background-size: cover;
                background-size: cover;
                font-weight: 600;
                font-size: 24px;
                line-height: 1.2;

                .date {
                    display: block;
                    width: 100%;
                    font-size: 14px;
                    color: $primary-color;
                    font-weight: 500;
                    letter-spacing: 0;
                    margin-top: 2px;
                }

                .location {
                    display: block;
                    width: 100%;
                    font-size: 14px;
                    color: rgba(255, 255, 255, 0.8);
                    font-weight: 500;
                    letter-spacing: 0;
                    margin-top: 5px;

                    i {
                        font-size: 11px;
                        display: inline-block;
                        margin-right: 5px;
                        color: #54b6ff;
                    }
                }
            }
        }
    }
</style>
