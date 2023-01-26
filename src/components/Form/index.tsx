import React, { useState } from 'react'
import { Sub } from '../../types'

interface FormProps {
    onNewSub: (newSub: Sub) => void
}

interface FormStates {
	inputValues: Sub
}

export default function Form({ onNewSub }: FormProps){
	const [inputValues, setInputValues] = useState<FormStates['inputValues']>({
		nick: '',
		subMonths: 0,
		avatar: '',
		description: ''
	})
	const handlerSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
		e.preventDefault()
		onNewSub(inputValues)
	}
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValues({
			...inputValues,
			[e.target.name]: e.target.value
		})
	}
	return(
		<form onSubmit={handlerSubmit}>
			<input onChange={handleChange} value={inputValues.nick} type="text" name="nick" placeholder='nick' />
			<input onChange={handleChange} value={inputValues.subMonths}type="number" name="subMonths" placeholder='subMonths' />
			<input onChange={handleChange} value={inputValues.avatar}type="text" name="avatar" placeholder='avatar' />
			<input onChange={handleChange} value={inputValues.description}type="text" name="description" placeholder='description' />
			<button>Save sub</button>
		</form>
	)
}