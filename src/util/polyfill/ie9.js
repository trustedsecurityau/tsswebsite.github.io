import bowser from 'bowser'

export default {
    init: function () {
        if (bowser.msie && bowser.version <= 9) {
            require('typedarray')
        }
    }
}
