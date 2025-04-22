import React from 'react';
import PricingCard from './PricingCard';
import { Check, Zap, Globe, Database, Shield } from 'lucide-react';

// Define the plans data structure
interface Plan {
  name: string;
  description: string;
  price: string;
  period: string;
  features: { text: string; icon: React.ReactNode }[];
  popular?: boolean;
  buttonText: string;
}

const PricingCards: React.FC = () => {
  // Define the plans data
  const plans: Plan[] = [
    {
      name: 'Starter',
      description: 'Perfect for personal projects and blogs',
      price: '$9',
      period: 'per month',
      buttonText: 'Start Now',
      features: [
        { text: '1 CPU Core, 1GB RAM', icon: <Zap size={16} className="text-[#98FFB3]" /> },
        { text: '25GB SSD Storage', icon: <Database size={16} className="text-[#98FFB3]" /> },
        { text: '1TB Bandwidth', icon: <Globe size={16} className="text-[#98FFB3]" /> },
        { text: 'Free SSL Certificate', icon: <Shield size={16} className="text-[#98FFB3]" /> },
        { text: '24/7 Email Support', icon: <Check size={16} className="text-[#98FFB3]" /> },
      ],
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and applications',
      price: '$29',
      period: 'per month',
      buttonText: 'Get Started',
      popular: true,
      features: [
        { text: '2 CPU Cores, 4GB RAM', icon: <Zap size={16} className="text-[#98FFB3]" /> },
        { text: '100GB SSD Storage', icon: <Database size={16} className="text-[#98FFB3]" /> },
        { text: 'Unlimited Bandwidth', icon: <Globe size={16} className="text-[#98FFB3]" /> },
        { text: 'Free SSL Certificate', icon: <Shield size={16} className="text-[#98FFB3]" /> },
        { text: '24/7 Priority Support', icon: <Check size={16} className="text-[#98FFB3]" /> },
      ],
    },
    {
      name: 'Business',
      description: 'For high-traffic sites and demanding applications',
      price: '$79',
      period: 'per month',
      buttonText: 'Choose Plan',
      features: [
        { text: '4 CPU Cores, 16GB RAM', icon: <Zap size={16} className="text-[#98FFB3]" /> },
        { text: '500GB SSD Storage', icon: <Database size={16} className="text-[#98FFB3]" /> },
        { text: 'Unlimited Bandwidth', icon: <Globe size={16} className="text-[#98FFB3]" /> },
        { text: 'Free SSL Certificate', icon: <Shield size={16} className="text-[#98FFB3]" /> },
        { text: '24/7 Priority Phone & Chat', icon: <Check size={16} className="text-[#98FFB3]" /> },
      ],
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8 justify-center mb-16">
      {plans.map((plan, index) => (
        <PricingCard key={index} plan={plan} />
      ))}
    </div>
  );
};

export default PricingCards;