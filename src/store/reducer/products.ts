import { AnyAction } from "redux"

let initialState = {
  products: [] as any,
}

function getListProducts(state = initialState, action: AnyAction) {
  switch (action.type) {
    case 'GET_ALL_PRODUCT' :
      return {
        ...state,
        products: action.data
      }
    default:
      return state
  }
}
export default getListProducts