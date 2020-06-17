const axios = require('axios')
const server = require('./../config').server
const session = require('./../data/session')

async function getProfileById() {
    try {
        for (let i = 0; i < session.length; i++) {

            //get profile by session
            const res1 = await axios({
                method: 'get',
                imeout: 1000,
                url: `${server}/context.json?sessionId=${session[i]}`,
            })
            const profileId = res1.data.profileId

            //get profile info
            const res2 = await axios({
                method: 'get',
                imeout: 1000,
                url: `${server}/cxs/profiles/${profileId}`,
            })

            console.log(res2.data)

        }
    } catch (error) {
        console.error(error);
    }
}


getProfileById()