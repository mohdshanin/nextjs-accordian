import { configureStore } from '@reduxjs/toolkit';

import spaceDataSlice from '../redux/slices/spaceDataSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    spaceData: spaceDataSlice,
  },
});

export const { dispatch, getState } = store;

export const useAppSelector = useSelector;
