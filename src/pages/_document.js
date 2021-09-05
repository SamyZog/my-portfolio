import NextDocument, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
					<link rel="manifest" href="/favicon/site.webmanifest" />
					<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#9d4edd" />
					<meta name="msapplication-TileColor" content="#603cba" />
					<meta name="theme-color" content="#1f252d" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
					<link
						href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;400;700&family=Poppins:wght@100;400;700&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<script
						dangerouslySetInnerHTML={{
							__html: `(function(){
						const cachedTheme = localStorage.getItem('sz_theme');
						if(cachedTheme) {
							document.body.classList.add(cachedTheme);
						} else {
							document.body.classList.add('light');
							localStorage.setItem('sz_theme', 'light');
						}
					}())`,
						}}
					/>
					<Main />
					<div id="modal" />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
