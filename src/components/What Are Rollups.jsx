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
			</ul>
			<header className="bg:white text-white text-center p-6">
				<h2 className="text-3xl font-semibold"> Advantages</h2>
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
				<h2 className="text-3xl font-semibold">Disadvantages</h2>
			</header>
			<ul>
				<li>**Higher computational requirements** for proof generation</li>
				<li>**More complex development environment**</li>
				<li>**Limited EVM compatibility** (improving with zkEVM projects)</li>
				<li>**Higher initial setup costs**</li>
			</ul>
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
		</>
	);
}
