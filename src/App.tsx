import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Homepage} from "./homepage";

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
