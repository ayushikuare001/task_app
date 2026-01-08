require('../src/db/mongoose')
const Task = require('../src/model/task')

/*
////without async await
Task.findByIdAndDelete("647e4779008ba51d8781f3b8").then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})*/


////with async await
const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('647e4779008ba51d8781f3b8').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})