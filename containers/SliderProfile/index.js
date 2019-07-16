import css from "./styles.scss";
import Slider from "react-slick";
import CardProfile from "../../components/CardProfile";

export default function SliderProfile() {
	const profiles = [{
		id: 1,
		name: '셀럽이름',
		avatar: 'https://i.pravatar.cc/300?u=11'
	}, {
		id: 2,
		name: '일이삼사오육칠팔구십',
		avatar: 'https://i.pravatar.cc/300?u=20'
	}, {
		id: 3,
		name: '셀럽이름',
		avatar: 'https://i.pravatar.cc/300?u=24'
	}, {
		id: 4,
		name: '셀럽이름',
		avatar: 'https://i.pravatar.cc/300?u=1'
	}, {
		id: 5,
		name: '셀럽이름',
		avatar: 'https://i.pravatar.cc/300?u=2'
	}, {
		id: 6,
		name: '셀럽이름',
		avatar: 'https://i.pravatar.cc/300?u=3'
	}, {
		id: 7,
		name: '셀럽이름',
		avatar: 'https://i.pravatar.cc/300?u=4'
	}]

	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			}
		  ]
	}
	return (
		<div className={css.profiles}>
			<h2>Lorem ipsum dolor sit amet, consectetur</h2>
			<Slider {...settings}>
				{profiles.map(profile => <CardProfile key={profile.id} profile={profile} />)}
			</Slider>
		</div>
	);
}