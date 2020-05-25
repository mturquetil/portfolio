import { Provider } from 'react-redux'
import Head from 'next/head'

import store from '~/store'
import RepositoryLayout from '~/layouts/RepositoryLayout.js'
import '~/styles/global.scss'

const app = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
				<link href="https://fonts.googleapis.com/css2?family=Lora:wght@500&display=swap" rel="stylesheet" />
			</Head>
			<Provider store={store}>
				<RepositoryLayout>
					<Component {...pageProps}/>
				</RepositoryLayout>
			</Provider>
		</>
	)
}

export default app
