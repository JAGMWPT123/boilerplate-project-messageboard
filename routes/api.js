'use strict';

const board = require("../modules/board.js");
const { request } = require("../server");
var FormData = require('form-data');



module.exports = function (app) {
  

  app.route('/b/:board')
  .get()

  app.route('/api/threads/:board')
  .post(async(req, res)=>{
      var form = new FormData();
      var {text ,delete_password }= req.body
      var data= req.body
      req.body.board = req.params.board
      const alldata = await board.find()

      // console.log(alldata)
       const newBoard = new board({'text': text,'delete_password':delete_password})
        
        console.log(req.body.board)
        console.log('api',data)
      //   console.log('form',[form._streams[1]])
        
        form.append('text', newBoard.text);
       form.append('delete_password', newBoard.delete_password);
        
      //   // await newBoard.save()
        res.json(alldata)
        // res.redirect('/b/:board/')
      
    });


  app.route('/api/replies/:board')
  .post((req, res)=>{
     res.send('this is server')
    });
};

