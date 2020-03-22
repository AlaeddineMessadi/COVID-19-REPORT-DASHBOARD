/**
 * Layout
 */
import Document, { Html, Main, NextScript, Head } from 'next/document'
import FooterSection from '../components/footer'
import Navigation from '../components/navigation'
import { Fragment } from 'react';
export default class Layout extends Document {
	static async getInitialProps(ctx) {
		const isProduction = process.env.NODE_ENV === 'production';
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps, isProduction }
	}

	render() {
		const { isProduction } = this.props;
		return (
			<Html lang="en">
				<Head>
					<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
					<link rel="shortcut icon" href="img/favicon.ico" />
				</Head>

				<Main />

				<FooterSection
					description="Freelance Web Developer"
					url="#"
					urlTitle="Alaeddine Messadi"
				/>
				<NextScript />
			</Html>
		)
	}
}
