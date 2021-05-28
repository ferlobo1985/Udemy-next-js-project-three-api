import { connectToDb } from '../../helpers/database/mongo-db';

const handler = async(req,res) => {
    if(req.method === 'POST'){
        let mongoClient;
        const { title, body } = req.body;

        try{
            mongoClient = await connectToDb();
        } catch(error){
            return res.status(500).json({message:'Sorry try again later'});
        }

        try {
            const db = mongoClient.db();
            const result = await db.collection('posts').insertOne({
                title,
                body
            });
            res.status(201).json({message:'Added',result:result.ops });
        } catch(error){
            res.status(500).json({message:'Sorry try again later'});
        }
 
        mongoClient.close();
    }
}


export default handler;