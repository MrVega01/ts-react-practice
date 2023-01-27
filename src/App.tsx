import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import Form from './components/Form'
import List from './components/List'
import { Sub } from './types'

const INITIAL_STATE = [
	{
		nick: 'mrvega01',
		subMonths: 5,
		avatar: 'https://i.pravatar.cc/150?u=mrvega01',
		description: 'Usually pay with credit card'
	},
	{
		nick: 'anotherUser',
		subMonths: 10,
		avatar: 'https://i.pravatar.cc/150?u=mrvega01'
	}
]
interface AppStates {
	subs: Array<Sub>
}

function App() {
	const [subs, setSubs] = useState<AppStates['subs']>([])
	const ref = useRef<HTMLDivElement>(null)

	useEffect(()=>{
		setSubs(INITIAL_STATE)
	}, [])

	const handlerNewSub = (newSub: Sub) : void => {
		setSubs([...subs, newSub])
	}

	return (
		<div className="App" ref={ref}>
			<h1>Services subs</h1>
			<Form onNewSub={handlerNewSub} />
			<List subs={subs}/>
		</div>
	)
}

export default App
