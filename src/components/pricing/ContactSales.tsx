import React from 'react';
import { Phone, Mail } from 'lucide-react';
import Button from '../ui/Button';

const ContactSales: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-16 text-center">
      <div className="p-8 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#98F5FF]/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#98FFB3]/10 rounded-full blur-xl"></div>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Need a custom solution?</h2>
        <p className="text-[#B3B3B3] mb-8 max-w-lg mx-auto">
          Our enterprise plans include dedicated resources, priority support, and custom infrastructure designed specifically for your business.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button color="accent" size="lg">
            <Phone size={18} className="mr-2" />
            Contact Sales
          </Button>
          
          <div className="flex items-center text-[#98F5FF] hover:underline transition-all">
            <Mail size={18} className="mr-2" />
            <a href="mailto:enterprise@example.com" className="text-sm font-medium">
              enterprise@example.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSales;