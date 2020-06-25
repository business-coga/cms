const axios = require('axios')
const server = require('./../config').server
const profiles = require('./../data/profiles')

async function setProfile() {
    try {
        for (let i = 0; i < profiles.length; i++) {
            const res = await axios({
                method: 'post',
                imeout: 1000,
                url: `${server}/eventcollector`,
                data: getData(`session-${i+1}`, profiles[i])
            })
            console.log({
                name : profiles[i].Name,
                status: res.status,
                data: res.data
            })
        }
    } catch (error) {
        console.error(error);
    }
}

function getData(session, profile) {
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