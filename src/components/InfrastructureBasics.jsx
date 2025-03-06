import { Link } from "react-router-dom";
import "./InfrastructureBasics.scss";

export default function InfrastructureBasics() {
	return (
		<>
			<section className="hero-section">
				<div className="hero-content">
					<h2 className="hero-title">Blockchain Infrastructure Basics</h2>
					<p className="hero-description">
						Before diving into rollups, it's important to understand the
						foundational elements they build upon. These foundational elements
						are Blockchain Clients, Node Management, and Validator Setups. Let's
						discuss each one briefly.
					</p>
				</div>

				<div className="content-box">
					<h3 className="section-title">Blockchain Clients</h3>
					<p>
						Blockchain clients are software applications that connect to and
						interact with blockchain networks. They perform several critical
						functions:
					</p>
					<ul className="list">
						<li>
							<strong>Network Connection:</strong>
							<p>
								Establishing and maintaining connections to the peer-to-peer
								network
							</p>
						</li>
						<li>
							<strong>State Management:</strong>
							<p>Tracking the current state of the blockchain</p>
						</li>
						<li>
							<strong>Transaction Processing:</strong>
							<p>
								Processing transactions and propagating them across the network
							</p>
						</li>
						<li>
							<strong>Consensus Participation:</strong>
							<p>Following the network's rules to agree on the state</p>
						</li>
					</ul>
					<p>
						Different client implementations like Geth, Erigon, or Nethermind
						for Ethereum follow the same protocol but may have different
						architectures and optimizations.
					</p>
					<h3 className="section-title">Node Management</h3>{" "}
					<p>
						A node in a blockchain is a computer that participates in the
						network by validating transactions, storing the blockchain's data,
						and helping maintain the decentralized network. Running a blockchain
						node involves:
					</p>{" "}
					<ul className="list">
						{" "}
						<li>
							{" "}
							<strong>Hardware Provisioning:</strong>{" "}
							<p>
								Ensuring the node has enough CPU, memory, storage, and bandwidth
								to operate efficiently.
							</p>{" "}
						</li>{" "}
						<li>
							{" "}
							<strong>Software Maintenance:</strong>{" "}
							<p>
								Regularly updating and securing the blockchain client software
								to prevent vulnerabilities.
							</p>{" "}
						</li>{" "}
						<li>
							{" "}
							<strong>Synchronization:</strong>{" "}
							<p>
								Downloading and verifying the blockchain's history to stay up to
								date with the network.
							</p>{" "}
						</li>{" "}
						<li>
							{" "}
							<strong>Monitoring:</strong>{" "}
							<p>
								Constantly tracking the node's performance and the overall
								network status to ensure smooth operation.
							</p>{" "}
						</li>{" "}
					</ul>{" "}
					<p>
						{" "}
						Blockchain nodes can be categorized as full nodes (storing the
						complete blockchain data) or light nodes (only storing essential
						data and relying on full nodes for additional information).{" "}
					</p>
					<h3 className="section-title">Validator Setups</h3>
					<p>
						Validators are special nodes that participate in block production
						and consensus:
					</p>
					<ul className="list">
						<li>
							<strong>Staking:</strong>
							<p>Depositing tokens as an economic guarantee of good behavior</p>
						</li>
						<li>
							<strong>Block Production:</strong>
							<p>Creating new blocks with valid transactions</p>
						</li>
						<li>
							<strong>Attestation:</strong>
							<p>Verifying and voting on blocks created by others</p>
						</li>
						<li>
							<strong>Slashing Risk:</strong>
							<p>Facing penalties for malicious behavior or downtime</p>
						</li>
					</ul>
					<p>
						Validator setups require additional security considerations and
						often more powerful hardware than regular nodes.
					</p>
				</div>
			</section>
		</>
	);
}
