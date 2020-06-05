import { Component } from 'react'

import styles from '~/styles/modules/components/ReadableBlock.module.scss'

import Button from '~/components/Button'
import ArticleReader from '~/components/ArticleReader'

class ReadableBlock extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isOpen: false
		}

		this.handleClick = this.handleClick.bind(this)
		this.preventScroll = this.preventScroll.bind(this)
	}

	preventScroll() {
		this.state.isOpen ? document.body.classList.remove('body-hidden') : document.body.classList.add('body-hidden')
	}

	handleClick() {
		this.setState({ isOpen: !this.state.isOpen })
		this.preventScroll()
	}

	render() {
		const { data, style, className } = this.props

		return (
			<div className={`${styles.readableBlock} ${className}`}>
				<div>
					<img alt={data.alt} className={styles.logo} src={data.imagePath} />
					<h3 className={`${styles.title} bold-text`}>{data.title}</h3>
					{data.period ? <h4 className={`${styles.period} grey-color l-text bold-text`}>{data.period}</h4> : null}
				</div>
				{data.text ? <ArticleReader isOpen={this.state.isOpen} onClose={this.handleClick} className={`${styles.ArticleReader} ${this.state.isOpen ? `${styles.active}` : null}`} article={data}>
					<div className={styles.content}>
						{data.text}
					</div>
				</ArticleReader> : null}
				{data.text ?
					<Button
						onClick={this.handleClick}
						uppercase
						theme="readmore"
						className={`margin-top-m`}
					>
						Lire
						<i className={`${styles.icon} material-icons`}>visibility</i>
					</Button> : null}
			</div>
		)
	}
}

export default ReadableBlock
