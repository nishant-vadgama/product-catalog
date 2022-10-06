import { createSlice } from "@reduxjs/toolkit";
import { NotificationManager } from 'react-notifications';

const initialState = {
    cart: [],
    compare: []
}

const cartProduct = createSlice({
    name: 'cartProduct',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let alreadyExist = state.cart.find((p) => p.id === action.payload.id);
            if (alreadyExist) {
                if (alreadyExist.cartQty >= alreadyExist.limit) {
                    NotificationManager.warning('', `You've reached maximum limit for this product`);
                } else {
                    let newCart = state.cart.map((p) => {
                        if (p.id === action.payload.id) {
                            p.cartQty = p.cartQty + 1;
                        }
                        return p;
                    })
                    state.cart = [...newCart]
                    setTimeout(() => {
                        NotificationManager.success('', `${action.payload?.title ?? 'Product'} added to cart`);
                    }, 500);
                }
            } else {
                action.payload.cartQty = 1;
                state.cart = [...state.cart, action.payload]
                setTimeout(() => {
                    NotificationManager.success('', `${action.payload?.title ?? 'Product'} added to cart`);
                }, 500);
            }
        },
        removeFromCart: (state, action) => {
            let alreadyExist = state.cart.find((p) => p.id === action.payload);
            if (alreadyExist) {
                if (alreadyExist.cartQty === 1) {
                    let newCart = state.cart.filter(p => p.id !== action.payload)
                    state.cart = [...newCart];
                } else {
                    let newCart = state.cart.map((p) => {
                        if (p.id === action.payload) {
                            p.cartQty = p.cartQty - 1;
                        }
                        return p;
                    })
                    state.cart = [...newCart];
                    setTimeout(() => {
                        NotificationManager.success('', `${alreadyExist?.title ?? 'Product'} removed from cart`);
                    }, 500);
                }
            }
        },
        addToCompare: (state, action) => {
            if (state.compare.length < 3) {
                let alreadyExist = state.compare.find((p) => p.id === action.payload.id);
                if (alreadyExist) {
                    NotificationManager.warning('', `Already exist in comparision list`);
                } else {
                    state.compare = [...state.compare, action.payload]
                }
            } else {
                NotificationManager.warning('', `Maximum 3 products can be compare at a time.`);
            }
        },
        removeFromCompare: (state, action) => {
            state.compare = state.compare.filter(_ => _.id !== action.payload)
        }
    }
})

export const { addToCart, removeFromCart, addToCompare, removeFromCompare } = cartProduct.actions
export default cartProduct.reducer