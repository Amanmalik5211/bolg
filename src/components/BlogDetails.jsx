import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/recipes/${id}`);
        const data = await response.json();
        
        setBlog({
          title: data.title,
          date: new Date().toLocaleDateString(),
          image: data.image,
          description: data.instructions
        });
      } catch (err) {
        setError('Failed to load blog post', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 mb-4">{error}</p>
        <Link to="/blog" className="text-blue-600 hover:text-blue-700">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link 
        to="/blog"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
      >
        ← Back to Blog
      </Link>
      
      {blog && (
        <article>
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          <p className="text-gray-500 mb-8">{blog.date}</p>
          
          <img 
            src={blog.image} 
            alt={blog.title}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          
          <div className="prose max-w-none">
            <p className="text-gray-600 leading-relaxed">
              {blog.description}
            </p>
          </div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;