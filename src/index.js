//PURPOSE:STARTING FILE OF TASK MANAGER PROJECT

const express = require('express')
require('./db/mongoose')
//const User = require('./model/user')       -----will be used in router/user.js
//const Task = require('./model/task')      -----will be used in router/task.js
//all the rest api functons of user are moved to router/user.js
//all the rest api functons of task are moved to router/task.js
const userRouter = require('./router/user')
const taskRouter = require('./router/task')

const app = express()
const port = 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => {
    console.log("yes")
    console.log('Server is up on port ' + port)
})


/*
//// how to use file upload to express
const multer = require('multer')
const upload = multer({
    dest: 'images',  // dest is for destination
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('Please upload a Word document'))
        }

        cb(undefined, true)
    }
})
app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
}, (error, req, res, next) => {               //function for error handling
    res.status(400).send({ error: error.message })
})
 */

/*
//   how to use middleware "maintennce mode"
app.use((req, res, next) => {
    res.status(503).send('Site is currently down. Check back soon!')
})
*/


/*/////how to use populate
const Task = require('./model/task')
const User = require('./model/user')



const main = async () => {
     //const task = await Task.findById('649e9b83ab24d859b4a1e784')
     //await task.populate('owner')
     //console.log(task.owner)

   // const user = await User.findById('649e9b4cab24d859b4a1e77e')
    //await user.populate('tasks')
    //console.log(user.tasks)
}

main()*/

