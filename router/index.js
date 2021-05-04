'use strict';
const db = require('../middleware/mongoconnector');
module.exports = function (app) {

    app.get('/getuserlist', function (req, res, next) {
        // console.log(req.query);
        var data = {}
        if (req.query) {
            /*  for (var key in req.query) {
                 if (req.query.hasOwnProperty(key)) {
                     console.log(key + " -> " + req.query[key]);
                     data[key] = req.query[key];
                 }
             } */

            for (const property in req.query) {
                console.log(`${property}: ${req.query[property]}`);
                data[property] = req.query[property];
            }
        }
        db.GetDocs('users', data, {}, (err, usersDoc) => {
            if (err) {
                res.send(err)
                return
            } else {
                res.send(usersDoc)
            }
        })
    });


    app.post('/adduser', function (req, res, next) {
        console.log(req.body);
        db.InsertDoc('users', { name: req.body.name, email: req.body.email, phone: req.body.phone }, (err, usersDoc) => {
            if (err) {
                res.send(err)
                return
            } else {
                res.send(usersDoc)
            }
        })
    });

    app.put('/updateuser', function (req, res) {
        res.send('Update the book')
    })


    app.delete('/deleteuser', function (req, res, next) {
        console.log(req.body);
        db.DeleteDoc('users', { phone: req.body.phone }, (err, usersDoc) => {
            if (err) {
                res.send(err)
                return
            } else {
                res.send(usersDoc)
            }
        })
    });


    /*  app.use('/*', function (req, res, next) {
         res.render('layout', { page: 'Home', menuId: 'home' });
     }); */

}