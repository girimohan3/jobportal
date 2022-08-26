const jwt = require('jsonwebtoken');
const {setJWT, getJWT} = require('./redis.helper');

// const createAccessJWT = (payLoad) => {

// const accessJWT = jwt.sign({ payLoad}, 
// process.env.JWT_ACCESS_SECRET,
// {expiresIN: '15m'});

// return Promise.resolve(accessJWT);

// };

// const createRefreshJWT = (payLoad) => {

//     const refreshJWT = jwt.sign({ payLoad}, 
//     process.env.JWT_ACCESS_SECRET,{
//         expiresIN: "5d",
//     });
    
//     return Promise.resolve(refreshJWT);
    
//     };



    const createAccessJWT = async (email, _id) => {
        try {
          const accessJWT = await jwt.sign({ email }, process.env.JWT_ACCESS_SECRET, {
            expiresIn: "15m", 
          });
      
       await setJWT(accessJWT, _id);
      
          return Promise.resolve(accessJWT);
        } catch (error) {
          return Promise.reject(error);
        }
      };
      
      const createRefreshJWT = async (email, _id) => {
        try {
          const refreshJWT = jwt.sign({ email }, process.env.JWT_REFRESH_SECRET, {
            expiresIn: "30d",
          });
      
        await storeUserRefreshJWT(_id, refreshJWT);
      
          return Promise.resolve(refreshJWT);
        } catch (error) {
          return Promise.reject(error);
        }
      };
      



    module.exports = {
        createAccessJWT,
        createRefreshJWT,
    }