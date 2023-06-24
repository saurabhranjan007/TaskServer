const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cron = require('node-cron')

const getRoutes = require("./routes/task-routes")
const { getDataCall, josnPostData, formDataPost } = require('./controllers/task-controller')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS Configuration 
app.use(
    cors({
        origin: '*',
        methods: 'GET, POST',
        credentials: true
    })
)

// HOME 
app.get("/", async(req, res) => {
    res.status(200).json({
        message: "Server started successfully!!"
    })
})

// API Endponits 
app.use("/task", getRoutes)

app.listen(3000, async() => {
    console.log(`Starting server @3000!!`);
})