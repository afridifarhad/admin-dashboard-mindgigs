import React from "react";
import Footer from "../components/Footer";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

// Sample data for the graphs
const userGrowthData = [
  { month: "Jan", users: 100 },
  { month: "Feb", users: 200 },
  { month: "Mar", users: 400 },
  { month: "Apr", users: 600 },
  { month: "May", users: 800 },
];

const taskCompletionData = [
  { week: "Week 1", tasks: 20 },
  { week: "Week 2", tasks: 40 },
  { week: "Week 3", tasks: 60 },
  { week: "Week 4", tasks: 80 },
];

const DashboardContent = () => {
  return (
    <>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-6">Welcome to the Admin Panel</h2>

        {/* Statistics Section */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-6">
          <div className="p-6 bg-white shadow rounded text-center">
            <h3 className="text-lg font-semibold">Total Users</h3>
            <p className="text-3xl font-bold text-blue-600">1,234</p>
          </div>
          <div className="p-6 bg-white shadow rounded text-center">
            <h3 className="text-lg font-semibold">Active Sessions</h3>
            <p className="text-3xl font-bold text-green-600">98</p>
          </div>
          <div className="p-6 bg-white shadow rounded text-center">
            <h3 className="text-lg font-semibold">Tasks Completed</h3>
            <p className="text-3xl font-bold text-purple-600">456</p>
          </div>
          <div className="p-6 bg-white shadow rounded text-center">
            <h3 className="text-lg font-semibold">Reports</h3>
            <p className="text-3xl font-bold text-red-600">72</p>
          </div>
        </div>

        {/* Recent Activity Table */}
        <div className="bg-white shadow rounded p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">Activity</th>
                  <th className="border border-gray-300 px-4 py-2">User</th>
                  <th className="border border-gray-300 px-4 py-2">Date</th>
                  <th className="border border-gray-300 px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Login</td>
                  <td className="border border-gray-300 px-4 py-2">John Doe</td>
                  <td className="border border-gray-300 px-4 py-2">
                    2024-11-23
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600">
                    Success
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Logout</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Jane Smith
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    2024-11-22
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-red-600">
                    Failed
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Report</td>
                  <td className="border border-gray-300 px-4 py-2">Alice</td>
                  <td className="border border-gray-300 px-4 py-2">
                    2024-11-20
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-green-600">
                    Success
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/*  */}

        {/* Graphs Section */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mb-6">
          {/* User Growth Chart */}
          <div className="p-6 bg-white shadow rounded">
            <h3 className="text-lg font-semibold mb-4">User Growth</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={userGrowthData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="users"
                    stroke="#8884d8"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Task Completion Chart */}
          <div className="p-6 bg-white shadow rounded">
            <h3 className="text-lg font-semibold mb-4">Task Completion</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={taskCompletionData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="tasks" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/*  */}

        {/* Charts Section */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {/* User Growth */}
          <div className="p-6 bg-white shadow rounded">
            <h3 className="text-lg font-semibold mb-4">User Growth</h3>
            <div className="h-40 bg-gray-100 flex items-center justify-center">
              <p>Chart Placeholder</p>
            </div>
          </div>

          {/* Task Completion */}
          <div className="p-6 bg-white shadow rounded">
            <h3 className="text-lg font-semibold mb-4">Task Completion</h3>
            <div className="h-40 bg-gray-100 flex items-center justify-center">
              <p>Chart Placeholder</p>
            </div>
          </div>

          {/* Revenue Tracking */}
          <div className="p-6 bg-white shadow rounded">
            <h3 className="text-lg font-semibold mb-4">Revenue Tracking</h3>
            <div className="h-40 bg-gray-100 flex items-center justify-center">
              <p>Chart Placeholder</p>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="p-6 bg-white shadow rounded">
            <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• User John updated profile</li>
              <li>• Task "Design UI" completed</li>
              <li>• New user registration: Jane Doe</li>
              <li>• System backup completed</li>
            </ul>
          </div>

          {/* System Performance */}
          <div className="p-6 bg-white shadow rounded">
            <h3 className="text-lg font-semibold mb-4">System Performance</h3>
            <div className="h-40 bg-gray-100 flex items-center justify-center">
              <p>Performance Chart</p>
            </div>
          </div>

          {/* Notifications */}
          <div className="p-6 bg-white shadow rounded">
            <h3 className="text-lg font-semibold mb-4">Notifications</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>🔔 New message from Admin</li>
              <li>📅 Upcoming meeting tomorrow</li>
              <li>⚠️ Low storage warning</li>
              <li>✅ Update installed successfully</li>
            </ul>
          </div>

          {/* Pending Approvals */}
          <div className="p-6 bg-white shadow rounded">
            <h3 className="text-lg font-semibold mb-4">Pending Approvals</h3>
            <div className="flex flex-col space-y-2">
              <button className="px-4 py-2 bg-blue-500 text-white rounded">
                Approve User Request
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded">
                Approve Task
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded">
                Approve Payment
              </button>
            </div>
          </div>

          {/* Logs */}
          <div className="p-6 bg-white shadow rounded">
            <h3 className="text-lg font-semibold mb-4">System Logs</h3>
            <div className="h-40 bg-gray-100 overflow-y-auto text-sm text-gray-700 p-4">
              <p>[10:15 AM] Server restarted</p>
              <p>[11:00 AM] User login: Admin</p>
              <p>[12:30 PM] Task "Update System" added</p>
              <p>[1:45 PM] Error: Failed API request</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardContent;
