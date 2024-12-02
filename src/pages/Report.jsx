import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";
import Footer from "../components/Footer";

const Reports = () => {
  const [reports] = useState([
    { id: "R001", type: "Sales", date: "2024-11-23", status: "Completed" },
    { id: "R002", type: "Users", date: "2024-11-22", status: "Pending" },
    { id: "R003", type: "Subscriptions", date: "2024-11-21", status: "Completed" },
    { id: "R004", type: "Tickets", date: "2024-11-20", status: "In Progress" },
    { id: "R005", type: "Sales", date: "2024-11-19", status: "Completed" },
    { id: "R006", type: "Users", date: "2024-11-18", status: "Pending" },
    { id: "R007", type: "Subscriptions", date: "2024-11-17", status: "Completed" },
    { id: "R008", type: "Tickets", date: "2024-11-16", status: "In Progress" },
   
    // Add more dummy data as needed
  ]);

  // State for filters
  const [searchInput, setSearchInput] = useState("");
  const [reportType, setReportType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const reportsPerPage = 4; // Number of reports per page

  // Filter logic
  const filteredReports = reports.filter((report) => {
    const matchesSearch = report.id.toLowerCase().includes(searchInput.toLowerCase());
    const matchesType = reportType ? report.type === reportType : true;
    const matchesStartDate = startDate ? new Date(report.date) >= new Date(startDate) : true;
    const matchesEndDate = endDate ? new Date(report.date) <= new Date(endDate) : true;

    return matchesSearch && matchesType && matchesStartDate && matchesEndDate;
  });

  // Pagination logic
  const indexOfLastReport = currentPage * reportsPerPage;
  const indexOfFirstReport = indexOfLastReport - reportsPerPage;
  const currentReports = filteredReports.slice(indexOfFirstReport, indexOfLastReport);

  const totalPages = Math.ceil(filteredReports.length / reportsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="p-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6">Admin Reports</h2>

        {/* Filter Section */}
        <div className="bg-white p-6 shadow rounded mb-6">
          <h3 className="text-lg font-semibold mb-4">Filter Reports</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Start Date</label>
              <input
                type="date"
                className="w-full px-3 py-2 border rounded"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">End Date</label>
              <input
                type="date"
                className="w-full px-3 py-2 border rounded"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Report Type</label>
              <select
                className="w-full px-3 py-2 border rounded"
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
              >
                <option value="">All Types</option>
                <option value="Sales">Sales</option>
                <option value="Users">Users</option>
                <option value="Subscriptions">Subscriptions</option>
                <option value="Tickets">Tickets</option>
              </select>
            </div>
          </div>
        </div>

        {/* Reports Table with Search */}
        <div className="bg-white p-6 shadow rounded mb-6 overflow-x-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Generated Reports</h3>
            <input
              type="text"
              placeholder="Search by Report ID"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="mt-2 sm:mt-0 px-3 py-2 border rounded w-full sm:w-1/3"
            />
          </div>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2 text-left">Report ID</th>
                <th className="border p-2 text-left">Type</th>
                <th className="border p-2 text-left">Date</th>
                <th className="border p-2 text-left">Status</th>
                <th className="border p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentReports.length > 0 ? (
                currentReports.map((report) => (
                  <tr key={report.id}>
                    <td className="border p-2">{report.id}</td>
                    <td className="border p-2">{report.type}</td>
                    <td className="border p-2">{report.date}</td>
                    <td className="border p-2">{report.status}</td>
                    <td className="border p-2">
                      <button className="px-2 py-1 bg-green-500 text-white rounded flex items-center">
                        <FaDownload className="mr-2" /> Download
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="border p-2 text-center">
                    No reports found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Reports;
