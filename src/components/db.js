import Dexie from 'dexie';

const db = new Dexie('eventDb');
db.version(1).stores({ events: 'idForDb' })

export default db;