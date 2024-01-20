'use strict';

const board = require("../modules/board.js");
const { request } = require("../server");
var FormData = require('form-data');



module.exports = function (app) {
  
  app.route('/api/threads/:board')
    .post(async (req, res)=>{
      var form = new FormData();
      var {text ,delete_password}= req.body

      const newBoard = new board({'text': text,'delete_password':delete_password})
      
      console.log('api',req.body)
      console.log('form',[form._streams[1]])
      
      form.append('text', newBoard.text);
      form.append('delete_password', newBoard.delete_password);
      
      // await newBoard.save()
      res.send({"text": form._streams[1],"delete_password":form._streams[4]})
    });


  app.route('/api/replies/:board')
  .post((req, res)=>{
     res.send('this is server')
    });
};

