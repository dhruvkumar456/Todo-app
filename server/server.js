const express=require('express')
const app=express();
const path=require('path')


const public_path=path.join(__dirname,'../public');
// console.log(public_path)

app.use(express.static(public_path))

app.get('*',(req,res)=>{
    res.render('index')
})

const portno=process.env.PORT || 3007


app.listen(portno,()=>{
    console.log(`Server is up on port ${portno}`)
})