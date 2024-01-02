import Reactotron from 'reactotron-react-native';

export const All_datas = "ADD_DATAS";
export const AddTocart = "ADD_TO_CART";
export const cartquantiityincrease = "cart_quantiityincrease"

export const Alladddata = (data) => (
    {
    type: All_datas,
    laundrylist : {
        data
    }
})


export const adddatatocart = (data) => (
    {
    type: AddTocart,
    cartlist : {
        data
    }
})

export const increasecartquantity = ( data ) => ({
    type: cartquantiityincrease ,
    increaselist:{
        data
    }
})


// export const setSelectedItem = (item) => ({
//     type: 'SET_SELECTED_ITEM',
//     payload: item,
//   });