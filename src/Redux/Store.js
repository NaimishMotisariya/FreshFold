import Reactotron from 'reactotron-react-native';
import { createStore } from "redux";
import { AddTocart, All_datas, cartquantiityincrease, cartquantitiydecrement, decrementequantitiy, removefromcart } from "./Action";

const initialState = {
    laundrydata:[],
    Cart:[]
};
    
const reducer = (state = initialState , action)=> {
    switch(action.type){
        case All_datas:{
            const {data} = action.laundrylist;

            return{
                ...state,
                laundrydata : data
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

        default:{
            return state;
        }
    }

}

const Laundrystore = createStore(reducer)

export default Laundrystore;

