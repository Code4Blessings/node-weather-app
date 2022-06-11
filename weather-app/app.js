const request = require('postman-request')

//api key = f25876e7776ba5da8d99030859d645c1 for weatherstack.com

// const url = 'http://api.weatherstack.com/current?access_key=f25876e7776ba5da8d99030859d645c1&query=33.9562,-83.9880&units=f'


// request({url: url, json: true}, (error, response) => {
//     if(error) {
//         console.log('Unable to connect to weather service')
//     }else if(response.body.error) {
//         console.log('Unable to find location')
//     }else {
//         const data = response.body
//         const temperature = data.current.temperature
//         const feels = data.current.feelslike
//         const description = data.current.weather_descriptions[0]
//         console.log(`${description}. It is currently ${temperature} degrees out. It feels like ${feels} degrees out`)
//     }
// })

// // //Geocoding
// // //Address -> Lat/Long -> Weather

// const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/lawrenceville.json?access_token=pk.eyJ1IjoiY29kZTRibGVzc2luZ3MiLCJhIjoiY2txM285bXE5MGFuZTJucHA2eXdjcHRuNiJ9.j_PwXpN_122N5Kp6cZbDyQ&limit=1'


// request({url: geoUrl, json: true}, (error, response) => {
//     if(error) {
//         console.log('Unable to connect with MapBox service')
//     }else if(response.body.features.length=== 0) {
//         console.log('No matching results')
//     }else {
//         const geoData = response.body
//         const latitude = geoData.features[0].center[0]
//         const longitude = geoData.features[0].center[1]
//         console.log(`${latitude}, ${longitude}`)
//     }
// })

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/lawrenceville.json?access_token=pk.eyJ1IjoiY29kZTRibGVzc2luZ3MiLCJhIjoiY2txM285bXE5MGFuZTJucHA2eXdjcHRuNiJ9.j_PwXpN_122N5Kp6cZbDyQ&limit=1"

    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect to location services', undefined)
        } else if(response.body.features === 0) {
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

geocode('Lawrenceville', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})