import { createAction, createReducer } from "@reduxjs/toolkit"

export const createOfflineGame = createAction('CREATE_OFFLINE_GAME')

export const gameReducer = createReducer(
	{
		playersCount: null,
		spiesCount: null,
		timer: null
	},
	(builder) => {
		builder
			.addCase(createOfflineGame, (state, action) => {
				state.playersCount = action.payload.playersCount
				state.spiesCount = action.payload.spiesCount
				state.timer = action.payload.timer
				console.log(state);
			})
			.addDefaultCase((state, action) => {})
})