import Head from 'next/head'

import RepositoryLayout from '~/layouts/RepositoryLayout.js'
import '~/styles/global.scss'

const app = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
				<link href="/fonts/charter/charter.css" rel="stylesheet" />
			</Head>
			<RepositoryLayout>
				<Component {...pageProps}/>
			</RepositoryLayout>
		</>
	)
}

export default app
