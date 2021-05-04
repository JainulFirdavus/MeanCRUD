'use strict';
const db = require('../middleware/mongoconnector');
module.exports = function (app) {

    app.get('/getuserlist', function (req, res, next) {
        console.log(req.query);
        var data = {}
        if (req.query) {
            for (const property in req.query) {
                console.log(`${property}: ${object[property]}`);
                data[property] = object[property];
            }
        }
        db.GetOneDoc('users', data, {}, (err, usersDoc) => {
            if (err) {
                res.send(err)
                return
            } else {
                res.send(usersDoc)
            }
        })
    });


    app.post('/adduser', function (req, res, next) {
        console.log(req.query);
        db.InsertDoc('users', { name: req.body.name, email: req.body.email, phone: req.body.phone }, {}, (err, usersDoc) => {
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
        console.log(req.query);

        db.DeleteDoc('users', { phone: req.body.phone }, {}, (err, usersDoc) => {
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