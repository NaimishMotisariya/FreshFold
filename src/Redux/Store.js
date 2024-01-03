import Reactotron from 'reactotron-react-native';
import { createStore } from "redux";
import { AddTocart, All_datas, cartquantiityincrease } from "./Action";

const initialState = {
    laundrydata:[],
    Cart:[]
};
    
const reducer = (state = initialState , action)=> {
    switch(action.type){
        case All_datas:{
            const {data} = action.laundrylist;
            // console.log("data =>  ",data)
            return{
                ...state,
                laundrydata : data
            }
        }

        case AddTocart:{
            const {data} = action.cartlist;
            console.log("data =>",data);

            return{
                ...state,
                Cart: [...state.Cart , {data}]
            }
        }

        case cartquantiityincrease :{
            const {data} = action.increaselist;
            console.log("increase data => " , data);

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

