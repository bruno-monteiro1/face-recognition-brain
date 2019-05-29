import React, { Component } from 'react';
// import './Register.css'

class Register extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			email: '',
			password: ''
		}
	}

	onNameChange = (evt) => {
		this.setState({name: evt.target.value});
	}

	onEmailChange = (evt) => {
		this.setState({email: evt.target.value});
	}

	onPasswordChange = (evt) => {
		this.setState({password: evt.target.value});
		
	}

	onSubmitRegister = () => {
		fetch('https://dry-badlands-61720.herokuapp.com/register', {
			method: 'post',
			headers: {'content-type': 'application/json'},
			body: JSON.stringify({
				name: this.state.name,
				email: this.state.email,
				password: this.state.password
			})
		})
		.then(response => {
			return response.json();
		})
		.then(user => {
			if(user.id) {
				this.props.loadUser(user);
				this.props.onRouteChange('home');
			}
		})
	}

	render() {
		return (
		<article className="br3 bg-white-10 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
			<main className="pa4 black-80">
			  <div className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f2 fw6 ph0 mh0">Registrar</legend>
			      <div className="mt2">
			        <label className="db fw6 lh-copy f6" htmlFor="nome">Nome</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" onChange={this.onNameChange} />
			      </div>
			      <div className="mt2">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" onChange={this.onEmailChange}/>
			      </div>
			      <div className="mv2">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Senha</label>
			        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" onChange={this.onPasswordChange}/>
			      </div>
			    </fieldset>
			    <div className="">
			      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Registrar" onClick={this.onSubmitRegister}/>
			    </div>
			  </div>
			</main>
		</article>
		)
	}
}

export default Register;