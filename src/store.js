import { createStore, compose } from 'redux'

const locale = (state = { locale: 'fr' }, action) => {
	switch (action.type) {
		case 'SWITCH':
			return { ...state, locale: action.lang }
		default:
			return state
	}
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
	locale,
	composeEnhancers()
)

export default store
