import { Link } from "react-router-dom";

export default function Introduction() {
	return (
		<>
			<header className="bg:white text-white text-center p-6">
				<h2 className="text-3xl font-semibold">Introduction</h2>
			</header>
			<p>
				Blockchain technology has revolutionized how we approach trust and
				decentralization. However, as networks like Ethereum gained popularity,
				a significant challenge emerged: scalability.
			</p>
			<p>
				As more users join blockchain networks, transaction throughput
				limitations lead to congestion and high fees. These challenges prompted
				a critical question: How can networks increase transaction throughput
				without sacrificing decentralization and security?
			</p>
			<p>
				Layer 2 (L2) scaling solutions have emerged to address these issues,
				with rollups becoming the leading approach to blockchain scaling.
			</p>
		</>
	);
}
