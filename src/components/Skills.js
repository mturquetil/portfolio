import { Component } from 'react'

import styles from '~/styles/modules/components/Skills.module.scss'

import skills from '~/data/skills'

import Skill from '~/components/Skill'
import Button from '~/components/Button'

class Skills extends Component {
	constructor(props) {
		super(props)

		this.state = {
			active: false,
			skills
		}

		this.toggle = this.toggle.bind(this)
	}

	toggle() {
		this.setState({ active: !this.state.active })
	}

	render() {
		const { limit } = this.props

		return (
			<div className={`${styles.skills}`}>
				{this.state.skills.slice(0, limit ? limit : this.state.skills.length).map((skill, idx) => <Skill key={`skill-${idx}`} skill={skill} />)}
				{limit ?
					<div className={`${this.state.active ? styles.show : styles.hidden}`}>
						{this.state.skills.slice(limit, this.state.skills.length).map((skill, idx) => <Skill key={`skill-${idx + limit}`} skill={skill} />)}
					</div> :
						null}
				{limit ? <Button onClick={this.toggle} theme="readmore" className={`${styles.button}`}>
					{this.state.active ? 'Moins' : 'Plus' }
					<i className="material-icons">{this.state.active ? 'arrow_drop_up' : 'arrow_drop_down'}</i>
				</Button> : null}
			</div>
		)
	}
}

export default Skills
