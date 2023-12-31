export const All_datas = "ADD_DATAS";

export const Alladddata = (data) => ({
    type: All_datas,
    laundrylist : {
        data
    }
})


// export const setSelectedItem = (item) => ({
//     type: 'SET_SELECTED_ITEM',
//     payload: item,
//   });