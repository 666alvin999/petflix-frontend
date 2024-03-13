import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Homepage} from "./homepage";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Homepage/>
	},
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
