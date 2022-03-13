import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, { payload }) {
			state.user = payload;
		},
	},
});

export const { setUser } = userSlice.actions;

const userReducer = userSlice.reducer;
export default userReducer;

const getState = (store) => store.user;
export const getUser = createSelector(getState, ({ user }) => user);
