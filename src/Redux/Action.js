import Reactotron from 'reactotron-react-native';

export const All_datas = "ADD_DATAS";
export const AddTocart = "ADD_TO_CART";
export const cartquantiityincrease = "cart_quantiityincrease";
export const cartquantitiydecrement = "cart_quantiitydecrement";
export const removefromcart = "cart_remover";
export const productincrement = "PRODUCTICREMENT";
export const productdecrement = "PRODUCTDECREMENT";


export const Alladddata = (item) => (
    {
    type: All_datas,
    laundrylist : {
        item
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

export const Productquantityincrement = ( data ) => ({
    type: productincrement ,
    productincreaselist:{
        data
    }
})

export const Productquantitydecrement = ( data ) => ({
    type: productdecrement ,
    productdecrementlist:{
        data
    }
})





