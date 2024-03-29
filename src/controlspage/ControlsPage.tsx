import {Header} from "../header";
import {Footer} from "../footer";
import {ControlsFeed} from "./components";

const ControlsPage = () => {

	return (
		<div className="min-h-screen flex flex-col justify-between items-center gap-28">
			<Header/>
			<ControlsFeed/>
			<Footer/>
		</div>
	);

}

export default ControlsPage;