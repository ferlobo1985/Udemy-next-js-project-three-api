import axios from 'axios';


const handler = async(req,res) => {
    if(req.method === 'POST'){
        const { title, body } = req.body;

        try{
            const request = await axios.post('https://jsonplaceholder.typicode.com/posts',{
                title,
                body
            });

            res.status(200).json({
                posts: request.data
            })
        } catch(error){
            res.status(401).json({
                message:'Sorry, try again later'
            })
        }

    }
}


export default handler;