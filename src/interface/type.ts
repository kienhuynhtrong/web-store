export interface ItemShoes {
  name: string,
  img: string,
  price: number,
}
export interface ShoesList {
  [key: string]: ItemShoes,
}