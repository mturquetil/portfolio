import React from 'react'
import Head from 'next/head'
import { connect } from 'react-redux'

import SelectInput from '~/components/inputs/SelectInput'
import TextInput from '~/components/inputs/TextInput'
import TextareaInput from '~/components/inputs/TextareaInput'
import RepositoryBadge from '~/components/repository/RepositoryBadge'
import RepositoryTitle from '~/components/repository/RepositoryTitle'
import RepositoryTab from '~/components/repository/RepositoryTab'
import Tag from '~/components/Tag'
import SummaryBar from '~/components/SummaryBar'
import LastCommitBar from '~/components/LastCommitBar'
import DirectoryItem from '~/components/DirectoryItem'
import Readme from '~/components/Readme'
import ReadMoreButton from '~/components/ReadMoreButton'
import Study from '~/components/Study'
import Button from '~/components/Button'
import ReadableBlock from '~/components/ReadableBlock'
import IssueStatus from '~/components/IssueStatus'
import IssuePost from '~/components/IssuePost'

import styles from '~/styles/modules/HomePage.module.scss'
import issuesStyles from '~/styles/modules/IssuesPage.module.scss'

class HomePage extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			contact: {
				name: '',
				email: '',
				message: '',
			},
			badges: [{
				icon: 'email',
				label: 'Email',
				value: 'maturquetil@gmail.com'
			}, {
				icon: 'phone',
				label: 'Phone',
				value: '06 02 31 91 01'
			}],

			tabs: [{
				id: 0,
				icon: 'code',
				name: 'Code',
				active: true
			}, {
				id: 1,
				icon: 'issue-opened',
				name: 'Issues',
				active: false
			}],

			tags: [{
				name: 'curieux'
			}, {
				name: 'autodidacte'
			}, {
				name: 'passioné'
			}],

			informations: [{
				label: 'professional exp.', value: '2.5 years', icon: 'git-commit'
			}, {
				label: 'studied', value: '5 years', icon: 'mortar-board'
			}, {
				label: 'hobbies', value: '3', icon: 'heart'
			}, {
				label: 'contributors', value: '6', icon: 'organization'
			}],

			directoryItems: [{
				anchor: '#projects',
				name: 'projects',
				commit: 'mon super commit',
				time: '1 hour ago',
				type: 'folder'
			}, {
				anchor: '#experiences',
				name: 'experiences',
				commit: 'mon super commit',
				time: '1 hour ago',
				type: 'folder'
			}, {
				anchor: '#skills',
				name: 'skills',
				commit: 'mon super commit',
				time: '1 hour ago',
				type: 'folder'
			}, {
				anchor: '#hobbies',
				name: 'hobbies',
				commit: 'mon super commit',
				time: '1 hour ago',
				type: 'folder'
			}, {
				anchor: '#studies',
				name: 'studies',
				commit: 'mon super commit',
				time: '1 hour ago',
				type: 'folder'
			}, {
				anchor: '#readme',
				name: 'README.md',
				commit: 'mon super commit',
				time: '1 hour ago',
				type: 'file'
			}, {
				anchor: '#contact',
				name: 'contact',
				commit: 'mon super commit',
				time: '1 hour ago',
				type: 'file'
			}],

			projects: [{
				title: 'Mon super projet',
				imagePath: '/projects/mouse.svg',
				period: 'Juillet 2019 - 2 semaines',
				text: 'mon texte'
			}, {
				title: 'Mon super projet',
				imagePath: '/projects/mouse.svg',
				period: 'Juillet 2019 - 2 semaines',
				text: 'mon texte'
			}, {
				title: 'Mon super projet',
				imagePath: '/projects/mouse.svg',
				period: 'Juillet 2019 - 2 semaines',
				text: 'mon texte'
			}, {
				title: 'Mon super projet',
				imagePath: '/projects/mouse.svg',
				period: 'Juillet 2019 - 2 semaines',
				text: 'mon texte'
			}],

			experiences: [{
				title: 'Mon super projet',
				imagePath: '/projects/mouse.svg',
				text: 'mon texte'
			}, {
				title: 'Mon super projet',
				imagePath: '/projects/mouse.svg',
				period: 'Juillet 2019 - 2 semaines',
				text: 'mon texte'
			}, {
				title: 'Mon super projet',
				imagePath: '/projects/mouse.svg',
				period: 'Juillet 2019 - 2 semaines',
				text: 'mon texte'
			}, {
				title: 'Mon super projet',
				imagePath: '/projects/mouse.svg',
				period: 'Juillet 2019 - 2 semaines',
				text: 'mon texte'
			}],

			skills: [{
				title: 'Javascript',
				imagePath: '/projects/mouse.svg',
			}, {
				title: 'Dart',
				imagePath: '/projects/mouse.svg',
			}, {
				title: 'Node.js',
				imagePath: '/projects/mouse.svg',
			}, {
				title: 'MongoDB',
				imagePath: '/projects/mouse.svg',
			}],

			hobbies: [{
				title: 'Climbing',
				imagePath: '/projects/mouse.svg',
			}, {
				title: 'Piano',
				imagePath: '/projects/mouse.svg',
			}, {
				title: 'Programming',
				imagePath: '/projects/mouse.svg',
			}],

			studies: [{
				school: 'IUT Informatique de IFS',
				period: '2015 - 2017',
				diploma: 'DUT Informatique',
			}, {
				school: 'IMIE Caen',
				period: '2017 - 2019',
				diploma: 'Titre Concepteur/developpeur informatique',
			}, {
				school: 'Ecole 404',
				period: '2019 - 2020',
				diploma: 'Titre Chef de projet CNAM',
			}]
		}


		this.handleSelectChange = this.handleSelectChange.bind(this)
		this.handleTextChange = this.handleTextChange.bind(this)
		this.handleTextareaChange = this.handleTextareaChange.bind(this)
		this.repositoryTabClick = this.repositoryTabClick.bind(this)
	}

	repositoryTabClick(id) {
		const tabs = this.state.tabs.map(tab => ({ ...tab, active: false }))
		tabs[id].active = true

		this.setState({ tabs })
	}

	handleSelectChange(lang) {
		this.props.dispatch({ type: 'SWITCH', lang })
	}

	handleTextChange(value) {
		this.props.dispatch({ type: 'SWITCH', lang: value })
	}

	handleTextareaChange(value) {
		this.props.dispatch({ type: 'SWITCH', lang: value })
	}

	render() {
		return (
			<div className="container">
				<Head>
					<title>portfolio-front locale </title>
					<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
				</Head>
				<main className={styles.repository}>
					<div className={styles.header}>
						<div className={styles.headerContainer}>
							<div className={styles.topLine}>
								<RepositoryTitle
									owner="your-company"
									repository="maxime-turquetil"
								/>
								<div className={styles.badges}>
									{this.state.badges.map((badge, idx) => (
										<RepositoryBadge
											key={idx}
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
										handleClick={this.repositoryTabClick}
									/>
								))}
							</div>
						</div>
					</div>
					<div className={issuesStyles.issues}>
						<h2 style={{fontSize: '32px'}} className={`margin-top`}>En recherche d'emploi <span className="grey-color">#1</span></h2>
						<IssueStatus />
						<IssuePost className="margin-top" />
					</div>
					{/*<div className={styles.homepage}>
						<div className={styles.homepageContainer}>
							<div className={styles.description}>
								<p className="l-text">Hi ! My name is Maxime, I am 23 years old fullstack developer and open source adept, here's my portfolio.</p>
								{this.state.tags.map(tag => (
									<Tag
										tag={tag}
										className={styles.tags}
									/>
								))}
							</div>
							<SummaryBar
								className="margin-top"
								informations={this.state.informations}
							/>
							<div className={`margin-top ${styles.repositoryStatus}`}>
								<SelectInput
									options={[{ name: 'master', value: 'master' }]}
									className={styles.branches}
									handleChange={value => value}
									value="master"
									label="Branch"
								/>
								<LastCommitBar />
							</div>
							<div className={`${styles.directory} margin-top-small`}>
								{this.state.directoryItems.map(item => (
									<DirectoryItem
										item={item}
										className={styles.item}
									/>
								))}
							</div>
							<div id="readme">
								<Readme
									className="margin-top"
								/>
							</div>
							<div id="projects" className={styles.readableContainer}>
								<h2 className={`margin-top bold-text`}>Projects</h2>
								<div className={`${styles.grid} ${styles.sectionMargin}`}>
									{this.state.projects.map(project => (
										<ReadableBlock
											data={project}
										/>
									))}
								</div>
							</div>
							<div id="experiences" className={styles.readableContainer}>
								<h2 className={`margin-top bold-text`}>Experiences</h2>
								<div className={`${styles.grid} ${styles.sectionMargin}`}>
									{this.state.experiences.map(experience => (
										<ReadableBlock
											data={experience}
										/>
									))}
								</div>
							</div>
							<div id="skills" className={styles.readableContainer}>
								<h2 className={`margin-top bold-text`}>Skills</h2>
								<div className={`${styles.sectionMargin}`}>
									<div className={styles.grid}>
										{this.state.skills.map(skill => (
											<ReadableBlock
												data={skill}
											/>
										))}
									</div>
									<ReadMoreButton className="margin-top"/>
								</div>
							</div>
							<div id="hobbies" className={styles.readableContainer}>
								<h2 className={`margin-top bold-text`}>Hobbies</h2>
								<div className={`${styles.sectionMargin} ${styles.grid}`}>
									{this.state.hobbies.map(hobby => (
										<ReadableBlock
											data={hobby}
										/>
									))}
								</div>
							</div>
							<div id="studies" className={`${styles.readableContainer} ${styles.studiesContainer}`}>
								<h2 className={`margin-top bold-text`}>Studies</h2>
								<div className={`${styles.studies} ${styles.sectionMargin}`}>
									{this.state.studies.map((study, idx) => (
										<>
											<Study
												data={study}
											/>
											{idx !== this.state.studies.length - 1 ? <div className={styles.delimiter}></div> : null}
										</>
									))}
								</div>
							</div>
							<div id="contact" className={`${styles.readableContainer}  ${styles.contact}`}>
								<h2 style={{textDecoration: 'underline'}} className={`margin-top bold-text`}>Me contacter</h2>
								<TextInput
									className="margin-top"
									handleChange={(name) => this.setState(state => ({ contact: { ...state.contact, name } }))}
									value={this.state.contact.name}
									placeholder="Nom et prenom"
								/>
								<TextInput
									className="margin-top-small"
									handleChange={(email) => this.setState(state => ({ contact: { ...state.contact, email } }))}
									value={this.state.contact.email}
									placeholder="Adresse e-mail"
								/>
								<TextareaInput
									className="margin-top-small"
									handleChange={(message) => this.setState(state => ({ contact: { ...state.contact, message } }))}
									value={this.state.contact.message}
									placeholder="Votre message"
								/>
								<Button className={`${styles.button} margin-top-small`} />
							</div>
						</div>
					</div>
					*/}
				</main>
			</div>
		)
	}
}

export default connect(state => ({ ... state }))(HomePage)
