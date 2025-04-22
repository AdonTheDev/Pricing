import React from 'react';
import { Server } from 'lucide-react';

const PricingHeader: React.FC = () => {
  return (
    <div className="text-center mb-16 mt-8">
      <div className="flex justify-center mb-4">
        <Server size={48} className="text-[#98FFB3]" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#98FFB3] to-[#98F5FF]">
        Cloud Hosting Solutions
      </h1>
      <p className="text-[#B3B3B3] max-w-2xl mx-auto text-lg">
        High-performance, secure, and scalable hosting for your applications.
        Choose the plan that fits your needs and start building today.
      </p>
    </div>
  );
};

export default PricingHeader;