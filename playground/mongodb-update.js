//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);



MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to Mongodb server');
//    db.collection('Todos').findOneAndUpdate(
//        {
//            _id: new ObjectID("5a4260127d1ffe5b2b0ceb68")
//        }, 
//        {
//            $set: {
//                completed: true
//            }
//        },
//        {
//            returnOriginal: false
//        }).then((results) =>{
//        console.log(results);
//    })
    
    db.collection('Users').findOneAndUpdate(
        {
            _id: new ObjectID("5a411826e7079906136a290b")
        },{
            $set: {
                name: 'Kossivi'
            }
        }, {
        $inc: {
            age: 23
        }
    },
    {
        returnOriginal: false
    }).then((result) =>{
        console.log(result)
    });
    


//    db.close();
});