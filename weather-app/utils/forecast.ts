const request = require ('postman-request')

type ForecastCallback = (error: string | undefined, data?: string) => void

const forecast = (lat: number, long: number, callback: ForecastCallback): void => {
  const url = `http://api.weatherstack.com/current?access_key=f25876e7776ba5da8d99030859d645c1&query=${long},${lat}&units=f`

  request({ url, json: true }, (error: any, response: { body: any }) => {
    const { body } = response

    if (error) {
      callback('Unable to connect to weather service')
    } else if (body.error) {
      callback('Unable to find location, check coordinates')
    } else {
      const temperature: number = body.current.temperature
      const feels: number = body.current.feelslike
      const description: string = body.current.weather_descriptions[0]

      callback(undefined, `${description}. It is currently ${temperature} degrees out. It feels like ${feels} degrees out`)
    }
  })
}

export default forecast
