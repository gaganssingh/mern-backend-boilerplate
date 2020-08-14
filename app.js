const express = require("express");
const morgan = require("morgan");

// IMPORT ROUTES
const userRouter = require("./routes/userRoutes");

const app = express(); // INIT SERVER

// MIDDLEWARES
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev")); //logging
}
app.use(express.json()); // Body parser
app.use(express.static(`${__dirname}/public`)); // Serving static files
app.use(helmet());
app.use(cors());

app.use((req, res, next) => {
	console.log("🤚 from the middleware");
	next();
});

// MOUNT ROUTES
app.use("/api/v1/users", userRouter);

module.exports = app;
