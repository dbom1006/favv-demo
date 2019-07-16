import css from "./styles.scss";
import CardCover from "../../components/CardCover";

export default function ListCover() {
	const covers = [{
		id: 1,
		name: '셀럽이름',
		description: '💘 to. 팬이름',
		cover: '/static/images/cover-1.png'
	}, {
		id: 2,
		name: '셀럽이름',
		description: '💘 to. 팬이름',
		cover: '/static/images/cover-1.png'
	}, {
		id: 3,
		name: '셀럽이름',
		description: '💘 to. 팬이름',
		cover: '/static/images/cover-1.png'
	}, {
		id: 4,
		name: '셀럽이름',
		description: '💘 to. 팬이름',
		cover: '/static/images/cover-1.png'
	}, {
		id: 5,
		name: '셀럽이름',
		description: '💘 to. 팬이름',
		cover: '/static/images/cover-1.png'
	}, {
		id: 6,
		name: '셀럽이름',
		description: '💘 to. 팬이름',
		cover: '/static/images/cover-1.png'
	}, {
		id: 7,
		name: '셀럽이름',
		description: '💘 to. 팬이름',
		cover: '/static/images/cover-1.png'
	}, {
		id: 8,
		name: '셀럽이름',
		description: '💘 to. 팬이름',
		cover: '/static/images/cover-1.png'
	}, {
		id: 9,
		name: '셀럽이름',
		description: '💘 to. 팬이름',
		cover: '/static/images/cover-1.png'
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