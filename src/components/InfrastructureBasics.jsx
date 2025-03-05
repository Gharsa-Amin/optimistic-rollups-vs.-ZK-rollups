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
					<li>
						Network Connection:
						<p>
							Establishing and maintaining connections to the peer-to-peer
							network
						</p>
					</li>
					<li>
						State Management:
						<p>
							Tracking the current state of the blockchain Transaction
							Processing
						</p>
					</li>
					<li>
						Consensus Participation:
						<p>Following the network's rules to agree on the state</p>
					</li>
				</ul>
				<p>
					Different client implementations (like Geth, Erigon, or Nethermind for
					Ethereum) follow the same protocol but may have different
					architectures and optimizations.
				</p>
				<h3>Node Management</h3>
				<p>Running a blockchain node involves:</p>
				<ul>
					<li>
						Hardware Provisioning
						<p>Ensuring sufficient CPU, memory, storage, and bandwidth</p>
					</li>
					<li>
						Software Maintenance
						<p>Keeping client software updated and secure</p>
					</li>
					<li>
						Synchronization
						<p>Downloading and verifying the blockchain history</p>
					</li>
					<li>
						Monitoring
						<p>Tracking node performance and network status</p>
					</li>
				</ul>
				<p>
					Nodes can be categorized as full nodes (storing the entire blockchain)
					or light nodes (storing only headers and requesting data as needed).
				</p>
				<h3>Validator Setups</h3>
				<p>
					Validators are special nodes that participate in block production and
					consensus:
				</p>
				<ul>
					<li>
						Staking
						<p>Depositing tokens as an economic guarantee of good behavior</p>
					</li>
					<li>
						Block Production
						<p>Creating new blocks with valid transactions</p>
					</li>
					<li>
						Attestation
						<p>Verifying and voting on blocks created by others</p>
					</li>
					<li>
						Slashing Risk
						<p>Facing penalties for malicious behavior or downtime</p>
					</li>
				</ul>
				<p>
					Validator setups require additional security considerations and often
					more powerful hardware than regular nodes.
				</p>
			</div>
		</>
	);
}
