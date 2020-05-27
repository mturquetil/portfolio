import { useState } from 'react'
import { useToasts, ToastProvider } from 'react-toast-notifications'

import styles from '~/styles/modules/components/ContactForm.module.scss'

import InputText from '~/components/Input/InputText'
import InputTextarea from '~/components/Input/InputTextarea'
import Button from '~/components/Button'

const ContactForm = ({ id, className }) => {
	const { addToast } = useToasts()

	const INITIAL_STATE = {
		name: '',
		email: '',
		message: ''
	}

	const [contact, setState] = useState({ ...INITIAL_STATE })

	const sendMail = () => {
		fetch('/api/contact', {
			method: 'POST',
			cache: 'no-cache',
			body: JSON.stringify(contact)
		})
			.then(res => {
				if (!res.ok) {
					throw new Error('Une erreur est survenue')
				}

				return res.text()
			})
			.then(data => {
				addToast(data, { appearance: 'success' })
				setState({ ...INITIAL_STATE })
			})
			.catch(e => addToast(e.message, { appearance: 'error' }))
	}

	return (
		<div id={id} className={`${styles.ContactForm} ${className}`}>
			<h2 className={`bold-text`}>Me contacter</h2>
			<div className={styles.inputs}>
				<InputText
					className="margin-top-l"
					handleChange={(name) => setState(contact => ({ ...contact, name }))}
					value={contact.name}
					placeholder="Nom et prénom"
				/>
				<InputText
					className="margin-top-m"
					handleChange={(email) => setState(contact => ({ ...contact, email }))}
					value={contact.email}
					placeholder="Adresse e-mail"
				/>
				<InputTextarea
					className="margin-top-m"
					handleChange={(message) => setState(contact => ({ ...contact, message }))}
					value={contact.message}
					placeholder="Votre message"
				/>
				<Button onClick={sendMail} className={`${styles.button} margin-top-m`}>
					Envoyer
				</Button>
			</div>
		</div>
	)
}

export default (props) => (
	<ToastProvider autoDismiss placement="bottom-right">
		<ContactForm {...props} />
	</ToastProvider>
)
