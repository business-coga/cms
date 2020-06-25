const rp = require('request-promise');
const request = require('request');
const server = 'http://10.254.60.132:8181'

request(`${server}/cxs/profiles/count`, {
    'auth': {
        'user': 'username',
        'pass': 'password',
        'sendImmediately': false
    }
}, (err, res) => {
    console.log({
        err,
        res
    })
})

// console.log('start')

// rp(`${server}/cxs/profiles/count`)
//     .then(function (res) {
//         console.log(res)
//     })
//     .catch(function (err) {
//         console.log(err)
//     })
