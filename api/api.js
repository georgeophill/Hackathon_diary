const express = require('express');
const cors = require('cors');

const logRoutes = require('./middleware/logger');
const diaryRouter = require('./routers/diary');
const userRouter = require('./routers/user');

const api = express();

api.use(cors());
api.use(express.json());
api.use(logRoutes);

api.get("/", (req, res) => {
    res.json({
        name: "Discretion",
        description: "Send and receive private messages."
    })
})

api.use("/diarys", diaryRouter);
api.use("/users", userRouter);

module.exports = api;
