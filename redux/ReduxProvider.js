'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { dispatch, store } from '../redux/store';
import { addData } from '../redux/slices/spaceDataSlice';

const ReduxProvider = ({ Data, children }) => {
  dispatch(addData(Data));

  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
