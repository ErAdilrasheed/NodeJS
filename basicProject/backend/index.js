import express from 'express'

const app = express();

const port = process.env.PORT || 3000

app.get('/' , (req, res)=>{
    res.send('server is ready')
})

app.get('/api/jokes' , (req, res)=>{
    const jokes = [
      {
        id: 1,
        title: 'this is first joke',
        content: 'I am fullstack developer',
      },
      {
        id: 2,
        title: 'this is second joke',
        content: 'I have a girl friend',
      },
      {
        id: 3,
        title: 'this is third joke',
        content: 'I am seriorus',
      },
      {
        id: 4,
        title: 'this is fourth joke',
        content: 'I am hardworker',
      },
      {
        id: 5,
        title: 'this is fifth joke',
        content: 'I can do everything',
      },
    ];
    res.send(jokes)
})

app.listen(port, ()=>{
    console.log(`backend server is running ${port}`)
})