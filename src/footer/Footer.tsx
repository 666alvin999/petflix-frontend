import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faTiktok, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<>
			<div className="bg-amber-950 text-white px-8 py-8 w-[100%] flex justify-around items-center">
				<div className="w-1/3 flex flex-row justify-center items-center">
					<p>
						6 Rue du Chat<br />
						59300<br />
						Valenciennes
					</p>
				</div>

				<div className="w-1/3 flex flex-row justify-center items-center">
					Mail: petflix@mail-ecv.fr<br />
					Tél: 06XXXXXXXX
				</div>

				<div className="text-white w-1/3 flex flex-row justify-center items-center gap-4">
					<FontAwesomeIcon className="hover:cursor-pointer" icon={faFacebook} />
					<FontAwesomeIcon className="hover:cursor-pointer" icon={faTwitter} />
					<FontAwesomeIcon className="hover:cursor-pointer" icon={faInstagram} />
					<FontAwesomeIcon className="hover:cursor-pointer" icon={faTiktok} />
					<FontAwesomeIcon className="hover:cursor-pointer" icon={faYoutube} />
				</div>
			</div>
		</>
	);
}

export default Footer;