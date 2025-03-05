import { Link } from "react-router-dom";

export default function RollUps() {
	return (
		<>
			<header className="bg:white text-white text-center p-6">
				<h2 className="text-3xl font-semibold">What Are Rollups?</h2>
			</header>
			<p>
				Rollups are **Layer 2 scaling solutions** that process transactions
				off-chain before submitting compressed data to the main blockchain
				(Layer 1). By bundling multiple transactions together, rollups
				significantly reduce network congestion, enabling:
			</p>
			<ul>
				<li>Higher transaction throughput ⚡</li>
				<li>Lower transaction fees 💰</li>
				<li>
					Maintained security through the underlying Layer 1 blockchain 🔒
				</li>
			</ul>
			<p>
				The key principle: move computational tasks off-chain while preserving
				the security guarantees of the main chain.
			</p>
			<header className="bg:white text-white text-center p-6">
				<h2 className="text-3xl font-semibold">How Rollups Work: The Basics</h2>
			</header>
		</>
	);
}
