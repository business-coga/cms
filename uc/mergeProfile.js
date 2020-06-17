const axios = require('axios')
const server = require('./../config').server
const session = require('./../data/session')

//Trường hợp điền vào form với thông tin email thì sẽ merge email luôn 

const SESSION = ''
const EMAIL = ''

async function mergeProfile() {
    try {
        for (let i = 0; i < session.length; i++) {
            const res = await axios({
                method: 'post',
                imeout: 1000,
                url: `${server}/context.json?sessionId=${session[i]}`,
                data: {
                    "sessionId": SESSION,
                    "events": [{
                        "scope": "system",
                        "eventType": "mergeProfile",
                        "properties": {},
                        "source": null,
                        "target": {
                            "itemId": SESSION,
                            "itemType": "cmsUser",
                            "scope": null,
                            "properties": {
                                "email": EMAIL,
                            }
                        }
                    }]
                }
            })
            console.log(res)

        }
    } catch (error) {
        console.error(error);
    }
}


mergeProfile()