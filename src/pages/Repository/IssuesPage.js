import { Component } from 'react'
import ReactGA from 'react-ga'

import styles from '~/styles/modules/pages/Issues/IssuesPage.module.scss'

import IssueStatus from '~/components/Issue/IssueStatus'
import IssuePost from '~/components/Issue/IssuePost'

import { logPageView } from '~/ga.js'

class IssuesPage extends Component {
	componentDidMount () {
		logPageView()
	}

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
