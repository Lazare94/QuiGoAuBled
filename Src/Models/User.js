const mysql = require('mysql');

const connection =require( '../utils/database.js');

const User = connection.define('users', {
   id: {
      type: connection.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
   email: {
      type: connection.STRING,
      allowNull: false,
   },
   name: {
      type: connection.STRING,
   },
   password: {
      type: connection.STRING,
      allowNull: false,
   },
});

//export default User;