const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Load models
const Country = require('./models/Country');
const Event = require('./models/Event');
const Participant = require('./models/Participant');

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// Read JSON files
const countries = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/countries.json`, 'utf-8')
);

const events = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/events.json`, 'utf-8')
);

const participants = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/participants.json`, 'utf-8')
);

// Import into DB
const importData = async () => {
  try {
    await Country.create(countries);
    await Event.create(events);
    await Participant.create(participants);
    console.log('Data Imported...'.green.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await Country.deleteMany();
    await Event.deleteMany();
    await Participant.deleteMany();
    console.log('Data Destroyed...'.red.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}
