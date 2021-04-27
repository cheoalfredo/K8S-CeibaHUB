const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

var monngoURL = `mongodb://${process.env.HOST}/database`

app.use(cors({
    origin: '*'
}))


app.get('/api', (req, res) => {
    res.send({
        "data": "hello CeibaHUB!",
        "mongo": mongoose.connection.readyState
    })
})


mongoose.connect(monngoURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
        () => {
            console.log("connected to mongo");
        }
    ).catch((error) => {
        console.log("unable to connect to mongoDB")
        console.log(monngoURL);
    });


app.listen(3000, function() {
    console.log('listening on 3000')
});
