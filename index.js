const express=require('express');
const app=express();
const path=require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use('/',express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}));
app.use(express.json())

const todos=['a','b','c'];

app.get('/todos',(req,res)=>{
    if(req.xhr){
        res.json(todos);
    }
    else{
        res.render('todos',{todos});
    }
})

app.post('/todos',(req,res)=>{
    try{
    const {todo}=req.body;
    todos.push(todo);
    // res.redirect('/');
    if(req.xhr){
        res.status(200).json({msg:'successful'});
    }
    else{
        res.redirect('/todos');
    }
    }
    catch(e){
        res.status(400).json({msg:'unsuccessful'});
    }
})

app.listen(3000,()=>{
    console.log('server running');
})