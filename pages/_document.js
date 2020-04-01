/**
 * Layout
 */
import Document, { Html, Main, NextScript, Head } from 'next/document'
import FooterSection from '../components/footer'
import { Fragment } from 'react';
import { NextSeo } from 'next-seo';

export default class Layout extends Document {
	static async getInitialProps(ctx) {
		const isProduction = process.env.NODE_ENV === 'production';
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps, isProduction }
	}

	setGoogleTags() {
		return {
			__html: `
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());

				gtag('config', '${process.env.ANALYTICS_CORONA_ID}');
      `
		};
	}

	render() {
		const { isProduction } = this.props;
		return (
			<Html lang="en">
				<Head>
					<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
					<link rel="manifest" href="/site.webmanifest" />
					<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
				</Head>


				<Main />

				<FooterSection
					description={ ` © ${new Date().getFullYear()} - Made by ` }
					url="https://almessadi.com"
					urlTitle=" ALMESSADI"
				/>
				<NextScript />
				<script defer src="https://use.fontawesome.com/releases/v5.7.0/js/all.js"></script>

				{ isProduction && (
					<Fragment>
						<script
							async
							src={ `https://www.googletagmanager.com/gtag/js?id=${process.env.ANALYTICS_CORONA_ID}` }
						/>
						<script dangerouslySetInnerHTML={ this.setGoogleTags() } />
					</Fragment>
				) }

			</Html>
		)
	}
}
