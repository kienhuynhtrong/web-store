import { AnyAction } from "redux"

let initialState = {
  products: [] as any,
}

function getListProducts(state = initialState, action: AnyAction) {
  console.log(action)
  switch (action.type) {
    case 'GET_ALL_PRODUCT' :
      console.log(action.data)
      return {
        ...state,
        products: action.data
      }
    default:
      return state
  }
}
export default getListProducts