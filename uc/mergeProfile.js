const axios = require('axios')
const server = require('./../config').server

//Trường hợp điền vào form với thông tin email thì sẽ merge email luôn 

const SESSION = 'session-7'
const EMAIL = 'thuanlv1@tnteco.vn'

async function mergeProfile() {
    try {
            const res = await axios({
                method: 'post',
                imeout: 1000,
                url: `${server}/eventcollector`,
                data: {
                    "sessionId": SESSION,
                    "events": [{
                        "scope": "system",
                        "eventType": "mergeProfile",
                        "properties": {},
                        "source": null,
                        "target": {
                            "itemId": "13054a95-092d-4d7b-81f5-e4656c2ebc81",
                            "itemType": "cmsUser",
                            "scope": null,
                            "properties": {
                                "Email" : EMAIL
                            }
                        }
                    }]
                }
            })
            console.log({
                status: res.status,
                data: res.data
            })

    } catch (error) {
        console.error(error);
    }
}


mergeProfile()
