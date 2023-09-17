import '../styles/Header.css'

function Header() {
    return (
      <div className='header'>
          <img src={require("../assets/Images/header-background.jpg")} alt="header-background" />
          <h1>AUROIMPORT</h1>
      </div>
    );
  }
  
  export default Header;