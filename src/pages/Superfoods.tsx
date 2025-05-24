import { useState } from 'react';
import { superfoods } from '../data/superfoods';
import SuperfoodCard from '../components/SuperfoodCard';

export default function Superfoods() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSuperfoods = superfoods.filter(
    superfood => 
      superfood.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      superfood.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      superfood.bodyParts.some(part => part.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
      <div className="py-16 bg-[#f9f6f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
              All Superfoods
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our curated selection of the world's most powerful superfoods
            </p>
          </div>
          
          <div className="mt-8 max-w-md mx-auto">
            <div className="relative rounded-md shadow-sm">
              <input
                type="text"
                className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500"
                placeholder="Search superfoods..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ borderWidth: '1px' }}
              />
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredSuperfoods.map((superfood) => (
              <SuperfoodCard key={superfood.id} superfood={superfood} />
            ))}
            
            {filteredSuperfoods.length === 0 && (
              <div className="col-span-full text-center text-gray-500 py-12">
                <p>No superfoods found matching "{searchTerm}"</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
