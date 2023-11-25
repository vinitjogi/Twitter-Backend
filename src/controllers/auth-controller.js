
import UserService from "../services/user-service.js";

const userService = new UserService();

export const signup = async (req, res) => {
    try {
       
        const response = await userService.signup({
            email : req.body.email,
            password : req.body.password,
            name : req.body.name
        });
        return res.status(201).json({
            success : true,
            message : 'Successfully created a new user',
            data : response,
            err : {}
        });
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : 'Could not create a new user , something went wrong',
            data : {},
            err : error
        });
    }
}

export const login = async (req, res) => {
    try {
        // console.log('In auth controller : req.body',req.body);
        const token = await userService.signIn(req.body);
        return res.status(200).json({
            success : true,
            message : 'successfully logged in',
            data : token,
            err : {}
        });
    } catch (error) {
        console.log('in auth controller',error);
        return res.status(500).json({
            success : false,
            message : 'something went wrong',
            data : {},
            err : error
        })
    }
}