function App() {
  return (
    <div className="p-8 space-y-10">
      {/* Hình 1.1 – Các phần tử nằm bên trái */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Hình 1.1 – Các phần tử nằm bên trái</h2>
        <div className="flex justify-start space-x-4 bg-gray-100 p-4 rounded">
          <div className="w-12 h-12 bg-blue-500">1</div>
          <div className="w-12 h-12 bg-blue-500">2</div>
          <div className="w-12 h-12 bg-blue-500">3</div>
        </div>
      </div>

      {/* Hình 1.2 – Các phần tử nằm bên phải */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Hình 1.2 – Các phần tử nằm bên phải</h2>
        <div className="flex justify-end space-x-4 bg-gray-100 p-4 rounded">
          <div className="w-12 h-12 bg-blue-500">1</div>
          <div className="w-12 h-12 bg-blue-500">2</div>
          <div className="w-12 h-12 bg-blue-500">3</div>
        </div>
      </div>

      {/* Hình 1.3 – Các phần tử nằm ở giữa */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Hình 1.3 – Các phần tử nằm ở giữa</h2>
        <div className="flex justify-center space-x-4 bg-gray-100 p-4 rounded">
          <div className="w-12 h-12 bg-blue-500">1</div>
          <div className="w-12 h-12 bg-blue-500">2</div>
          <div className="w-12 h-12 bg-blue-500">3</div>
        </div>
      </div>

      {/* Hình 1.4 – Các phần tử giãn ra hai bên */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Hình 1.4 – Các phần tử giãn ra hai bên</h2>
        <div className="flex justify-between bg-gray-100 p-4 rounded">
          <div className="w-12 h-12 bg-blue-500">1</div>
          <div className="w-12 h-12 bg-blue-500">2</div>
          <div className="w-12 h-12 bg-blue-500">3</div>
        </div>
      </div>

      {/* Hình 1.5 – Các phần tử giãn đều 2 bên */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Hình 1.5 – Các phần tử giãn đều 2 bên</h2>
        <div className="flex justify-around bg-gray-100 p-4 rounded">
          <div className="w-12 h-12 bg-blue-500">1</div>
          <div className="w-12 h-12 bg-blue-500">2</div>
          <div className="w-12 h-12 bg-blue-500">3</div>
        </div>
      </div>

      {/* Hình 1.6 – Các phần tử giữa đều */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Hình 1.6 – Các phần tử giữa đều</h2>
        <div className="flex justify-evenly bg-gray-100 p-4 rounded">
          <div className="w-12 h-12 bg-blue-500">1</div>
          <div className="w-12 h-12 bg-blue-500">2</div>
          <div className="w-12 h-12 bg-blue-500">3</div>
        </div>
      </div>
    </div>
  );
}

export default App;
