import express from "express"
import path from "path"
const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.sendFile(path.join(process.cwd(),"public","index.html"))
})

app.get("/contact", (req, res) => {
    res.send("contact")
})
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})