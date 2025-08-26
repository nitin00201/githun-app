export const UserSearch = ({ username, onUsernameChange, onFetchUser, onFetchRepos }) => {
  return (
    <div className="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Search GitHub User</h2>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => onUsernameChange(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        />
        <div className="flex gap-2">
          <button
            onClick={onFetchUser}
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
          >
            Get User
          </button>
          <button
            onClick={onFetchRepos}
            className="px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200"
          >
            Get Repos
          </button>
        </div>
      </div>
    </div>
  );
};