const express = require('express');
const router = express.Router();
const {models} = require('../models/index');
const Sequelize = require('sequelize');


/* GET home page. */
const indexController = (req, res) => {
    res.render('index', {title: 'P5_Quiz'});
}

const quizzesController = (req, res) => {
    models.quiz.findAll()
        .then(quizzes => {
            res.render('quizzes', {title: 'Quizzes',container: quizzes});
        });
}


const creditsController = (req, res) => {
    res.render('credits', {title: 'Créditos'});
}

router.get('/',indexController);
router.get('/quizzes',quizzesController);
router.get('/credits',creditsController);

module.exports = router;

