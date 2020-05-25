import { Component } from 'react'

import styles from '~/styles/modules/components/ArticleReader.module.scss'

import Media from '~/components/Media'

class ArticleReader extends Component {
	render() {
		const { article, className, onClose } = this.props
		return (
			<div className={`${styles.ArticleReader} ${className}`}>
				<i onClick={onClose} className={`material-icons ${styles.close}`}>close</i>
				<div className={styles.container}>
					<img className={styles.picture} src={article.imagePath} />
					<h2 className={`${styles.title} margin-top-xl bold-text`}>{article.title}</h2>
					{article.period ? <h4 className={`${styles.period} margin-top-s grey-color l-text bold-text`}>{article.period}</h4> : null}
					{article.media ? <Media className="margin-top-xl" media={article.media} /> : null}

					<div className={`${styles.content} ${article.media ? 'margin-top-l' : 'margin-top-xl'}`}>
						{article.text}
					</div>
				</div>
			</div>
		)
	}
}

export default ArticleReader
