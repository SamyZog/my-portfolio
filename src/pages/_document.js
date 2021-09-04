import NextDocument, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<Head>
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
