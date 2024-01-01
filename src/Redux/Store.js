import Reactotron from 'reactotron-react-native';
import { createStore } from "redux";
import { AddTocart, All_datas } from "./Action";

const initialState = {
    selectedItem: null,
    selectedQuantity: 1, 

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
            const {data} = action.laundrylist;

            // const index = data.findIndex((item) => item.id === laundrydata.map((item) => item.data.id));
            const index = state.laundrydata.findIndex((item) => (console.log("item => ", item)))
            console.log('index : ' , index)


            let tempdata=[...state.Cart];

            if(index == -1){
                tempdata.push(data)
            }else{
                tempdata[index].quantity++;
            }

            console.log('tempdata : ' , tempdata)
            return{
                ...state,
                Cart : tempdata
            }
        }

        default:{
            return state;
        }
    }

}

const Laundrystore = createStore(reducer)

export default Laundrystore;
//   export const reducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'SET_SELECTED_ITEM':
//         return {
//           ...state,
//           selectedItem: action.payload,
//         };
     
  
//       default:
//         return state;
//     }
//   };