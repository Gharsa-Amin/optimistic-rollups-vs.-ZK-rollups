import { Link } from "react-router-dom";
import Introduction from "./Introduction/Introduction";
import InfrastructureBasics from "./InfrastructureBasics/InfrastructureBasics";
import RollUps from "./RollUps/What Are Rollups";
import "./Main.scss";

import ComparisonTable from "./Charts/chart";

const Main = () => {
	return (
		<>
			<Introduction />
			<InfrastructureBasics />
			<RollUps />
		</>
	);
};

export default Main;
