let express = require('express');
const app =express();
//
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/books');
const books = mongoose.model('books', { name: String });
//
app.get('/api',(req,res)=>{
    res.send("welcome to my api")
})
app.get('/api/books',(req,res)=>{
    books.find({},(err,books)=>{
        if(err){
            console.log("error :"+err);
        }else{
            res.json(books)
        }
    })
})
app.post('/api/books',(req,res)=>{
    const book = new books({name:req.body.name});
         book.save().then(()=>{
            res.json("book")
         })
})
app.put('/api/books/:id',(req,res)=>{
    const {id}=req.params
    books.findByIdAndUpdate(id,{name:req.body.name},(err)=>{
        if(err){
            console.log("error :"+err);
        }else{
            res.send("updated")
        }
    })
})
app.delete('/api/books/:id',(req,res)=>{
    const {id}=req.params
    books.findByIdAndDelete(id,{},(err)=>{
        if(err){
            console.log("error :"+err);
        }else{
            res.send("deleted")
        }
    })
})
//
app.listen(3000,()=>{
    console.log("server is running");
});