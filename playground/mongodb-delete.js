//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);



MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to Mongodb server');
    
    //deleteMany
    
//    db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
//        console.log(result);
//    })
    //deletOne
    
//    db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
//        console.log(result);
//    })
    
    //findOneAndDelete
//    db.collection('Todos').findOneAndDelete({completed:false}).then((result) =>{
//        console.log(result);
//    })
    
//    
//    db.collection('Users').deleteMany({name: 'Akouvi'}).then((result)=>{
//        console.log(result);
//    })
    
    db.collection('Users').findOneAndDelete({_id:new ObjectID("5a411812c292ed06125cae53")}).then((results) =>{
        console.log(JSON.stringify(results, undefined, 2));
    })
//    db.close();
});