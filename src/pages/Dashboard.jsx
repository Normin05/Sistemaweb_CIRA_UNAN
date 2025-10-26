import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaUserCircle, FaClipboardList, FaFlask, FaSignOutAlt } from "react-icons/fa";

export default function Dashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-blue-900 text-white transition-all duration-300 flex flex-col`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-blue-800">
          <h2
            className={`font-bold text-lg transition-all duration-300 ${
              sidebarOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            CIRA UNAN
          </h2>
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            <FaBars className="text-white" />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <button
            onClick={() => navigate("/info-campo")}
            className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-800 transition"
          >
            <FaFlask />
            {sidebarOpen && <span>Información de Campo</span>}
          </button>
          <button
            onClick={() => navigate("/solicitud-servicio")}
            className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-800 transition"
          >
            <FaClipboardList />
            {sidebarOpen && <span>Solicitud de Servicios</span>}
          </button>
        </nav>

        <div className="p-4 border-t border-blue-800">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-red-600 bg-red-500 transition"
          >
            <FaSignOutAlt />
            {sidebarOpen && <span>Cerrar Sesión</span>}
          </button>
        </div>
      </aside>

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col">
        {/* Navbar superior */}
        <header className="bg-white shadow-md flex items-center justify-between px-6 py-3">
          <h1 className="text-xl font-semibold text-blue-900">
            Panel de Control — CIRA UNAN Managua
          </h1>
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 text-blue-900 hover:text-blue-700"
            >
              <FaUserCircle size={24} />
              <span className="font-semibold hidden md:block">Usuario</span>
            </button>

            {/* Menú lateral derecho */}
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200">
                <ul className="py-1">
                  <li>
                    <button
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => alert("Perfil del usuario")}
                    >
                      Perfil
                    </button>
                  </li>
                  <li>
                    <button
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={handleLogout}
                    >
                      Cerrar sesión
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>

        {/* Contenido */}
        <main className="flex-grow p-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Bienvenido al Sistema
            </h2>
            <p className="text-gray-600">
              Selecciona una opción del menú lateral para llenar los formularios.
            </p>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div
                onClick={() => navigate("/info-campo")}
                className="cursor-pointer border border-gray-200 rounded-lg p-4 hover:shadow-lg hover:border-blue-700 transition"
              >
                <FaFlask className="text-blue-900 text-3xl mb-2" />
                <h3 className="text-lg font-semibold text-blue-900">Información de Campo</h3>
                <p className="text-sm text-gray-600">
                  Registra datos de muestreo, coordenadas y parámetros técnicos.
                </p>
              </div>

              <div
                onClick={() => navigate("/solicitud-servicio")}
                className="cursor-pointer border border-gray-200 rounded-lg p-4 hover:shadow-lg hover:border-yellow-500 transition"
              >
                <FaClipboardList className="text-yellow-500 text-3xl mb-2" />
                <h3 className="text-lg font-semibold text-yellow-600">Solicitud de Servicios</h3>
                <p className="text-sm text-gray-600">
                  Registra solicitudes de análisis, muestreo e informes técnicos.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
