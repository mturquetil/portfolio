import { Component } from 'react'
import Router from 'next/router'

import styles from '~/styles/modules/layouts/RepositoryLayout.module.scss'

import RepositoryTitle from '~/components/Repository/RepositoryTitle'
import RepositoryTab from '~/components/Repository/RepositoryTab'
import RepositoryBadge from '~/components/Repository/RepositoryBadge'

class RepositoryLayout extends Component {
	constructor(props) {
		super(props)

		this.state = {
			badges: [{
				id: 0,
				icon: 'article',
				label: '',
				value: 'blog.mturquetil.fr'
			}, {
				id: 1,
				icon: 'email',
				label: 'Email',
				value: 'maxime@mturquetil.fr'
			}, {
				id: 2,
				icon: 'phone',
				label: 'Phone',
				value: '06 02 31 91 01'
			}],

			tabs: [{
				id: 0,
				icon: 'code',
				name: 'Code',
				path: '/',
				active: true
			}, {
				id: 1,
				icon: 'issue-opened',
				name: 'Issues',
				count: 1,
				path: '/issues',
				active: false
			}]
		}

		this.changeTab = this.changeTab.bind(this)
	}

	componentDidMount() {
		const id = this.state.tabs.find(tab => tab.path === Router.router.route).id
		this.changeTab(id)
	}

	changeTab(id) {
		const tabs = this.state.tabs.map(tab => ({ ...tab, active: false }))
		tabs[id].active = true

		this.setState({ tabs })
		Router.push(tabs[id].path)
	}

	render() {
		const { children: Page } = this.props

		return (
			<div className={styles.repository}>
				<div className={styles.header}>
					<div className={styles.headerContainer}>
						<div className={`${styles.topLine} margin-top-m`}>
							<RepositoryTitle
								owner="my-portfolio"
								repository="maxime-turquetil"
								className={styles.RepositoryTitle}
							/>
							<div className={styles.badges}>
								{this.state.badges.map(badge => (
									<RepositoryBadge
										key={`badge-${badge.id}`}
										className={styles.badge}
										badge={badge}
									/>
								))}
							</div>
						</div>
						<div className={styles.bottomLine}>
							{this.state.tabs.map(tab => (
								<RepositoryTab
									key={`tab-${tab.id}`}
									tab={tab}
									className={styles.tab}
									handleClick={this.changeTab}
								/>
							))}
						</div>
					</div>
				</div>
				<div className={styles.pageContainer}>
					{Page}
				</div>
			</div>
		)
	}
}

export default RepositoryLayout
