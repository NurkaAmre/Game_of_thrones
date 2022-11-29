import GETFROMAPI from './actionTypes';

const API = 'https://thronesapi.com/api/v2/Characters';

const initialState = [];
const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETFROMAPI:
      return [
        ...action.payLoad,
      ];
    default:
      return state;
  }
};

export const getCharFromAPI = () => (dispatch) => fetch(API)
  .then((res) => res.json()).then((data) => {
    const charecters = data.map((character) => ({
        id: character.name,
        firstName: character.name,
        lastName: character.lastname,
        fullName: character.fullName,
        title: character.title,
        family: character.family,
        image: character.image,
        imageUrl: character.imageUrl,
      }));
    dispatch({ type: GETFROMAPI, payLoad: charecters });
  }).catch(() => {});

export default characterReducer;
