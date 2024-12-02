import React from "react";
import {
  FaBell,
  FaPalette,
  FaLock,
  FaUserCog,
  FaKey,
  FaDatabase,
} from "react-icons/fa";
import Footer from "../components/Footer";

function Setting() {
  return (
    <>

      <div className="p-6 bg-gray-100">
        <h1 className="text-xl font-bold mb-6">Admin Panel Settings</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Account Settings */}
          <div className="bg-white p-6 shadow rounded">
            <h2 className="text-lg font-semibold flex items-center mb-4">
              <FaUserCog className="mr-2 text-blue-500" /> Account Settings
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter username"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
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
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                Save Changes
              </button>
            </form>
          </div>

          {/* Security Settings */}
          <div className="bg-white p-6 shadow rounded">
            <h2 className="text-lg font-semibold flex items-center mb-4">
              <FaLock className="mr-2 text-red-500" /> Security Settings
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="password">
                  Current Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter current password"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="newPassword">
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  placeholder="Enter new password"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
                Update Password
              </button>
            </form>
          </div>

          {/* Notification Settings */}
          <div className="bg-white p-6 shadow rounded">
            <h2 className="text-lg font-semibold flex items-center mb-4">
              <FaBell className="mr-2 text-yellow-500" /> Notification Preferences
            </h2>
            <form>
              <div className="mb-4">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Enable Email Notifications</span>
                </label>
              </div>
              <div className="mb-4">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Enable SMS Notifications</span>
                </label>
              </div>
              <div className="mb-4">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Enable Push Notifications</span>
                </label>
              </div>
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                Save Preferences
              </button>
            </form>
          </div>

          {/* Theme Settings */}
          <div className="bg-white p-6 shadow rounded">
            <h2 className="text-lg font-semibold flex items-center mb-4">
              <FaPalette className="mr-2 text-purple-500" /> Theme Customization
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Select Theme</label>
                <select className="w-full px-3 py-2 border rounded">
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="blue">Blue</option>
                </select>
              </div>
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                Apply Theme
              </button>
            </form>
          </div>

          {/* API Key Management */}
          <div className="bg-white p-6 shadow rounded">
            <h2 className="text-lg font-semibold flex items-center mb-4">
              <FaKey className="mr-2 text-gray-500" /> API Key Management
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Generate API Key</label>
                <button type="button" className="px-4 py-2 bg-blue-500 text-white rounded">
                  Generate Key
                </button>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Current API Key</label>
                <input
                  type="text"
                  value="***********"
                  readOnly
                  className="w-full px-3 py-2 border rounded bg-gray-100"
                />
              </div>
            </form>
          </div>

          {/* Database Settings */}
          <div className="bg-white p-6 shadow rounded">
            <h2 className="text-lg font-semibold flex items-center mb-4">
              <FaDatabase className="mr-2 text-green-500" /> Database Settings
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Backup Frequency</label>
                <select className="w-full px-3 py-2 border rounded">
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                Save Settings
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Setting;
