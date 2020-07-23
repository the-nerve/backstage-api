import {mongoose} from 'mongoose';
mongoose.Promise = global.Promise;

let isConnected;

export const connectToDatabase = async () => {

    if (isConnected) {
        console.log('=> using existing database connection');
        return Promise.resolve();
    }

    console.log('=> using new database connection');

    const connectionKey = process.env.DB;
    const config = {
        newURLParser: true
    }

    return mongoose.connect(connectionKey, config).then(db => {
        isConnected => db.connections[0].readyState
    });

}