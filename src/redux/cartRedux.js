import { createSlice } from '@reduxjs/toolkit'
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        // addProduct: (state, action) => {
        //     state.quantity += 1;
        //     state.products.push(action.payload);
        //     state.total += action.payload.price * action.payload.quantity;
        // },
        addProduct: (state, action) => {
            const existingProduct = state.products.find(
                (product) => product._id === action.payload._id
            );
            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity;
                state.total += action.payload.price * action.payload.quantity;
            } else {
                state.quantity += 1;
                state.products.push(action.payload);
                state.total += action.payload.price * action.payload.quantity;
            }
        },
        removeProduct: (state, action) => {
            const index = state.products.findIndex(product => product._id === action.payload);
            if (index !== -1) {
                state.total -= state.products[index].price * state.products[index].quantity;
                state.quantity -= 1;
                state.products.splice(index, 1);
            }
        },
    }
})

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer