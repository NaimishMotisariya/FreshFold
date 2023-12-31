import { createStore } from "redux";
import { All_datas } from "./Action";

const initialState = {
    selectedItem: null,
    selectedQuantity: 1, 

    laundrydata:[]
};
  

export const reducer = (state = initialState , action)=> {
    switch(action.type){
        case All_datas:{
            const {data} = action.laundrylist;
            return{
                ...state,
                laundrydata : data
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