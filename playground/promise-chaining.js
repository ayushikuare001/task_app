require('../src/db/mongoose')
const User = require('../src/model/user')

/*
////without async await
User.findByIdAndUpdate("64800d45482c485dba0b904f", { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})*/


////with async await
const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('64800d45482c485dba0b904f', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})