import jwt from "jsonwebtoken";
import { COOKIE_NAME } from "./constant.js";
export const createToken = (id, email, expiresIn) => {
    const payload = { id, email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn,
    });
    return token;
};
export const verifyToken = async (req, res, next) => {
    const token = req.signedCookies[`${COOKIE_NAME}`];
    if (!token || token.trim() === "") {
        return res.status(404).json({ message: "Token not Received" });
    }
    return new Promise((resolve, reject) => {
        return jwt.verify(token, process.env.JWT_SECRET, (err, successs) => {
            if (err) {
                reject(err.message);
                return res.status(401).json({ message: "Token is Expired" });
            }
            else {
                resolve();
                res.locals.jwtData = successs;
                return next();
            }
        });
    });
};
//# sourceMappingURL=token-manager.js.map