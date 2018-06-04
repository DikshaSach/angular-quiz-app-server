'use strict';
const router = require('express').Router();
const jsonParser = require('body-parser').json();
const mongoose = require('mongoose');
const {Quiz} = require('../quiz/models.js');
const QuizService = require('../service/quizService');

router.post('/add', jsonParser, async (req, res)=>{
    try{
        let Quiz = await QuizService.create(req.body);
        res.status(201).json(Quiz);
    }
    catch(err){
        res.status(500).json({message: 'There was a problem creating your Quiz Question'})
    }
});
router.get('/', function(req, res){
    Quiz
    .find()
    .then(quizdata =>{
        res.json(quizdata);
    });
});
router.get('/question/:id',function(req,res){
    Quiz
    .find({number: req.params.id})
    .exec()
    .then(data => {
        res.json(data)
    })
    .catch(err =>{
        console.error(err);
        res.status(500).json({error: 'Something went wrong getting question'})
    });
});
module.exports = router;