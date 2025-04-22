import React from 'react';
import PricingHeader from '../components/pricing/PricingHeader';
import PricingCards from '../components/pricing/PricingCards';
import ContactSales from '../components/pricing/ContactSales';

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-[#121212] bg-gradient-to-br from-[#121212] to-[#1E1E1E] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(152,255,179,0.05),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(152,245,255,0.05),transparent_30%)]"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <PricingHeader />
        <PricingCards />
        <ContactSales />
      </div>
    </div>
  );
};

export default PricingPage;