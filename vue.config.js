const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
// @see https://github.com/chrisvfritz/prerender-spa-plugin

module.exports = {
	// options...
	publicPath:
		process.env.NODE_ENV === "production"
			? "https://api.greenpeace.org.hk/2020/petition/zh-hk.2020.oceans.plastic_supermarket.general.signup.na.mc/"
			: "/",

	outputDir: 'build',

	assetsDir: 'static',

	filenameHashing: true,

	configureWebpack:  {
		plugins: process.env.NODE_ENV === 'production' ? [
			new PrerenderSPAPlugin({
				// Required - The path to the webpack-outputted app to prerender.
				staticDir: path.join(__dirname, 'build'),
				// Required - Routes to render.
				routes: [ '/'],
			})
		] : []
	},
	devServer: {
		disableHostCheck: true
	}
};
