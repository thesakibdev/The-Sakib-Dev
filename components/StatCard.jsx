import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import { motion } from "framer-motion";

export default function StatCard({
  title,
  value,
  icon,
  trend,
  color,
}) {
  // Handle both formats: direct component or object with component property
  const IconComponent = icon?.component || icon;
  const className = icon?.className || "";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
          {trend !== undefined && (
            <div className="flex items-center mt-2">
              {trend > 0 ? (
                <HiTrendingUp className="w-4 h-4 text-green-500 mr-1" />
              ) : (
                <HiTrendingDown className="w-4 h-4 text-red-500 mr-1" />
              )}
              <span
                className={`text-sm font-medium ${
                  trend > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {Math.abs(trend)}% from last month
              </span>
            </div>
          )}
        </div>
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center ${color}`}
        >
          <IconComponent className={`w-6 h-6 text-white ${className || ""}`} />
        </div>
      </div>
    </motion.div>
  );
}
