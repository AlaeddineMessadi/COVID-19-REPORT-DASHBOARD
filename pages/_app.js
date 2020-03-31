import App from 'next/app'
import '../styles/main.scss';
import Router from 'next/router';
import GA, { Analytics, trackPageView } from '../utils/analytics';


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
		return (<Component { ...pageProps } { ...appProps } />)
	}
}
