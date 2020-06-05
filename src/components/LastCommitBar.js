import { Component } from 'react'
import Octicon, { getIconByName } from '@primer/octicons-react'

import styles from '~/styles/modules/components/LastCommitBar.module.scss'

class LastCommitBar extends Component {
	render() {
		const { className } = this.props

		return (
			<div className={`${className} ${styles.lastCommitBar} grey-color`}>
				<div className={`${styles.leftSide} s-text`}>
					<img alt="Photo de profil" src="/profil.webp" />
					<p className={`bold-text black-color ${styles.author}`}>mturquetil</p>
					<p className="dark-grey-color">feat: update dotfiles (<span className="blue-color">#31</span>)</p>
				</div>
				<div className={styles.rightSide}>
					<Octicon className="tablet-desktop green-color" icon={getIconByName('check')} />
					<p className="dark-grey-color tablet-desktop">Latest commit <span className={styles.commitNumber}>0097A7</span></p>
					<p className="dark-grey-color mobile">27 minutes ago</p>
				</div>
			</div>
		)
	}
}

export default LastCommitBar
