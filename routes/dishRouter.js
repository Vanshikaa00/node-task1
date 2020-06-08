const express =require('express');
const bodyParser=require('body-parser');
const dishRouter =express.Router();

dishRouter.use(bodyParser.json());
dishRouter.route('/:dishId')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Getting dish: '+req.params.dishId+' details for you!');
})
.post((req,res,next) => {
    res.statusCode=403;
    res.end('Post operation not supported on a particular dish');
})
.put((req,res,next)=>{
    res.write('Updating dish: '+req.params.dishId);
    res.end('Updated dish: '+req.body.name+' with details: '+req.body.description);
})
.delete((req,res,next)=>{
    res.end('deleting dish: '+req.params.dishId);
});

module.exports=dishRouter;