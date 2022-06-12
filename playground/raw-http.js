//Making An HTTP Request Without A Library

const http = require('http')


const url =`http://api.weatherstack.com/current?access_key=f25876e7776ba5da8d99030859d645c1&query=lawrenceville&units=f`

const request = http.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
    request.on('end', (error) => {
        console.log('An error', error)
    })
})

request.end()