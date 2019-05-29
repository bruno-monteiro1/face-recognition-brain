import React, { Component } from 'react';
// import './SignIn.css'

class SignIn extends Component {

	constructor(props){
		super(props);
		this.state = {
			signInEmail: '',
			signInPassword: ''
		}
	}

	onEmailChange = (evt) => {
		this.setState({signInEmail: evt.target.value})
	}

	onPasswordChange = (evt) => {
		this.setState({signInPassword: evt.target.value})
	}

	onSubmitSignIn = () => {
		fetch('https://dry-badlands-61720.herokuapp.com/signin', {
			method: 'post',
			headers: {'content-type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
		.then(response => response.json())
		.then(user => {
			if(user.id) {
				this.props.loadUser(user);
				this.props.onRouteChange('home')
			} else {
				return console.log('Usuário ou senha incorretos.')

			}

		})
	}

	render() {
		const { onRouteChange } = this.props;
		return (
		<article className="br3 ba bg-white-10 b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
			<main className="pa4 black-80">
			  <div className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f1 fw6 ph0 mh0">Entrar</legend>
			      <div className="m2">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        type="email" 
			        name="email-address"  
			        id="email-address"
			        onChange={this.onEmailChange} />
			      </div>
			      <div className="mv2">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Senha</label>
			        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        type="password" 
			        name="password"  
			        id="password"
			        onChange={this.onPasswordChange} />
			      </div>
			    </fieldset>
			    <div className="">
			      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Entrar" onClick={this.onSubmitSignIn}/>
			    </div>
			    <div className="lh-copy mt3">
			      <p onClick={() => onRouteChange('register')} className="f6 link dim black db pointer">Registrar</p>
			    </div>
			  </div>
			</main>
		</article>
		)
	}
}

export default SignIn;