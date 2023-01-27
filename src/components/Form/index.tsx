import React from 'react'
import useNewSubForm from '../../hooks/useNewSubForm'
import { Sub } from '../../types'

interface FormProps {
    onNewSub: (newSub: Sub) => void
}

export default function Form({ onNewSub }: FormProps){
	const [inputValues, dispatch] = useNewSubForm()

	const handlerSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
		e.preventDefault()
		onNewSub(inputValues)
		handlerClear()
	}
	const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch({
			type: 'change_value',
			payload: {
				inputName: e.target.name,
				inputValue: e.target.value
			} 
		})
	}
	const handlerClear = () => {
		dispatch({type: 'clear'})
	}
	return(
		<form onSubmit={handlerSubmit}>
			<input onChange={handlerChange} value={inputValues.nick} type="text" name="nick" placeholder='nick' />
			<input onChange={handlerChange} value={inputValues.subMonths}type="number" name="subMonths" placeholder='subMonths' />
			<input onChange={handlerChange} value={inputValues.avatar}type="text" name="avatar" placeholder='avatar' />
			<input onChange={handlerChange} value={inputValues.description}type="text" name="description" placeholder='description' />
			<button type='button' onClick={handlerClear}>Clear form</button>
			<button type='submit'>Save sub</button>
		</form>
	)
}