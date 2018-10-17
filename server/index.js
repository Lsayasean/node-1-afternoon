const express = require('express');
const bodyParser = require('body-parser');
const controller = require ('./controllers/message-controller')
const port = 3001;


const app = express();

app.use(bodyParser.json());
app.use( express.static( __dirname + './../public/build') );

app.get('/api/messages', controller.read)

app.post('/api/messages', controller.create)

app.put('/api/messages/:id', controller.update)

app.delete('/api/messages/:id', controller.delete)






app.listen(port, () => {
    console.log(`we have a launch at pad ${port}`)
})