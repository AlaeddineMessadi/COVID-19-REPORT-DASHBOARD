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
				<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.19.0/prism.min.js" />
				<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.19.0/plugins/autoloader/prism-autoloader.min.js" />


				{ isProduction && (
					<Fragment>
						<script
							async
							src="https://www.googletagmanager.com/gtag/js?id=UA-48019163-8"
						/>
						<script dangerouslySetInnerHTML={ this.setGoogleTags() } />
					</Fragment>
				) }
			</Html>
		)
	}
}
