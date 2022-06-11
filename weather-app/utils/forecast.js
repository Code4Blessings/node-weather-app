const request = require('postman-request')

const forecast = (lat, long, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=f25876e7776ba5da8d99030859d645c1&query=${long},${lat}&units=f`
    request({url: url, json: true}, (error, response) => {
        if(error) {
        callback('Unable to connect to weather service', undefined)
        }else if(response.body.error) {
            callback('Unable to find location, check coordinates', undefined)
        }else {
            const data = response.body
            const temperature = data.current.temperature
            const feels = data.current.feelslike
            const description = data.current.weather_descriptions[0]
            callback(undefined, `${description}. It is currently ${temperature} degrees out. It feels like ${feels} degrees out`)
        }
    })
}

module.exports = forecast;