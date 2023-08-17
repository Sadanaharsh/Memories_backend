// Middleware is used as for verifying the user . After the user is verified he/she can perform the next operation.

import jwt from "jsonwebtoken";

const secret = 'test';

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {      
      decodedData = jwt.verify(token, secret);

      req.userId = decodedData?.id;
    } 

    else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }    
   // For moving onto the next operation.
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;