const config = require('./config')
const {createRating, updateRating} = require('./calculations')
const makeRatingFile = require('./rating-file')

module.exports = {
    config,
    createRating,
    updateRating,
    makeRatingFile
}