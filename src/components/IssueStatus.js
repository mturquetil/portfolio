import { Component } from 'react'

import IssueState from '~/components/IssueState'

import styles from '~/styles/modules/IssueStatus.module.scss'

class IssueStatus extends Component {
	render() {
		return (
			<div className={`margin-top-small ${styles.issueStatus}`}>
				<IssueState />
				<div className={`l-text grey-color ${styles.content}`}>
					<p><span className="bold-text">mturquetil</span> opened this issue 1 day ago</p>
					<p>0 comment</p>
				</div>
			</div>
		)
	}
}

export default IssueStatus
