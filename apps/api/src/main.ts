import express from 'express';
const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 8080;
import apiV1 from './v1/index'
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//api
app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});
app.use('/api/v1', apiV1);
// app.use('/api/v1/conversions',conversionRouter );
app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
export default app; 
