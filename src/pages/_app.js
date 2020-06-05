import Head from 'next/head'
import { useEffect } from 'react'

import { initGA } from '~/ga.js'
import RepositoryLayout from '~/layouts/RepositoryLayout.js'
import '~/styles/global.scss'

const app = ({ Component, pageProps }) => {
	const seo = {
		title: 'Maxime TURQUETIL - Développeur Fullstack',
		site: 'https://mturquetil.fr',
		description: 'Maxime Turquetil est une librairie fullstack de 23 ans écrite en code génétique. Passionnée par les évolutions technologiques et le monde open source, elle essaye de se tenir le plus à jour pour pouvoir répondre aux défis de notre époque. Ses utilisations multiples vont de la confection de site web, d’application mobile au développement d’outil métier spécifique. Cette librairie est également en cours de développement de la fonctionnalité DevOps.',
		image: 'https://mturquetil.fr/social.png'
	}

	useEffect(() => {
		if (!window.GA_INITIALIZED) {
			initGA()
			window.GA_INITIALIZED = true
		}
	})

	return (
		<>
			<Head>
				<title>{seo.title}</title>

				<link rel="icon" href="favicon.svg" />
				<link rel="stylesheet" href="styles/fonts/charter/charter.css" type="text/css" />
				<link rel="stylesheet" href="styles/fonts/material-icons/material-icons.css" type="text/css" />

				<meta name="description" content={seo.description} />
				<meta property="fb:app_id" content="602673373940744" />
				<meta property="og:title" content={seo.title} />
				<meta property="og:title" content={seo.title} />
				<meta property="og:type" content="website" />
				<meta property="og:image" content={seo.image} />
				<meta property="og:url" content={seo.site} />
				<meta property="og:description" content={seo.description} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@maturquetil" />
				<meta name="twitter:title" content={seo.title} />
				<meta name="twitter:description" content={seo.description} />
				<meta name="twitter:image" content={seo.image} />
			</Head>
			<RepositoryLayout>
				<Component {...pageProps}/>
			</RepositoryLayout>
		</>
	)
}

export default app
