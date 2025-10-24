export default function UploadCard() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center text-gray-700">
      <h2 className="text-lg font-semibold mb-3">Upload Files</h2>
      <label className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600">
        Choose File
        <input type="file" hidden />
      </label>
    </div>
  );
}