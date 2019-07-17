import React from 'react';
import css from "./styles.scss";
import Link from 'next/link'

class HeaderHome extends React.Component {
	state = {
		dropdown: false
	}

	componentDidMount = () => {
		document.addEventListener('mousedown', this.handleClickOutside);
	}

	componentWillUnmount = () => {
		document.removeEventListener('mousedown', this.handleClickOutside);
	}

	handleClickOutside = (event) => {
		if (this.menuRef && !this.menuRef.contains(event.target)) {
			this.setState({ dropdown: false });
		}
	}


	render() {
		const imagesBackground = [
			'/static/images/video_play_01.png',
			'/static/images/video_play_02.png',
			'/static/images/video_play_03.png',
		]
		const logo = '/static/images/favv.png';
		const { dropdown } = this.state;
		return (
			<div className={css.header}>
				<div className={css.banner}>
					{imagesBackground.map((image, index) => <img key={index} src={image} />)}
				</div>
				<div className={css.nav + ' container'}>
					<div className={css.logo}>
						<img src={logo}></img>
					</div>
					<span ref={el => this.menuRef = el} className={css.menu} onClick={() => this.setState({ dropdown: !dropdown })}></span>
					<div className={css.navAction + ' ' + (dropdown ? css.mobileDropdown : '')}>
						<Link href="/">가입하기</Link>
						<Link href="/">로그인</Link>
					</div>
				</div>
				<div className={css.content + ' container'}>
					<h1>최애 💖 크리에이터가 보내는 영상 축하</h1>
					<button className="btn">지금 바로 축하받기</button>
				</div>
			</div>
		);
	}

}

export default HeaderHome;