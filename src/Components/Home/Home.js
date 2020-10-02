import React from "react";
import Product from "../Product/Product";
import  AllProducts from '../../Api/data';
import "./Home.css";

function Home() {
  const productData = AllProducts[0] || null;
  const { categoriesOne, categoriesTwo, categoriesThree } = productData;
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          {categoriesOne?.map(product => {
            return (
              <Product 
                id={product.id} 
                title={product.title}
                price={product.price}
                rating={product.rating}    
                image={product.image}
              />    
            )
          })}
        </div>  
        <div className="home__row">
          {categoriesTwo?.map(product => {
              return (
                <Product 
                  id={product.id} 
                  title={product.title}
                  price={product.price}
                  rating={product.rating}    
                  image={product.image}
                />    
              )
          })}
        </div>
        <div className="home__row">
          {categoriesThree?.map(product => {
              return (
                <Product 
                  id={product.id} 
                  title={product.title}
                  price={product.price}
                  rating={product.rating}    
                  image={product.image}
                />    
              )
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
