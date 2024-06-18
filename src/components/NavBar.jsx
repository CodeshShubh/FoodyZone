import logo from '../assets/Foody Zone.svg';
import styled from 'styled-components';

const NavBar = () => {
  return (
    <NavContainer>
      <div className='nav_top'>
        <img src={logo} alt=""logo />
        <input type='text' name='search' placeholder='Search Food...'/>
      </div>
      <div>
      <Button>All</Button>
      <Button>Breakfast</Button>
      <Button>Lunch</Button>
      <Button>Dinner</Button>
      </div>
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
    min-height: 40px;
    margin: 4rem auto;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    >input{
    all: unset;
    min-width: 10rem;
    min-height: 1rem;
    border: 1px solid #FF0909;
    border-radius: 5px;
    padding: 5px;
    &::placeholder{
      color: white;
    }
    }
  }

`;

const Button = styled.button`
  
`
