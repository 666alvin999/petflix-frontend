import {Header} from "../header";
import {Footer} from "../footer";
import {SubmitForm} from "./components";

const SubmitPresentationVideoPage = () => {

	return (
		<div className="min-h-screen flex flex-col justify-between items-center gap-28">
			<Header/>

			<SubmitForm/>

			<Footer/>
		</div>
	);

}

export default SubmitPresentationVideoPage;