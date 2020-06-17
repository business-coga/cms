const axios = require('axios')
const server = 'http://10.254.60.132:8181'
const session = require('./data/session')

async function createSession() {
    try {
        for (let i = 0; i < session.length; i++) {
            const res = await axios({
                method: 'get',
                imeout: 1000,
                url: `${server}/context.json?sessionId=${session[i]}`,
            })
            console.log(res.status)
            console.log(res.data)
        }
    } catch (error) {
        console.error(error);
    }
}

// axios({
//     method: 'get',
//     imeout: 1000,
//     url: `${server}/cxs/profiles/count`,
//     auth: {
//         username: 'karaf',
//         password: 'karaf'
//     },
// }).then(res => {
//     console.log(`stauts : ${res.status}`)
//     console.log(res.data)
// }).catch((err) => {
//     console.log(err)
// })