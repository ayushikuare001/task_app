// CRUD create read update delete

/*const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    console.log('Unable to conn1!')
    if (error) {
        return console.log('Unable to connect to database!')
    }
    console.log('Unable to conn2!')



})*/
///////CREATE/////////////////////////////////////////////////////////////////////////////////////////////////////

/*const { MongoClient} = require('mongodb');
const { ObjectId} = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// Database Name
const databaseName  = 'task-manager';

const id = new ObjectId()
console.log(id)
console.log(id.id)
console.log(id.id.length)
console.log(ObjectId.toString().length)

async function main() {
  // Use connect method to connect to the server
  await client.connect();

  console.log('Connected successfully to server');
  try{
  const db = client.db(databaseName );
  const collection = db.collection('task');

  const docs=[
    {   _id: id,
        description: 'Clean the house',
        completed: true
    },{
        description: 'Renew inspection',
        completed: false
    },{
        description: 'Pot plants',
        completed: false
    }
];

const result = await collection.insertMany(docs);
console.log(`${result.insertedCount} documents were inserted`);
console.log('success1');

console.log('Inserted documents =>',result);

for (let i = 0; i < docs.length; i++) {
    console.log(docs[i]);
}

console.log('success21');

}
finally {
    await client.close();
  }

}
main().catch(console.error);


*/
////////////////////////read/////////////////////////////////////////////////////////////////////////////////////////
/*const { MongoClient} = require('mongodb');
const { ObjectId} = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// Database Name
const databaseName  = 'task-manager';

async function read() {
  //Use connect method to connect to the server
  
  try{
   await client.connect();

  console.log('Connected successfully to server for read');
  const db = client.db(databaseName);
  const collection = db.collection('task');
 
const query = { completed: false};

///for find one--> const task = await db.collection('tasks').findOne({_id : new ObjectId('644581d037b77d496b6fb763')})
const foundvalue =await collection.find(query).toArray()
console.log(foundvalue);

if ((await collection.countDocuments(query)) === 0) 
  {
    console.log("No documents found!");
  }


  for await (const doc of foundvalue) 
  {
    console.dir(doc);
  }


console.log('success2');

}
finally {
    await client.close();
  }

}
read().catch(console.eror);
*/
///////////////////////UPDATE///////////////////////////////////////////////////////////////////
/*const { MongoClient} = require('mongodb');
const { ObjectId} = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// Database Name
const databaseName  = 'task-manager';

async function update() {
  //Use connect method to connect to the server
  
  try{
   await client.connect();

  console.log('Connected successfully to server for read');
  const db = client.db(databaseName);
  const collection = db.collection('task');
 
  await db.collection('user').updateOne(
    { _id : new ObjectId("6477b7e333c2cee18347ae23") },
    {
      $set: { 
        name:'Ayushi',
        age:21
      }
    }
  )
.then((result)=>
{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})

await db.collection('user').updateMany(
  { age: { $lt: 50 } },
  {
    $set: { age:30 }
  }
)
.then((result)=>{
  console.log(result)
})
.catch((error)=>{
  console.log(error)
})

console.log('success2');

}
finally {
    await client.close();
  }

}
update().catch(console.error);
*/

//////delete//////////////////////////////////
/*const { MongoClient} = require('mongodb');
const { ObjectId} = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// Database Name
const databaseName  = 'task-manager';

async function deletedoc() {
  //Use connect method to connect to the server
  
  try{
   await client.connect();

  console.log('Connected successfully to server for read');
  const db = client.db(databaseName);
  const collection = db.collection('task');
 
 

//await collection.deleteOne({ completed: false });
await collection.deleteMany({ description: "Pot plants" }
).then((result)=>{
  console.log(result)
})
.catch((error)=>{
  console.log(error)
})

console.log('success2');

}
finally {
    await client.close();
  }

}
deletedoc().catch(console.error);*/

