import { useState } from "react";
import { RepositoryList } from "./components/Repositories";
import { UserProfile } from "./components/UserProfile";
import { RepositorySearch } from "./components/RepositorySearch";
import { UserSearch } from "./components/userSearch";
import { ErrorMessage } from "./components/ErrorMessage";

const API_URL = "http://localhost:4000/api";

const githubAPI = {
  fetchUser: async (username) => {
    const response = await fetch(`${API_URL}/user/${username}`);
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Error fetching user");
    }
    return response.json();
  },

  fetchRepos: async (username) => {
    const response = await fetch(`${API_URL}/user/${username}/repos`);
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Error fetching repos");
    }
    return response.json();
  },

  searchRepos: async (query) => {
    const response = await fetch(`${API_URL}/search?q=${query}`);
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Error searching repos");
    }
    return response.json();
  }
};
function App() {
  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState("");

  const fetchUser = async () => {
    try {
      setError("");
      const userData = await githubAPI.fetchUser(username);
      setUser(userData);
    } catch (err) {
      setError(err.message);
    }
  };

  const fetchRepos = async () => {
    try {
      setError("");
      const reposData = await githubAPI.fetchRepos(username);
      setRepos(reposData);
    } catch (err) {
      setError(err.message);
    }
  };

  const searchRepos = async () => {
    try {
      setError("");
      const searchData = await githubAPI.searchRepos(searchQuery);
      setSearchResults(searchData.items);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            🚀 GitHub Explorer
          </h1>
          <p className="text-gray-600">Discover GitHub users and repositories</p>
        </div>

        <div className=" shadow-xl rounded-2xl p-8 backdrop-blur-sm bg-white/90">
          <UserSearch
            username={username}
            onUsernameChange={setUsername}
            onFetchUser={fetchUser}
            onFetchRepos={fetchRepos}
          />

          <UserProfile user={user} />

          <RepositoryList repos={repos} />

          <RepositorySearch
            searchQuery={searchQuery}
            onSearchQueryChange={setSearchQuery}
            onSearch={searchRepos}
          />

          <RepositoryList repos={searchResults} title="Search Results" />

          <ErrorMessage error={error} />
        </div>
      </div>
    </div>
  );
}

export default App;