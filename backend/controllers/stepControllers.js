import Step from '../../backend/model/step'
import message from '../model/message'

export const newStep = async(req, res) => {

    try{

        let steps = new Step({  
            ...req.body
           
        })
        await steps.save()
        return res.status(201).json({
            steps
        })
    }catch(error){
        console.log(error)
    }
}


export const getsteps = async(req, res) => {
    const steps = await Step.find()
    if(!steps){
        return res.status(401).json({
            message: "No steps found"
        })
    }
    return res.status(201).json({
        steps
    })
}




