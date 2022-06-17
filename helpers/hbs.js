const moment = require('morgan')

module.exports = {
    FormData: function (date, format) {
        return moment(date).format(format)
    },
}