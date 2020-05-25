import { Component } from 'react'

import styles from '~/styles/modules/components/Input/InputSelect.module.scss'

class InputSelect extends Component {
	constructor (props) {
		super(props);

		this.state = {
			isActive: false
		}
	}

	componentDidMount() {
		document.addEventListener('mousedown', this.handleClick, false);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClick, false);
	}

	handleClick = (e) => {
		if (this.selectNode.contains(e.target)) {
			if (!this.listNode) {
				this.setState({ isActive: !this.state.isActive })
			}
			return;
		}

		this.setState({ isActive: false })
	}

	selected () {
		const option = this.props.options.find(option => option.value === this.props.value)

		return option ? option.name : '(not found)'
	}

	render() {
		const { className, handleChange, label, options, value = 'default' } = this.props

		const List = () => {
			return (
				<ul ref={node => this.listNode = node} className={`border-default ${styles.list}`}>
					{options.map(option => <li key={option.value} onClick={() => { handleChange(option.value); this.setState({ isActive: false }) }}>
						<i className={`l-text material-icons ${option.value !== value ? styles.hidden : null} ${styles.icon}`}>check</i>
						{option.name}
					</li>)}
				</ul>
			)
		}

		return (
			<div ref={node => this.selectNode = node} className={`${className} s-text ${styles.container}`}>
				<div className={`border-default ${styles.select}`}>
					<label>{label}:</label>
					<span className="bold-text">{this.selected()}</span>
					<i className={`l-text material-icons ${styles.icon}`}>arrow_drop_down</i>
				</div>
				{this.state.isActive ? <List /> : null}
			</div>
		)
	}
}

export default InputSelect
