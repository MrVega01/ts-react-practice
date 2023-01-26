import React from 'react'
import {Sub} from '../../types'

interface Props {
    subs: Array<Sub>
}

export default function List({subs} : Props){
	return(
		<ul>
			{
				subs.map(sub => <li key={sub.nick}>
					<img src={sub.avatar} alt={`Avatar for ${sub.nick}`}/>
					<h4>{sub.nick} is subscriptor ago {sub.subMonths} months</h4>
					<p>{sub.description?.substring(0, 100)}</p>
				</li>)
			}
		</ul>
	)
}