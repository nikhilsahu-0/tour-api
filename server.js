const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app.js');

dotenv.config({ path: './config.env' });

const DB = process.env.DB.replace('<PASSWORD>', process.env.DB_PASSWORD);
mongoose.connect(DB).then((con) => {
  console.log('DB connection successful!');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`listening to port ${PORT}.`));
