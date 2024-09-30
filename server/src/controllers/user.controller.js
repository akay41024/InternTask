import mongoose from 'mongoose';
import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiError} from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { User } from '../models/user.model.js';

const addUser = asyncHandler(async (req, res) => {
    const {firstname, lastname, phone, email, role, location, department} = req.body;
    
    if(!firstname, !lastname, !phone, !email, !role, !location, !department){
        throw new ApiError(400, "All field required");
    }

    const user = await User.create({
        firstname,
        lastname,
        phone,
        email,
        role,
        location,
        department
    });

    if(!user){
        throw new ApiError(400, "User not created");
    }

    return res.status(201).json( new ApiResponse(201, "User created", user));
});


const editUser = asyncHandler(async (req, res) => {
    const {firstname, lastname, phone, email, role, location, department} = req.body;
    
    if(!firstname, !lastname, !phone, !email, !role, !location, !department){
        throw new ApiError(401, "All field required");
    }

    const user = await User.findByIdAndUpdate(
        req.params.id,
        {
            firstname,
            lastname,
            phone,
            email,
            role,
            location,
            department
        },
        {new: true}
    );

    if(!user){
        throw new ApiError(400, "User not updated");
    }

    return res.status(201).json( new ApiResponse(201, "User updated", user));
});


const allUser = asyncHandler(async (req, res) => {
    const users = await User.find();

    if(!users){
        throw new ApiError(404, "No user found");
    }

    return res.status(200).json( new ApiResponse(200, "All users", users));
});

const oneUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    
    if(!user){
        throw new ApiError(404, "User not found");
    }

    return res.status(200).json( new ApiResponse(200, "User", user));

});

export {addUser, editUser, allUser, oneUser};