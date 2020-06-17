const axios = require('axios')
const server = require('./../config').server
const session = require('./../data/session')


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

createSession()