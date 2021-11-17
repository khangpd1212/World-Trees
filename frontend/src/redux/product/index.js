import axios from "../../utils/axios";
import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  loading: "idle",
  error: "",
  filterProduct: [],
  searchProduct: [],
};

export const fetchProducts = createAsyncThunk(
  "GET_ALL_PRODUCTS",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("product/");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const filterProducts = createAsyncThunk(
  "FILTER_PRODUCTS",
  async (options, thunkAPI) => {
    try {
      let text = "filter?";
      for (let i in options) {
        if (options[i] !== null) {
          text += `${i}=${options[i]}&`;
        }
      }
      let query = text.substring(0, text.length - 1);
      const response = await axios.get(`product/${query}`);
      console.log(query);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
export const searchProducts = createAsyncThunk(
  "SEARCH_PRODUCT",
  async (keyword, thunkAPI) => {
    try {
      const response = await axios.post(`product/search`, keyword);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //FETCH
    builder.addCase(fetchProducts.pending, (state) => {
      state.productList = state.productList;
      state.loading = "loading";
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.productList = action.payload;
      state.loading = "loaded";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = "error";
    });
    //FILTER
    builder.addCase(filterProducts.pending, (state) => {
      return { ...state, loading: "loading" };
    });
    builder.addCase(filterProducts.fulfilled, (state, action) => {
      return { ...state, loading: "loaded", filterProduct: action.payload };
    });
    builder.addCase(filterProducts.rejected, (state, action) => {
      return { ...state, loading: "error", error: action.error.message };
    });

    //SEARCH
    builder.addCase(searchProducts.pending, (state) => {
      return { ...state, loading: "loading" };
    });
    builder.addCase(searchProducts.fulfilled, (state, action) => {
      return { ...state, loading: "loaded", searchProduct: action.payload };
    });
    builder.addCase(searchProducts.rejected, (state, action) => {
      return { ...state, loading: "error", error: action.error.message };
    });
  },
});
export const selectProducts = createSelector(
  (state) => ({
    productList: state.productState.productList,
    loading: state.productState.loading,
    filterProduct: state.productState.filterProduct,
    searchProduct: state.productState.searchProduct,
  }),
  (state) => state
);

export default productSlice.reducer;