import { app } from './app';
import { router } from './Routes/mainRouter';
import { connectMongoDB } from './Configs/mongoConfig';

connectMongoDB();

app.use('/wwe', router);
