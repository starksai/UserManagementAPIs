import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import connectDB from './utils/connectDB';
import userRouter from './Routes/user.route';

import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger';

dotenv.config();

const app = express()
const port = process.env.PORT || 50001

app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req: Request, res: Response) => {

    res.send("server is running perfectly go head..")

})

app.use('/api/user', userRouter)

connectDB().then(() => console.log("DataBase is connected...")).catch(err => console.log("database connection failed", err))


app.listen(port, async () => {
    console.log(`server is running at http://localhost:${port}`);

    // await connectDB()
})

