import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';
import uuid from 'react-uuid';

const WishList = () => {
  const [wishText, setWishText] = useState('');
  const [wishList, setWishList] = useState([]);
  const [totalWish, setTotalWish] = useState(-1);
  // For handling the button add
  const handleWishes = () => {
    setWishList((list) => list.concat({ id: uuid(), wish: wishText }));
    setWishText('');
  };
  // For storing the wishlist in localStorage
  useEffect(() => {
    localStorage.setItem('Wishlist', JSON.stringify(wishList));
    console.log(localStorage.getItem('Wishlist'));
    setTotalWish((wish) => wish + 1);
  }, [wishList]);

  const handleWishInput = (e) => setWishText(e.target.value);
  return (
    <div>
      <input
        type="text"
        onChange={handleWishInput}
        value={wishText}
        placeholder="I wish.."
      />
      <button onClick={handleWishes}>Add</button>
      <ul>
        {wishList.map(({ id, wish }) => (
          <li key={id}> {wish} </li>
        ))}
      </ul>
      Total Wishes: {totalWish}
    </div>
  );
};
export default function App() {
  return (
    <div>
      <WishList />
    </div>
  );
}
