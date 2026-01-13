require("dotenv").config();
const express=require('express'); 
const connectDB=require("./config/db");
const User=require("./models/User");
const server=express();
server.use(express.json());
function isValidEmail(email){
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
server.get("/", (req, res) => {
  res.send("Server is running✅ ");
});
connectDB();
server.post("/users",async(req,res)=>{
    const {name,email,age}=req.body;
    if(!name||!email||age===undefined){
        return res.status(400).json({error:"All feilds are required"});
    }
    if(!isValidEmail(email)){
        return res.status(400).json({error:"invalid email format"});
    }
    if(typeof age !=="number" || age<=0){
        return res.status(400).json({error:"Age must be positive number"});
    }
    try{
        const user = await 
        User.create({name,email,age});
        res.status(201).json(user);
    }
    catch(error){
        res.status(500).json({error:"User creation failed"});
    }
});
   server.get("/users",async(req,res)=>{
    const users=await User.find();
    res.status(200).json(users);
   });
   server.get("/users/:id",async(req,res)=>{
    const user=await User.findById(req.params.id);
    if(!user){
        return res.status(404).json({error:"user not found"});
    }
    res.status(200).json(user);
   });
   server.put("/users/:id", async (req, res) => {
  const { name, email, age } = req.body;

  if (email && !isValidEmail(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  if (age !== undefined && age <= 0) {
    return res.status(400).json({ error: "Age must be positive" });
  }

  const user = await User.findByIdAndUpdate(
    req.params.id,
    { name, email, age },
    { new: true }
  );

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.status(200).json(user);
});
server.delete("/users/:id", async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.status(200).json({ message: "User deleted successfully" });
});
server.listen(4000,()=>{
 console.log("server running on http://localhost:4000");
 });


