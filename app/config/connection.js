// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

var mysql = require('mysql');

// Edit this connection to make it work with JawsDB.
var source = {

    localhost: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: "Njmitx123",
        database: "starwars"
    },
    jawsDB: {
    	port: 3306,
        host: 'z12itfj4c1vgopf8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'cepcxdc4xe3covhi',
        password: "n4up8ut7kibqw82d",
        database: "xb3szx7vqct9b0fh"

        // TODO: Add your JawsDB connection info here
    }
}


// TODO: connect your jawsDB connection witht he mysql connection.
var connection = mysql.createConnection(source.jawsDB); //enter connection here);



// Replace the connection code here with one to connect to you JawsDB connection.
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;