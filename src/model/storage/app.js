if (typeof app === 'undefined') {
	let instance = null;

	const Map = require('immutable').Map

	class App extends Map {

		constructor() {
			super();

			if(!instance) {
				instance = this;
			}

			return instance;
		}
	}

	window.app = new App().asMutable()

	window.app.set('session', sessionStorage)
	window.app.set('local', localStorage)
}

export default window.app
