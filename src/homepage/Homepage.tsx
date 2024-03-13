import {Header} from "../header";
import {Footer} from "../footer";
import {HomepagePresentationVideoFeed} from "./components";
import homepagePicture from '../../images/oslo-homepage.png';
import "./homepage.css";

const Homepage = () => {
	return (
		<div className="flex flex-col items-center gap-44">
			<Header/>

			<div className="presentation-container">
				<div className="presentation shadow-box">
					<h2 className="text-3xl text-white mb-10 truncate">Qui sommes-nous ?</h2>

					<p className="text-white text-xl text-justify">
						Petflix est une association à but non lucratif qui cherche à aider les animaux en détresse, qu'ils aient été abandonnés, mal traités, ou bien négligés par leurs anciens maîtres. Nous sommes tous bénévoles et faisons cela car nous pensons que chaque animal mérite un foyer et une famille aimante. Vous retrouverez sur notre site tous nos animaux qui sont à adopter, et si vous souhaitez nous rejoindre, vous pouvez venir nous voir dans un de nos centres d'accueils !
					</p>
				</div>

				<img className="presentation-image shadow-box" src={homepagePicture} alt="white cat" />
			</div>

			<HomepagePresentationVideoFeed/>

			<Footer/>
		</div>
	);
}

export default Homepage;