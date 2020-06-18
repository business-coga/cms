const profiles = require('./data/profiles')
let keys = []

profiles.forEach(e => {
    Object.keys(e).forEach(key => {
        if(!keys.find(i => i == key)){
            keys.push(key)
        }
    })
})

let a = {
    x : 3,
    y : 10
}



console.log(keys.sort())