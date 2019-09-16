const List = require('../models/list.model');
const bcrypt = require('bcrypt');

exports.details_all = function(req, res, next)
{
    List.find({}, function(err, users){
        if(err) return next(err);
        res.send(users);
    });
}

exports.create = function(req, res, next)
{
    let list = new List({
        name: req.body.name,
        description: req.body.description,
        asignee: req.body.asignee,
        createdBy: req.body.createdBy,
        tags: req.body.tags,
        daysOpen: req.body.daysOpen,
        isActive: req.body.isActive,
        dateCreate: new Date()
    });

    list.save(function(err){
        if(err) return next(err);
        res.status(201).send('List created successfully');
    });
}

exports.details = function(req, res, next)
{
    List.findById(req.params.id, function(err, list){
        if(err) return next(err)
        res.status(201).send(list);
    });
}

exports.update = function(req, res, next)
{
    User.findByIdAndUpdate(req.params.id, { $set: req.body }, { listFindAndModify: false }, function(err, list){
        if(err) return next(err);
        res.status(201).send('list updated');
    })
}

exports.delete = function(req, res, next)
{
    List.findByIdAndRemove(req.params.id, function(err){
        if(err) return next(err);
        res.status(201).send('List deleted successfully');
    });
}