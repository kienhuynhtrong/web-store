import { AnyAction } from "redux"

let initialState = {
  products: [] as any,
}

function getListProducts(state = initialState, action: AnyAction) {
  switch (action.type) {
    default:
      return state
  }
}
export default getListProducts