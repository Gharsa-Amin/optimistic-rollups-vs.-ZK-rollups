import React from "react";
import "./chart.scss";
const ComparisonTable = () => {
	return (
		<div className="comparison-container">
			<h2>Visual Comparison: ZK-Rollups vs Optimistic Rollups</h2>
			<table>
				<thead>
					<tr>
						<th>Feature</th>
						<th>ZK-Rollups</th>
						<th>Optimistic Rollups</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Validation Method</td>
						<td>Cryptographic validity proofs</td>
						<td>Fraud proof challenge system</td>
					</tr>
					<tr>
						<td>Finality</td>
						<td>Minutes (once proof is verified)</td>
						<td>~7 days (challenge period)</td>
					</tr>
					<tr>
						<td>Security Assumption</td>
						<td>Cryptographic security</td>
						<td>Economic security</td>
					</tr>
					<tr>
						<td>EVM Compatibility</td>
						<td>Limited but improving</td>
						<td>High compatibility</td>
					</tr>
					<tr>
						<td>Data Efficiency</td>
						<td>More efficient</td>
						<td>Less efficient</td>
					</tr>
					<tr>
						<td>Computational Complexity</td>
						<td>Higher</td>
						<td>Lower</td>
					</tr>
					<tr>
						<td>Withdrawal Time</td>
						<td>Fast</td>
						<td>Slow (challenge period)</td>
					</tr>
					<tr>
						<td>Development Complexity</td>
						<td>More complex</td>
						<td>Relatively simpler</td>
					</tr>
					<tr>
						<td>Data Posted to L1</td>
						<td>Compressed data + validity proof</td>
						<td>Full transaction data</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default ComparisonTable;
