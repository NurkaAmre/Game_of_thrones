import { createSlice } from '@reduxjs/toolkit';
import fetchCharacters from './fetchAPI';

const charSlice = createSlice({
  name: 'characters',
  initialState: {
    characters: [],
    status: 'idle',
  },

  extraReducers: {
    [fetchCharacters.fulfilled]: (state, action) => {
      state.characters = action.payload.map((character) => ({
        id: character.id,
        name: character.name,
        lastName: character.lastName,
        fullName: character.fullName,
        title: character.title,
        family: character.family,
        image: character.image,
        imageUrl: character.imageUrl,
      }));
    },
    [fetchCharacters.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default charSlice.reducer;
