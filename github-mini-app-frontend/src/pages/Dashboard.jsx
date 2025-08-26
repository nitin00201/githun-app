// Dashboard.jsx
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [repos, setRepos] = useState([]);
  const [userPage, setUserPage] = useState(1);
  const [repoPage, setRepoPage] = useState(1);
  const [userTotalPages, setUserTotalPages] = useState(1);
  const [repoTotalPages, setRepoTotalPages] = useState(1);

  // Fetch users with pagination
  const fetchUsers = async (page = 1) => {
    const res = await fetch(
      `http://localhost:4000/api/dashboard?type=users&page=${page}`
    );
    const json = await res.json();
    setUsers(json.results);
    setUserTotalPages(json.totalPages);
  };

  // Fetch repos with pagination
  const fetchRepos = async (page = 1) => {
    const res = await fetch(
      `http://localhost:4000/api/dashboard?type=repos&page=${page}`
    );
    const json = await res.json();
    setRepos(json.results);
    setRepoTotalPages(json.totalPages);
  };

  useEffect(() => {
    fetchUsers(userPage);
    fetchRepos(repoPage);
  }, [userPage, repoPage]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">📊 Dashboard</h1>

      {/* Users Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">👤 Stored Users</h2>
        {users.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {users.map((user) => (
                <div
                  key={user._id}
                  className="p-4 bg-gray-50 rounded-lg border hover:shadow flex flex-col items-center text-center"
                >
                  <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="w-20 h-20 rounded-full border mb-3"
                  />
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg font-medium text-blue-600 hover:underline"
                  >
                    {user.name || user.login}
                  </a>
                  <p className="text-sm text-gray-600">
                    {user.bio || "No bio available"}
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    Created: {new Date(user.createdAt).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6 space-x-2">
              <button
                disabled={userPage === 1}
                onClick={() => setUserPage(userPage - 1)}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Previous
              </button>
              <span className="px-3 py-1">
                Page {userPage} of {userTotalPages}
              </span>
              <button
                disabled={userPage === userTotalPages}
                onClick={() => setUserPage(userPage + 1)}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <p className="text-gray-500">No users stored yet.</p>
        )}
      </div>

      {/* Repos Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">📂 Stored Repositories</h2>
        {repos.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {repos.map((repo) => (
                <div
                  key={repo._id}
                  className="p-4 bg-gray-50 rounded-lg border hover:shadow flex flex-col"
                >
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg font-semibold text-blue-600 hover:underline"
                  >
                    {repo.full_name}
                  </a>
                  <p className="text-sm text-gray-600 mt-2">
                    {repo.description || "No description available"}
                  </p>
                  <div className="flex justify-between text-sm text-gray-500 mt-3">
                    <span>⭐ {repo.stargazers_count}</span>
                    <span>🍴 {repo.forks_count}</span>
                    <span>{repo.language || "N/A"}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    Updated: {new Date(repo.updatedAt).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6 space-x-2">
              <button
                disabled={repoPage === 1}
                onClick={() => setRepoPage(repoPage - 1)}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Previous
              </button>
              <span className="px-3 py-1">
                Page {repoPage} of {repoTotalPages}
              </span>
              <button
                disabled={repoPage === repoTotalPages}
                onClick={() => setRepoPage(repoPage + 1)}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <p className="text-gray-500">No repositories stored yet.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
