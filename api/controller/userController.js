import userModel from "../model/userModel.js";

const test = async(req,res) =>{
    try {
        res.json({
            success : true,
            message : "Test Success !!!"
        })
        console.log("Success");
    } 
    catch (error) {
        console.log("Error");
    }
}
const userController = {test}

export default userController;