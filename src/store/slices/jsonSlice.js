import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getAxiosInstance} from '../../api/api';

const initialState = {
  status: 'idel',
  message: null,
  apiData: null,
};

export const getApiFunction = createAsyncThunk(
  'jsonType/getApiFunction',
  async (params, {rejectWithValue}) => {
    const api = await getAxiosInstance();
    try {
      const response = await api.get(`posts`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const postApiFunction = createAsyncThunk(
  'jsonType/postApiFunction',
  async (params, {rejectWithValue}) => {
    const api = await getAxiosInstance();
    // console.log('params======', params);
    try {
      const response = await api.post(`posts/`, params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const putApiFunction = createAsyncThunk(
  'jsonType/putApiFunction',
  async (params, {rejectWithValue}) => {
    const api = await getAxiosInstance();
    // console.log('params======', params);
    try {
      const response = await api.put(`posts/` + params.id, params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const deleteApiFunction = createAsyncThunk(
  'jsonType/deleteApiFunction',
  async (params, {rejectWithValue}) => {
    const api = await getAxiosInstance();
    try {
      const response = await api.delete(`posts/` + params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const jsonSlice = createSlice({
  name: 'jsonType',
  initialState,
  reducers: {},
  extraReducers: {
    [getApiFunction.pending]: (state, action) => {
      state.status = 'loading';
      state.message = null;
    },
    [getApiFunction.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      // console.log('succeeded=======', action.payload);
      state.apiData = action.payload;
    },
    [getApiFunction.rejected]: (state, action) => {
      state.status = 'failed';
    },

    [postApiFunction.pending]: (state, action) => {
      state.status = 'loading';
      state.message = null;
    },
    [postApiFunction.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      // console.log('succeeded=======', action.payload);
      state.status = 'success';
    },
    [postApiFunction.rejected]: (state, action) => {
      state.status = 'failed';
    },

    [putApiFunction.pending]: (state, action) => {
      state.status = 'loading';
      state.message = null;
    },
    [putApiFunction.fulfilled]: (state, action) => {
      state.status = 'success';
    },
    [putApiFunction.rejected]: (state, action) => {
      state.status = 'failed';
    },

    [deleteApiFunction.pending]: (state, action) => {
      state.status = 'loading';
      state.message = null;
    },
    [deleteApiFunction.fulfilled]: (state, action) => {
      state.status = 'success';
    },
    [deleteApiFunction.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export const {} = jsonSlice.actions;

export default jsonSlice.reducer;
