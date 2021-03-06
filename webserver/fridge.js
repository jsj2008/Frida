var db = require('./db.js');

exports.get = function(req, res) {
    if (db.connection) {
        db.connection.query('select * from fridges order by name', function(err, rows, fields) {
            if (err) throw err;
            res.contentType('application/json');
           res.write(JSON.stringify(rows));
            res.end();
        });
    }
};

exports.setDoor = function(req, res) {
    console.log(req.body);
    var fridge = req.params.id;
    var type = 2;
    if(db.connection) {
        var queryString = 'INSERT INTO fridge_data (fridge, value, type) VALUES (?,?,?)';
        db.connection.query(queryString, [fridge, req.body.door, type], function(err, rows, fields) {
            if (err) throw err;
            res.contentType('application/json');
            res.write("Success");
            res.end();
        });
    }
};

exports.titleName = function(req, res) {
    var name = req.params.fridgeName;
    if(db.connection) {
        var querystring = 'select * from fridges where name = ?';
        db.connection.query(querystring, [name], function(err,rows, fields) {
            if (err) throw err;
            res.contentType('application/json');
            res.write(JSON.stringify(rows));
            res.end();
        });
    }
};

exports.setTemp = function(req, res) {
    var fridge = req.params.id;
    var type = 1;
    var timestamp = new Date().getTime();
    if(db.connection) {
        var queryString = 'INSERT INTO fridge_data (fridge, value, type) VALUES (?,?,?)';
        db.connection.query(queryString, [fridge, req.body.temp, type], function(err, rows, fields) {
            if (err) throw err;
            res.contentType('application/json');
            res.write("Success");
            res.end();
        });
    }
};

exports.getTemp = function(req, res) {
    if (db.connection) {
        var queryString = 'SELECT * FROM fridge_data WHERE type = 1 ORDER BY added DESC LIMIT 1';
        db.connection.query(queryString, function(err, rows, fields) {
            if (err) throw err;
            res.contentType('application/json');
            res.write(JSON.stringify({"temp": rows[0].value}));
            res.end();
        });
    }
};

exports.getDoor = function(req, res) {
    if (db.connection) {
        var queryString = 'SELECT * FROM fridge_data WHERE type = 2 ORDER BY added DESC LIMIT 1';
        db.connection.query(queryString, function(err, rows, fields) {
            if (err) throw err;
            res.contentType('application/json');
            res.write(JSON.stringify({"door": rows[0].value}));
            res.end();
        });
    }
};

exports.one = function(req, res) {
    var id = req.params.id;
    if (db.connection) {
        var queryString = 'select * from fridges where id = ?';
        db.connection.query(queryString, [id], function(err, rows, fields) {
            if (err) throw err;
            res.contentType('application/json');
            res.write(JSON.stringify(rows));
            res.end();
        });
    }
};


