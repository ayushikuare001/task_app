
//PURPOSE : is to connect mongoose to the mongodb
const mongoose = require('mongoose')
//const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
   
})




//================================================================================================

/*const mongoose = require('mongoose')
//const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
   
})
/////defining schema---------------------------------------------------
const Schema = mongoose.Schema;
//const ObjectId = Schema.ObjectId;

const data = new Schema({
    name: String,

    email: {
      type: String,
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
        //validate: [validator,'invalid age']  
        validate:function(value) {
          if (value<0) {
            throw new Error('Age must be a postive number')
          }  
    }
  }
    //author: ObjectId,
    //date: Date
  });

 const User = mongoose.model('User', data);

 const me = new User({
    name: 'Ayushi',
    email: 'ayushi@gmail.com',
    age: 21,
    password: "     ayushi12345       "

})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error!', error)
})

*/
//===============================================================================================================================

/*const mongoose = require('mongoose')
//const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
   
})


const Task = mongoose.model('Task', {
  description: {
      type: String,
      required: true,
      trim: true
  },
  completed: {
      type: Boolean,
      default: false
  }
})

*/