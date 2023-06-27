import { createAction, createReducer } from "@reduxjs/toolkit"
import data from '../../assets/data/data.json'
import { getRandom } from '../helpers/getRandom';

export const createOfflineGame = createAction('CREATE_OFFLINE_GAME')

export const gameReducer = createReducer(
	{
		cards: [],
		timer: null
	},
	(builder) => {
		builder
			.addCase(createOfflineGame, (state, action) => {
				const locationIndex = getRandom(data.locations.length - 1)
				const location = data.locations[locationIndex]
				const arr = []
				for (let index = 0; index < action.payload.playersCount; index++) {
					arr[index] = {
						role:	location.roles[getRandom(location.roles.length - 1)],
						location: location.name,
						image: location.image
					}
				}
				for (let index = 0; index < action.payload.spiesCount; index++) {
					arr[getRandom(arr.length - 1)] = {
						role: 'Шпион',
						location: 'Неизвестна'
					}
				}

				state.cards = arr
				state.timer = action.payload.timer
			})
			.addDefaultCase((state, action) => {})
})