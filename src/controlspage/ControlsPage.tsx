import {Header} from "../header";
import {Footer} from "../footer";
import {ControlsFeed} from "./components";

const ControlsPage = () => {

	return (
		<div className="flex flex-col justify-center items-center gap-28">
			<Header/>
			<ControlsFeed/>
			<Footer/>
		</div>
	);

}

export default ControlsPage;