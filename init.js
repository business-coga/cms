const axios = require('axios')
const server = require('./config').server

const rule = require('./rule')

async function init() {
    try {
        let data = Object.keys(rule)
        for (let i = 0; i < data.length; i++) {
            const res = await axios({
                method: 'post',
                imeout: 1000,
                auth: {
                    username: 'karaf',
                    password: 'karaf'
                },
                url: `${server}/cxs/rules`,
                data: rule[data[i]]
            })
            console.log({
                name : data[i],
                status: res.status,
                data: res.data
            })
        }

    
    } catch (error) {
        console.error(error);
    }
}


init()