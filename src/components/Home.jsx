import styled from "styled-components";
import bg from '../assets/Background.png'
import axios from "axios";
import {Button} from './NavBar'
import { useEffect, useState } from "react";




const Home = () => {

  const [Data, setData] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState(null);


  const BASE_URL = "http://localhost:4000"


 useEffect(() => {
  const fetchData = async()=>{
      try {

        const response = await axios.get(BASE_URL);
        setData(response.data);
        setLoading(false)
        
      } catch (error) {
        setError(error);
        setLoading(false)
    }
  }
  fetchData();
 }, []);


 if(Loading){
  return <div>Loading...</div>
 }
 if(Error){
  return <div>Error:{Error.message}</div>
 }
 
 

console.log(Data);

  return (
    <HomeConatiner>
      <FoodCardConatiner>
      {
        Data?.map(({image, name, text, price}, index)=>(
          <div key={index} className="food_card">
        <div className="food_image">
        <img src={BASE_URL + image} alt="Food Image" />
        </div>
        <div className="food_info">
          <h1>{name}</h1>
          <p>{text}</p>
          <div className="food_Card_btn"><FoodCardBtn>${price}.00</FoodCardBtn></div>
        </div>
      </div>))
      }    

      </FoodCardConatiner>
    </HomeConatiner>
  )
}

export default Home;


const HomeConatiner = styled.div`
  max-width: 1440px;
  min-height: calc(785px - 220px);
  padding: 1px;
  background-size: cover;
  background: linear-gradient(rgba(0, 0, 0, 0.5),  rgba(0, 0, 0, 0.5)) , url(${bg});

  
`

const FoodCardConatiner =  styled.div`
  padding: 1rem;
  max-width: 1300px;
  margin: 2rem auto;
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
.food_card{
border-radius: 19px;
background-color: rgba(255, 255, 255, 0.1);
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
max-width: 400px;
display: flex;
justify-content: space-between;
padding: 1rem;
.food_image{
  width: 8rem;
  width: 8rem;
  >img{
  width: 9rem;
  width: 9rem;
  }
  
}
.food_info{
    max-width: 220px;
    min-height: 86px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    >h1{
      font-weight: 600;
      font-size: 1rem;
      color: white;
    }
    >P{
      font-weight: 400;
      font-size: 12px;
      line-height: 1rem;
      color: white;
    }

}
}

`
const FoodCardBtn = styled(Button)`
padding: 0.3rem 0.5rem;
  
`