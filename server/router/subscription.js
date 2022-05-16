const experss = require("express");
const router = experss.Router();
const Subscription = require("../model/subscriptionSchema");

// Add todo
router.post("/addpackage", async (req, res) => {
    const {title, description, price} = req.body;
    try {
      const newPackage = new Subscription({
          title, description, price
      });
      await newPackage.save();
      res.status(201).send("New package added");
    } catch (error) {
      res.json({ message: error });
    }
  });
  //Get all todos
  router.get("/getallpackages", async (req, res) => {
    try {
      const packages = await Subscription.find({});
      res.send(packages);
    } catch (error) {
      res.json({ message: error });
    }
  });
  // get single todo
  router.get("/getpackage/:id", async (req, res) => {
    const packageId = req.params.id
    console.log(req.params.packageId)
    try {
      const package = await Subscription.findOne({ _id: packageId });
      res.send(package);
    } catch (error) {
      res.json({ message: error });
    }
  });
// get package by email
router.get("/getpackagebymail/:email", async (req, res) => {
    console.log(req.params.email)
    try {
      const package = await Subscription.find({ email: req.params.email });
      res.send(package);
    } catch (error) {
      res.json({ message: error });
    }
  });
  // update todo
  router.put("/getpackage/:id", async (req, res) => {
    const updatedPackage = req.body;
    console.log(req.body, req.params.id);
    try {
      const result = await Subscription.findByIdAndUpdate(
          { _id: req.params.id },
          {
            $set: {
              title: updatedPackage.title , description:updatedPackage.description, price:updatedPackage.price
            },
          },
          {
            new: true,
            useFindAndModify: false,
          })
      res.status(200).send("package update Success")
      console.log(result);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  });
  // delete todo
  router.delete("/deletepackage/:id", async (req, res) => {
    const packageId = req.params.id;
    try {
      await Subscription.findOneAndDelete({ _id: packageId });
      res.status(200).send("package deleted");
    } catch (error) {
      res.status(404).json({ message: error });
    }
  });
  
  module.exports = router;
