import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Homepage} from "./hompage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Homepage/>
	},
]);

const App = () => {

	return (
		<>
			<RouterProvider router={router} />
		</>
	);

}

export default App
