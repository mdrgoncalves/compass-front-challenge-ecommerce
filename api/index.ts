import express from 'express';

import db from './config/dbConnect.js';
import routes from './routes/index.js';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3333;

db.on('error', console.error.bind(console, 'Connection Error'));
db.once('open', function() {
    console.log('Connected to MongoDB');
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => console.log('Server running...'));