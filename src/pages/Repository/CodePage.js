import { Component } from 'react'
import Head from 'next/head'
import { connect } from 'react-redux'

import RepositoryPresentation from '~/components/Repository/RepositoryPresentation'
import RepositoryStatus from '~/components/Repository/RepositoryStatus'
import RepositoryDirectory from '~/components/Repository/RepositoryDirectory'
import Readme from '~/components/Readme'
import RepositorySection from '~/components/Repository/RepositorySection'
import Study from '~/components/Study'
import Skills from '~/components/Skills'
import ContactForm from '~/components/ContactForm'

import styles from '~/styles/modules/pages/Repository/CodePage.module.scss'

// data
import experiences from '~/data/experiences'
import skills from '~/data/skills'
import directoryItems from '~/data/directoryItems'
import projects from '~/data/projects'
import hobbies from '~/data/hobbies'
import studies from '~/data/studies'

class CodePage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			// data {{{
			contact: {
				name: '',
				email: '',
				message: '',
			},

			experiences,
			skills,
			directoryItems,
			projects,
			hobbies,
			studies,
			// }}}
		}
	}


	render() {
		return (
			<div className="margin-top-l">
				<Head>
					<title>portfolio-front locale</title>
				</Head>
				<main>
					<div className={styles.container}>
						<RepositoryPresentation />
						<RepositoryStatus />
						<RepositoryDirectory
							dirs={this.state.directoryItems}
						/>
						<Readme
							id="readme"
							className={`${styles.anchor} margin-top-l`}
						/>
						<RepositorySection
							title="Projects"
							id="projects"
							key="projects"
							items={this.state.projects}
							className={`${styles.anchor} margin-top-xxl`}
						/>
						<RepositorySection
							title="Experiences"
							id="experiences"
							key="experiences"
							big
							items={this.state.experiences}
							className={`${styles.anchor} margin-top-xxl`}
						/>
						<RepositorySection
							title="Skills"
							id="skills"
							key="skills"
							className={`${styles.anchor} margin-top-xxl`}
						>
							<Skills limit={6} />
						</RepositorySection>
						<RepositorySection
							title="Hobbies"
							id="hobbies"
							key="hobbies"
							items={this.state.hobbies}
							className={`${styles.anchor} margin-top-xxl`}
						/>
						<RepositorySection
							title="Studies"
							id="studies"
							key="studies"
							className={`${styles.anchor} margin-top-xxl`}
						>
							<div className={`${styles.studies} margin-top-xl`}>
								{this.state.studies.map((study, idx) => (
									<div key={`study-${idx}`}>
										<Study
											data={study}
										/>
										{idx !== this.state.studies.length - 1 ? <div className={styles.delimiter}></div> : null}
									</div>
								))}
							</div>
						</RepositorySection>
						<ContactForm className={`${styles.anchor} margin-top-xxl`} id="contact" />
					</div>
				</main>
			</div>
		)
	}
}

export default CodePage
