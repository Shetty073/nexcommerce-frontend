import { useState, useEffect } from 'react';
import { Link } from 'react-router';

const products = [
  {
    id: 1,
    name: 'Smartphone',
    category: 'Electronics',
    price: '$699',
    images: [
      'https://picsum.photos/200/200?random=1',
      'https://picsum.photos/200/200?random=2',
    ],
  },
  {
    id: 2,
    name: 'Wireless Headphones',
    category: 'Audio',
    price: '$199',
    images: [
      'https://picsum.photos/200/200?random=3',
      'https://picsum.photos/200/200?random=4',
    ],
  },
];

export default function StorefrontPage() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const images = [
    'https://picsum.photos/1200/500?random=5',
    'https://picsum.photos/1200/500?random=6',
    'https://picsum.photos/1200/500?random=7',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='bg-indigo-50 min-h-screen'>
      <div className='container mx-auto px-4 py-8'>
        {/* Carousel */}
        <div className='relative w-full h-64 md:h-80 overflow-hidden rounded-lg shadow-lg'>
          {images.map((src, i) => (
            <Link
            key={i}
            to={"#"}>
              <img
                src={src}
                alt='Promoted'
                className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
                  i === carouselIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Products Section */}
        <h2 className='text-3xl font-bold text-indigo-800 mt-8'>Products on Sale</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6'>
          {products.map((product) => (
            <div key={product.id} className='bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-all'>
              <h3 className='text-xl font-semibold text-gray-900'>{product.name}</h3>
              <p className='text-gray-600'>{product.category}</p>
              <p className='text-pink-700 font-bold text-lg'>{product.price}</p>
              <div className='mt-3 flex space-x-2'>
                {product.images.map((img, index) => (
                  <img key={index} src={img} className='w-14 h-14 rounded-lg shadow-sm' alt='Product' />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Recent Searches */}
        <h2 className='text-2xl font-bold text-indigo-800 mt-8'>Recent Searches</h2>
        <div className='flex space-x-3 mt-3'>
          {['Laptop', 'Headphones', 'Camera'].map((search, i) => (
            <span key={i} className='px-4 py-2 bg-pink-700 text-white rounded-full text-sm font-medium shadow-sm'>
              {search}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
