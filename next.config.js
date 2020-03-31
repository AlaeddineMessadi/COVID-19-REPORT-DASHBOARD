// next.config.js
const withSass = require('@zeit/next-sass')
const withFonts = require('next-fonts')
const withSourceMap = require('@zeit/next-source-maps')
const withPlugins = require('next-compose-plugins')


if (process.env.NODE_ENV === 'development') {
	require('dotenv').config()
}

const nextConfig = {
	target: 'serverless',
	env: {
		API_URL: process.env.API_URL,
		MAPBOXGL_TOKEN: process.env.MAPBOXGL_TOKEN,
		APILIST_TOKEN: process.env.APILIST_TOKEN,
		ANALYTICS_CORONA_ID: process.env.ANALYTICS_CORONA_ID,
	}

}
module.exports = withPlugins(
	[
		withSass,
		withSourceMap,
		[
			withFonts,
			{
				enableSvg: true,
			},
		],
	],
	nextConfig
)
