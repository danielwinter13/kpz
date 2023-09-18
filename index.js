const express = require('express')

const MongoDbClient = require('./db');

const {PORT} = require('./config');

const userRouter = require('./routers/userRouter');
const productRouter = require('./routers/productRouter');
const orderRouter = require('./routers/orderRouter');
const deliveryRouter = require('./routers/deliveryRouter');
const advertiseRouter = require('./routers/advertiseRouter');
const newsRouter = require('./routers/newsRouter');

const dbSingleton = new MongoDbClient();
const app = express();

app.use(express.json());
app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/order', orderRouter);
app.use('/delivery', deliveryRouter);
app.use('/advertise', advertiseRouter);
app.use('/news', newsRouter);

dbSingleton.connect().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});