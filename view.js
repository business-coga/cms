const profiles = require('./data/profiles')
let keys = []

profiles.forEach(e => {
    Object.keys(e).forEach(key => {
        if(!keys.find(i => i == key)){
            keys.push(key)
        }
    })
})

profiles.forEach((e,i)=>{
	delete profiles[i]["Create by"]
	delete profiles[i]["Update by"]
	delete profiles[i]["Face id"]




})

/*
profiles.sort((a,b)=>{

	return a.Name > b.Name



})
*/

//console.log(keys.sort())




console.table(profiles)
