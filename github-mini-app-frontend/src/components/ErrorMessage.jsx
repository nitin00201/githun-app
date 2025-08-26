export const ErrorMessage = ({ error }) => {
  if (!error) return null;
  return (
    <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
      <p className="text-red-700 font-medium text-sm">{error}</p>
    </div>
  );
};