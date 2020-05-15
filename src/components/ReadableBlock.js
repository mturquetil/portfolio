import { Component } from 'react'

import styles from '~/styles/modules/ReadableBlock.module.scss'

import ReadMoreButton from '~/components/ReadMoreButton'

class ReadableBlock extends Component {
	render() {
		const { data } = this.props
		return (
			<div className={styles.readableBlock}>
				<img src={data.imagePath} />
				<h3 className={`${styles.title} bold-text`}>{data.title}</h3>
				{data.period ? <h4 className={`${styles.period} grey-color l-text bold-text`}>{data.period}</h4> : null}
				{/* <p>{data.text}</p> */}
				{data.text ? <ReadMoreButton className={styles.readMore} /> : null }
			</div>
		)
	}
}

export default ReadableBlock
