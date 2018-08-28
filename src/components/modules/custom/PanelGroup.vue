<template>
    <div class="group grid-x grid-padding-x medium-up-3 text-center align-stretch">
        <slot>
            <Panel/>
            <Panel/>
            <Panel/>
        </slot>
    </div>
</template>

<script>
import Panel from '@/components/modules/custom/Panel'

export default {
    name: 'Header',
    components: {
        Panel
    }
}
</script>

<style lang="scss" scoped>
    @import '../../../assets/scss/settings';

    .group:before {

    }
    .group > * {
        &:first-child {
            margin-top: -100px;
        }
        @include breakpoint(medium) {
            margin-top: -100px;
        }

    }
</style>
