require('dotenv').config()
const Sequelize = require('sequelize');

// EXOR: one or another
//const ibmdb = require('ibm_db');

const database = process.env.DATABASE;                 
const hostname = process.env.HOSTNAME;    
const port     = process.env.PORT;     
const protocol = process.env.PROTOCOL; 
const uid      = process.env.UID;      
const pwd      = process.env.PWD;      

console.log("Opening DB2 connection");

var connString = "DATABASE=" + database + ";"
    + "HOSTNAME=" + hostname + ";"
    + "PORT=" + port + ";"
    + "PROTOCOL=" + protocol + ";"
    + "UID=" + uid + ";"
    + "PWD=" + pwd + ";";
    
    
 
console.log("DB2 connection string: " + connString);

// ibmdb.open(connString, function(err, conn) {
//   if(!err) {
//     console.log("DB2 connection Opened, conn=", conn);
//   } else {
//     console.log("DB2 connection error: ", err.message);
//   }
// });

// password can be passed through environment ('.env') - look where JWT token is passed
//                                           uid            pwd
const sequelize = new Sequelize('graphql', uid, pwd, {
  dialect: 'mysql',
  host: hostname,
  port: port, 
  protocol: protocol,
  define: {
    timestamps: false
  },
  logging: false,
  insecureAuth: true
});

module.exports = {
  sequelize
};