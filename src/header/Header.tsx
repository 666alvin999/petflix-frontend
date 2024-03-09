import "./header.css";

const Header = () => {
	return (
		<>
			<div className="bg-amber-700 px-8 py-8 text-white">
				<h1 className="font-medium text-3xl">Petflix</h1>

				<ul>
					<li className="menu-option">Home</li>
					<li className="menu-option">Adoptions</li>
					<li className="menu-option">Controls</li>
				</ul>

				<form>
					<input type="text" placeholder=""/>
				</form>
			</div>
		</>
	);
}

export default Header;