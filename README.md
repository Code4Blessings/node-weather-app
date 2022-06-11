# node-weather-app

# Async

## Set Time Out Function

console.log('Starting')

- setTimeout takes in 2 arguments -- a function and the amount of time in milliseconds

```
setTimeout(() => {
    console.log('2 second timer')
}, 2000)

setTimeout(() => {
    console.log('0 second timer')
}, 0)

```

console.log('Stopping')

## HTTP Requests

#### Requests

- Takes in 2 arguments -- one is an options object which contains the url. The other is the function to run once the request is made. 
The function takes in 2 arguments--error (if there is one) and response

#### Customizing HTTP requests with the options object

- Add a json property to the options object and set it to true.  This will automatically parse the response. So you don't need to use JSON.parse in the function.

```
api key = f25876e7776ba5da8d99030859d645c1 for weatherstack.com

```

#### Challenge Print the lat/long for Lawrenceville

1. Fire off a new request to the URL explored in the browser
2. Have the request module parse it as a JSON
3. Print the lat/longs to the terminal
4. Test your work!

#### Challenge Handle errors for geocoding request

1. Setup an error handler for low-level errors
2. Test by disabling network request and running the app
3. Set up error handling for no matching results
4. Test by altering the search term and running the app.

## Callbacks

- A callback is a function taken in as an argument.

Example:

```

setTimeout(() => {
    console.log('Two seconds are up')
}, 2000)

const names = ['Christine', 'Dan', 'Annie']

const shortNames = names.filter((name) => {
    return name.length <= 4
})

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback(data)
    }, 2000)    
}

geocode('Philadelphia', (data) => {
    console.log(data)
})

```

#### Challenge: Mess around with the callback pattern

1. Define an add function that accepts the correct arguments (in the callbacks.js file)
2. Use setTimeOut to simulate a 2 second delay
3. After 2 seconds are up, call the callback function with the sum
4. Test your work

