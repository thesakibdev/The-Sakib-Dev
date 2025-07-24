"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AdminLayout from "../../../components/AdminLayout";
import {
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
  HiEye,
  HiPlus,
} from "react-icons/hi2";
import StatCard from "../../../components/StatCard";
import { projectsAPI, testimonialsAPI, contactAPI } from "../../../utils/api";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    projects: 0,
    testimonials: 0,
    contacts: 0,
    views: 0,
  });
  const [recentContacts, setRecentContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Fetch stats
      const [projectsData, testimonialsData, contactsData] = await Promise.all([
        projectsAPI.getAll({ limit: 1 }),
        testimonialsAPI.getAll({ limit: 1 }),
        contactAPI.getAll({ limit: 1 }),
      ]);

      setStats({
        projects: projectsData.data?.pagination?.total || 0,
        testimonials: testimonialsData.data?.pagination?.total || 0,
        contacts: contactsData.data?.pagination?.total || 0,
        views: Math.floor(Math.random() * 1000) + 500, // Mock data
      });

      // Fetch recent contacts
      const recentContactsData = await contactAPI.getAll({ limit: 5 });
      setRecentContacts(recentContactsData.data || []);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <AdminLayout currentPage="Dashboard">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout currentPage="Dashboard">
      <div className="space-y-6 bg-transparent">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Projects"
            value={stats.projects}
            icon={HiRectangleGroup}
            trend={12}
            color="bg-blue-500"
          />
          <StatCard
            title="Testimonials"
            value={stats.testimonials}
            icon={HiChatBubbleBottomCenterText}
            trend={8}
            color="bg-green-500"
          />
          <StatCard
            title="Contact Messages"
            value={stats.contacts}
            icon={HiEnvelope}
            trend={-3}
            color="bg-purple-500"
          />
          <StatCard
            title="Portfolio Views"
            value={stats.views}
            icon={HiEye}
            trend={25}
            color="bg-orange-500"
          />
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Contacts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Recent Contacts
              </h3>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View all
              </button>
            </div>

            <div className="space-y-4">
              {recentContacts.length > 0 ? (
                recentContacts.map((contact, index) => (
                  <div
                    key={contact._id}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">
                        {contact.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {contact.name}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {contact.subject}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">
                        {new Date(contact.createdAt).toLocaleDateString()}
                      </p>
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                          contact.status === "new"
                            ? "bg-red-100 text-red-800"
                            : contact.status === "read"
                            ? "bg-yellow-100 text-yellow-800"
                            : contact.status === "replied"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {contact.status}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <HiEnvelope className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">No recent contacts</p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Quick Actions
            </h3>

            <div className="space-y-4">
              <button className="w-full flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <HiPlus className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">Add New Project</p>
                  <p className="text-sm text-gray-500">
                    Create a new portfolio project
                  </p>
                </div>
              </button>

              <button className="w-full flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-colors">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <HiChatBubbleBottomCenterText className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">
                    Manage Testimonials
                  </p>
                  <p className="text-sm text-gray-500">
                    Review and approve testimonials
                  </p>
                </div>
              </button>

              <button className="w-full flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-colors">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <HiEnvelope className="w-5 h-5 text-purple-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">View Messages</p>
                  <p className="text-sm text-gray-500">
                    Check contact form submissions
                  </p>
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </AdminLayout>
  );
}
