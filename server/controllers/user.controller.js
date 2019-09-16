const User = require('../models/user.model');
const bcrypt = require('bcrypt');


exports.details_all = function(req, res, next)
{
    User.find({}, function(err, users){
        if(err) return next(err);
        res.send(users);
    });
};

exports.create = function(req, res, next)
{
    let user = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        createdAt: new Date()
    });

    user.save(function(err){
        if(err) return next(err);
        res.status(201).send('User created succesfuglly');
    });
};

exports.details = function(req, res, next)
{
    User.findById(req.params.id, function(err, user){
        if(err) return next(err);
        res.status(201).send(user);
    });
}

exports.update = function(req, res, next)
{
    User.findByIdAndUpdate(req.params.id, { $set: req.body }, { userFindAndModify: false }, function(err, user){
        if(err) return next(err);
        res.status(201).send('User updated');
    })
}

exports.delete = function(req, res, next)
{
    User.findByIdAndRemove(req.params.id, function(err){
        if(err) return next(err);
        res.status(201).send('User deleted successfully');
    });
}