import "./header.css";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaw, faSearch} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {InputChangeEvent} from "../types.ts";

const Header = () => {

	const [search, setSearch] = useState<string>("");

	const changeSearch = (event: InputChangeEvent) => {
		setSearch(event.target.value);
	}

	return (
		<>
			<div className="bg-amber-950 px-8 py-8 w-[100%] text-white flex justify-between items-center">
				<div className="w-1/3">
					<div className="w-1/3">
						<Link to="/">
							<h1 className="font-medium text-3xl">
								P
								<span><FontAwesomeIcon className="w-6" icon={faPaw}/></span>
								tflix
							</h1>
						</Link>
					</div>
				</div>

				<ul className="flex justify-center items-center gap-24 w-1/3">
					<li className="menu-option">Accueil</li>
					<li className="menu-option">Adoptions</li>
					<li className="menu-option">Contrôles</li>
				</ul>

				<form className="w-1/3 flex justify-end items-center">
					<input
						className="pl-2 text-sm font-bold h-8 w-52 -mr-8 text-amber-950 rounded-full focus:outline-amber-950"
						type="text"
						value={search}
						onChange={event => changeSearch(event)}
						placeholder=""
					/>
					<FontAwesomeIcon
						icon={faSearch}
						className="bg-amber-950 rounded-full w-3 h-3 p-2"
					/>
				</form>
			</div>
		</>
	);

}

export default Header;