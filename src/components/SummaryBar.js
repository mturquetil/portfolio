import { Component } from 'react'
import Octicon, { getIconByName } from '@primer/octicons-react'

import styles from '~/styles/modules/components/SummaryBar.module.scss'

class SummaryBar extends Component {
	render() {
		const { className, informations } = this.props

		return (
			<div className={`${className} ${styles.summaryBar}`}>
				<div className={`${styles.informations}`}>
					{informations.map(information => (
						<div key={`information-${information.id}`} className="information grey-color">
							<Octicon icon={getIconByName(information.icon)} />
							<span className={`${styles.value} bold-text black-color`}>{information.value}</span>
							<span>{information.label}</span>
						</div>
					))}
				</div>
				<div className={`${styles.underline}`}></div>
			</div>
		)
	}
}

export default SummaryBar
