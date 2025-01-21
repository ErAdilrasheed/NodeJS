import express from 'express'

const app = express();

const port = 3000;

app.get('/' , (req, res)=>{
res.send('Hello Topper!')
})
app.get('/login' , (req ,res)=>{
    res.send('please login with correct credential')
})
app.get('/signup', (req, res) => {
  res.send('please create a new account ')
})
app.get('/dashboard', (req, res) => {
  res.send('welcom to my Dashboard')
})

app.listen(port , ()=>{
    console.log(` Backend server is running on port number ${port}`);
    
})