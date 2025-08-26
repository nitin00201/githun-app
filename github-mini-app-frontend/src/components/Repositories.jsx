export const RepositoryList = ({ repos, title = "Repositories" }) => {
  if (repos.length === 0) return null;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: 'bg-yellow-100 text-yellow-800',
      TypeScript: 'bg-blue-100 text-blue-800',
      Python: 'bg-green-100 text-green-800',
      Java: 'bg-red-100 text-red-800',
      HTML: 'bg-orange-100 text-orange-800',
      CSS: 'bg-purple-100 text-purple-800',
      React: 'bg-cyan-100 text-cyan-800'
    };
    return colors[language] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300 transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-3">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium text-sm truncate flex-1 mr-2"
              >
                {repo.name}
              </a>
              <div className="flex items-center gap-1 text-yellow-500 text-xs whitespace-nowrap">
                <span>⭐</span>
                <span className="text-gray-600">{repo.stargazers_count}</span>
              </div>
            </div>
            
            {repo.description && (
              <p className="text-gray-600 text-xs leading-relaxed mb-3 line-clamp-2">
                {repo.description}
              </p>
            )}
            
            <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
              <div className="flex items-center gap-3">
                {repo.language && (
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLanguageColor(repo.language)}`}>
                    {repo.language}
                  </span>
                )}
                {repo.forks_count > 0 && (
                  <div className="flex items-center gap-1">
                    <span>🍴</span>
                    <span>{repo.forks_count}</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>Updated: {formatDate(repo.updated_at)}</span>
              {repo.homepage && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:text-blue-700 flex items-center gap-1"
                >
                  <span>🔗</span>
                  <span>Live</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};