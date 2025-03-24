import Image from "next/image";
import Link from "next/link";

// Definimos el tipo de los artículos
interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  content: string;
}

// Añadimos la propiedad 'articles' de tipo 'Article[]'
interface ArticulosProps {
  articles: Article[];
}

const Articulos: React.FC<ArticulosProps> = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {articles.map((article) => (
        <div key={article.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            width={300}
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{article.title}</h2>
            {/* <p className="text-gray-600">{article.description}</p> */}
            <Link href={`/articulos/${article.id}`} className="text-blue-500 hover:underline">
              Leer más
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Articulos;
