const axios = require('axios')
const server = require('./../config').server
const profiles = require('./../data/profiles')


async function createSession() {
    try {
        for (let i = 0; i < profiles.length; i++) {
            const res = await axios({
                method: 'get',
                imeout: 1000,
                url: `${server}/context.json?sessionId=session-${i+1}`,
            })
            console.log(res.status)
            console.log(res.data)
        }
    } catch (error) {
        console.error(error);
    }
}

createSession()
