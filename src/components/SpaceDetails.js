'use client';
import React, { useState, useEffect } from 'react';
import { getState } from '../../redux/store';
import Container from '@mui/material/Container';

import { Item } from './accordian/item';

export const SpaceDetails = () => {
  const { Data } = getState().spaceData;
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Data);
  }, [Data]);

  if (!data) return <></>;

  return (
    <Container maxWidth="sm">
      {data.map((item) => (
        <Item key={item.url} data={item} />
      ))}
    </Container>
  );
};
