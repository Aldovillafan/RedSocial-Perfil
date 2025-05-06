import { FiMoreHorizontal, FiHeart, FiMessageCircle, FiSend, FiBookmark } from "react-icons/fi";

export default function InstagramProfile() {
  const posts = [
    { id: 1, image: "/post1.jpg", likes: 243, comments: 31 },
    { id: 2, image: "/post2.jpg", likes: 532, comments: 42 },
    { id: 3, image: "/post3.jpg", likes: 876, comments: 67 },
    // Agrega más posts según necesites
  ];

  return (
    <div className="max-w-2xl mx-auto bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-xl font-semibold">nombre_de_usuario</h1>
          <FiMoreHorizontal className="text-xl" />
        </div>
      </header>

      {/* Sección de perfil */}
      <div className="bg-white p-6">
        <div className="flex items-center space-x-8">
          {/* Avatar */}
          <div className="w-24 h-24 rounded-full border-2 border-pink-500 p-1">
            <img 
              src="/avatar.jpg" 
              className="w-full h-full rounded-full object-cover"
              alt="Profile"
            />
          </div>

          {/* Stats */}
          <div className="flex space-x-8 text-center">
            <div>
              <p className="font-bold">156</p>
              <p className="text-gray-500 text-sm">Publicaciones</p>
            </div>
            <div>
              <p className="font-bold">4.2K</p>
              <p className="text-gray-500 text-sm">Seguidores</p>
            </div>
            <div>
              <p className="font-bold">387</p>
              <p className="text-gray-500 text-sm">Seguidos</p>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-4">
          <h2 className="font-semibold">Nombre del Usuario</h2>
          <p className="text-sm mt-1">Descripción del perfil ✨</p>
          <p className="text-blue-500 text-sm mt-1">enlace.com</p>
        </div>
      </div>

      {/* Pestañas */}
      <div className="flex border-t">
        <button className="flex-1 py-3 text-xs font-semibold border-t-2 border-black">
          PUBLICACIONES
        </button>
        <button className="flex-1 py-3 text-xs text-gray-400">
          GUARDADOS
        </button>
      </div>

      {/* Grid de posts */}
      <div className="grid grid-cols-3 gap-1">
        {posts.map((post) => (
          <div key={post.id} className="aspect-square bg-gray-200 relative">
            <img 
              src={post.image} 
              className="w-full h-full object-cover"
              alt={`Post ${post.id}`}
            />
            {/* Overlay al hover */}
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 flex items-center justify-center space-x-4 text-white opacity-0 hover:opacity-100 transition">
              <span className="flex items-center">
                <FiHeart className="mr-1" /> {post.likes}
              </span>
              <span className="flex items-center">
                <FiMessageCircle className="mr-1" /> {post.comments}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}