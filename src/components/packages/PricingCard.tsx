import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingFeature {
  id: string;
  text: string;
}

interface PricingPackage {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
}

interface PricingCardProps {
  package: PricingPackage;
}

const PricingCard: React.FC<PricingCardProps> = ({ package: pkg }) => {
  return (
    <div
      className={`rounded-lg overflow-hidden transition-transform hover:translate-y-[-5px] ${
        pkg.popular
          ? 'border-2 border-amber-500 shadow-lg'
          : 'border border-neutral-200 shadow-md'
      }`}
    >
      {pkg.popular && (
        <div className="bg-amber-500 text-white text-center py-2 font-medium text-sm">
          Most Popular
        </div>
      )}
      <div className="p-6 md:p-8 bg-white">
        <h3 className="text-xl font-bold text-neutral-900 mb-2">{pkg.name}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold text-neutral-900">{pkg.price}</span>
          <span className="text-neutral-600 ml-1 text-sm">{pkg.duration}</span>
        </div>
        <p className="text-neutral-600 mb-6">{pkg.description}</p>
        
        <ul className="space-y-3 mb-6">
          {pkg.features.map((feature) => (
            <li key={feature.id} className="flex items-start">
              <Check size={18} className="text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
              <span className="text-neutral-700">{feature.text}</span>
            </li>
          ))}
        </ul>
        
        <Link
          to="/contact"
          className={`block text-center py-3 rounded-md font-medium transition-colors ${
            pkg.popular
              ? 'bg-amber-700 text-white hover:bg-amber-800'
              : 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200'
          }`}
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;