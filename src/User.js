import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState(null);
  const [image, setImage] = useState(null);  // State to store the image
  const [error, setError] = useState(""); // For storing error messages
  
  const navigate = useNavigate();
  
  useEffect(() => {
    // Authentication check inside useEffect to ensure hooks are used correctly
    if (!localStorage.getItem('isAuthenticated')) {
      navigate('/login'); // Redirect to login if not authenticated
    }
  }, [navigate]);

  useEffect(() => {
    fetch("http://192.0.0.203:3001/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => setError("Error fetching users: " + error));
  }, []);

  const handleAddUser = () => {
    const formData = new FormData();
    formData.append("userName", userName);
    formData.append("age", age);
    formData.append("email", email);
    formData.append("password", password);
    if (image) {
      formData.append("image", image);
    }

    fetch("http://192.0.0.203:3001/api/users", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers([...users, data]);
        resetForm();
      })
      .catch((error) => setError("Error adding user: " + error));
  };

  const handleUpdateUser = (id) => {
    const formData = new FormData();
    formData.append("userName", userName);
    formData.append("age", age);
    formData.append("email", email);
    formData.append("password", password);
    if (image) {
      formData.append("image", image);
    }

    fetch(`http://192.0.0.203:3001/api/users/${id}`, {
      method: "PUT",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(users.map((user) => (user._id === id ? data : user)));
        resetForm();
      })
      .catch((error) => setError("Error updating user: " + error));
  };

  const handleDeleteUser = (id) => {
    fetch(`http://192.0.0.203:3001/api/users/${id}`, { method: "DELETE" })
      .then(() => setUsers(users.filter((user) => user._id !== id)))
      .catch((error) => setError("Error deleting user: " + error));
  };

  const handleEditUser = (user) => {
    setUserId(user._id);
    setUserName(user.userName);
    setAge(user.age);
    setEmail(user.email);
    setPassword(user.password);
    setImage(null); // Reset the image for editing (optional behavior)
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Store the selected file
  };

  const resetForm = () => {
    setUserId(null);
    setUserName("");
    setAge("");
    setEmail("");
    setPassword("");
    setImage(null); // Reset the image state
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Manage Users</h1>
      {error && <div className="alert alert-danger">{error}</div>} {/* Display error messages */}
      <form className="row g-3">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <input
            type="number"
            className="form-control"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <input
            type="file"
            className="form-control"
            onChange={handleImageChange}
          />
        </div>
        <div className="col-md-1">
          <button
            type="button"
            className="btn btn-primary w-100"
            onClick={() => (userId ? handleUpdateUser(userId) : handleAddUser())}
          >
            {userId ? "Update" : "Add"}
          </button>
        </div>
      </form>

      <table className="table table-bordered table-striped table-hover mt-4">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>User Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.userName}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>
                {user.image ? (
                  <img
                    src={`http://192.0.0.203:3001/${user.image.path}`}
                    alt="User"
                    style={{ width: 50, height: 50, objectFit: "cover" }}
                  />
                ) : (
                  <span>No Image</span>
                )}
              </td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEditUser(user)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteUser(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
