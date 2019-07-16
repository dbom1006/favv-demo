import HeaderHome from "../containers/HeaderHome";
import SliderProfile from "../containers/SliderProfile";
import ListCover from "../containers/ListCover";
const Index = () => (
	<div>
		<HeaderHome />
		<section className="container">
			<SliderProfile />
		</section>
		<section className="container-fluid" >
			<ListCover />
		</section>
	</div>
);

export default Index;