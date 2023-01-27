import { useReducer } from 'react'
import { Sub } from '../types'

interface FormStates {
	inputValues: Sub
}

type FormReducerActions = {
	type: 'change_value',
	payload: {
		inputName: string,
		inputValue: string
	}
} | {
	type: 'clear'
}

const INITIAL_STATE = {
	nick: '',
	subMonths: 0,
	avatar: '',
	description: ''
}

const formReducer = (state: FormStates['inputValues'], action: FormReducerActions) => {
	switch(action.type){
	case 'change_value':
		const {inputName, inputValue} = action.payload
		return {...state, [inputName]: inputValue}
	case 'clear':
		return INITIAL_STATE

	default:
		return state
	}
}
export default function useNewSubform(){
	return useReducer(formReducer, INITIAL_STATE)
}
