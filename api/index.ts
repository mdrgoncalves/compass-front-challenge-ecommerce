import express from 'express';

import db from './config/dbConnect.js';
import routes from './routes/index.js';
import cors from 'cors';

const app = express();

db.on('error', console.error.bind(console, 'Connection Error'));
db.once('open', function() {
    console.log('Connected to MongoDB');
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log('Server running...'));