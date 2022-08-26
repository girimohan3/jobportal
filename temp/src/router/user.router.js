const express = require("express");
const router = express.Router();

const {insertUser, getUserByEmail} = require("../model/UserModel");
const {hashPassword, comparePassword } = require("../helper/bcrypt.helper");
const {createAccessJWT, createRefreshJWT} = require("../helper/jwt.helper")
const { json } = require("body-parser");

router.all("/", (req, res, next) => {
    // res.json({ message: "return from user router"});
next();
});

// create new user router

router.post("/", async (req, res) => {
    const {name, phone, company, email, password} = req.body;
    try{
        const hashedPass = await hashPassword(password)

    const newUserObj = {
        name, phone, company, email, password: hashedPass, 
    };

    const result = await insertUser(newUserObj);
    console.log(result);
    
    res.json({ message: "New user created", result });
    } catch(error) {
        console.log(error);
        res.json({ status: "error", message: error.message });
    }
});

//user sign in router
// router.post("/login", async (req, res)=> {
//     console.log(req.body);

//     const {email, password} = req.body;


//     if ( !email || !password) {
//      return res.json({ status:"error", message: "invalid"});
//     }


//     const user = await getUserByEmail (email);
//     const passFromDb = user && user._id ? user.password : null;


//     const result = await comparePassword(password, passFromDb);
//     console.log(result);

//     res.json({status:"success", message: "login successfully"});
// } );
router.post("/login", async (req, res) => {
	console.log(req.body);

	const { email, password } = req.body;

	if (!email || !password) {
		return res.json({ status: "error", message: "Invalid form submition!" });
	}

	const user = await getUserByEmail(email);

	// if (!user.isVerified) {
	// 	return res.json({
	// 		status: "error",
	// 		message:
	// 			"You account has not been verified. Please check your email and verify you account before able to login!",
	// 	});
	// }

 



	const passFromDb = user && user._id ? user.password : null;

	if (!passFromDb)
		return res.json({ status: "error", message: "Invalid email or password!" });

	const result = await comparePassword(password, passFromDb);

	if (!result) {
		return res.json({ status: "error", message: "Invalid email or password!" });
	}
    const accessJWT = await createAccessJWT(user.email, user._id);
	const refreshJWT = await createRefreshJWT(user.email);

	res.json({
		status: "success",
		message: "Login Successfully!",
		accessJWT,
		refreshJWT,
	});
});

module.exports = router;