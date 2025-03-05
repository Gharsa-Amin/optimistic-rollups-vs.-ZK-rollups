import { Link } from "react-router-dom";

export default function Introduction() {
	return (
		<>
			<section class="hero-section">
				<div class="hero-content">
					<h1>Welcome to Erigon</h1>
					<p>Your solution for blockchain scalability and performance.</p>
				</div>
				<div class="hero-image">
					<img
						decoding="async"
						class="img-with-animation skip-lazy nectar-lazy animated-in loaded"
						data-delay="0"
						height="50%"
						width="50%"
						data-animation="fade-in-from-bottom"
						src="https://erigon.tech/wp-content/uploads/2024/11/Erigon-2024-ICON-V1-L-scaled.webp"
						alt="Erigon Logo"
						sizes="(max-width: 2560px) 100vw, 2560px"
						srcset="https://erigon.tech/wp-content/uploads/2024/11/Erigon-2024-ICON-V1-L-scaled.webp 2560w, https://erigon.tech/wp-content/uploads/2024/11/Erigon-2024-ICON-V1-L-300x270.webp 300w, https://erigon.tech/wp-content/uploads/2024/11/Erigon-2024-ICON-V1-L-1024x923.webp 1024w, https://erigon.tech/wp-content/uploads/2024/11/Erigon-2024-ICON-V1-L-768x692.webp 768w, https://erigon.tech/wp-content/uploads/2024/11/Erigon-2024-ICON-V1-L-1536x1385.webp 1536w, https://erigon.tech/wp-content/uploads/2024/11/Erigon-2024-ICON-V1-L-2048x1846.webp 2048w"
					/>
				</div>
			</section>

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
