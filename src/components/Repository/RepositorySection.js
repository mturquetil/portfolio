import { Component } from 'react'

import styles from '~/styles/modules/components/Repository/RepositorySection.module.scss'

import Study from '~/components/Study'
import ReadableBlock from '~/components/ReadableBlock'
import Button from '~/components/Button'

class RepositorySection extends Component {
	constructor(props) {
		super(props)

		this.state = {
			active: false
		}

		this.toggle = this.toggle.bind(this)
	}

	toggle() {
		this.setState({ active: !this.state.active })
	}

	render() {
		const { id, title, className, items, children, limit = 0 } = this.props

		const content = children ?
			children :
			<div className={`${styles.items}`}>
				{items.slice(0, limit ? limit : items.length).map((item, idx) => <ReadableBlock key={`${id}-${idx}`} data={item} />)}
			</div>

		return (
			<div id={id} className={`${styles.RepositorySection} ${className}`}>
				<h2 className={`${styles.title} bold-text`}>{title}</h2>
				{content}
				{limit ?
					<div className={`${this.state.active ? styles.show : styles.hidden}`}>
						{items.slice(limit, items.length).map((item, idx) => <ReadableBlock key={`${id}-${idx}`} data={item} />)}
					</div> :
						null}
				{limit ? <Button onClick={this.toggle} theme="readmore" className={`${styles.button}`}>
					{this.state.active ? 'Moins' : 'Plus' }
					<i className="material-icons">{this.state.active ? 'arrow_drop_up' : 'arrow_drop_down'}</i>
				</Button> : null}
			</div>
		)
	}
}

export default RepositorySection
