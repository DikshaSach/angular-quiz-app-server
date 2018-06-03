const {Quiz} = require('../quiz/models');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
function quizService(){
    this.create = function(quizObj){
        return new Promise(async(resolve, reject)=>{
            try{
                let{
                    question,
                    number,
                    answer
                } = quizObj;
                let newQuiz = await Quiz
                .create({
                    question, 
                    answer,
                    number
                });
                resolve(newQuiz);
            } catch(err){
                console.log('Error');
                reject('Mongoose error');
            }
        });
    },
    this.get = function(id){
        return new Promise (async (resolve, reject)=>{
            let list = Quiz
            .find({id: id})
            .exec();
            resolve(list);
        });
    }
}
module.exports = new quizService();