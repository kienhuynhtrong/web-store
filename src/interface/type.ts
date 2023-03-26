export interface ItemShoes {
  name: string,
  img: string,
  price: number,
}
export interface ShoesList {
  [key: string]: ItemShoes,
}

export interface ITemProducts {
  title: string,
  price: string,
  image: string,
  category: string,
}