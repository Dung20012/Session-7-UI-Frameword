import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Button, ButtonGroup } from 'react-bootstrap';

function App() {
  return (
    <div className="p-5">

      <div className="mb-4">
        <Button variant="primary" className="me-2">Lưu</Button>
        <Button variant="secondary" className="me-2">Hủy</Button>
        <Button variant="success" className="me-2">Thành công</Button>
        <Button variant="warning" className="me-2">Cảnh báo</Button>
        <Button variant="danger" className="me-2">Báo lỗi</Button>
        <Button variant="info" className="me-2">Thông tin</Button>
        <a variant="info" className="me-2">Đường dẫn</a>
      </div>
    </div>
    // npm install react-bootstrap bootstrap để cài đặt
  );
}

export default App;
