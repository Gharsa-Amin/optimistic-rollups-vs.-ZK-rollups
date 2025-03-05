import { Link } from "react-router-dom";

export default function InfrastructureBasics() {
	return (
		<>
			<header className="bg:white text-white text-center p-6">
				<h2 className="text-3xl font-semibold">
					Blockchain Infrastructure Basics
				</h2>
			</header>
			<h3>
				Before diving into rollups, it's important to understand the
				foundational elements they build upon:
			</h3>
			<div>
				<h3>Blockchain Clients</h3>
				<p>
					Blockchain clients are software applications that connect to and
					interact with blockchain networks. They perform several critical
					functions:
				</p>
				<ul>
					<li>
						Network Connection:
						<p>
							Establishing and maintaining connections to the peer-to-peer
							network
						</p>
					</li>
				</ul>
			</div>

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
