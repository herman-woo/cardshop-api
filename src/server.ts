import express from 'express';
const app = express();
const port = 8000;
app.get('/',(req: express.Request , res: express.Response) => {
    res.send('Card Shop Backend API')
})
app.listen(port,() => console.log(`Listening on port:${port}`))