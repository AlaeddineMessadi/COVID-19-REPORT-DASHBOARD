// next.config.js
const withSass = require('@zeit/next-sass')
const withFonts = require('next-fonts')
const withSourceMap = require('@zeit/next-source-maps')
const withPlugins = require('next-compose-plugins')

const nextConfig = {
	target: 'serverless',
	env: {
		API_URL: process.env.API_URL
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
