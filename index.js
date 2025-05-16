import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref, remove } from 'firebase/database';
import 'dotenv/config';

const refPath = process.env['DB_REF'];
const firebaseConfig = {
  apiKey: process.env['API_KEY'],
  authDomain: process.env['AUTH_DOMAIN'],
  databaseURL: process.env['DB_URL'],
  projectId: process.env['PROJECT_ID'],
  storageBucket: process.env['BUCKET'],
  messagingSenderId: process.env['MSG_ID'],
  appId: process.env['APP_ID'],
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbRef = ref(db, refPath);

console.log('\nScript Running\n');

onValue(dbRef, snapshot => {
  console.log('Item added');
  console.log('Deleting data...\n');
  remove(dbRef);
});
