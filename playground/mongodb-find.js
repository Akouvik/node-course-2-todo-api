//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);



MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to Mongodb server');
//    db.collection('Todos').find({
//        _id: new ObjectID('5a41c0f02cb21c91901d9660')
//    }).toArray().then((docs)=>{
//        console.log('Todos');
//        console.log(JSON.stringify(docs, undefined, 2));
//    }, (err) =>{
//        console.log('Unable to fetch todos', err);
//    })
    
    
//     db.collection('Todos').find().count().then((count)=>{
//        console.log(`Todos count: ${count}`);
//    }, (err) =>{
//        console.log('Unable to fetch todos', err);
//    })
    
    db.collection('Users').find({name:'Akouvi'}).toArray().then((docs,count)=>{
        console.log(`users with the name akouvi are ${docs}`);
//        console.log(docs)
        console.log(JSON.stringify(docs, undefined, 2))
        
    }, (err) =>{
        console.log('unable to fetch users', err)
    })
//    db.close();
});