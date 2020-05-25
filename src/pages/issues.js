import React from 'react'
import { Provider } from 'react-redux'

import RepositoryIssuesPage from '~/pages/Repository/IssuesPage.js'

class IssuesPage extends React.Component {
	render () {
		return (
			<RepositoryIssuesPage />
		)
	}
}

export default IssuesPage
