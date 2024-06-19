import express from 'express';
import cors from 'cors';
import path from 'path'
import { fileURLToPath } from 'url';

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/images', express.static(path.join(__dirname, 'images')))
console.log(path.join(__dirname,"images"))


const PORT="4000"

app.get('/', (req,res)=>{

    const foodData =[
       {
        name: "Boilded Egg",
        price: 10,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/dish1.png",
        type: "breakfast",
       },
       {
        name: "PANCAKE",
        price: 25,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/dish2.png",
        type: "dinner",
      },  
       {
        name: "RAMEN",
        price: 25,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/dish3.png",
        type: "lunch",
      },
      {
        name: "GRILLED CHICKEN",
        price: 45,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/dish4.png",
        type: "dinner",
      },
  
      {
        name: "CAKE",
        price: 18,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/dish5.png",
        type: "breakfast",
      },
  
      {
        name: "BURGER",
        price: 23,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/dish6.png",
        type: "lunch",
      },]
      res.json(foodData);
})

app.listen(PORT,()=>{
    console.log(`Server is Running on Port ${PORT}`)
})