import React, {forwardRef} from 'react';

const CheckOutFlipMove = forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            {props}
        </div>
    )
})

export default CheckOutFlipMove;
