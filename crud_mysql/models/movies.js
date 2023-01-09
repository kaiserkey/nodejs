'use strict'

const mysql = require('mysql'),
        myConnection = require('express-myconnection'),
        dbOptions = {
            host: 'localhost',
            port: 3307,
            user: 'root',
            password: '',
            database: 'movies'
        },
        Movies = myConnection(mysql, dbOptions, 'request')

module.exports = Movies