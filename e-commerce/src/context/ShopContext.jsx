import React, { createContext, useState } from "react";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const products = [
    {
      id: 1,
      name: "Gold Necklace",
      price: 150,
      image: "https://ki.co.rs/wp-content/uploads/2023/01/ogrlica304.jpg",
      quantity: 1,
      bestseller: false,
      category: "Gold",
      description: "Elegant gold necklace perfect for any occasion.",
      subCategory: "Necklaces",
    },
    {
      id: 2,
      name: "Pink Gold Ring",
      price: 250,
      image: "https://ki.co.rs/wp-content/uploads/2023/01/prsten016B_900p.jpg",
      quantity: 1,
      bestseller: true,
      category: "Pink Gold",
      description: "Exquisite diamond ring with a luxurious design.",
      subCategory: "Rings",
    },
    {
      id: 3,
      name: "Silver Earrings",
      price: 80,
      image: "https://ki.co.rs/wp-content/uploads/2023/01/mindjusa37.jpg",
      quantity: 1,
      bestseller: false,
      category: "Silver",
      description: "Stylish silver earrings for daily wear.",
      subCategory: "Earrings",
    },
    {
      id: 4,
      name: "Rose Gold Earrings",
      price: 500,
      image: "https://ki.co.rs/wp-content/uploads/2023/01/mindjusa14_900p.jpg",
      quantity: 1,
      bestseller: true,
      category: "Rose Gold",
      description: "Luxury gold watch with premium craftsmanship.",
      subCategory: "Earrings",
    },
    {
      id: 5,
      name: "White Gold Pin Bracelet",
      price: 350,
      image:
        "https://ki.co.rs/wp-content/uploads/2023/01/narukvica002A_900p.jpg",
      quantity: 1,
      bestseller: true,
      category: "White Gold",
      description: "Sleek platinum bracelet designed for modern elegance.",
      subCategory: "Bracelets",
    },
    {
      id: 6,
      name: "Large Gold Pin Earrings",
      price: 350,
      image: "https://ki.co.rs/wp-content/uploads/2023/01/mindjusa08_900p.jpg",
      quantity: 1,
      bestseller: false,
      category: "Gold",
      description: "Sleek platinum bracelet designed for modern elegance.",
      subCategory: "Earrings",
    },
    {
      id: 7,
      name: "Silver Earrings",
      price: 350,
      image: "https://ki.co.rs/wp-content/uploads/2020/05/KI_7233web3.jpg",
      quantity: 1,
      bestseller: true,
      category: "Silver",
      description: "Sleek platinum bracelet designed for modern elegance.",
      subCategory: "Earrings",
    },
    {
      id: 9,
      name: "Rose Gold Labyrinth Necklace",
      price: 350,
      image: "https://ki.co.rs/wp-content/uploads/2021/02/KI_7385web_.jpg",
      quantity: 1,
      bestseller: true,
      category: "Rose Gold",
      description: "Sleek platinum bracelet designed for modern elegance.",
      subCategory: "Necklaces",
    },
    {
      id: 9,
      name: "Silver Hanging Ring",
      price: 350,
      image: "https://ki.co.rs/wp-content/uploads/2023/01/prsten19B_900p.jpg",
      quantity: 1,
      bestseller: true,
      category: "Silver",
      description: "Sleek platinum bracelet designed for modern elegance.",
      subCategory: "Rings",
    },
    {
      id: 10,
      name: "White Gold Bracelet",
      price: 350,
      image: "https://ki.co.rs/wp-content/uploads/2021/04/KI_7290web2S.jpg",
      quantity: 1,
      bestseller: false,
      category: "White Gold",
      description: "Sleek platinum bracelet designed for modern elegance.",
      subCategory: "Bracelets",
    },
  ];

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
