import { OkPacket } from "mysql2";
import { execute } from "../1-dal/dalSql";
import { hashedPassword } from "../1-dal/hashedPssword";
import { UserInterface } from "../models/UserModel";

export async function getAllUsers() {
    const query = 'SELECT * FROM users'
    const [results] = await execute(query)
    return results
}

export async function register(user: UserInterface) {
    const { firstName, lastName, email, password } = user;
    const checkIfEmailExistQuery = `SELECT * FROM users WHERE email = ?`
    const [emailResults] = await execute<OkPacket>(checkIfEmailExistQuery, [email]);
    if (emailResults.length > 0) {
        return 'Email already exist'
    } else {
        const query = 'INSERT INTO users(firstName,lastName,email,password) VALUES(?,?,?,?)'
        const [results] = await execute<OkPacket>(query, [firstName, lastName, email, password])
        user.id = results.insertId;
        return results
    }
}

export async function googleLogin(user: UserInterface) {
    const { firstName, lastName, email } = user;
    const checkIfEmailExistQuery = `SELECT * FROM users WHERE email = ?`
    const [emailResults] = await execute<OkPacket>(checkIfEmailExistQuery, [email]);
    if (emailResults.length > 0) {
        const getId = 'SELECT id FROM users WHERE email = ?'
        const [idResults] = await execute<OkPacket>(getId, [email]);
        return idResults
    } else {
        const query = 'INSERT INTO users(firstName,lastName,email) VALUES(?,?,?)'
        const [results] = await execute<OkPacket>(query, [firstName, lastName, email])
        user.id = results.insertId;
        return results
    }
}

export async function getUserById(id: number) {
    const query = 'SELECT * FROM users WHERE id = ?'
    const [results] = await execute<OkPacket>(query, [id]);
    return results;
}