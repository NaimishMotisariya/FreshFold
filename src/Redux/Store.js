import Reactotron from 'reactotron-react-native';
import { createStore } from "redux";
import { AddTocart, All_datas, cartquantiityincrease } from "./Action";

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
            const {data} = action.cartlist;
            console.log("data =>",data);

          

            return{
                ...state,
                Cart: [...state.Cart , {data}]
            }

              // const existingdata = state.Cart.find((item) => item.id === data.id);
            // console.log("existingdata => " , existingdata)

            // if(existingdata){
            //     return{
            //         ...state,
            //         Cart : state.Cart.map((item) => item.data.id === data.id ? {...item , quantity : item.data.quantity++} : item)
            //     }
            // }else{
            //     console.log('done')
            //     return{
            //         ...state,
            //         Cart: [...state.Cart , {data}]
            //     }
            // }
            
            // const index = data.findIndex((item) => item.id === laundrydata.map((item) => item.data.id));
            // console.log("data =>" , data.id)
            // const index = state.laundrydata.findIndex(item => item.data.id === data.id)
            // console.log('index : ' , index)


            // let tempdata=[...state.Cart];

            // let check = data.id === state.Cart.id;
            // console.log("check => " , check);

            // if(data.id === state.Cart.id){
            //     console.log('wrong case')
            // }else{
            //     // tempdata[index].data.quantity++;
                
            //     tempdata.push(data)
                
            // }

            // console.log('tempdata : ' , tempdata)
            // const tempdata = state.Cart.find((item) =>item.id === data.id)
            // console.log("tempdata =>",tempdata);

            // if(tempdata){
            //     state.Cart.quantity++;
            // }else{
            //     state.Cart.push(tempdata)
            // }
            
            // return{
            //     ...state,
            //     Cart : data
            // }
        }

        case cartquantiityincrease :{
            const {data} = action.increaselist;
            console.log("increase data => " , data);

            return{
                ...state,
                Cart: state.Cart.map((item) => item.data.id === data ? {...item ,quantity : item.data.quantity++ } : item)
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