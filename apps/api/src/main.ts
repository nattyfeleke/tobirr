import express from 'express';
import conversionRouter from './routes/conversion'
const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//api
app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});
app.use('/conversions',conversionRouter );
app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
export default app;
