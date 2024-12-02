import React, { useState } from "react";
import {
  FaUser
} from "react-icons/fa";
import Footer from "../components/Footer";

function Users() {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-6 text-gray-700">
          Admin - User Management
        </h1>
        <div className="bg-white p-6 shadow rounded">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <FaUser className="mr-2 text-blue-500" /> Add User
          </h2>
          <form>
            {/* Name Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter first name"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter last name"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
            </div>

            {/* Email and Image Upload */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter email"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="imageUpload">
                  Upload Image
                </label>
                <input
                  type="file"
                  id="imageUpload"
                  accept="image/*"
                  className="w-full px-3 py-2 border rounded"
                  onChange={handleImageUpload}
                />
                {imagePreview && (
                  <div className="mt-2">
                    <img
                      src={imagePreview}
                      alt="Uploaded Preview"
                      className="w-20 h-20 object-cover rounded"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Phone and Address */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter phone number"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="address">
                  Address
                </label>
                <textarea
                  id="address"
                  rows="2"
                  placeholder="Enter address"
                  className="w-full px-3 py-2 border rounded"
                ></textarea>
              </div>
            </div>

            {/* Dropdowns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="skills">
                  Skills
                </label>
                <select id="skills" className="w-full px-3 py-2 border rounded">
                  <option value="">Select skills</option>
                  <option value="javascript">JavaScript</option>
                  <option value="python">Python</option>
                  <option value="design">Design</option>
                  <option value="management">Management</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="designation">
                  Designation
                </label>
                <select id="designation" className="w-full px-3 py-2 border rounded">
                  <option value="">Select designation</option>
                  <option value="manager">Manager</option>
                  <option value="developer">Developer</option>
                  <option value="designer">Designer</option>
                  <option value="intern">Intern</option>
                </select>
              </div>
            </div>

            {/* Additional Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="employeeId">
                  Employee ID
                </label>
                <input
                  type="text"
                  id="employeeId"
                  placeholder="Enter employee ID"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="department">
                  Department
                </label>
                <select id="department" className="w-full px-3 py-2 border rounded">
                  <option value="">Select department</option>
                  <option value="hr">HR</option>
                  <option value="it">IT</option>
                  <option value="marketing">Marketing</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="joinDate">
                  Joining Date
                </label>
                <input type="date" id="joinDate" className="w-full px-3 py-2 border rounded" />
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Users;
