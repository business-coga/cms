const axios = require('axios')
const server = require('./../config').server
const session = require('./../data/session')
const profiles = require('./../data/profiles')

async function setProfile() {
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

function getData(session, profile){
    return {
        "sessionId": session,
        "events": [{
            "eventType": "setProfile",
            "scope": "system",
            "source": null,
            "target": null,
            "properties": profile
        }]
    }
}

setProfile()