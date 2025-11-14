import React from 'react';
import { Check, X } from 'lucide-react';
import { pricing as price } from '@/lib/pricing';
import Link from 'next/link';
const pricing = price

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h1>
          <p className="text-lg text-gray-600">Select the perfect plan for your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricing.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-2xl shadow-lg p-8 transform transition-all hover:scale-105 ${
                plan.name === 'pro' ? 'border-2 border-red-800' : 'border border-gray-200'
              }`}
            >
              {plan.name === 'pro' && (
                <div className="bg-red-800 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  POPULAR
                </div>
              )}
              
              <h2 className="text-3xl font-bold text-gray-900 capitalize mb-2">
                {plan.name}
              </h2>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.name === 'free' ? '$0' : '$29'}
                </span>
                <span className="text-gray-600">/month</span>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-3">
                    <Check className="w-3 h-3 text-red-600" />
                  </div>
                  <span className="text-gray-700">
                    <span className="font-semibold">{plan.product}</span> {plan.product === 'unlimited' ? 'products' : 'products'}
                  </span>
                </li>

                <li className="flex items-center">
                  <div className={`flex-shrink-0 w-5 h-5 rounded-full ${plan.anylitics ? 'bg-red-100' : 'bg-gray-100'} flex items-center justify-center mr-3`}>
                    {plan.anylitics ? (
                      <Check className="w-3 h-3 text-red-600" />
                    ) : (
                      <X className="w-3 h-3 text-gray-400" />
                    )}
                  </div>
                  <span className={plan.anylitics ? 'text-gray-700' : 'text-gray-400'}>
                    Analytics
                  </span>
                </li>

                <li className="flex items-center">
                  <div className={`flex-shrink-0 w-5 h-5 rounded-full ${plan.promark ? 'bg-red-100' : 'bg-gray-100'} flex items-center justify-center mr-3`}>
                    {plan.promark ? (
                      <Check className="w-3 h-3 text-red-600" />
                    ) : (
                      <X className="w-3 h-3 text-gray-400" />
                    )}
                  </div>
                  <span className={plan.promark ? 'text-gray-700' : 'text-gray-400'}>
                    Pro Mark
                  </span>
                </li>

                <li className="flex items-center">
                  <div className={`flex-shrink-0 w-5 h-5 rounded-full ${plan.watermark ? 'bg-gray-100' : 'bg-red-100'} flex items-center justify-center mr-3`}>
                    {plan.watermark ? (
                      <X className="w-3 h-3 text-gray-400" />
                    ) : (
                      <Check className="w-3 h-3 text-red-600" />
                    )}
                  </div>
                  <span className={plan.watermark ? 'text-gray-400' : 'text-gray-700'}>
                    {plan.watermark ? 'Has watermark' : 'No watermark'}
                  </span>
                </li>
              </ul>

              <Link href={'/signin/working'} 
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.name === 'pro'
                    ? 'bg-red-800 text-white hover:bg-red-900'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.name === 'free' ? 'Get Started' : 'Upgrade Now'}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}