import { Link } from "react-router-dom";
import zkrollups from "../../assets/zk rollups .webp";
import optimisticrollups from "../../assets/Optimistic rollups .webp";
import "./RollUps.scss";
import ComparisonTable from "../Charts/chart";

export default function RollUps() {
	return (
		<>
			<section className="hero-section">
				<div className="container">
					<h2 className="hero-title text-center">What Are Rollups?</h2>
					<p className="hero-description text-center">
						Rollups are <strong>Layer 2 scaling solutions</strong> that process
						transactions off-chain before submitting compressed data to the main
						blockchain (Layer 1). By bundling multiple transactions together,
						rollups significantly reduce network congestion, enabling higher
						transaction throughput ⚡, lowering transaction fees 💰, and
						maintaing security through the underlying Layer 1 blockchain 🔒. The
						key principle is to move computational tasks off-chain while
						preserving the security guarantees of the main chain.
					</p>
				</div>
				<section className="content-box">
					{/* <section className="section"> */}
					<div className="container">
						<h2 className="section-title">🔔How Rollups Work: The Basics</h2>
						<ul className="list">
							<p className="section__list">
								📞1: Users submit transactions to the rollup network
							</p>
							<p className="section__list">
								🎶2: Transactions are batched together off-chain
							</p>
							<p className="section__list">
								📟3: The rollup processes these transactions and updates its
								state
							</p>
							<p className="section__list">
								💡4: Data or proofs about these transactions are posted to Layer
								1
							</p>
							<p className="section__list">
								📒5: The Layer 1 ensures the integrity of the Layer 2 operations
							</p>
						</ul>
					</div>
					{/* </section> */}
				</section>
				<section className="content-box">
					<div className="container">
						<h2 className="section-title">
							Technical Components of a Rollup System
						</h2>
						<p className="section__list">
							For a comprehensive Layer 2 Rollup system, several crucial
							components work that together are:
						</p>
						<ul className="list">
							<li className="section__list">
								<strong>🔭Blockchain Node</strong>: The basic infrastructure of
								the network
							</li>
							<li className="section__list">
								<strong>🪜Sequencer</strong>: Collects transactions and produces
								new blocks
							</li>
							<li className="section__list">
								<strong>⚖️ZK-Prover</strong> (for ZK-Rollups): Proves and
								verifies transactions using zkEVM
							</li>
							<li className="section__list">
								<strong>🔍RPC</strong>: Provides interfaces to access the
								blockchain
							</li>
							<li className="section__list">
								<strong>🖲️Synchronizer</strong>: Helps nodes stay up-to-date
								with the latest state
							</li>
							<li className="section__list">
								<strong>🎼ZK-SNARK/STARK</strong>: Cryptographic arguments of
								knowledge for proofs
							</li>
							<li className="section__list">
								<strong>📝StateDB</strong>: Database storing the current states
								of accounts and contracts
							</li>
							<li className="section__list">
								<strong>📉Ethereum Bridge</strong>: Mechanism to transfer assets
								between blockchain networks
							</li>
							<li className="section__list">
								<strong>📂Rollup smart contract</strong>: On-chain component
								verifying proofs and state transitions
							</li>
						</ul>
					</div>
				</section>

				<section className="content-box">
					<div className="container">
						<h2 className="section-title">Types of Rollups</h2>
						<p className="section__list">
							There are two major types of rollups, each with distinct
							approaches to validation and security. Zero-Knowledge Rollups
							(ZK-Rollups) and Optimistic Rollups.
						</p>
						<ComparisonTable />
						<h2 className="section-subtitle">
							Zero-Knowledge Rollups (ZK-Rollups)
						</h2>
						<p className="section-description">
							ZK-Rollups are a layer-2 scaling solution that groups multiple
							transactions into a single batch and processes them off-chain,
							while ensuring their validity with cryptographic proofs. This
							technology allows many transactions (sometimes thousands) to be
							bundled together and verified through mathematical proofs. zkEVM
							Rollup, specifically designed for Ethereum, uses zero-knowledge
							cryptography to handle multiple transactions off-chain. By doing
							so, ZK-Rollups can verify transaction validity without revealing
							sensitive data, compress transaction information before submitting
							it to the Ethereum main chain, and significantly improve
							processing efficiency.
						</p>
						<h3 className="section-subtitle">
							A Visual illustration of ZK RollUps
						</h3>
						<img
							src={zkrollups}
							width="70%"
							alt="ZK-Rollups"
							className="image"
						/>

						<section className="content-box">
							<div className="container">
								<h2 className="section-title">How ZK-Rollups Work</h2>
								<p className="section-description">
									ZK-Rollups bundle multiple transactions into a single batch
									and submit cryptographic proofs to the main chain for
									validation. Here’s how it works:
								</p>
								<ul className="list">
									<li className="section__list">
										<strong>1. 🔏 Transaction Submission</strong>: Users sign
										and submit transactions to the ZK-Rollup network.
									</li>
									<li className="section__list">
										<strong>2. 🔗 Batch Processing</strong>: Multiple
										transactions are bundled together and processed off-chain.
									</li>
									<li className="section__list">
										<strong>3. 🛠️ Proof Generation</strong>: A cryptographic
										validity proof (typically zk-SNARK or zk-STARK) is created.
									</li>
									<li className="section__list">
										<strong>4. 🌐 Main Chain Submission</strong>: The proof and
										minimal transaction data are submitted to the main chain.
									</li>
									<li className="section__list">
										<strong>5. ✔️ Verification</strong>: A smart contract on the
										main chain verifies the proof’s validity.
									</li>
									<li className="section__list">
										<strong>6. 🔄 State Update</strong>: Upon successful
										verification, the main chain’s state is updated to reflect
										the processed transactions.
									</li>
								</ul>
							</div>
						</section>
					</div>
				</section>

				<section className="content-box">
					<div className="container">
						<h2 className="section-title">
							Real-World Example: Token Transfer on a ZK-Rollup
						</h2>
						<p className="section-description">
							Let's illustrate how a simple token transfer works on a ZK-Rollup
							network like zkSync:
						</p>
						<ul className="list">
							<li className="section__list">
								<strong>1. 💸 Alice Sends Tokens</strong>: Alice wants to send
								10 tokens to Bob on a ZK-Rollup network.
							</li>
							<li className="section__list">
								<strong>2. ✍️ Transaction Signing</strong>: Alice signs a
								transaction with her private key.
							</li>
							<li className="section__list">
								<strong>3. 📤 Transaction Submission</strong>: Alice submits the
								signed transaction to the ZK-Rollup network.
							</li>
							<li className="section__list">
								<strong>4. 🧳 Batch Collection</strong>: The sequencer collects
								Alice’s transaction with others into a batch.
							</li>
							<li className="section__list">
								<strong>5. 🔄 Transaction Processing</strong>: The operator
								processes all transactions in the batch, updating the state
								tree.
							</li>
							<li className="section__list">
								<strong>6. 🔒 Proof Generation</strong>: A ZK-Prover generates a
								cryptographic validity proof.
							</li>
							<li className="section__list">
								<strong>7. 🏛️ Proof Submission</strong>: The proof and state
								roots are submitted to Ethereum.
							</li>
							<li className="section__list">
								<strong>8. ✅ Proof Verification</strong>: The ZK-Rollup smart
								contract verifies the proof on Ethereum.
							</li>
							<li className="section__list">
								<strong>9. 🔑 State Root Update</strong>: Upon successful
								verification, the contract updates the official state root.
							</li>
							<li className="section__list">
								<strong>10. ✔️ Finalization</strong>: Alice's payment to Bob is
								finalized and the transaction is complete.
							</li>
						</ul>
					</div>
				</section>

				<section className="content-box">
					<div className="container">
						<h2 className="section-subtitle">Notable ZK-Rollup Projects</h2>
						<p className="section-description__modifier">
							Some of the most notable ZK-Rollup projects in the blockchain
							space include zkSync (zkSync Lite and zkSync Era), Immutable X,
							Loopring, StarkNet, and Polygon Hermez/zkEVM.
						</p>
					</div>
				</section>
				<section className="content-box">
					<div className="container">
						<h2 className="section-title">Case Studies</h2>

						<div className="case-study">
							<h3 className="section-title__modifier">
								Case Study 1: Polygon Hermez
							</h3>
							<p className="section-description">
								Polygon Hermez is a decentralized ZK-Rollup solution built on
								Ethereum, aimed at enhancing scalability and transaction
								throughput. Its architecture integrates a sequencer, an
								aggregator for zero-knowledge proofs, and a consensus algorithm
								for decentralization.Initially developed as a ZK-Rollup for
								token transfers, Hermez was later acquired by Polygon and
								evolved into Polygon zkEVM. This expansion brings the goal of
								achieving full EVM compatibility and a high throughput of
								transactions.Polygon Hermez aims to handle over 2,000
								transactions per second while ensuring security and
								decentralization in Ethereum’s ecosystem.
							</p>

							<h4>Key Features</h4>
							<p className="section__list">
								- **Sequencer**: Orders and batches transactions. -
								**Aggregator**: Generates zk-proofs for transaction batches. -
								**Proof of Efficiency (PoE)**: A consensus model that
								decentralizes the network and enhances security.
							</p>
						</div>

						<div className="case-study">
							<h3 className="section-title__modifier">
								Case Study 2: Erigon CDK
							</h3>
							<p className="section-description">
								Erigon CDK is a modular framework designed for building
								blockchain clients and scaling Layer 2 solutions. It offers a
								range of tools for custom rollups and enhanced blockchain
								performance.Originally created as an Ethereum execution client
								focusing on performance optimization, the Erigon CDK extends its
								capabilities by providing modular components for rollups,
								including networking stacks and high-performance
								databases.Erigon CDK empowers developers to create custom Layer
								2 solutions and efficient blockchain infrastructures, helping
								scale decentralized applications (dApps) and networks.
							</p>

							<h4>Key Features</h4>
							<p className="section-description">
								- **Modular Database**: Optimized for blockchain data with high
								performance. - **EVM Implementation**: Enables efficient
								execution of smart contracts. - **P2P Networking**: Facilitates
								communication between nodes. - **RPC Interface**: Provides
								interaction between applications and nodes.
							</p>
						</div>
					</div>
				</section>

				<section className="content-box">
					<div className="container">
						<h2 className="section-title">Advantages of ZK RollUps</h2>
						<ul className="list">
							<li className="section__list">
								<strong>1. ✅ Immediate Finality</strong>: Once the proof is
								verified, finality is achieved in minutes, rather than days.
							</li>
							<li className="section__list">
								<strong>2. 🔒 Stronger Security</strong>: ZK Rollups provide
								stronger security guarantees through cryptographic proofs.
							</li>
							<li className="section__list">
								<strong>3. 💾 Efficient Data Storage</strong>: ZK Rollups use
								compression to store data more efficiently on-chain.
							</li>
							<li className="section__list">
								<strong>4. 🔏 Privacy Potential</strong>: Zero-knowledge
								technology enables enhanced privacy features.
							</li>
						</ul>

						<h2 className="section-title">Disadvantages of ZK RollUps</h2>
						<ul className="list">
							<li className="section__list">
								<strong>1. 🖥️ Higher Computational Requirements</strong>: Proof
								generation for ZK Rollups requires higher computational power.
							</li>
							<li className="section__list">
								<strong>2. 🛠️ Complex Development</strong>: The development
								environment for ZK Rollups is more complex compared to
								traditional systems.
							</li>
							<li className="section__list">
								<strong>3. ⚙️ Limited EVM Compatibility</strong>: While zkEVM
								projects are improving compatibility, ZK Rollups still have some
								limitations in EVM support.
							</li>
							<li className="section__list">
								<strong>4. 💸 Higher Initial Setup Costs</strong>: Setting up ZK
								Rollups may involve higher initial costs due to infrastructure
								and development requirements.
							</li>
						</ul>
					</div>
				</section>

				<section className="content-box">
					<div className="container">
						<h2 className="section-title">Optimistic Rollups</h2>
						<p className="section-description">
							Optimistic Rollups are a layer-2 scaling solution that processes
							transactions off the main blockchain while maintaining security
							through a unique validation system. This technology assumes
							transactions are valid by default, without requiring immediate
							cryptographic proofs. However, there’s a challenge period where
							transactions can be contested. If an invalid transaction is
							detected, fraud proofs can be submitted to correct the issue.
							Optimistic Rollups reduce gas fees significantly while ensuring
							security and greatly increase transaction processing capacity,
							making blockchain networks more efficient and cost-effective.
						</p>

						<h3 className="section-subtitle">
							A Visual illustration of Optimistic RollUps
						</h3>
						<img
							src={optimisticrollups}
							width="70%"
							alt="Optimistic Rollups Illustration"
							className="image"
						/>

						<section className="content-box">
							<div className="container">
								<h2 className="section-title">How Optimistic Rollups Work</h2>
								<p className="section-description">
									Optimistic Rollups assume that transactions are valid by
									default. Here's a simple breakdown of how they work:
								</p>
								<ul className="list">
									<li className="section__list">
										<strong>1. 🚀 Transaction Submission</strong>: Users submit
										transactions to the network.
									</li>
									<li className="section__list">
										<strong>2. 📝 Processing Transactions</strong>: A system or
										operator organizes and processes these transactions.
									</li>
									<li className="section__list">
										<strong>3. 🔄 State Update</strong>: The system updates the
										network based on these transactions.
									</li>
									<li className="section__list">
										<strong>4. 📊 Data Publication</strong>: The transaction
										details are published to the main Ethereum network.
									</li>
									<li className="section__list">
										<strong>5. ⏳ Challenge Period</strong>: There’s a set time
										window where anyone can challenge the transactions.
									</li>
									<li className="section__list">
										<strong>6. ⚖️ Dispute Resolution</strong>: If a challenge
										occurs, fraud can be proven and invalid transactions can be
										reversed.
									</li>
									<li className="section__list">
										<strong>7. ✔️ State Finalization</strong>: If no challenges
										happen, the transactions are considered final.
									</li>
								</ul>
							</div>
						</section>
					</div>
				</section>
				<section className="content-box">
					<div className="container">
						<h2 className="section-subtitle">
							Notable Optimistic Rollup Projects
						</h2>
						<p className="section-description__modifier">
							Some of the most notable ZK-Rollup projects in the blockchain
							space include Optimism, Arbitrum, Cartesi.
						</p>
					</div>
				</section>
				<section className="content-box">
					<div className="container">
						<h2 className="section-title">Advantages of Optimistic RollUps</h2>
						<ul className="list">
							<li className="section__list">
								<strong>1. ✅ Better EVM Compatibility</strong>: Optimistic
								Rollups offer better compatibility with existing Ethereum smart
								contracts.
							</li>
							<li className="section__list">
								<strong>2. 🔒 Lower Computational</strong>: Optimistic Rollups
								require less computational power for processing compared to ZK
								Rollups.
							</li>
							<li className="section__list">
								<strong>3. 💻 Easier Development Migration</strong>: Developers
								can more easily migrate their applications from Ethereum to
								Optimistic Rollups.
							</li>
							<li className="section__list">
								<strong>4. 🛠️ Simpler Implementation</strong>: Optimistic
								Rollups are simpler to implement and work well with Ethereum’s
								existing infrastructure.
							</li>
						</ul>

						<h2 className="section-title">
							Disadvantages of Optimistic RollUps
						</h2>
						<ul className="list">
							<li className="section__list">
								<strong>1. ⏳ Long Withdrawal/Finality Periods</strong>:
								Optimistic Rollups typically have a long withdrawal and finality
								period (around 7 days).
							</li>
							<li className="section__list">
								<strong>2. ⚠️ Vulnerability to Economic Attacks</strong>: They
								are vulnerable to specific types of economic attacks, like the
								"long-range attack".
							</li>
							<li className="section__list">
								<strong>3. 👀 Requires Active Fraud Watchers</strong>: Security
								relies on external watchers who must monitor and challenge
								fraudulent transactions.
							</li>
							<li className="section__list">
								<strong>4. 📉 Less Efficient Data Posting</strong>: Optimistic
								Rollups can be less efficient in terms of data posting compared
								to ZK Rollups.
							</li>
						</ul>
					</div>
				</section>

				<section className="content-box">
					<div className="container">
						<h2 className="section-title">Conclusion</h2>
						<p className="section-description">
							Rollups are a major step forward in blockchain technology, helping
							to solve the long-standing issue of scaling blockchains. By
							processing most of the work off-chain but still keeping the
							security of the main network, rollups make it possible to build
							better blockchain applications that offer a better experience for
							users. They are an important part of Ethereum’s plan to grow
							without losing security. ZK-Rollups and Optimistic Rollups each
							have their own strengths and challenges, but together, they offer
							a strong solution for the future of decentralized apps.
						</p>
					</div>
				</section>
				{/* New Glossary Section */}
				<section className="content-box">
					<div className="container">
						<h2 className="section-title">Rollup Glossary</h2>
						<div className="glossary">
							<ul className="glossary-list">
								<li className="glossary-item">
									<strong>Layer 1 (L1):</strong> The base blockchain protocol
									(like Ethereum) that provides the security and consensus
									mechanism for the network.
								</li>
								<li className="glossary-item">
									<strong>Layer 2 (L2):</strong> Secondary framework or protocol
									built on top of an existing Layer 1 blockchain to improve
									scalability and efficiency.
								</li>
								<li className="glossary-item">
									<strong>EVM (Ethereum Virtual Machine):</strong> The
									computational engine that processes smart contracts in the
									Ethereum network.
								</li>
								<li className="glossary-item">
									<strong>zkEVM:</strong> A version of Ethereum's virtual
									machine that can generate zero-knowledge proofs to verify the
									correct execution of smart contracts.
								</li>
								<li className="glossary-item">
									<strong>State:</strong> The current condition of all accounts,
									contracts, and data on the blockchain at a specific point in
									time.
								</li>
								<li className="glossary-item">
									<strong>Sequencer:</strong> An entity responsible for
									collecting, ordering, and processing transactions in a rollup
									system.
								</li>
								<li className="glossary-item">
									<strong>Fraud Proof:</strong> Evidence submitted to prove that
									a transaction or state transition is invalid (used in
									Optimistic Rollups).
								</li>
								<li className="glossary-item">
									<strong>zk-SNARK/STARK:</strong> Cryptographic methods used to
									prove possession of certain information without revealing that
									information (Zero-Knowledge Succinct Non-Interactive Argument
									of Knowledge/Scalable Transparent Argument of Knowledge).
								</li>
								<li className="glossary-item">
									<strong>Calldata:</strong> Data included in a transaction that
									doesn't affect the state but is stored on the blockchain and
									can be accessed.
								</li>
								<li className="glossary-item">
									<strong>Finality:</strong> The point at which a transaction
									becomes irreversible and permanently recorded on the
									blockchain.
								</li>
								<li className="glossary-item">
									<strong>Gas Fees:</strong> Costs paid by users for
									computational operations on the Ethereum network.
								</li>
								<li className="glossary-item">
									<strong>Bridge:</strong> A connection that allows tokens and
									arbitrary data to be transferred between different blockchain
									networks.
								</li>
							</ul>
						</div>
					</div>
				</section>
			</section>
		</>
	);
}
