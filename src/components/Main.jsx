import { Link } from "react-router-dom";
import Introduction from "./Introduction";
import InfrastructureBasics from "./InfrastructureBasics";

const Main = () => {
	return (
		<>
			<header className="bg-blue-600 text-white text-center p-6">
				<h1 className="text-4xl font-semibold">
					Comprehensive Guide to Blockchain Rollups: Scaling the Future
				</h1>
			</header>
			<Introduction />
			<InfrastructureBasics />
		</>
	);
};

export default Main;
