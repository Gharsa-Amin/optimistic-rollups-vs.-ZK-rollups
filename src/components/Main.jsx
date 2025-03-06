import { Link } from "react-router-dom";
import Introduction from "./Introduction/Introduction";
import InfrastructureBasics from "./InfrastructureBasics";
import RollUps from "./What Are Rollups";
import "./Main.scss";
import ComparisonTable from "./Charts/chart";

const Main = () => {
	return (
		<>
			<header className="bg-blue-600 text-white text-center p-6">
				<h1 className="text-4xl font-semibold">
					Your Comprehensive Guide to Blockchain Rollups: Scaling the Future
				</h1>
			</header>
			<Introduction />
			<InfrastructureBasics />
			<RollUps />
		</>
	);
};

export default Main;
