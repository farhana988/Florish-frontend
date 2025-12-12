interface DashboardLayoutProps {
  title: string;
  subtitle?: string;
}
const DashboardWelcome = ({ title, subtitle }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}

      <h1 className="text-xl font-semibold text-gray-800">{title}</h1>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Optional Hero Section */}
        {subtitle && (
          <div className="backdrop-blur-lg rounded-3xl shadow-lg p-8 mb-8 text-center animate-fadeIn">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {subtitle}
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Manage dashboard activities with ease. ✨
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default DashboardWelcome;
