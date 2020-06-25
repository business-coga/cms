const axios = require('axios')
const server = require('./../config').server
const profiles = require('./../data/profiles')

async function updateProfile() {
    try {
        for (let i = 0; i < profiles.length; i++) {
            Object.keys(profiles[i]).forEach(key=>{
                profiles[i][`properties.${key}`] = profiles[i][key]
                delete profiles[i][key]
            })
            const res = await axios({
                method: 'post',
                imeout: 1000,
                url: `${server}/eventcollector`,
                data : getData(`session-${i+1}`, profiles[i])
            })
            console.log({
                name : profiles[i][`properties.Name`],
                status: res.status,
                data: res.data
            })
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