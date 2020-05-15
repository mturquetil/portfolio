import { Component } from 'react'
import Octicon, { getIconByName } from '@primer/octicons-react'

import styles from '~/styles/modules/LastCommitBar.module.scss'

class LastCommitBar extends Component {
	render() {
		return (
			<div className={`${styles.lastCommitBar} grey-color`}>
				<div className={`${styles.leftSide} s-text`}>
					<img src="/profil.jpg" />
					<p className={`bold-text black-color ${styles.author}`}>mturquetil</p>
					<p>feat: portfolio update (<span className="blue-color">#1</span>)</p>
				</div>
				<div className={styles.rightSide}>
					<Octicon className="green-color" icon={getIconByName('check')} />
					<p style={{marginLeft: '10px'}}>Latest commit <span style={{fontFamily: 'Consolas'}}>0097A7</span> 1 hour ago</p>
				</div>
			</div>
		)
	}
}

export default LastCommitBar
