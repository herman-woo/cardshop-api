import express from 'express';
import productRoutes from './handlers/products';
import userRoutes from './handlers/users';
const app = express();
app.use(express.json())
const port = 8000;
app.get('/',(req: express.Request , res: express.Response) => {
    res.send('Card Shop Backend API')
})
userRoutes(app)
productRoutes(app)

app.listen(port,() => console.log(`Listening on port:${port}`))