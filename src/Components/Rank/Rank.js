import React from 'react';

const Rank = (user) => {
	const { name, entries } = user;
	return (
		<div>
			<div className='white f5'>
				{`${name}, você já enviou`}
			</div>
			<div className='white f3'>
				{entries}
			</div>
			<div className='white f5'>
				{'face(s) válida(s)!'}
			</div>
		</div>
	
	)
}

export default Rank;