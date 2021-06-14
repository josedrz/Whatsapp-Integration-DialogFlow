const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const router = express.Router();
const port = process.env.PORT || 8080;

app.use(cors());
app.options('*', cors());

app.use(bodyParser.json())


const whatsapp = require('./whats-app');

app.post('/whatsapp/connect', whatsapp.conectApi);
app.post('/whatsapp/sendmessage', whatsapp.sendMessage);
app.post('/whatsapp/sendmessageloca', whatsapp.sendMessageloca);

app.listen(port, function() {
    console.log("App is running on port " + port);
  });