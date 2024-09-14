import express from 'express';
const app = express()

app.get("/", (req, res) => {
    res.send("Get /")
})

app.listen(6060, () => {
    console.log("Server running at port 6060")
})