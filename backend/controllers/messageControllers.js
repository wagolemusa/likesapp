import Message from '../../backend/model/message'


export const newMessage = async(req, res) =>{

    try{
        let sms = new Message({
            ...req.body
        })
        await sms.save()
        return res.status(201).json({
            sms
        })
    }catch(error){
        console.log(error)
    }
}


// query message

export const getMessage = async(req, res) => {
    const message = await Message.find();

    if(!message){
        return res.status(401).json({
            message: "No message Found"
        })
    }

    return res.status(201).json({
        message
    })
}


