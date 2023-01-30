'use strict'

var controller = {

    home:function(req,res){
        return res.status(200).send({
            message: 'SOY EL HOME(I AM LA CASA)'
        });
    },

    test: function(){
        return res.status(200).send({
            // message: 'SOY EL HOME(I AM LA CASA)'
        });
    }


};

module.exports = controller;