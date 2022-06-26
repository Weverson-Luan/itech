import { configureStore } from "@reduxjs/toolkit";

import UserReduce from './userSlice';


export default configureStore({
  reducer: {
    user: UserReduce,
  }
})