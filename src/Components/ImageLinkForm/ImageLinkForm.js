import React from 'react';
import './ImageLinkForm.css'


const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
	return (
		<div>
			<p className='f3 white'> 
				{'Esse cérebro artificial reconhece QUALQUER rosto em uma foto. Duvida?'}
			</p>

			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} placeholder='URL'/>
					<button className='w-30 grow f4 link ph3 pv2 dib' 
					onClick={onPictureSubmit}>Tenta!</button>
				</div>
			</div>
		</div>
	)
	}
	
export default ImageLinkForm;