import React, { useState } from 'react';

const menuItems = [
  {
    id: 1,
    category: 'ramen',
    name: 'Ramen',

    products: [
      { id: 1, name: 'Classic Burger', imageUrl: './Assets/mile2-aseets/pictures/food-1.png' },
      { id: 2, name: 'Cheeseburger', imageUrl: './Assets/mile2-aseets/pictures/food-2.png' },
      { id: 3, name: 'Veggie Burger', imageUrl: './Assets/mile2-aseets/pictures/food-3.png' },
    ]
  },
  {
    id: 2,
    category: 'pizza',
    name: 'Pizza',
        products: [
      { id: 4, name: 'Terminal Pizza', imageUrl: './Assets/mile2-aseets/pictures/food-1.png' },
      { id: 5, name: 'Position Absolute Acı Pizza', imageUrl: './Assets/mile2-aseets/pictures/food-2.png' },
      { id: 6, name: 'useEffect Tavuklu Burder', imageUrl: './Assets/mile2-aseets/pictures/food-3.png' },
    ]
  },
  {
    id: 3,
    category: 'burger',
    name: 'Burger',
    products: [
      { id: 7, name: 'Whopper', imageUrl: './Assets/mile2-aseets/pictures/food-1.png' },
      { id: 8, name: 'Double Whopper', imageUrl: './Assets/mile2-aseets/pictures/food-2.png' },
      { id: 9, name: 'Triple Whopper', imageUrl: './Assets/mile2-aseets/pictures/food-3.png' },
    ]
  },
  {
    id: 4,
    category: 'french fries',
    name: 'French fries',
    products: [
      { id: 10, name: 'Classic French Fries', imageUrl: './Assets/mile2-aseets/pictures/food-1.png' },
      { id: 11, name: 'Sweet Potato Fries', imageUrl: './Assets/mile2-aseets/pictures/food-2.png' },
      { id: 12, name: 'Curly Fries', imageUrl: './Assets/mile2-aseets/pictures/food-3.png' },
    ]
  },
  {
    id: 5,
    category: 'fast food',
    name: 'Fast food',
    products: [
      { id: 13, name: 'Hamburger', imageUrl: './Assets/mile2-aseets/pictures/food-1.png' },
      { id: 14, name: 'Pizza', imageUrl: './Assets/mile2-aseets/pictures/food-2.png' },
      { id: 15, name: 'Chicken Nuggets', imageUrl: './Assets/mile2-aseets/pictures/food-3.png' },
    ]
  },
  {
    id: 6,
    category: 'soft drinks',
    name: 'Soft drinks',
    products: [
      { id: 16, name: 'Soda', imageUrl: './Assets/mile2-aseets/pictures/food-1.png' },
      { id: 17, name: 'Pepsi', imageUrl: './Assets/mile2-aseets/pictures/food-2.png' },
      { id: 18, name: 'Fuse Tea', imageUrl: './Assets/mile2-aseets/pictures/food-3.png' },
    ]
  }
];

export default function UnderHomePageNavbar1() {
  
  const [category, setCategory] = useState('burger');

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  // Kartların ve kapsayıcılarının stilleri
  const cardStyle = {
    width: '6cm',
    height: '7cm',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: '20px',
    textAlign: 'center',
    boxSizing: 'border-box',
    backgroundColor: "white"
  };

  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    backgroundColor: "#FAF7F2"
  };

  const buttonStyle = (buttonCategory) => ({
    width: "3cm",
    height: "1.5cm",
    backgroundColor: category === buttonCategory ? 'black' : 'white',
    border: 'none',
    color: category === buttonCategory ? 'white' : 'black',
    borderRadius: "1.5cm"
  });

  return (
    <>
      <div style={{ width: '100%', height: '100vh', gap: "20px", backgroundColor: "#FAF7F2" }}>
        <div>
          <nav style={{ padding: '10px 0', display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <ul style={{ listStyle: 'none', paddingTop: "30px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "30px" }}>
              <li style={{ marginBottom: '30px' }}>
                <button onClick={() => handleCategoryChange('ramen')} style={buttonStyle('ramen')}>
                <span > <img src="./Assets/mile2-aseets/icons/1.svg" alt="Resim" style={{ width: '25px', height: '25px' }} /> </span>
                  Ramen
                </button>
              </li>
              <li style={{ marginBottom: '20px' }}>
                <button onClick={() => handleCategoryChange('pizza')} style={buttonStyle('pizza')}><span > <img src="./Assets/mile2-aseets/icons/2.svg" alt="Resim" style={{ width: '25px', height: '25px' }} /> </span>
                  Pizza
                </button>
              </li>
              <li style={{ marginBottom: '20px' }}>
                <button onClick={() => handleCategoryChange('burger')} style={buttonStyle('burger')}><span > <img src="./Assets/mile2-aseets/icons/3.svg" alt="Resim" style={{ width: '25px', height: '25px' }} /> </span>
                  Burger
                </button>
              </li>
              <li style={{ marginBottom: '20px' }}>
                <button onClick={() => handleCategoryChange('french fries')} style={buttonStyle('french fries')}><span > <img src="./Assets/mile2-aseets/icons/4.svg" alt="Resim" style={{ width: '25px', height: '25px' }} /> </span>
                  French fries
                </button>
              </li>
              <li style={{ marginBottom: '20px' }}>
                <button onClick={() => handleCategoryChange('fast food')} style={buttonStyle('fast food')}><span > <img src="./Assets/mile2-aseets/icons/5.svg" alt="Resim" style={{ width: '25px', height: '25px' }} /> </span>
                  Fast food
                </button>
              </li>
              <li style={{ marginBottom: '20px' }}>
                <button onClick={() => handleCategoryChange('soft drinks')} style={buttonStyle('soft drinks')}><span > <img src="./Assets/mile2-aseets/icons/6.svg" alt="Resim" style={{ width: '25px', height: '25px' }} /> </span>
                  Soft drinks
                </button>
              </li>
            </ul>
          </nav>

          <div className="menu" style={cardContainerStyle}>
            {menuItems.map(item => (
              item.category === category && item.products.map(product => (
                <div key={product.id} style={cardStyle}>
                  <img src={product.imageUrl} alt={product.name} style={{ width: '85%', height: 'auto', marginBottom: '10px' }} />
                  <h2 style={{ marginTop: '5px', fontSize: '16px', display:"flex", alignContent:"flex-start"}}>{product.name}</h2>
                  {/* Diğer ürün ekleme */}
                </div>
              ))
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
