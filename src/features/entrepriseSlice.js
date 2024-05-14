// entrepriseSlice.js

import { createSlice } from '@reduxjs/toolkit';

const entrepriseSlice = createSlice({
  name: 'entreprise',
  initialState: {
    logo: null,
    banniere: null,
    name: '',
    description: '',
    typeOrganisation: { id: 0},
    typeIndustry: { id: 0},
    teamLength: '',
    siteWebLink: '',
    facebookLink : '',
    instagramLink :'',
    linkedLink:'',
    creationDate :'',
    twitterLink:'',
    contactNumber : '',
    email: '',
  },
  reducers: {
    setLogo: (state, action) => {
      state.logo = action.payload;
    },
    setBanniere: (state, action) => {
      state.banniere = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setOrganisation: (state, action) => {
      state.typeOrganisation = action.payload;
    },
    setIndustrie: (state, action) => {
      state.typeIndustry = action.payload;
    },
    setTeamLength: (state, action) => {
      state.teamLength = action.payload;
    },
    setSite: (state, action) => {
      state.siteWebLink = action.payload;
    },
    setfacebookLink: (state, action) => {
      state.facebookLink  = action.payload;
    },
    setLieninstagramLink: (state, action) => {
        state.instagramLink  = action.payload;
    },
    setLienlinkedLink: (state, action) => {
        state.linkedLink  = action.payload;
    },
    setLientwitterLink: (state, action) => {
        state.twitterLink  = action.payload;
    },
    setContactNumber : (state, action) => {
      state.contactNumber  = action.payload;
    }, 
    setCreationDate: (state, action) => {
        state.creationDate = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const {
  setLogo,
  setBanniere,
  setName,
  setDescription,
  setOrganisation,
  setIndustrie,
  setTeamLength,
  setSite,
  setfacebookLink ,
  setLieninstagramLink,
  setLienlinkedLink,
  setLientwitterLink,
  setContactNumber ,
  setCreationDate,
  setEmail,
} = entrepriseSlice.actions;

export default entrepriseSlice.reducer;