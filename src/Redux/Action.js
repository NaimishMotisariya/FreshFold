import Reactotron from 'reactotron-react-native';

export const All_datas = "ADD_DATAS";
export const AddTocart = "ADD_TO_CART";
export const cartquantiityincrease = "cart_quantiityincrease";
export const cartquantitiydecrement = "cart_quantiitydecrement";
export const removefromcart = "cart_remover";

export const Alladddata = (data) => (
    {
    type: All_datas,
    laundrylist : {
        data
    }
})

export const adddatatocart = (data) => ({
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

export const decrementequantitiy = ( data ) => ({
    type: cartquantitiydecrement ,
    decreaselist:{
        data
    }
})

export const Removecart = ( data ) => ({
    type: removefromcart ,
    removelist:{
        data
    }
})
