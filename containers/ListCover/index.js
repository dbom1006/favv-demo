import css from "./styles.scss";
import CardCover from "../../components/CardCover";

export default function ListCover() {
	const covers = [{
		id: 1,
		name: '셀럽이름',
		description: '💘 to. 팬이름',
		cover: '/static/images/1.png'
	}, {
		id: 2,
		name: '보겸',
		description: '💘 to. 팬이름',
		cover: '/static/images/2.png'
	}, {
		id: 3,
		name: '세임디',
		description: '💘 to. 팬이름',
		cover: '/static/images/3.png'
	}, {
		id: 4,
		name: '영국남자',
		description: '💘 to. 팬이름',
		cover: '/static/images/4.png'
	}, {
		id: 5,
		name: '와썹맨',
		description: '💘 to. 팬이름',
		cover: '/static/images/5.png'
	}, {
		id: 6,
		name: '일이삼사오육칠팔구십',
		description: '💘 to. 팬이름',
		cover: '/static/images/6.png'
	}, {
		id: 7,
		name: '일이삼사오육칠팔구십',
		description: '💘 to. 팬이름',
		cover: '/static/images/7.png'
	}, {
		id: 8,
		name: '일이삼사오육칠팔구십',
		description: '💘 to. 팬이름',
		cover: '/static/images/8.png'
	}, {
		id: 9,
		name: '일이삼사오육칠팔구십',
		description: '💘 to. 팬이름',
		cover: '/static/images/9.png'
	}, {
		id: 10,
		name: '일이삼사오육칠팔구십',
		description: '💘 to. 팬이름',
		cover: '/static/images/10.png'
	}, {
		id: 11,
		name: '일이삼사오육칠팔구십',
		description: '💘 to. 팬이름',
		cover: '/static/images/11.png'
	}, {
		id: 12,
		name: '셀럽이름',
		description: '💘 to. 팬이름',
		cover: '/static/images/1.png'
	}]

	return (
		<div className={css.covers}>
			<h2>sed do eiusmod tempor incididunt ut</h2>
			<div className={css.gridCover}>
				{covers.map(cover => <CardCover key={cover.id} cover={cover} />)}
			</div>
		</div>
	);
}