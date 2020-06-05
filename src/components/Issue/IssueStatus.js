import { Component } from 'react'

import styles from '~/styles/modules/components/Issue/IssueStatus.module.scss'

class IssueStatus extends Component {
	render() {
		const { className } = this.props

		return (
			<div className={`${className} ${styles.issueStatus}`}>
				<div className={`white-color l-text bold-text ${styles.issueState}`}>
					<i className={`${styles.icon} material-icons`}>error_outline</i>
					<p className={styles.state}>Open</p>
				</div>
				<div className={`l-text grey-color ${styles.content}`}>
					<p className={styles.opened}><span className="bold-text">mturquetil</span> opened this issue 1 day ago</p>
					<p className="mobile">0 comment</p>
				</div>
			</div>
		)
	}
}

export default IssueStatus
