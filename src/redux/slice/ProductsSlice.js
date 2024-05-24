import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
const initialState = {
  products: [],
  results: []
}

const PRODUCTS_URL = "https://euphoriabackend.onrender.com/products"

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await axios.get(PRODUCTS_URL)
      return [...response.data]
    } catch (error) {
      return error.message
    }
  }
)

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterByCategory: (state, action) => {
      state.products = state.products.filter((product) =>
        product.categories.includes(action.payload)
      )
    },

    filterBySize: (state, action) => {
      state.products.filter((product) => product.size.contains(action.payload))
    },
    filterByColor: (state, action) => {
      state.products.filter((product) => product.color === action.payload)
    },
    filterByStyle: (state, action) => {
      state.products.filter((product) => product.style === action.payload)
    },
    filterByPrice: (state, action) => {
      state.products.filter((product) => {
        product.price >= action.payload.a && product.price <= action.payload.b
      })
    },
    searchProduct: (state, action) => {
      if (action.payload.trim() !== '') {

        state.results = state.products.filter(elem => elem.name.toLowerCase().includes(action.payload.toLowerCase()))

      }
      else {
        state.results = []
      }
    },
    deleteProduct: (state, action) => {
      try {
        axios.delete(PRODUCTS_URL + "/" + action.payload).then(() => {
          console.log("deleted")
          // state.products = state.products.filter(elem => elem.id !== action.payload)
        })
        state.products = state.products.filter(elem => elem.id !== action.payload)
        // console.log(JSON.stringify(state.products))
      } catch (error) {
        console.log(error)
      }
    },
    postProduct: (state, action) => {
      try {
        axios.post(PRODUCTS_URL, action.payload).then(() => {
          console.log("posted")
          // state.products = state.products.filter(elem => elem.id !== action.payload)
        })
      } catch (error) {
        console.log(error)
      }
    },
    editProduct: (state, action) => {
      try {
        axios.patch(PRODUCTS_URL + "/" + action.payload.id, action.payload).then(() => {
          console.log("posted")
          // state.products = state.products.filter(elem => elem.id !== action.payload)
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.products = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
  },
})

export const {
  filterByCategory,
  filterByColor,
  filterByPrice,
  filterBySize,
  filterByStyle,
  searchProduct,
  deleteProduct,
  postProduct,
  editProduct
} = productsSlice.actions

export const selectAllPosts = (state) => state.posts.posts
export const getPostsStatus = (state) => state.posts.status
export const getPostsError = (state) => state.posts.error

export default productsSlice.reducer
