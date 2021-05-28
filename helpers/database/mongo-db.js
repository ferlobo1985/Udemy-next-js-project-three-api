import { MongoClient } from 'mongodb'

export async function connectToDb(){
    const dbClient = await MongoClient.connect('mongodb+srv://admin:aoucGFHHfDP28t7X@cluster0.rc4ay.mongodb.net/testingapi?retryWrites=true&w=majority');
    return dbClient;
}



