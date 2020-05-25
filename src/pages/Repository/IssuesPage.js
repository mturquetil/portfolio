import { Component } from 'react'

import styles from '~/styles/modules/pages/Issues/IssuesPage.module.scss'

import IssueStatus from '~/components/Issue/IssueStatus'
import IssuePost from '~/components/Issue/IssuePost'

class IssuesPage extends Component {

	render() {
		return (
			<div className={styles.issues}>
				<h2 style={{fontSize: '32px'}} className={`margin-top-l`}>En recherche d'emploi <span className="grey-color">#1</span></h2>
				<IssueStatus className="margin-top-m" />
				<IssuePost className="margin-top-l" />
			</div>
		)
	}
}

export default IssuesPage
