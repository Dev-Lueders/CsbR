const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const SignupRoutes = require("../_REFACTOR/Signup/Signup_routes");
const loginRoutes = require("../_REFACTOR/Login/Login_routes"); 

const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

const ORIGIN = "http://localhost:5173";

app.use(cors());
app.use(express.json());

app.use("/api/login", loginRoutes);
app.use("/api/signup", SignupRoutes);

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    if (req.method === "POST") console.log("BODY:", req.body);
    next();
});


app.get('/health', (req, res) => res.status(200).send('ok'));
app.get('/', (req, res) => {
    res.send('CSBR API is up and running');
    });



mongoose.connect('mongodb://localhost:27017/Master_CSBR', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('connected to MongoDB');
    app.listen(port, () => console.log(`Server running on ${port}`));
}).catch(err => console.error('MongoDB connection error:', err));
