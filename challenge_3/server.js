const express = require('express');
const app = express();
const port = 1111;
const mysql = require('mysql2');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('multipage', 'root', '', {host:'localhost', dialect:'mysql'});
const randToken = require('rand-token');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  address: {
    type: DataTypes.STRING
  },
  lineTwo: {
    type: DataTypes.STRING
  },
  city: {
    type: DataTypes.STRING
  },
  state: {
    type: DataTypes.STRING
  },
  zip: {
    type: DataTypes.STRING
  },
  creditCard: {
    type: DataTypes.STRING
  },
  expiration: {
    type: DataTypes.STRING
  },
  cvv: {
    type: DataTypes.STRING
  },
  billingZip: {
    type: DataTypes.STRING
  },
  token: {
    type: DataTypes.STRING
  }
});


app.use(express.static(__dirname + '/public/'));

app.get('/session', (req, res) => {
  const token = randToken.generate(16);
  User.create({token})
  .then(() => {
    res.send(token);
  })
  .catch((err) => {
    res.status(500);
    res.send(err);
  })
})


app.listen(port, () => {
  console.log(`multiform is running at port:${port}`);
})

