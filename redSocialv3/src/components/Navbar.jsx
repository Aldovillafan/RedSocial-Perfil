import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <Link to="/" className="text-xl font-bold text-blue-600">RedSocialv3</Link>
        <div className="flex space-x-4">
          <Link to="/profile" className="hover:text-blue-500">Perfil</Link>
        </div>
      </div>
    </nav>
  );
}