const axios = require('axios')
const server = require('./../config').server
const session = require('./../data/session')
const profiles = require('./../data/profiles')

async function updateProfile() {
    try {
        for (let i = 0; i < session.length; i++) {
            const res = await axios({
                method: 'post',
                imeout: 1000,
                url: `${server}/eventcollector`,
                data : getData(session[i], profiles[i])
            })
            console.log(res.status)
            console.log(res.data)
        }
    } catch (error) {
        console.error(error);
    }
}

function getData(session, profileUpdate){
    return {
        "sessionId": session,
        "events": [
            {
                "scope": "system",
                "eventType": "updateProfile",
                "properties": {
                    "add": profileUpdate
                },
                "source": null,
                "target": null
            }
        ]
    }
}

updateProfile()