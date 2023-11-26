import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {ApplicationInfo} from "@/dtos/ApplicationInfo";


const initialState = {
  all: new Array<ApplicationInfo>(),
};


export const applicationState = createSlice({
  name: 'applications',
  initialState,
  reducers: {
    updateAll: (state, action: PayloadAction<ApplicationInfo[]>) => {
      return {
        all: action.payload,
      };
    },
  },
});

export const applicationReducer = applicationState.reducer;
export const applicationActions = applicationState.actions;
