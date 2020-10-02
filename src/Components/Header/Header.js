import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";
import { useStateValue } from "../../Content/StateProvider";
import { auth } from "../../firebase";
import AllProducts from "../../Api/data";
import SearchDropdown from "../SearchDropdown/SearchDropdown";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const searchData = AllProducts[0] || null;
  const { categoriesOne, categoriesTwo, categoriesThree } = searchData;
  const categories = [...categoriesOne, ...categoriesTwo, ...categoriesThree];
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const filterResults = (searchTerm) => {
    const resultsData = categories?.filter((productSearch) => {
      return productSearch.title.toString().toLowerCase().startsWith(searchTerm);
    });
    setSearchResults(resultsData);
  };
  useEffect(() => {
    filterResults(searchTerm);
  }, [searchTerm]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="container">
      <div className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="header-logo"
          />
        </Link>
        <div className="header__search">
          <input
            className="header__searchInput"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
          />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
          <Link to={!user && "/login"}>
            <div className="header__option" onClick={handleAuthentication}>
              <span className="header__optionLineOne">
                Hello, {user ? user.email : "Guest"}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <Link to="/orders">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="dropdown-header">
        <ul>
          {searchTerm
            ? searchResults?.map((product) => {
                return (
                  <div>
                    <SearchDropdown id={product.id} title={product.title} />
                  </div>
                );
              })
            : ""}
        </ul>
      </div>
    </div>
  );
}

export default Header;
