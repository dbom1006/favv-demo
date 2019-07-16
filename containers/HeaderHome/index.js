import css from "./styles.scss";
import Link from 'next/link'

export default function HeaderHome() {
	const imagesBackground = [
		'/static/images/video_play_01.png',
		'/static/images/video_play_02.png',
		'/static/images/video_play_03.png',
	]
	const logo = '/static/images/favv.png';
	
	return (
		<div className={css.header}>
			<div className={css.banner}>
				{imagesBackground.map((image, index) => <img key={index} src={image} />)}
			</div>
			<div className={css.nav + ' container'}>
				<div className={css.logo}>
					<img src={logo}></img>
				</div>
				<div className={css.navAction}>
					<Link href="/">가입하기</Link>
					<Link href="/">로그인</Link>
				</div>
			</div>
			<div className={css.content + ' container'}>
				<h1>Lorem ipsum dolor sit amet 💖</h1>
				<button className="btn">지금 바로 축하받기</button>
			</div>
		</div>
	);
}