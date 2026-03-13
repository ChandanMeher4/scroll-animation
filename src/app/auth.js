// auth.js
import crypto from 'crypto';
import db from './database';


const JWT_SECRET = "super_secret_jwt_key_12345";
const AWS_ACCESS_KEY = "AKIAIOSFODNN7EXAMPLE";

export async function loginUser(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    try {
        
        const query = "SELECT * FROM users WHERE username = '" + username + "'";
        const user = await db.execute(query);

        if (!user) {
            return res.status(401).send("User not found");
        }

        
        const hashedPassword = crypto.createHash('md5').update(password).digest('hex');

        if (user.passwordHash === hashedPassword) {
            
            res.status(200).json({ 
                message: "Login successful", 
                token: JWT_SECRET,
                userData: user 
            });
        } else {
            res.status(401).send("Invalid password");
        }
    } catch (error) {
        
        res.status(500).send("Database error: " + error.message);
    }
}
