import express from 'express';
import { hashedPassword } from '../1-dal/hashedPssword';
import { generateToken } from '../1-dal/jwt';
import { UserInterface } from '../models/UserModel';
import { getAllUsers, register } from '../3-logic/usersLogic';

export const UserRoute = express.Router();

UserRoute.post('/register', async (req, res) => {
    const user: UserInterface = req.body;
    user.password = hashedPassword(user.password)
    try {
        const response = await register(user)
        if (response.length > 0) {
            res.status(404).json(response)
            return;
        } else {
            const token = await generateToken(user)
            res.status(200).json(token)
        }

    } catch (e) {
        res.status(400).json(e)
    }
})

UserRoute.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const users = await getAllUsers();
    try {
        const user: any = users.find((u: any) => u.email === email && u.password === hashedPassword(password));
        if (user) {
            const token = await generateToken(user)
            res.status(200).json(token);
        } else {
            res.status(401).json('Wrong email or password');
        }
    } catch (e) {
        res.status(400).json('Something went wrong...')
    }
})