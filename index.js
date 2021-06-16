const express=require('express');
const cowsay=require('cowsay');
const app=express();

app.get('/',function(req, res){
    res.end("Hola Mundo con Express. Maestria Full Stack Web.");
})

app.listen(3000, function(){
    console.log(cowsay.say({
        text:'Server is running',
        e:'oO',
        T:'u'
    })
    )
});
