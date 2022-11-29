import { createAsyncThunk } from '@reduxjs/toolkit';

const apiCharacters = async () => {
  const url = 'https://thronesapi.com/api/v2/Characters';
  const data = await fetch(url);
  const json = await data.json();
  return json;
};

const fetchCharacters = createAsyncThunk(
  'dragons/fetchCharacters',
  apiCharacters,
);

export default fetchCharacters;
