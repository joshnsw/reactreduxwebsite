
import './css/styles.css'


import { addToCart,plusQuantity,emptyCart, minusQuantity }from './reducers/cartReducer';

import { useDispatch, useSelector } from 'react-redux'

import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

import logo from './images/logoimage.png';

const Header = () => (
  <div className="navbar">
      <div className="left-section">
      <img className="logo" src={logo} alt=""/>
      <p>Elite Fitness Emporium</p>
      </div>
      <div className="left-section">
      <Link to="/reactreduxwebsite" className = "link">
      Home
      </Link>

      <Link to="/store" className = "link">
      Store
      </Link>

      </div>
      </div>
)


const Banner = () => (

  <div class="banner" >
  <h1>COMPLETE FITNESS FOR YOU</h1>
  <p> LIFT, SWIM, PUNCH, RECOVER</p>
  <a href="#contact" class="btn">Join us</a>
  </div>
)

const Contents = () => (

  <div class="container-contents">
<h1>Concept</h1>
<p>Our state of the art gym offers a multitide of training facilties that will bring your fitness to the next level</p>

<div class="card-container">
<div class="card">
<h2>Weightlifting</h2>
<p>Our state of the art gym is equipped with the latest weightlifting equipment</p>
</div>
<div class="card">
<h2>Pool</h2>
<p>Our olympic-sized pool will give you a professional area to elevate your skills</p>
</div>
<div class="card">
<h2>Kickboxing</h2>
<p>With our instructors on hand, become the next kickboxing champion. </p>
</div>
<div class="card">
<h2>Spa</h2>
<p>Recover after your intense training with our spa room, amenities included. </p>
</div>
</div>
</div>
)

const Contact = () => (

  <div id ="contact" class="container-pricing">
  <div className="container-pricing-header">
  <h1>Pricing</h1>
  <p>Fill in our form and we will get back to you </p>
  </div>

  <form class = "container-form" action="">

    <label for="name">Name</label>
    <input id="name" type="text"/>
    <label for="email">Email</label>
    <input id="email" type="email"/>
     <button>Submit</button>
  </form>

  </div>
)


const Footer = () => (

  <div class="container-footer">

  <div class="footer-contact">
  <h1>Address</h1>
  <p>Some Address in the US</p>
  </div>

  <div class="footer-socials">
    <p>Facebook</p>
    <p>Instagram</p>
    <p>Twitter</p>
    </div>

  </div>
)




const ProductCard = ({ product }) => {

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    console.log(cart)
    };

  return(
    <div className = "pcard">
      <p>{product.name}</p>
      <p>{product.price}</p>
      <a onClick={handleAddToCart}>Add to cart</a>
    </div>
  )

  };









const Store = () => {

  const cart = useSelector(state => state.cart)

  const products = useSelector(state => state.products)

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  const dispatch = useDispatch();

  const addQuantity = item => {
    dispatch(plusQuantity(item));
    };

    const minQuantity = item => {
      dispatch(minusQuantity(item));
      };

  return(
    <>
      <div className="container-store">
      <div className="container-store-content">
    <h1>Our Products</h1>
  <div className="container-grid">

      {products.map(product =>
        <ProductCard
          key={product.id}
          product={product}
        />
      )}
    </div>

  </div>
    <div className="cart">
     <h3>Cart</h3>

      {cart.map(item =>
        <>
        <div >
        <p>{item.name},{item.price}</p>

        <p>Qty: {item.quantity}</p>
        <a onClick={() => addQuantity(item)} >+ </a>
        <a onClick={() => minQuantity(item)}>-</a>
        </div>
        </>
      )}

    { cart.length > 0 ? <><a onClick={() => dispatch(emptyCart())}>Clear Cart</a> <p>Cart total: {cartTotal}</p></>: <p>Cart Empty..</p> }
    </div>
  </div>
  </> )
}


function App() {
  return (
      <Router>
      <Header/>

      <Routes>

        <Route path="/reactreduxwebsite" element={<>
        <Banner/>
        <Contents/>
      <Contact/></> } />

      <Route path="/" element={<>
        <Banner/>
        <Contents/>
      <Contact/></> } />

      <Route path="/store" element={<>
        <Store/>
        </>} />

      </Routes>

      <Footer/>
      </Router>

  );
}

export default App;
