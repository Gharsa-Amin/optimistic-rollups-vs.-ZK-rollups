import { Link } from "react-router-dom";
import zkrollups from "../assets/zk rollups .webp";
import optimisticrollups from "../assets/Optimistic rollups .webp";
import "./RollUps.scss";
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
			<ul>
				<li>Users submit transactions to the rollup network</li>
				<li>Transactions are batched together off-chain</li>
				<li>The rollup processes these transactions and updates its state</li>
				<li>Data or proofs about these transactions are posted to Layer 1</li>
				<li>The Layer 1 ensures the integrity of the Layer 2 operations</li>
			</ul>
			<header className="bg:white text-white text-center p-6">
				<h2 className="text-3xl font-semibold">
					Technical Components of a Rollup System
				</h2>
			</header>
			<p>
				For a comprehensive Layer 2 rollup system, several crucial components
				work together:
			</p>
			<ul>
				<li>**Blockchain Node**: The basic infrastructure of the network</li>
				<li>**Sequencer**: Collects transactions and produces new blocks</li>
				<li>
					**ZK-Prover** (for ZK-Rollups): Proves and verifies transactions using
					zkEVM
				</li>
				<li>**RPC**: Provides interfaces to access the blockchain</li>
				<li>
					**Synchronizer**: Helps nodes stay up-to-date with the latest state
				</li>
				<li>
					**ZK-SNARK/STARK**: Cryptographic arguments of knowledge for proofs
				</li>
				<li>
					**StateDB**: Database storing the current states of accounts and
					contracts
				</li>
				<li>
					**Ethereum Bridge**: Mechanism to transfer assets between blockchain
					networks
				</li>
				<li>
					**Rollup smart contract**: On-chain component verifying proofs and
					state transitions
				</li>
			</ul>
			<header className="bg:white text-white text-center p-6">
				<h2 className="text-3xl font-semibold">Types of Rollups</h2>
			</header>
			<p>
				There are two major types of rollups, each with distinct approaches to
				validation and security.
			</p>
			<h2>### Zero-Knowledge Rollups (ZK-Rollups)</h2>
			<img src={zkrollups} width="50%" />
			<p>
				ZK-Rollups leverage cryptographic proofs to validate transaction
				batches. They "roll up" multiple transactions (potentially thousands)
				into a single batch, process them off-chain, and generate mathematical
				proofs of validity.
			</p>
			<h2>#### How ZK-Rollups Work:</h2>
			<ul>
				<li>
					1. **Transaction Submission**: Users sign and submit transactions to
					the ZK-Rollup network
				</li>
				<li>
					2. **Batch Processing**: Multiple transactions are bundled together
					and processed off-chain
				</li>
				<li>
					3. **Proof Generation**: A cryptographic validity proof (typically
					zk-SNARK or zk-STARK) is created
				</li>
				<li>
					4. **Main Chain Submission**: The proof and minimal transaction data
					are submitted to the main chain
				</li>
				<li>
					5. **Verification**: A smart contract on the main chain verifies the
					proof's validity
				</li>
				<li>
					6. **State Update**: Upon successful verification, the main chain's
					state is updated to reflect the processed transactions
				</li>
			</ul>
			<header className="bg:white text-white text-center p-6">
				<h2 className="text-3xl font-semibold"> Technical Components</h2>
			</header>
			<ul>
				<li>**ZK-Prover**: System that generates validity proofs</li>
				<li>
					**Verifier Contract**: Smart contract on Layer 1 that verifies proofs
				</li>
				<li>
					**State Database**: Stores the current state of all accounts and
					contracts
				</li>
				<li>
					**Bridges**: Contracts that manage asset transfers between Layer 1 and
					Layer 2
				</li>
			</ul>
			<header className="bg:white text-white text-center p-6">
				<h2 className="text-3xl font-semibold">
					Real-World Example: Token Transfer on a ZK-Rollup
				</h2>
			</header>
			<p>
				Let's illustrate how a simple token transfer works on a ZK-Rollup like
				zkSync:
			</p>
			<p>1. **Alice wants to send 10 tokens to Bob** on a ZK-Rollup network</p>
			<p>2. **Alice signs a transaction** with her private key, specifying:</p>
			<ul>
				<li>- Recipient: Bob's address</li>
				<li>- Amount: 10 tokens</li>
				<li>- Fee: 0.01 tokens</li>
			</ul>
			<p>
				3. **Transaction submission**: Alice submits this signed transaction to
				the ZK-Rollup network
			</p>
			<p>
				4. **Batch processing**: The sequencer collects Alice's transaction
				along with hundreds of others into a batch
			</p>
			<p>
				5. **Off-chain computation**: The ZK-Rollup operator processes all
				transactions in the batch, updating the state tree
			</p>
			<p>
				6. **Proof generation**: A ZK-Prover generates a validity proof
				demonstrating that:
				<ul>
					<li>- All transactions in the batch are valid</li>
					<li>- The state transition is correct</li>
					<li>- All signatures are valid</li>
					<li>- No double-spending occurred</li>
				</ul>
			</p>
			<p>
				7. **Submission to Ethereum**: The operator submits the validity proof
				and state roots to Ethereum
			</p>
			<p>
				8. **On-chain verification**: The ZK-Rollup smart contract verifies the
				validity proof
			</p>
			<p>
				9. **State update**: Upon successful verification, the contract updates
				the official state root
			</p>
			<p>
				10. **Finality**: Once the Ethereum transaction is confirmed, Alice's
				payment to Bob is final
			</p>
			<p>
				This entire process typically takes just a few minutes, compared to
				potentially hours for traditional L1 transactions during network
				congestion, and at a fraction of the cost.
			</p>
			<header className="bg:white text-white text-center p-6">
				<h2 className="text-3xl font-semibold">Notable ZK-Rollup Projects:</h2>
			</header>
			<ul>
				<li>** - zkSync (zkSync Lite and zkSync Era)</li>
				<li>** - Immutable X</li>
				<li>** - Loopring</li>
				<li>** - StarkNet</li>
				<li>- Polygon Hermez/zkEVM</li>
			</ul>
			<header className="bg:white text-white text-center p-6">
				<h2 className="text-3xl font-semibold">Case Studies</h2>
			</header>
			<header className="bg:white text-white text-center p-6">
				<h3 className="text-3xl font-semibold">
					Case Study 1: Polygon Hermez (ZK-Rollup)
				</h3>
			</header>
			<p>
				Polygon Hermez is an excellent example of a ZK rollup that has evolved
				significantly over time.What makes Hermez particularly interesting is
				its commitment to decentralization through its proof of donation
				mechanism and permissionless node operation.
			</p>
			<h3>Background</h3>
			<p>
				Hermez began as a standalone ZK rollup focused on token transfers and
				was later acquired by Polygon to become part of their scaling suite. It
				has since evolved into Polygon zkEVM, one of the leading ZK rollup
				implementations striving for full EVM compatibility.
			</p>
			<h3>Technical Architecture</h3>
			<p>Polygon Hermez uses a zkEVM approach with several key components:</p>
			<ul>
				<li>- **Sequencer**: Orders transactions and creates batches</li>
				<li>
					- **Prover System**: Generates ZK proofs using a modified version of
					the Groth16 protocol
				</li>
				<li>
					- **Synchronizer**: Keeps nodes up to date with the latest state
				</li>
				<li>
					- **Smart Contracts**: Manage the verification and state updates on
					Ethereum
				</li>
			</ul>
			<header className="bg:white text-white text-center p-6">
				<h3 className="text-3xl font-semibold">
					Case Study 2: Erigon CDK (Development Kit)
				</h3>
			</header>
			<p>
				While not a rollup itself, Erigon CDK represents cutting-edge technology
				for building blockchain clients and scaling solutions.
			</p>
			<h3>Background</h3>
			<p>
				Erigon began as an Ethereum execution client focused on efficiency and
				performance. The CDK (Consensus and Execution Layer Development Kit)
				extends this by providing modular components for building rollups and
				custom Layer 2 solutions.
			</p>
			<h3>Erigon CDK provides:</h3>
			<ul>
				<li>
					{" "}
					**Modular Database Layer**: High-performance storage optimized for
					blockchain data
				</li>
				<li>
					- **EVM Implementation**: Efficient execution of smart contracts
				</li>
				<li>- **P2P Networking Stack**: For node communication</li>
				<li>- **RPC Interface**: For application interaction</li>
			</ul>
			<header className="bg:white text-white text-center p-6">
				<h2 className="text-3xl font-semibold"> Advantages of ZK RollUps</h2>
			</header>
			<ul>
				<li>
					**Immediate finality** once the proof is verified (minutes rather than
					days)
				</li>
				<li>**Stronger security guarantees** through cryptographic proofs</li>
				<li>**More efficient data storage** on-chain through compression</li>
				<li>**Privacy potential** through zero-knowledge technology</li>
			</ul>
			<header className="bg:white text-white text-center p-6">
				<h2 className="text-3xl font-semibold">Disadvantages Zk RollUps</h2>
			</header>
			<ul>
				<li>**Higher computational requirements** for proof generation</li>
				<li>**More complex development environment**</li>
				<li>**Limited EVM compatibility** (improving with zkEVM projects)</li>
				<li>**Higher initial setup costs**</li>
			</ul>
			```html
			<h2>### Optimistic Rollups</h2>
			<img src={optimisticrollups} width="50%" />
			<p>
				Optimistic Rollups take a different approach to transaction validation.
				As their name suggests, they "optimistically" assume all transactions
				are valid by default, without immediately requiring cryptographic
				proofs.
			</p>
			<h2>#### How Optimistic Rollups Work:</h2>
			<ul>
				<li>
					1. **Transaction Submission**: Users sign and submit transactions to
					the Optimistic Rollup network
				</li>
				<li>
					2. **Batch Processing**: A "sequencer" collects and orders these
					transactions
				</li>
				<li>
					3. **State Transition**: The sequencer updates the rollup state based
					on these transactions
				</li>
				<li>
					4. **Data Publication**: Transaction data is published to Ethereum as
					"calldata"
				</li>
				<li>
					5. **Challenge Period**: A designated time window (typically 7 days)
					allows for fraud challenges
				</li>
				<li>
					6. **Dispute Resolution**: If fraud is detected, challengers can
					submit fraud proofs to revert invalid transactions
				</li>
				<li>
					7. **State Finalization**: If no successful challenges occur during
					the challenge period, the transactions are considered final
				</li>
			</ul>
			<header className="bg:white text-white text-center p-6">
				<h2 className="text-3xl font-semibold"> Technical Components</h2>
			</header>
			<ul>
				<li>**Sequencer**: Orders transactions and proposes new blocks</li>
				<li>
					**Verifier Contract**: Smart contract on Layer 1 that tracks the
					rollup state root
				</li>
				<li>
					**Fraud Proof System**: Mechanism to challenge invalid state
					transitions
				</li>
				<li>
					**Bridges**: Contracts that manage asset transfers between Layer 1 and
					Layer 2
				</li>
			</ul>
			<h2>#### Advantages</h2>
			<ul>
				<li>Better EVM compatibility for existing smart contracts</li>
				<li>Lower computational requirements</li>
				<li>Easier development migration from Ethereum</li>
				<li>Simpler implementation</li>
			</ul>
			<h2>#### Disadvantages</h2>
			<ul>
				<li>Long withdrawal/finality periods (typically 7 days)</li>
				<li>Vulnerability to certain economic attacks</li>
				<li>Requires active fraud watchers for security</li>
				<li>Less efficient data posting</li>
			</ul>
			<h2>#### Notable Optimistic Rollup Projects</h2>
			<ul>
				<li>Arbitrum</li>
				<li>Optimism</li>
				<li>Base</li>
			</ul>
			```
			<header className="bg-white text-white text-center p-6">
				<h3 className="text-3xl font-semibold">When to Use ZK-Rollups</h3>
			</header>
			<p>
				ZK-Rollups are a great solution for applications that require fast
				finality, high security, and enhanced privacy features. They are ideal
				for high-value transactions and use cases where withdrawal speed is
				critical.
			</p>
			<h3>ZK-Rollups are best for:</h3>
			<ul>
				<li>
					- Applications requiring <strong>fast finality</strong>
				</li>
				<li>
					- High-value transactions needing <strong>stronger security</strong>
				</li>
				<li>
					- Applications that can benefit from{" "}
					<strong>potential privacy features</strong>
				</li>
				<li>
					- Use cases where <strong>withdrawal speed is critical</strong>
				</li>
				<li>
					- DEXs and trading platforms where{" "}
					<strong>quick settlement matters</strong>
				</li>
			</ul>
			<header className="bg-white text-white text-center p-6">
				<h3 className="text-3xl font-semibold">
					When to Use Optimistic Rollups
				</h3>
			</header>
			<p>
				Optimistic Rollups are the go-to solution for applications requiring
				full EVM compatibility, projects migrating from Ethereum with minimal
				changes, and those with simpler integration paths. They are also ideal
				for use cases where a 7-day finality time is acceptable.
			</p>
			<h3>Optimistic Rollups are best for:</h3>
			<ul>
				<li>
					- Complex smart contracts requiring{" "}
					<strong>full EVM compatibility</strong>
				</li>
				<li>
					- Applications migrating from Ethereum with{" "}
					<strong>minimal changes</strong>
				</li>
				<li>
					- Projects with <strong>limited computational resources</strong>
				</li>
				<li>
					- Applications where <strong>7-day finality is acceptable</strong>
				</li>
				<li>
					- DApps requiring <strong>simpler integration paths</strong>
				</li>
			</ul>
			<header className="bg-white text-white text-center p-6">
				<h3 className="text-3xl font-semibold">Conclusion</h3>
			</header>
			<p>
				Rollups represent one of the most promising solutions to blockchain
				scalability challenges, offering significant improvements in transaction
				throughput and cost while maintaining security.
			</p>
			<p>
				The choice between ZK-Rollups and Optimistic Rollups depends on specific
				use case requirements:
			</p>
			<ul>
				<li>
					- <strong>ZK-Rollups</strong> offer stronger security guarantees and
					faster finality at the cost of higher computational complexity
				</li>
				<li>
					- <strong>Optimistic Rollups</strong> provide better compatibility and
					simpler implementation while requiring longer waiting periods for
					finality
				</li>
			</ul>
			<p>
				As blockchain technology evolves, we can expect further innovations in
				rollup technology, potentially combining the best aspects of both
				approaches. The development of zkEVMs is already bridging the gap
				between the security benefits of ZK-Rollups and the compatibility
				advantages of Optimistic Rollups.
			</p>
			<p>
				The future likely holds hybrid approaches that combine the strengths of
				both systems, as development tools continue to improve and the
				underlying cryptography becomes more efficient.
			</p>
		</>
	);
}
