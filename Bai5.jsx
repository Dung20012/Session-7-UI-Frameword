import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl flex">
        
        <div className="w-1/2 pr-8">
          <img 
            src="https://cdnmedia.baotintuc.vn/Upload/0gYjdiNY41wQIbPeRYyPvA/files/2025/01/ngon-nui.png" 
            alt="Login" 
            className="w-full h-full rounded-lg shadow-md" 
          />
        </div>

        {/* Phần bên phải: Form đăng nhập */}
        <div className="w-1/2">
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

          {/* Form */}
          <Form>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" placeholder="placeholder content" className="border-gray-300 rounded-md shadow-sm" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="placeholder content" className="border-gray-300 rounded-md shadow-sm" />
            </Form.Group>

            <div className="mb-4 flex justify-between items-center">
              <a href="#" className="text-blue-500 text-sm">Forgot password</a>
            </div>

            <Button variant="primary" type="submit" className="w-full py-2">
              Login
            </Button>
          </Form>

          <div className="mt-4 text-center">
            <Button href="#" className="text-blue-500">Register now </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
