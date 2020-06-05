import { Component } from 'react'

import styles from '~/styles/modules/components/Media.module.scss'

class Media extends Component {
	render() {
		const { media, className } = this.props

		let content = null

		switch (media.type) {
			case 'video':
				content = <iframe title="iframe-title" className={styles.media} src={media.src} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				break;
			case 'image':
				<img alt={media.alt} className={styles.media} src={media.src} />
				break;
			default:
				break;
		}
		return (
			<div className={className}>
				{content}
			</div>
		)
	}
}

export default Media
