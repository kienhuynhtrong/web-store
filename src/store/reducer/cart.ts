import { AnyAction } from "redux";

let initialState = {
  item: [] as any, //mỗi món hàng dc add vàos
  lengthItem : 0 as number //số loại món hàng add vao
}
function cartReducer(state = initialState, action: AnyAction) {
  switch(action.type){
    case 'ADD_TO_CART':
      state.item.push(action.data)
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