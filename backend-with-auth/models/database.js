require('dotenv').config()
//const Sequelize = require('sequelize');

// EXOR: one or another
const ibmdb = require('ibm_db');

const database = process.env.DATABASE; //"BLUDB";                 
const hostname = process.env.HOSTNAME; //"dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net";    
const port     = process.env.PORT;     //50000;
const protocol = process.env.PROTOCOL; //"TCPIP";
const uid      = process.env.UID;      //"fxz96966";
const pwd      = process.env.PWD;      //"c51trq4f8crb4-3v";

console.log("Opening DB2 connection");

var connString = "DATABASE=" + database + ";"
    + "HOSTNAME=" + hostname + ";"
    + "PORT=" + port + ";"
    + "PROTOCOL=" + protocol + ";"
    + "UID=" + uid + ";"
    + "PWD=" + pwd + ";";
    
    
 
console.log("DB2 connection string: " + connString);

ibmdb.open(connString, function(err, conn) {
  if(!err) {
    console.log("DB2 connection Opened, conn=", conn);
  } else {
    console.log("DB2 connection error: ", err.message);
  }
});

// How do I pass hostname, port, protocol, database name with sequelize ????
// password can be passed through environment ('.env') - look where JWT token is passed
//                                            uid            pwd
//const sequelize = new Sequelize('graphql', 'fxz96966', 'c51trq4f8crb4-3v', {
//   dialect: 'db2',
//   define: {
//     timestamps: false
//   },
//   logging: false,
//   insecureAuth: true
// });

module.exports = {
  conn
};