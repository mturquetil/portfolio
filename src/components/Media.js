import { Component } from 'react'

class Media extends Component {
	render() {
		const { media, width = '100%', height = '400px', className } = this.props

		let content = null

		const style = {
			width: width,
			height: height
		}

		switch (media.type) {
			case 'video':
				content = <iframe style={{...style}} src={media.src} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				break;
			case 'image':
				<img style={{...style}} src={media.src} />
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
