const Todos = require('../models/todoModels');

exports.test =  function(req, res){
    res.send("Olá está tudo bem")
}

exports.create = function(req, res){
    let todos = new Todos({
        name: req.body.name,
        telefone: req.body.telefone,
        done: false
    });
    todos.save(function(err){
        if(err){
            return next(err)
        }
        res.send("Deu certo")
    })
}

exports.todoShow = function(req, res){
    Todos.find({}, function(err, todos){
        if(err) return next(err);
        res.send(todos)
    });
};

exports.todoDetalhes = function(req, res){
    Todos.findById(req.params.id, function(err, todos){
        if(err) return next(err);
        res.send(todos);
    });
};

exports.todoAtualizar = function(req,res){
    Todos.findByIdAndUpdate(req.params.id, {$set: req.body}, 
        function(err, todos){
            if(err) return next(err);
            res.send("Atualizar Todos");
        });
};

exports.todoDeletar = function(req, res){
    Todos.findByIdAndRemove(req.params.id, function(err, todos){
        if(err) return next(err);
        res.send(todos);
    })
}