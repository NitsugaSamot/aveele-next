import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import articlesData from "../../../articules.json";

interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  content: string;
}

const Articulo = () => {
  const router = useRouter();
  const { id } = router.query;

  const article: Article | undefined = articlesData.articles.find(
    (art: Article) => art.id === Number(id)
  );

  if (!article) {
    return <p className="text-center text-gray-500 mt-10">Artículo no encontrado</p>;
  }

  return (
    <>
      {/* Barra de navegación */}
      <header className="bg-blue-600 text-white shadow-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center">
          <h1 className="text-lg sm:text-xl font-semibold">Revista Web</h1>
          <nav>
            <Link
              href="/magazine"
              className="text-white hover:text-blue-300 transition-colors duration-300"
            >
              Volver a la revista
            </Link>
          </nav>
        </div>
      </header>

      {/* Contenido del artículo */}
      <div className="max-w-screen-lg mx-auto p-4 sm:p-6 md:p-8 mt-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 text-center sm:text-left">
          {article.title}
        </h1>

        {/* Imagen del artículo */}
        <div className="relative mb-6">
          <Image
            src={article.image}
            alt={article.title}
            width={1200}
            height={800}
            className="w-full h-auto sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Descripción */}
        <p className="text-gray-600 text-base sm:text-lg mb-4 text-center sm:text-left">
          {article.description}
        </p>

        {/* Contenido */}
        <div className="text-gray-800 text-base sm:text-lg space-y-4 leading-relaxed">
          {article.content.split("\n").map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Articulo;




// import Image from "next/image";
// import { useRouter } from "next/router";
// import articlesData from "../../../articules.json";

// interface Article {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   link: string;
//   content: string;
// }

// const Articulo = () => {
//   const router = useRouter();
//   const { id } = router.query;

//   // Accedemos a la propiedad 'articles' de 'articlesData'
//   const article: Article | undefined = articlesData.articles.find(
//     (art: Article) => art.id === Number(id)
//   );

//   if (!article) {
//     return <p className="text-center text-gray-500">Artículo no encontrado</p>;
//   }

//   return (
//     <>
//       {/* Barra de navegación */}
//       <header className="bg-blue-600 text-white shadow-md py-4">
//         <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
//           <h1 className="text-xl font-semibold">Revista Web</h1>
//           <nav>
//             <a
//               href="/magazine"
//               className="text-white hover:text-blue-300 transition-colors duration-300"
//             >
//               Volver a la revista
//             </a>
//           </nav>
//         </div>
//       </header>

//       {/* Contenido del artículo */}
//       <div className="max-w-3xl mx-auto p-6 mt-6">
//         <h1 className="text-3xl font-extrabold text-gray-900 mb-6">{article.title}</h1>
//         <div className="relative mb-6">
//           <Image
//             src={article.image}
//             alt={article.title}
//             width={1200}
//             height={800}
//             className="w-full h-auto rounded-lg shadow-lg object-cover"
//           />
//         </div>
//         <p className="text-lg text-gray-600 mb-4">{article.description}</p>
//         <div className="text-gray-800 space-y-4 leading-relaxed">
//           {article.content.split("\n").map((paragraph, index) => (
//             <p key={index} className="mb-4">{paragraph}</p>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Articulo;
