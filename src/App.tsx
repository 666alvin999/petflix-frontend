import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Homepage} from "./homepage";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {PresentationVideoDetailPage} from "./presentationvideodetailpage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Homepage/>
	},
	{
		path: "/video/:id",
		element: <PresentationVideoDetailPage/>
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
