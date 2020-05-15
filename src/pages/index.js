import React from 'react'
import store from '~/store'
import { Provider } from 'react-redux'

import HomePage from '~/pages/HomePage'

class App extends React.Component {
	render () {
		return (
			<Provider store={store}>
				<HomePage />
			</Provider>
		)
	}
}

export default App
