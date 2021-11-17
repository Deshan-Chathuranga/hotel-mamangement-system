const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require ('dotenv');
const app = express();
const cookieParser = require("cookie-parser");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
}));
app.use(bodyParser.json());

app.get("/test", (req, res) => {
    res.send("It works"); 
});

app.use(express.json());
app.use(cookieParser());
 
//connect to mongoDB
const URL= process.env.MONGODB_URL;

mongoose.connect(URL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
})
const connection =mongoose.connection;
connection.once("open", ()=>{
    console.log("connection success")
})


// Deshan

const CustomerRouter = require("./routes/customer.js");
const roomTypeRouter = require("./routes/roomType.js");
const itemsRouter = require("./routes/items");

app.use("/customer",CustomerRouter);
app.use("/roomType",roomTypeRouter);
app.use("/inventory",itemsRouter);

//Nipun
const BookingRouter = require("./routes/booking.js");
app.use("/booking",BookingRouter);
const finalBill = require("./routes/Bill.js");
app.use("/FinalBill", finalBill);


//Imesha 
const employeeRouter = require("./routes/Employees.js");
app.use("/employee",employeeRouter);
const vacationRouter = require("./routes/Vactionrequests.js");
app.use("/vacation",vacationRouter);


//Pamoda
const orderItemsRouter = require("./routes/orderItems");
 app.use("/orderItems",orderItemsRouter);
 const categoryRouter = require("./routes/category");
 app.use("/category",categoryRouter);

//Niromy
const mealOrderRout = require("./routes/MealOrder.js");
app.use("/Meal_Order", mealOrderRout);
const halls = require("./routes/halls.js");
app.use("/halls", halls);

//Buddika
const roomRouter = require("./routes/rooms.js");
app.use("/room",roomRouter);
const roomType = require("./routes/roomType.js");
app.use("/roomType",roomType);









app.listen(PORT,()=>{
    console.log(`Server running on PORT: ${PORT}`)
})








