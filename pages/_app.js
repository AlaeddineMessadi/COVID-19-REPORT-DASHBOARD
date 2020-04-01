import App from 'next/app'
import Router from 'next/router';
import { Fragment } from 'react';
import { DefaultSeo } from 'next-seo';


import '../styles/main.scss';
import { trackPageView } from '../utils/analytics';
import SEO from '../utils/next-seo.config';

export default class extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {}

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}

		return { pageProps }
	}

	componentDidMount() {
		Router.onRouteChangeComplete = url => {
			trackPageView(url);
		};
	}

	render() {
		const { Component, pageProps, appProps } = this.props
		return (
			<Fragment>
				<DefaultSeo { ...SEO } />
				<Component { ...pageProps } { ...appProps } />
			</Fragment>
		)
	}
}
