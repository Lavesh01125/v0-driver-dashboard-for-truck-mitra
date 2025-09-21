"use client"

import { useState } from "react"

export default function DriverDashboard() {
  const [viewMode, setViewMode] = useState("auto") // 'mobile', 'desktop', 'auto'
  const [selectedJob, setSelectedJob] = useState(null)
  const [showJobModal, setShowJobModal] = useState(false)
  const [showEarningsModal, setShowEarningsModal] = useState(false)
  const [showTripModal, setShowTripModal] = useState(false)

  const isMobileView =
    viewMode === "mobile" || (viewMode === "auto" && typeof window !== "undefined" && window.innerWidth < 768)

  const jobs = [
    {
      id: 1,
      from: "Mumbai Airport",
      to: "Pune",
      distance: "150 km",
      payment: "₹3,500",
      type: "Express Cargo",
      details: {
        pickupTime: "10:00 AM",
        deliveryTime: "2:00 PM",
        cargo: "Electronics - 500kg",
        contact: "+91 98765 43210",
        instructions: "Handle with care, fragile items",
      },
    },
    {
      id: 2,
      from: "Delhi Hub",
      to: "Gurgaon",
      distance: "45 km",
      payment: "₹1,200",
      type: "Documents",
      details: {
        pickupTime: "11:30 AM",
        deliveryTime: "1:00 PM",
        cargo: "Legal Documents - 5kg",
        contact: "+91 87654 32109",
        instructions: "Urgent delivery required",
      },
    },
    {
      id: 3,
      from: "Bangalore",
      to: "Chennai",
      distance: "350 km",
      payment: "₹8,500",
      type: "Electronics",
      details: {
        pickupTime: "6:00 AM",
        deliveryTime: "4:00 PM",
        cargo: "Computer Hardware - 1200kg",
        contact: "+91 76543 21098",
        instructions: "Temperature controlled transport needed",
      },
    },
  ]

  const handleJobClick = (job) => {
    setSelectedJob(job)
    setShowJobModal(true)
  }

  const closeModal = () => {
    setShowJobModal(false)
    setShowEarningsModal(false)
    setShowTripModal(false)
    setSelectedJob(null)
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-blue-500 via-blue-400 to-orange-400 ${isMobileView ? "pb-20" : ""}`}
    >
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <h1 className={`${isMobileView ? "text-xl" : "text-2xl"} font-bold text-white`}>TruckMitra</h1>
              <span
                className={`text-white/80 ${isMobileView ? "text-sm" : "text-base"} ${isMobileView ? "hidden" : "hidden sm:block"}`}
              >
                Driver Dashboard
              </span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="flex bg-white/20 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("mobile")}
                  className={`px-2 py-1 rounded text-xs ${viewMode === "mobile" ? "bg-white text-blue-600" : "text-white"}`}
                >
                  📱
                </button>
                <button
                  onClick={() => setViewMode("desktop")}
                  className={`px-2 py-1 rounded text-xs ${viewMode === "desktop" ? "bg-white text-blue-600" : "text-white"}`}
                >
                  🖥️
                </button>
                <button
                  onClick={() => setViewMode("auto")}
                  className={`px-2 py-1 rounded text-xs ${viewMode === "auto" ? "bg-white text-blue-600" : "text-white"}`}
                >
                  Auto
                </button>
              </div>
              <div className={`text-white/90 ${isMobileView ? "text-xs" : "text-sm"} text-right`}>
                <div className="font-medium">John Driver</div>
                <div className="text-white/70">ID: TM001</div>
              </div>
              <div
                className={`${isMobileView ? "w-8 h-8" : "w-10 h-10"} bg-white/20 rounded-full flex items-center justify-center`}
              >
                <svg
                  className={`${isMobileView ? "w-4 h-4" : "w-6 h-6"} text-white`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className={`container mx-auto px-4 ${isMobileView ? "py-4" : "py-6"} space-y-4 sm:space-y-6`}>
        {/* Key Metrics Cards */}
        <div className={`grid ${isMobileView ? "grid-cols-2" : "grid-cols-2 lg:grid-cols-4"} gap-3 sm:gap-4`}>
          <div
            className="bg-white rounded-xl p-4 sm:p-6 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => setShowEarningsModal(true)}
          >
            <div
              className={`flex ${isMobileView ? "flex-col" : "flex-col sm:flex-row sm:items-center sm:justify-between"}`}
            >
              <div className={`${isMobileView ? "mb-2" : "mb-2 sm:mb-0"}`}>
                <p className={`text-gray-600 ${isMobileView ? "text-xs" : "text-xs sm:text-sm"}`}>Today's Earnings</p>
                <p className={`${isMobileView ? "text-lg" : "text-lg sm:text-2xl"} font-bold text-blue-600`}>₹2,450</p>
              </div>
              <div
                className={`${isMobileView ? "w-8 h-8 self-end" : "w-8 h-8 sm:w-12 sm:h-12 self-end sm:self-auto"} bg-orange-100 rounded-lg flex items-center justify-center`}
              >
                <svg
                  className={`${isMobileView ? "w-4 h-4" : "w-4 h-4 sm:w-6 sm:h-6"} text-orange-500`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Active Jobs */}
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
            <div
              className={`flex ${isMobileView ? "flex-col" : "flex-col sm:flex-row sm:items-center sm:justify-between"}`}
            >
              <div className={`${isMobileView ? "mb-2" : "mb-2 sm:mb-0"}`}>
                <p className={`text-gray-600 ${isMobileView ? "text-xs" : "text-xs sm:text-sm"}`}>Active Jobs</p>
                <p className={`text-lg ${isMobileView ? "" : "sm:text-2xl"} font-bold text-blue-600`}>3</p>
              </div>
              <div
                className={`${isMobileView ? "w-8 h-8" : "w-8 h-8 sm:w-12 sm:h-12"} bg-blue-100 rounded-lg flex items-center justify-center self-end ${isMobileView ? "" : "sm:self-auto"}`}
              >
                <svg
                  className={`${isMobileView ? "w-4 h-4" : "w-4 h-4 sm:w-6 sm:h-6"} text-blue-500`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Distance Today */}
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
            <div
              className={`flex ${isMobileView ? "flex-col" : "flex-col sm:flex-row sm:items-center sm:justify-between"}`}
            >
              <div className={`${isMobileView ? "mb-2" : "mb-2 sm:mb-0"}`}>
                <p className={`text-gray-600 ${isMobileView ? "text-xs" : "text-xs sm:text-sm"}`}>Distance Today</p>
                <p className={`text-lg ${isMobileView ? "" : "sm:text-2xl"} font-bold text-blue-600`}>245 km</p>
              </div>
              <div
                className={`${isMobileView ? "w-8 h-8" : "w-8 h-8 sm:w-12 sm:h-12"} bg-green-100 rounded-lg flex items-center justify-center self-end ${isMobileView ? "" : "sm:self-auto"}`}
              >
                <svg
                  className={`${isMobileView ? "w-4 h-4" : "w-4 h-4 sm:w-6 sm:h-6"} text-green-500`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Rating */}
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
            <div
              className={`flex ${isMobileView ? "flex-col" : "flex-col sm:flex-row sm:items-center sm:justify-between"}`}
            >
              <div className={`${isMobileView ? "mb-2" : "mb-2 sm:mb-0"}`}>
                <p className={`text-gray-600 ${isMobileView ? "text-xs" : "text-xs sm:text-sm"}`}>Rating</p>
                <p className={`text-lg ${isMobileView ? "" : "sm:text-2xl"} font-bold text-blue-600`}>4.8</p>
              </div>
              <div
                className={`${isMobileView ? "w-8 h-8" : "w-8 h-8 sm:w-12 sm:h-12"} bg-yellow-100 rounded-lg flex items-center justify-center self-end ${isMobileView ? "" : "sm:self-auto"}`}
              >
                <svg
                  className={`${isMobileView ? "w-4 h-4" : "w-4 h-4 sm:w-6 sm:h-6"} text-yellow-500`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className={`grid ${isMobileView ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-3"} gap-4 sm:gap-6`}>
          {/* Available Jobs - takes 2 columns on large screens */}
          <div className={`${isMobileView ? "order-1" : "lg:col-span-2"} bg-white rounded-xl p-4 sm:p-6 shadow-lg`}>
            <div
              className={`flex ${isMobileView ? "flex-col" : "flex-col sm:flex-row sm:items-center sm:justify-between"} mb-4 sm:mb-6`}
            >
              <h2 className={`${isMobileView ? "text-lg" : "text-lg sm:text-xl"} font-bold text-gray-800 mb-2 sm:mb-0`}>
                Available Jobs
              </h2>
              <button
                className={`bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors ${isMobileView ? "text-sm" : "text-sm sm:text-base"}`}
              >
                Refresh
              </button>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="border border-gray-200 rounded-lg p-3 sm:p-4 hover:border-blue-300 transition-colors cursor-pointer hover:shadow-md"
                  onClick={() => handleJobClick(job)}
                >
                  <div
                    className={`flex ${isMobileView ? "flex-col" : "flex-col sm:flex-row sm:items-center sm:justify-between"}`}
                  >
                    <div className={`flex-1 ${isMobileView ? "mb-3" : "mb-3 sm:mb-0"}`}>
                      <div
                        className={`flex ${isMobileView ? "flex-col" : "flex-col sm:flex-row sm:items-center sm:space-x-2"} mb-2`}
                      >
                        <span
                          className={`bg-orange-100 text-orange-600 px-2 py-1 rounded ${isMobileView ? "text-xs" : "text-xs sm:text-sm"} font-medium inline-block mb-1 sm:mb-0`}
                        >
                          {job.type}
                        </span>
                        <span className={`text-gray-500 ${isMobileView ? "text-xs" : "text-xs sm:text-sm"}`}>
                          {job.distance}
                        </span>
                      </div>
                      <div
                        className={`flex ${isMobileView ? "flex-col" : "flex-col sm:flex-row sm:items-center sm:space-x-4"}`}
                      >
                        <div
                          className={`text-gray-800 font-medium ${isMobileView ? "text-sm" : "text-sm sm:text-base"}`}
                        >
                          {job.from}
                        </div>
                        <svg
                          className={`w-4 h-4 text-gray-400 ${isMobileView ? "hidden" : "hidden sm:block"}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                        <div
                          className={`${isMobileView ? "text-xs text-gray-500" : "text-xs sm:text-sm text-gray-500 sm:hidden"}`}
                        >
                          ↓
                        </div>
                        <div
                          className={`text-gray-800 font-medium ${isMobileView ? "text-sm" : "text-sm sm:text-base"}`}
                        >
                          {job.to}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`flex items-center justify-between ${isMobileView ? "" : "sm:flex-col sm:items-end"}`}
                    >
                      <div
                        className={`${isMobileView ? "text-base" : "text-base sm:text-lg"} font-bold text-blue-600 sm:mb-2`}
                      >
                        {job.payment}
                      </div>
                      <button
                        className={`bg-orange-500 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors ${isMobileView ? "text-sm" : "text-sm"}`}
                        onClick={(e) => {
                          e.stopPropagation()
                          // Handle accept job
                        }}
                      >
                        Accept
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`${isMobileView ? "order-2" : "lg:col-span-1"} bg-white rounded-xl p-4 sm:p-6 shadow-lg`}>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button
                className={`w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors ${isMobileView ? "text-sm" : "text-sm sm:text-base"}`}
              >
                Start Trip
              </button>
              <button
                className={`w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors ${isMobileView ? "text-sm" : "text-sm sm:text-base"}`}
              >
                Emergency Support
              </button>
              <button
                className={`w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors ${isMobileView ? "text-sm" : "text-sm sm:text-base"}`}
              >
                View Route
              </button>
              <button
                className={`w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors ${isMobileView ? "text-sm" : "text-sm sm:text-base"}`}
              >
                Contact Dispatcher
              </button>
              <button
                className={`w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors ${isMobileView ? "text-sm" : "text-sm sm:text-base"}`}
              >
                Trip History
              </button>
              <button
                className={`w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors ${isMobileView ? "text-sm" : "text-sm sm:text-base"}`}
                onClick={() => setShowEarningsModal(true)}
              >
                Earnings Report
              </button>
            </div>
          </div>
        </div>

        {/* Current Trip Status */}
        <div
          className="bg-white rounded-xl p-4 sm:p-6 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
          onClick={() => setShowTripModal(true)}
        >
          <h3 className="text-lg font-bold text-gray-800 mb-4">Current Trip</h3>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div
              className={`flex ${isMobileView ? "flex-col" : "flex-col sm:flex-row sm:items-center sm:justify-between"} mb-4`}
            >
              <div className={`${isMobileView ? "mb-2" : "mb-2 sm:mb-0"}`}>
                <h4 className={`font-medium text-blue-800 ${isMobileView ? "text-sm" : "text-sm sm:text-base"}`}>
                  Mumbai Airport → Pune Industrial Area
                </h4>
                <p className={`text-blue-600 ${isMobileView ? "text-xs" : "text-xs sm:text-sm"}`}>
                  Electronics Cargo • 150 km • ₹3,500
                </p>
              </div>
              <span
                className={`bg-blue-600 text-white px-3 py-1 rounded-full ${isMobileView ? "text-xs self-start" : "text-xs sm:text-sm self-start sm:self-auto"}`}
              >
                In Progress
              </span>
            </div>
            <div
              className={`grid ${isMobileView ? "grid-cols-2" : "grid-cols-2 lg:grid-cols-4"} gap-3 sm:gap-4 ${isMobileView ? "text-xs" : "text-xs sm:text-sm"}`}
            >
              <div>
                <p className="text-gray-600">Started</p>
                <p className="font-medium">09:30 AM</p>
              </div>
              <div>
                <p className="text-gray-600">ETA</p>
                <p className="font-medium">02:15 PM</p>
              </div>
              <div>
                <p className="text-gray-600">Distance Left</p>
                <p className="font-medium">85 km</p>
              </div>
              <div className={`${isMobileView ? "col-span-2" : "col-span-2 lg:col-span-1"}`}>
                <p className="text-gray-600 mb-1">Progress</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "65%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile-specific bottom navigation */}
        {isMobileView && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
            <div className="flex justify-around">
              <button className="flex flex-col items-center py-2">
                <svg className="w-5 h-5 text-blue-600 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                  />
                </svg>
                <span className="text-xs text-blue-600">Dashboard</span>
              </button>
              <button className="flex flex-col items-center py-2">
                <svg className="w-5 h-5 text-gray-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                <span className="text-xs text-gray-400">Jobs</span>
              </button>
              <button className="flex flex-col items-center py-2" onClick={() => setShowEarningsModal(true)}>
                <svg className="w-5 h-5 text-gray-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
                <span className="text-xs text-gray-400">Earnings</span>
              </button>
              <button className="flex flex-col items-center py-2">
                <svg className="w-5 h-5 text-gray-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="text-xs text-gray-400">Profile</span>
              </button>
            </div>
          </div>
        )}
      </main>

      {showJobModal && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">Job Details</h3>
                <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-sm font-medium">
                    {selectedJob.type}
                  </span>
                  <div className="mt-2">
                    <div className="text-lg font-bold text-blue-600">{selectedJob.payment}</div>
                    <div className="text-gray-600">{selectedJob.distance}</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Route</h4>
                    <div className="text-gray-600">
                      <div>{selectedJob.from}</div>
                      <div className="text-gray-400 text-sm">↓</div>
                      <div>{selectedJob.to}</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Schedule</h4>
                    <div className="text-gray-600 text-sm">
                      <div>Pickup: {selectedJob.details.pickupTime}</div>
                      <div>Delivery: {selectedJob.details.deliveryTime}</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Cargo</h4>
                    <div className="text-gray-600 text-sm">{selectedJob.details.cargo}</div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Contact</h4>
                    <div className="text-gray-600 text-sm">{selectedJob.details.contact}</div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Instructions</h4>
                    <div className="text-gray-600 text-sm">{selectedJob.details.instructions}</div>
                  </div>
                </div>

                <div className="flex space-x-3 pt-4">
                  <button className="flex-1 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors">
                    Accept Job
                  </button>
                  <button
                    onClick={closeModal}
                    className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showEarningsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">Earnings Report</h3>
                <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-blue-600 text-sm">Today</div>
                    <div className="text-xl font-bold text-blue-800">₹2,450</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-green-600 text-sm">This Week</div>
                    <div className="text-xl font-bold text-green-800">₹15,200</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <div className="text-orange-600 text-sm">This Month</div>
                    <div className="text-xl font-bold text-orange-800">₹68,500</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="text-purple-600 text-sm">Total</div>
                    <div className="text-xl font-bold text-purple-800">₹2,45,000</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Recent Trips</h4>
                  <div className="space-y-2">
                    {[
                      { route: "Mumbai → Pune", amount: "₹3,500", date: "Today" },
                      { route: "Delhi → Gurgaon", amount: "₹1,200", date: "Yesterday" },
                      { route: "Bangalore → Chennai", amount: "₹8,500", date: "2 days ago" },
                    ].map((trip, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                        <div>
                          <div className="text-sm font-medium">{trip.route}</div>
                          <div className="text-xs text-gray-500">{trip.date}</div>
                        </div>
                        <div className="font-bold text-blue-600">{trip.amount}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={closeModal}
                  className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showTripModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">Current Trip Details</h3>
                <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-blue-800">Mumbai Airport → Pune Industrial Area</h4>
                    <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">In Progress</span>
                  </div>
                  <p className="text-blue-600 text-sm">Electronics Cargo • 150 km • ₹3,500</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-gray-600 text-sm">Started</div>
                    <div className="font-medium">09:30 AM</div>
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm">ETA</div>
                    <div className="font-medium">02:15 PM</div>
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm">Distance Left</div>
                    <div className="font-medium">85 km</div>
                  </div>
                  <div>
                    <div className="text-gray-600 text-sm">Progress</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Trip Actions</h4>
                  <div className="space-y-2">
                    <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors text-sm">
                      Mark as Delivered
                    </button>
                    <button className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition-colors text-sm">
                      Report Issue
                    </button>
                    <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm">
                      Contact Customer
                    </button>
                  </div>
                </div>

                <button
                  onClick={closeModal}
                  className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
