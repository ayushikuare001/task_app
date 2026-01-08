

//PURPOSE:HAVE DEFINED SCHEMA OF MMONGODB DATA BASE OF USER
const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Task = require('./task')

const Schema = mongoose.Schema;


const userSchema  = new Schema({
  name: {
    type: String,
    required: true,
  },

    email: {
      type: String,
      unique:true,
      required: true,
      trim: true,
      lowercase: true,
      validate:function(value) 
        {
          if (!validator.isEmail(value))
         {
              throw new Error('Email is invalid')
          }
        }
         },

    password: {
          type: String,
          required: true,
          minlength: 7,
          trim: true,
          validate:function(value) {
              if (value.toLowerCase().includes('password')) {
                  throw new Error('Password cannot contain "password"')
              }
          }
      },    
    age:{
        type: Number,
        default: 0,
        //validate: [validator,'invalid age']  
        validate:function(value) {
          if (value<0) {
            throw new Error('Age must be a postive number')
          }  
    }
  },
  tokens: [{
    token: {
        type: String,
        required: true
    }
}],   avatar: {
  type: Buffer
}
    //author: ObjectId,
    //date: Date
 },
 {
  timestamps: true     //help to keep track when the data created or updated with 2 new fields
}

   )
  userSchema.virtual('tasks', {
    ref: 'Task',
    localField: '_id',
    foreignField: 'owner'
})


  userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens
    delete userObject.avatar

    return userObject
}


  userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, 'thisismynewcourse')

    user.tokens = user.tokens.concat({ token })
    await user.save()

    return token
}

  userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })

    if (!user) {
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('Unable to login')
    }

    return user
}


  userSchema.pre('save', async function (next) {
    const user = this
    console.log("just running")

   if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})


// Delete user tasks when user is removed
userSchema.pre('remove', async function (next) {
  const user = this
  await Task.deleteMany({ owner: user._id })
  next()
})

  const User = mongoose.model('User', userSchema );
  module.exports = User