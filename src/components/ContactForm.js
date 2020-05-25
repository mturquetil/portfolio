import { Component } from 'react'

import styles from '~/styles/modules/components/ContactForm.module.scss'

import InputText from '~/components/Input/InputText'
import InputTextarea from '~/components/Input/InputTextarea'
import Button from '~/components/Button'

class ContactForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			contact: {
				name: '',
				email: '',
				message: ''
			}
		}
	}

	render() {
		const { id, className } = this.props

		return (
			<div id={id} className={`${styles.ContactForm} ${className}`}>
				<h2 className={`bold-text`}>Me contacter</h2>
				<div className={styles.inputs}>
					<InputText
						className="margin-top-l"
						handleChange={(name) => this.setState(state => ({ contact: { ...state.contact, name } }))}
						value={this.state.contact.name}
						placeholder="Nom et prenom"
					/>
					<InputText
						className="margin-top-m"
						handleChange={(email) => this.setState(state => ({ contact: { ...state.contact, email } }))}
						value={this.state.contact.email}
						placeholder="Adresse e-mail"
					/>
					<InputTextarea
						className="margin-top-m"
						handleChange={(message) => this.setState(state => ({ contact: { ...state.contact, message } }))}
						value={this.state.contact.message}
						placeholder="Votre message"
					/>
					<Button className={`${styles.button} margin-top-m`}>
						Envoyer
					</Button>
				</div>
			</div>
		)
	}
}

export default ContactForm

