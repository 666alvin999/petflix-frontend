import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Homepage} from "./homepage";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {PresentationVideoDetailPage} from "./presentationvideodetailpage";
import {ControlsPage} from "./controlspage";
import {SubmitPresentationVideoPage} from "./submitpresentationvideopage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Homepage/>
	},
	{
		path: "/video/:id",
		element: <PresentationVideoDetailPage/>
	},
	{
		path: "/controls",
		element: <ControlsPage/>
	},
	{
		path: "/submitPresentationVideo",
		element: <SubmitPresentationVideoPage/>
	}
]);

const client = new QueryClient();

const App = () => {

	return (
		<>
			<QueryClientProvider client={client}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</>
	);

}

export default App
