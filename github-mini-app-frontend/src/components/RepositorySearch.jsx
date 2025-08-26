export const RepositorySearch = ({ searchQuery, onSearchQueryChange, onSearch }) => {
  return (
    <div className="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Search Repositories</h2>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Search repos..."
          value={searchQuery}
          onChange={(e) => onSearchQueryChange(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
        />
        <button
          onClick={onSearch}
          className="px-6 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200"
        >
          Search
        </button>
      </div>
    </div>
  );
};
