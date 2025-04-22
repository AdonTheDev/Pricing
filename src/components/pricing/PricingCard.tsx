import React from 'react';
import Button from '../ui/Button';

interface PlanFeature {
  text: string;
  icon: React.ReactNode;
}

interface PlanProps {
  plan: {
    name: string;
    description: string;
    price: string;
    period: string;
    features: PlanFeature[];
    popular?: boolean;
    buttonText: string;
  };
}

const PricingCard: React.FC<PlanProps> = ({ plan }) => {
  return (
    <div 
      className={`
        relative flex flex-col w-full lg:w-80 p-6 rounded-xl transition-all duration-300 
        backdrop-blur-md transform hover:scale-105 hover:shadow-2xl
        border border-white/10 
        ${plan.popular 
          ? 'bg-white/15 shadow-lg shadow-[#98FFB3]/10' 
          : 'bg-white/10'
        }
      `}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center">
          <span className="bg-[#98FFB3] text-[#121212] font-medium text-xs py-1 px-3 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="mb-4">
        <h3 className="text-2xl font-bold mb-1 text-white">{plan.name}</h3>
        <p className="text-[#B3B3B3] text-sm">{plan.description}</p>
      </div>
      
      <div className="mb-6">
        <div className="flex items-baseline">
          <span className="text-4xl font-bold text-white">{plan.price}</span>
          <span className="text-[#B3B3B3] ml-1">{plan.period}</span>
        </div>
      </div>
      
      <ul className="flex-1 space-y-3 mb-6">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2 text-[#B3B3B3]">
            {feature.icon}
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        color={plan.popular ? "primary" : "secondary"}
        fullWidth
      >
        {plan.buttonText}
      </Button>
    </div>
  );
};

export default PricingCard;