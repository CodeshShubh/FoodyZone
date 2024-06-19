import styled from "styled-components";
import bg from '../assets/Background.png'
import img1 from '../assets/dish1.png'
import img2 from '../assets/dish6.png'
import img3 from '../assets/dish5.png'
import img4 from '../assets/dish4.png'
import img5 from '../assets/dish3.png'
import img6 from '../assets/dish2.png'


import {Button} from './NavBar'


const foods = [
  {
    image: img1,
    heading: "Boiled Eggs",
    text: 'Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.',
    btntext: 10.00
     
  },
  {
    image: img1,
    heading: "Boiled Eggs",
    text: 'Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.',
    btntext: 10.00
     
  },
  {
    image: img1,
    heading: "Boiled Eggs",
    text: 'Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.',
    btntext: 10.00
     
  },
  {
    image: img1,
    heading: "Boiled Eggs",
    text: 'Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.',
    btntext: 10.00
     
  },
  {
    image: img1,
    heading: "Boiled Eggs",
    text: 'Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.',
    btntext: 10.00
     
  },
  {
    image: img1,
    heading: "Boiled Eggs",
    text: 'Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.',
    btntext: 10.00
     
  },
] 



const Home = () => {
  return (
    <HomeConatiner>
      <FoodCardConatiner>
      {
        foods.map(({image, heading, text, btntext})=>
          <div key={heading} className="food_card">
        <div className="food_image">
        <img src={image} alt="Food Image" />
        </div>
        <div className="food_info">
          <h1>{heading}</h1>
          <p>{text}</p>
          <div className="food_Card_btn"><FoodCardBtn>${btntext}.00</FoodCardBtn></div>
        </div>
      </div>)
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