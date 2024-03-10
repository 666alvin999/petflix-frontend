import {Header} from "../header";
import {Footer} from "../footer";

const Homepage = () => {
	return (
		<>
			<Header/>

			<div className="mt-40 flex flex-row justify-between items-center gap-24">
				<div className="bg-amber-950 h-96 p-10 flex flex-col justify-center items-center rounded-r-full">
					<h2 className="text-3xl text-white mb-10">Qui sommes-nous ?</h2>

					<p className="text-white text-xl">
						Petflix est une association à but non lucratif qui cherche à aider les animaux en détresse, qu'ils aient été abandonnés, mal traités, ou bien négligés par leurs anciens maîtres. Nous sommes tous bénévoles et faisons cela car nous pensons que chaque animal mérite un foyer et une famille aimante. Vous retrouverez sur notre site tous nos animaux qui sont à adopter, et si vous souhaitez nous rejoindre, vous pouvez venir nous voir dans un de nos centres d'accueils !
					</p>
				</div>

				<img className="mr-10 h-96 rounded-full" src="/images/oslo-homepage.png" alt="white cat" />
			</div>

			<Footer/>
		</>
	);
}

export default Homepage;