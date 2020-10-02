import React from 'react';
import Header from '../Header/Header';
import Product from '../Product/Product';
import AllProducts from '../../Api/data';
import './SearchProduct.css';

const SearchProduct = (props) => {
    const productId = props.location.search.replace('?id=', '');
    const searchData = AllProducts[0] || null;
    const { categoriesOne, categoriesTwo, categoriesThree } = searchData;
    const categories = [...categoriesOne, ...categoriesTwo, ...categoriesThree];
    const resultsData = categories?.filter((productSearch) => productSearch.id === productId);

    return (
        <div>
            <Header />
            <div className="search__results">
                <Product 
                    id={resultsData[0].id} 
                    title={resultsData[0].title}
                    price={resultsData[0].price}
                    rating={resultsData[0].rating}    
                    image={resultsData[0].image}
                />  
            </div> 
        </div>
    )
}

export default SearchProduct
