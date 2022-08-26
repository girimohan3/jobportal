const {UserSchema} = require("./UserSchema")


const insertUser = userObj => {
    return new Promise((resolve, reject) => {
       UserSchema(userObj)
       .save()
    .then(data => console.log(data))
    .catch(error => console.log(error));

    })
    
};

const getUserByEmail = email => {
    return new Promise ((resolve, reject) => {
         if (!email ) return false;

         try{
            UserSchema.findOne({email}, (error, data) => {
                    if (error) {
                        console.log (error)
                        reject(error)
                    }
                    resolve(data)
                });
         }catch(error) {
            reject(error);
         } 
    });
   
};

module.exports = {
    insertUser,
    getUserByEmail,
};