const request = require('postman-request')

//MUST USE STRING INTERPOLATION TO MAKE THIS URL MANIPULATION WORK!!!
const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiY29kZTRibGVzc2luZ3MiLCJhIjoiY2txM285bXE5MGFuZTJucHA2eXdjcHRuNiJ9.j_PwXpN_122N5Kp6cZbDyQ&limit=1`

    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect to location services', undefined)
        } else if(response.body.features.length === 0) {
            callback('Unable to find location, try another search', undefined)
        } else{
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;