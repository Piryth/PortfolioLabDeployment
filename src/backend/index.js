const express = require("express")
const config = require("./config")
const bodyParser = require("body-parser")
const cookieParser = require('cookie-parser')
const cors = require("cors")

const app = express ()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(cookieParser())
app.use(cors({origin: config.REACT_URL}))

const authRoutes = require("./api/auth")
const resumeRoutes = require("./api/editor/resume")
const projectRoutes = require("./api/editor/project")

app.use("/", authRoutes)
app.use("/editor", resumeRoutes)
app.use("/editor", projectRoutes)


app.listen(config.PORT)
