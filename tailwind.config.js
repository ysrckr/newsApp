const path = require('path')
module.exports = {
	content: [
		path.resolve(__dirname, 'src/*.html'),
		path.resolve(__dirname, 'src/js/*.js'),
	],
	future: {
		// removeDeprecatedGapUtilities: true,
		// purgeLayersByDefault: true,
	},
	purge: [],
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [],
}
