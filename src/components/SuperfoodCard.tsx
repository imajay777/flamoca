import { Link } from 'react-router-dom';
import { Superfood } from '../types';

interface SuperfoodCardProps {
  superfood: Superfood;
}

export default function SuperfoodCard({ superfood }: SuperfoodCardProps) {
  return (
    <Link
      to={`/superfood/${superfood.id}`}
      className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={superfood.image}
          alt={superfood.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-grow flex-col p-4">
        <h3 className="text-lg font-medium text-gray-900">{superfood.name}</h3>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">{superfood.description}</p>
        <div className="mt-auto pt-4">
          <div className="flex flex-wrap gap-2">
            {superfood.bodyParts.slice(0, 3).map((part) => (
              <span
                key={part}
                className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800"
              >
                {part.charAt(0).toUpperCase() + part.slice(1)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
