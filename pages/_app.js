import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import '../assets/global.scss';

class Favv extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<Container>
				<Head>
					<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
					<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
					<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
				</Head>
				<Component {...pageProps} />
			</Container>
		);
	}
}

export default Favv;