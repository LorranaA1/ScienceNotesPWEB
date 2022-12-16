const { MongoClient } = require('mongodb');
const urlMongo = "mongodb+srv://pweb:pweb@cluster0.eusrocz.mongodb.net/?retryWrites=true&w=majority";
var mongoClient = new MongoClient(urlMongo);
const users = require('../models/users');
let dbConnection;

mongoClient.connect().then((database, err) => {
  if (err) console.log("erro");
  dbConnection = database.db("science_notes");
});

exports.create = (req, res) => {
  const docs = new users({
    email: req.params.email,
    name: req.params.name,
    username: req.params.username,
    birthdate: req.params.birthdate,
    password: req.params.password,
    code: req.params.code,
    image: req.params.image
  });
  dbConnection.collection("users").insertOne(docs, (erro, resul) => {
    if (erro)
      res.json({ created: false });
    console.log("adicionado");
    res.json({ created: true });
  });
}

exports.update = (req, res) => {
  let filter = {
    email: req.params.email
  };
  let update = {
    $set: {
      password: req.params.newPassword
    }
  };
  dbConnection.collection("users").updateOne(filter, update, function(err, ress) {
    if (err)
      res.json({ updated: false });
    console.log('Atualizada.');
    res.json({ updated: true });
  })
}

exports.login = (req, res) => {
  console.log('aloo');
  dbConnection.collection("users").findOne({ 'username': req.params.username, 'password': req.params.password }, (err, docs) => {
    if (docs != null) {
      res.json({ logado: "true" });
    } else {
      res.json({ logado: "false" });
    }
  })
}

// google maps for flutter


