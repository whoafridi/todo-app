const experss = require("express");
const bcrypt = require("bcryptjs/dist/bcrypt");
const router = experss.Router();
const jwt = require("jsonwebtoken");

const User = require("../model/userSchema");

router.post("/register", async (req, res) => {
  //   const { fullname, username, email, phone, password, cpassword } = req.body;

  try {
    const { fullname, username, email, phone, password } = req.body;

    // if (!fullname  || !username  || !email || !phone|| !password || !cpassword) {
    //   return res.status(422).json({ error: "PLease provide info" });
    // }
    //  console.log(req.body);
    const userexist = await User.findOne({ email: email });
    if (userexist) {
      return res.status(422).json({ error: "Email already exist" });
    }

    // const user = new User({ name, email, phone, work, password, cpassword });
   // else if (password != cpassword) {
     // res.status(422).json({ error: "password didn't matched" });
//    }
 else {
      const user = new User({
        fullname,
        username,
        email,
        phone,
        password,
      });
      await user.save();

      res.status(201).json({ message: "Registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log(req.body);
    if (!email || !password) {
      return res.status(400).json({ error: "Please enter email/password" });
    }

    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      token = await userLogin.generateAuthToken();
      console.log(token);

      res.cookie("jwttoken", token, {
        expires: new Date(Date.now() + 4000000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "Invalid login" });
      }
      res.status(200).send(userLogin);
    } else {
      res.status(400).json({ error: "Invalid login" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/getallusers", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(404).json({ message: error.stack });
  }
});
// get user by email
router.get("/getuserbymail/:email", async (req, res) => {
  console.log(req.params.email)
  try {
    const todo = await User.findOne({ email: req.params.email });
    res.send(todo);
  } catch (error) {
    res.json({ message: error });
  }
});

// update user
router.put("/updateuser/:email", async (req, res) => {
  const updatedUser = req.body;
  console.log(req.body, req.params.id);
  try {
    const result = await Todo.findByIdAndUpdate(
        { email: req.params.email },
        {
          $set: {
            fullname : updatedUser.fullname,
            username : updatedUser.username,
            email: updatedUser.email,
            phone: updatedUser.phone,
          },
        },
        {
          new: true,
          useFindAndModify: false,
        })
    res.status(200).send("Todo Update Success")
    console.log(result);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
// delete
router.post("/deleteuser/:email", async (req, res) => {
  try {
    await User.findOneAndDelete({ email : req.params.email });
    res.status(200).send("User Deleted");
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

module.exports = router;
