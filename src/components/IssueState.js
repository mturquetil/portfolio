import { Component } from 'react'
import Octicon, { getIconByName } from '@primer/octicons-react'

import styles from '~/styles/modules/IssueState.module.scss'

class IssueState extends Component {
	render() {
		return (
			<div className={`white-color l-text bold-text ${styles.issueState}`}>
				<i className="material-icons" style={{fontSize: '26px'}}>error_outline</i>
				<p className={styles.state}>Open</p>
			</div>
		)
	}
}

export default IssueState
