import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: 0,
    logo: '',
    banniere: '',
    names: '',
    description: '',
    typeOrganisation: null,
    typeIndustry: null,
    teamLength: '',
    siteWebLink: '',
    facebookLink: '',
    instagramLink: '',
    linkedLink: '',
    twitterLink: '',
    email: '',
    name: '',
    creationDate: '',
    contactNumber: '',
    user: null,
};

const profileElementEmpl = createSlice({
    name: 'profileEmpl',
    initialState,
    reducers: {
        setProfileEmpl: (state, action) => {
            const { id, logo, banniere, name, description, typeOrganisation, typeIndustry, teamLength, siteWebLink, facebookLink, instagramLink, linkedLink, twitterLink, email, localisation, creationDate, contactNumber, user } = action.payload;
            state.id = id;
            state.logo = logo;
            state.banniere = banniere;
            state.name = name;
            state.description = description;
            state.typeOrganisation = typeOrganisation;
            state.typeIndustry = typeIndustry;
            state.teamLength = teamLength;
            state.siteWebLink = siteWebLink;
            state.facebookLink = facebookLink;
            state.instagramLink = instagramLink;
            state.linkedLink = linkedLink;
            state.twitterLink = twitterLink;
            state.email = email;
            state.creationDate = creationDate;
            state.contactNumber = contactNumber;
            state.user = user;
        },
    },
});

export const { setProfileEmpl } = profileElementEmpl.actions;
export default profileElementEmpl.reducer;