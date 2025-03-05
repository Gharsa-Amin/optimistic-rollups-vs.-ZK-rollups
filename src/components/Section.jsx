const Section = ({ title, content }) => {
	return (
		<section className="my-12">
			<h2 className="text-2xl font-bold text-blue-700">{title}</h2>
			<p className="mt-4 text-gray-700">{content}</p>
		</section>
	);
};

export default Section;
