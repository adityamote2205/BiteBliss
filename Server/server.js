import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import {query} from "./db/index.js";


dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/api/v1/restaurants", async (req,res)=>{ 
    try {

        // const results = await query("SELECT * FROM restaurants");
        const restaurantRatingsData = await query ("select * from restaurants left join (select restaurant_id,COUNT(*),TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id;")
        
        res.status(200).json({
            status : "Success",
            results : restaurantRatingsData.rows.length,
            data : {
                restaurant : restaurantRatingsData.rows,
            }
        });

    } catch (err) {

        console.log(err);

    }
    // const results = await query("SELECT * FROM restaurants");
    // console.log(results);
    // res.status(200).json({
    //     status : "Success",
    //     results : results.rows.length,
    //     data : {
    //         restaurants : results.rows,
    //     }
    // });
});

app.get("/api/v1/restaurants/:id", async (req,res)=>{
    console.log(req.params.id);

    try {

        const restaurant = await query("select * from restaurants left join (select restaurant_id,COUNT(*),TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id WHERE id = $1;",[req.params.id,]);

        const reviews = await query("SELECT * FROM reviews WHERE restaurant_id = $1",[req.params.id,]);

        res.status(200).json({
            status:"Success",
            data : {
                restaurant : restaurant.rows[0],
                reviews : reviews.rows
            },
        });

    } catch (err) {

        console.log(err);

    }
});

app.post("/api/v1/restaurants",async (req,res)=>{
    console.log(req.body);

    try{

        const results = await query ("INSERT INTO restaurants (name,location,price_range) VALUES ($1,$2,$3) returning *",[req.body.name,req.body.location,req.body.price_range]);
        console.log(results);
        res.status(201).json({
            status:"Success",
            data : {
                restaurant : results.rows[0],
            },
        });

    } catch (err) {
        console.log(err);
    }
});

app.put("/api/v1/restaurants/:id", async (req,res)=>{

    try {

        const results = await query ("UPDATE restaurants SET name=$1,location=$2,price_range=$3 WHERE id = $4 returning *",[req.body.name,req.body.location,req.body.price_range,req.params.id]);
        console.log(results);
        res.status(200).json({
            status : "Success",
            data : {
                restaurants : results.rows[0],
            },
        });

    } catch (err) {
        console.log(err);
    }
});

app.delete("/api/v1/restaurants/:id", async (req,res)=>{

    try {

        const results = await query ("DELETE FROM restaurants WHERE id = $1 ",[req.params.id]);
        res.status(204).json({
            "status":"success",
        });

    } catch (err) {
        console.log(err);
    }
});

app.post("/api/v1/restaurants/:id/addReview",async (req,res)=>{
    try{

       const newReview = await query ("INSERT INTO reviews (restaurant_id,name,review,rating) VALUES ($1,$2,$3,$4) returning *;" ,[req.params.id , req.body.name , req.body.review , req.body.rating])

       res.status(201).json({
        status : "success",
        review : newReview.rows[0]
       });
    } catch(err){

        console.log(err);

    }
});

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});

