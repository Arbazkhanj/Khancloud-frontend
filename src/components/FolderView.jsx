export default function FolderView({ title }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all cursor-pointer">
      <h3 className="text-lg font-semibold text-blue-600">{title}</h3>
      <p className="text-gray-500 mt-2">No files uploaded yet</p>
    </div>
  );
}