import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";

function App() {
  return (
    <div className="container p-5">
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ và tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Nguyễn Văn A</td>
            <td>Nam</td>
            <td>01/01/2000</td>
            <td>nva@gmail.com</td>
            <td>Hà Nội</td>
            <td>
              
              <button className="btn btn-warning btn-sm ms-2">Sửa</button>
              <button className="btn btn-danger btn-sm ms-2">Xóa</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Trần Thị B</td>
            <td>Nữ</td>
            <td>02/02/2002</td>
            <td>ttb@gmail.com</td>
            <td>HCM</td>
            <td>
             
              <button className="btn btn-warning btn-sm ms-2">Sửa</button>
              <button className="btn btn-danger btn-sm ms-2">Xóa</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Lê Văn C</td>
            <td>Nam</td>
            <td>03/03/2003</td>
            <td>lvc@gmail.com</td>
            <td>Hà Nội</td>
            <td>
              
              <button className="btn btn-warning btn-sm ms-2">Sửa</button>
              <button className="btn btn-danger btn-sm ms-2">Xóa</button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Phạm Thị D</td>
            <td>Nữ</td>
            <td>04/04/2004</td>
            <td>ptd@gmail.com</td>
            <td>HCM</td>
            <td>
            
              <button className="btn btn-warning btn-sm ms-2">Sửa</button>
              <button className="btn btn-danger btn-sm ms-2">Xóa</button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default App;
