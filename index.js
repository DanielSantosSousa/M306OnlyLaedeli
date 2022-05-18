import express from 'express';
import {dirname} from 'path';
import {fileURLToPath} from 'url';
import {orderRouter} from "./server/orderRouter.js";
import {checkoutRouter} from "./server/checkoutRouter.js";

const app = express();

app.use(express.static(`${dirname(fileURLToPath(import.meta.url))}/public`));


app.use(express.urlencoded({extended: false}));

app.use('/api/orders/', orderRouter);
app.use('/api/checkout/', checkoutRouter);

app.listen(8080, () => {
    console.log('Server is listening to http://localhost:8080');
});