import axios from 'axios';
inmsdsd

const handler = async(req,res) => {
    if(req.method === 'GET'){
        try{
            const request =await axios.get('https://jsonplaceholder.typicode.com/posts');

            res.status(200).json({
                posts:request.data
            });
        } catch(error){
            res.status(401).json({ message:'Opps i did it again'})
        }
    }
}


export default handler;