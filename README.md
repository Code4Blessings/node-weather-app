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

#### Challenge Print the lat/long for Lawrenceville

1. Fire off a new request to the URL explored in the browser
2. Have the request module parse it as a JSON
3. Print the lat/longs to the terminal
4. Test your work!