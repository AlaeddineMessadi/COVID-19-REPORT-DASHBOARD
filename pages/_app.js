import App from 'next/app'
import '../styles/main.scss'



export default class extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {}

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}

		return { pageProps }
	}

	render() {
		const { Component, pageProps, appProps } = this.props
		return (<Component { ...pageProps } { ...appProps } />)
	}
}
