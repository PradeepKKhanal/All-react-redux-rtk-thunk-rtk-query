// A mock function to mimic making an async request for data
import axios from 'axios'
export function fetchProducts() {
  return axios.get('http://localhost:3000/products')
}


export function fetchItems() {
  return axios.get('http://localhost:3000/cart')
}

export function addItem(item){
  return axios.post('http://localhost:3000/cart',item)
}

export function updateItem({id,quantity}){
  return axios.patch(`http://localhost:3000/cart/${id}`,{quantity})
}

export function  deleteItem(id){
  return axios.delete(`http://localhost:3000/cart/${id}`)
}

// export function updateItemQuantity({id,qu})