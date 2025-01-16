import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BlogCard = ({ id, title, date, image, description }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <Link to={`/blog/${id}`}>
          <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-blue-600 transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-gray-500 text-sm mb-4">{date}</p>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <Link 
          to={`/blog/${id}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
        >
          Read More 
          <span className="ml-1 transform translate-x-0 group-hover:translate-x-1 transition-transform">
            →
          </span>
        </Link>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default BlogCard;