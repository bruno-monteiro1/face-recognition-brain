import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
		if (isSignedIn) {
			return(
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p onClick={() => onRouteChange('SignIn')} className='f3 link dim black underline pa3 pointer'> Sair </p>
			</nav>
			)
		} else {
			return (
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p onClick={() => onRouteChange('SignIn')} className='f3 link dim black underline pa3 pointer'> Entrar </p>
				<p onClick={() => onRouteChange('Register')} className='f3 link dim black underline pa3 pointer'> Registrar </p>
			</nav>
			);

		}
}

export default Navigation;