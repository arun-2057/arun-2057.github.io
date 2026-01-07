import profile from '/profile.jpg';

export default function Hero() {
	return (
		<section id="hero" aria-labelledby="hero-heading" className="pt-20 md:pt-32 pb-10">
			<div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
				<div className="card-anim">
					<h1 id="hero-heading" className="text-4xl md:text-5xl font-bold mb-3">
						Arun Lama <span className="text-blue-500">— Data Analyst</span>
					</h1>
					<p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
						I transform raw data into strategic insights, with deep expertise in time-series forecasting, churn prediction, and advanced data visualization that drives informed decision-making.
					</p>

					<div className="flex flex-wrap gap-3 items-center">
						<a
							href="#projects"
							className="inline-block bg-blue-600 text-white px-4 py-2 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
						>
							View Projects
						</a>
						<a
							href="/ATSversion.pdf"
							download
							className="inline-block border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-300"
						>
							Download Resume
						</a>
					</div>

					<div className="mt-4 flex flex-wrap gap-2">
						<span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full">Forecasting</span>
						<span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full">Churn Prediction</span>
						<span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full">ETL & SQL</span>
						<span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full">Visualization</span>
					</div>
				</div>

				<div className="flex justify-center md:justify-end card-anim">
					<div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-lg transform hover:scale-105 transition">
						<picture>
							<source type="image/webp" srcSet={`${profile.replace('.jpg','-400.webp')} 400w, ${profile.replace('.jpg','-200.webp')} 200w`} sizes="(max-width: 768px) 50vw, 200px" />
							<img
							src={profile}
						srcSet={`${profile.replace('.jpg','-400.jpg')} 400w, ${profile.replace('.jpg','-200.jpg')} 200w`}
						sizes="(max-width: 768px) 50vw, 200px"
							alt="Headshot of Arun Lama"
							className="w-full h-full object-cover"
							loading="lazy"
						/>						</picture>					</div>
				</div>
			</div>
		</section>
	)
}