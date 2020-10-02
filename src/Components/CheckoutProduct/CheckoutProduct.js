import React, {forwardRef} from 'react';
import StarIcon from '@material-ui/icons/Star';
import './CheckoutProduct.css';
import { useStateValue } from '../../Content/StateProvider';

const CheckoutProduct = forwardRef(({id, image, title, price, rating, hideButton},ref) => {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className="checkoutProduct" ref={ref}>
            <img  className="checkoutProduct__image" src={image} alt="checkProduct" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon />
                    ))}
                </div>
               
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
            </div>
        </div>
    )
})

export default CheckoutProduct
