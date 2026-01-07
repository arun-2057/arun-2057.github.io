export default function Projects() {
  const projects = [
    {
      title: 'Customer Churn Prediction',
      desc: 'Telecom churn modeling with feature engineering and XGBoost ensemble.',
      tags: ['Python', 'XGBoost', 'Feature Engineering'],
      link: 'https://www.kaggle.com/code/zorornoa/churn-analysis',
      image: '/images/7_optimized.jpg',
    },
    {
      title: 'Winter_Food_ analysis',
      desc: 'Exploratory data analysis of winter food sales using Pandas and Seaborn.',
      tags: ['EDA', 'Seaborn', 'Pandas'],
      link: 'https://www.kaggle.com/code/zorornoa/winter-food-analysis',
      image: '/images/13_optimized.jpg',
    },
    {
      title: 'Mental Health Analysis App',
      desc: 'Analysis and visualization of mental health survey data with interactive dashboard.',
      tags: ['Flask', 'Pandas', 'Visualization'],
      link: 'https://github.com/sHoYo057/Mental_health',
      image: '/images/yellow-orange-report_optimized.jpg',
    },
    {
      title: 'Premier League Data Analysis',
      desc: 'Exploratory data analysis of Premier League stats using Pandas and Matplotlib.',
      tags: ['EDA', 'Matplotlib', 'Pandas'],
      link: 'https://www.kaggle.com/code/zorornoa/premier-league-analysis',
      image: '/images/9_optimized.jpg',
    }
  ]

  function handleImgError(e) {
    e.currentTarget.onerror = null
    e.currentTarget.src =
      "data:image/svg+xml;utf8," +
      encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675' viewBox='0 0 1200 675'><rect width='100%' height='100%' fill='%23e5e7eb'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23737482' font-family='Inter, Arial, sans-serif' font-size='28'>Image unavailable</text></svg>`
      )
  }

  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden group relative focus-within:ring-2 focus-within:ring-blue-400"
            >
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${p.title} in a new tab`}
                className="block"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width="800"
                  height="600"
                  onError={handleImgError}
                  className="w-full h-56 object-cover group-hover:opacity-80 transition"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {p.tags.map((t, i) => (
                      <span
                        key={t + i}
                        className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="inline-block bg-brand text-white px-3 py-1 rounded focus:outline-none focus:ring-2">
                    View Project →
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
