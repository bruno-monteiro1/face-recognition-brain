import React from 'react';
import Tilt from 'react-tilt'
import brain from './brain.png'
import './Logo.css'

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 75 }} style={{ height: 150, width: 150 }} >
				<div className="Tilt-inner pa2"> <img alt='' style={{padding: '3px'}} src={brain} /></div>
			</Tilt>
		</div>
		
	)
}

export default Logo;