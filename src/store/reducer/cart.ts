import { AnyAction } from "redux";

let initialState = {
  item: [] as any, //mỗi món hàng dc add vàos
  lengthItem : 0 as number, //số loại món hàng add vao;
  totalAmount: 0 as number //tong tien
}
function cartReducer(state = initialState, action: AnyAction) {
  switch(action.type){
    case 'ADD_TO_CART':
      state.item.push(action.data)
      state.item.forEach((element:any) => {
        state.totalAmount += element.price
      });
      let uniqueChars = [...Array.from(new Set(structuredClone(state.item)))];
      state.lengthItem = uniqueChars.length
      return {
        ...state,
      }
    default:
      return state
  }
}

export default cartReducer