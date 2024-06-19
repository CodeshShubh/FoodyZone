import logo from '../assets/Foody Zone.svg';
import styled from 'styled-components';

const NavBar = () => {

  const btns = [
    {
      name: "All",
      type: "all"
    },
    {
      name: "Breakfast",
      type: "breakfast"
    },
    {
      name: "Lunch",
      type: "lunch"
    },
    {
      name: "Dinner",
      type: "dinner"
    }
  ]
  return (
    <NavContainer>
      <div className='nav_top'>
        <img src={logo} alt=""logo />
        <input type='text' name='search' placeholder='Search Food...'/>
      </div>
      <ButtonConatiner>
         {
          btns.map((value)=>{
            return <Button key={value.name}>{value.name}</Button>
          })
         }
      </ButtonConatiner>
    </NavContainer>
  )
}

export default NavBar;


const NavContainer = styled.nav`
  padding: 1rem;
  max-width: 1440px;
  min-height: 190px;
  background-color: #323334;

  .nav_top {
    max-width: 1200px;
    margin: 0 auto 2rem;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    >input{
    all: unset;
    min-width: 10rem;
    min-height: 1rem;
    border: 1px solid #FF0909;
    border-radius: 5px;
    padding: 6px;
    color: white;
    &::placeholder{
      color: white;
    }
    }
  }

`;

 const ButtonConatiner = styled.div`
max-width: 326px;
min-height: 2rem;
margin: 10px auto;
display: flex;
justify-content: center;
gap: 10px;
`

export const Button = styled.button`
background-color: #ff4343;
padding: 0 0.5rem;
border: none;
border-radius: 5px;
font-weight: 400;
font-size: 16px;
color: white;
&:hover{
  cursor: pointer;
  background-color: #ff6f6f;
}
  
`
