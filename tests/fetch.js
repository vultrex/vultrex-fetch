const Request = require('../index');

const request = new Request();

request.setUrl('')
request.setMethod('GET')

request.fetch().then(res => {
    console.log(res)
})