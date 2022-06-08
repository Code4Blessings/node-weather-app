const request = require('postman-request')

//api key = f25876e7776ba5da8d99030859d645c1

const url = 'http://api.weatherstack.com/current?access_key=f25876e7776ba5da8d99030859d645c1&query=33.9562,-83.9880&units=f'


request({url: url, json: true}, (error, response) => {
    const data = response.body
    const temperature = data.current.temperature
    const feels = data.current.feelslike
    const description = data.current.weather_descriptions[0]

    console.log(`${description}. It is currently ${temperature} degrees out. It feels like ${feels} degrees out`)
})

//Geocoding
//Address -> Lat/Long -> Weather


