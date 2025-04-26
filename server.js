const express = require('express');
const app = express();
const path = require('path');
const mongoose=require('mongoose')
const cors = require("cors");
require('dotenv').config();
app.use(cors());


app.use(express.json());




const corsOptions = {
  origin: "https://enchanting-custard-ace770.netlify.app/", // Your Netlify frontend URL
};

app.use(cors(corsOptions));


// Serve static frontend files
// app.use(express.static(path.join(__dirname, '../public'))); 


// const mongoURI ='mongodb://localhost:27017/myDatabase' ; // or Atlas URI
const mongoURI=process.env.DB_URL


mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));


const schema=mongoose.Schema;
const dataSchema=new schema({
  firstName:String,
  lastName:String,
  email:String,
  message:String
})

const data=mongoose.model('data',dataSchema)


app.use(express.static('public'))



app.get('/',(req,res)=>{
    res.json("we are at home page")
})


// app.post('/api/users', async (req, res) => {
//   try {
//     const user = new data(req.body);
//     console.log(req.body)
//     await user.save();
//     console.log('user saved',user)
//     res.json(user);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });
app.post('/api/users', async (req, res) => {
  try {
    const user = new data(req.body);
    console.log(req.body);
    await user.save();
    console.log('user saved', user);
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});



// Example API route
app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello from backend!" });
});

//this is comment for new purpose

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
