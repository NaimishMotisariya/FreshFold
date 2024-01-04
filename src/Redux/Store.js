import Reactotron from 'reactotron-react-native';
import { createStore } from "redux";
import { AddTocart, All_datas, cartquantiityincrease, cartquantitiydecrement, decrementequantitiy, productdecrement, productincrement, removefromcart } from "./Action";

const initialState = {
    laundrydata:[],
    Cart:[]
};
    
const reducer = (state = initialState , action)=> {
    switch(action.type){
        case All_datas:{
            const {item} = action.laundrylist;

            return{
                ...state,
                laundrydata : item
            }
        }

        case AddTocart:{
            const {data} = action.cartlist;
            return{
                ...state,
                Cart: [...state.Cart , data]
            }
        }

        case cartquantiityincrease :{
            const {data} = action.increaselist;
            // console.log("increase data => " , data);
            return{
                ...state,
                Cart: data
            }
        }

        case cartquantitiydecrement :{
            const {data} = action.decreaselist;
            // console.log("increase data => " , data);
            return{
                ...state,
                Cart: data
            }
        }

        case removefromcart :{
            const {data} = action.removelist;

            return{
                ...state,
                Cart: data
            }
        }

        case productincrement :{
            const {data} = action.productincreaselist
            
            return{
                ...state,
                laundrydata :data
            }
        }

        case productdecrement :{
            const {data} = action.productdecrementlist
            
            return{
                ...state,
                laundrydata :data
            }
        }

        default:{
            return state;
        }
    }

}

const Laundrystore = createStore(reducer)

export default Laundrystore;

