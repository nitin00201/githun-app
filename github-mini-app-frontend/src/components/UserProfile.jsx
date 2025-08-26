export const UserProfile = ({ user }) => {
  if (!user) return null;

  return (
    <div className="mb-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
        />
        <div className="text-center sm:text-left flex-1">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {user.name || user.login}
          </h2>
          {user.bio && (
            <p className="text-gray-600 mb-3 leading-relaxed">{user.bio}</p>
          )}
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm">
            {/* <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm">
              <span className="font-medium text-gray-700">Created:</span>
              <span className="text-blue-600 font-bold">
                {new Date(user.createdAt).toLocaleDateString()}
              </span>
            </div> */}
            <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm">
              <span className="font-medium text-gray-700">Profile:</span>
              <a 
                href={user.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-600 font-bold hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};