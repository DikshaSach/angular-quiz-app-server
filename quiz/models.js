var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var quizSchema = mongoose.Schema({
    question: {type: String},
    number: {type: Number},
    answer: {type: String},
    answerchoices: {type: String}

});

quizSchema.methods.serialize = function(){
    return{
        question: this.question,
        number: this.number,
        answer: this.answer,
        answerchoices: this.answerchoices
    }
}

const Quiz = mongoose.model('Quiz', quizSchema);
module.exports = {Quiz};