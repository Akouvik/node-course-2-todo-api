//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);



MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to Mongodb server');
    
//    db.collection('Todos').insertOne({
//        text: 'Something to do',
//        completed: 'false'
//    }, (err, result)=>{
//        if(err){
//            return console.log('Unable to insert todo', err);
//        }
//        console.log(JSON.stringify(result.ops, undefined, 2))
//    });
    
//    db.collection('Users').insertOne({
//        name:'Akouvi',
//        age:26,
//        location: 'Melbourne'
//    }, (err, result) =>{
//        if(err){
//            return console.log('Unable to inser user');
//        }
//        console.log(result.ops[0]._id.getTimestamp());
//    })
    
    db.close();
});