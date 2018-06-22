// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDB server');

    //Delete many
    // db.collection('Todos').deleteMany({text: 'Walk the dog'}).then((result) => {
    //     console.log(result);
    // });

    //delete one
    // db.collection('Todos').deleteOne({text: 'Go to bed'}).then((result) => {
    //     console.log(result);
    // });

    //Find one and delete
    // db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
    //     console.log(result);
    // });

   // db.close();
});