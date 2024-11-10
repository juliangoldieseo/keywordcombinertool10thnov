import React from 'react';
import { X, ArrowRight } from 'lucide-react';

interface ExitIntentPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ExitIntentPopup({ isOpen, onClose }: ExitIntentPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-xl p-8 max-w-md w-full relative animate-slide-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Wait! Don't Miss This...</h2>
          <p className="text-xl text-gray-600 mb-6">
            Get a <span className="text-blue-600 font-semibold">FREE personalized SEO strategy</span> worth £997 - Limited time offer!
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-center text-left">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">1</span>
              </div>
              <p className="ml-4">Custom keyword strategy tailored to your business</p>
            </div>
            <div className="flex items-center text-left">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">2</span>
              </div>
              <p className="ml-4">Competitor analysis and gap identification</p>
            </div>
            <div className="flex items-center text-left">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">3</span>
              </div>
              <p className="ml-4">30-minute strategy call with our SEO expert</p>
            </div>
          </div>
          <a
            href="https://go.juliangoldie.com/strategy-session"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors w-full justify-center"
          >
            Get Your Free Strategy Session <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <p className="mt-4 text-sm text-gray-500">
            No credit card required. Limited spots available.
          </p>
        </div>
      </div>
    </div>
  );
}