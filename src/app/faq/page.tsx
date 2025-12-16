'use client';

import { useState } from 'react';
import Link from 'next/link';
import { IconChevronRight, IconChevronDown, IconSearch } from '@tabler/icons-react';
import Header from '@/components/Header';
import Footer01 from '@/components/Footer01';
import Footer02 from '@/components/Footer02';

const faqCategories = [
  {
    id: 1,
    title: 'Orders & Shipping',
    faqs: [
      { question: 'How do I track my order?', answer: 'You can track your order by logging into your account and visiting the "Order Tracking" page. Enter your order number to see real-time updates on your delivery status.' },
      { question: 'What are the shipping charges?', answer: 'We offer free shipping on orders over $50. For orders below $50, a flat shipping fee of $5.99 applies. Express shipping is available for an additional $9.99.' },
      { question: 'How long does delivery take?', answer: 'Standard delivery takes 3-5 business days. Express delivery takes 1-2 business days. Delivery times may vary based on your location.' },
      { question: 'Can I change my delivery address?', answer: 'Yes, you can change your delivery address before the order is shipped. Contact our support team or update it in your account settings.' },
    ]
  },
  {
    id: 2,
    title: 'Payment & Pricing',
    faqs: [
      { question: 'What payment methods do you accept?', answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers.' },
      { question: 'Is it safe to use my credit card?', answer: 'Yes, absolutely! We use industry-standard SSL encryption to protect your payment information. All transactions are secure and encrypted.' },
      { question: 'Do you offer discounts for bulk orders?', answer: 'Yes, we offer special discounts for bulk orders. Contact our sales team for custom pricing on large quantity purchases.' },
      { question: 'Can I get a refund if prices drop?', answer: 'We offer a price match guarantee within 7 days of purchase. If you find a lower price, contact us with proof and we\'ll refund the difference.' },
    ]
  },
  {
    id: 3,
    title: 'Returns & Refunds',
    faqs: [
      { question: 'What is your return policy?', answer: 'We offer a 30-day return policy for most items. Products must be unused and in original packaging. Fresh food items are non-returnable for hygiene reasons.' },
      { question: 'How do I return an item?', answer: 'Log into your account, go to "My Orders", select the item you want to return, and follow the return instructions. You\'ll receive a prepaid return label via email.' },
      { question: 'When will I receive my refund?', answer: 'Refunds are processed within 5-7 business days after we receive your returned item. The amount will be credited to your original payment method.' },
      { question: 'Can I exchange an item?', answer: 'Yes, you can exchange items within 30 days. Simply return the original item and place a new order for the replacement product.' },
    ]
  },
  {
    id: 4,
    title: 'Account & Security',
    faqs: [
      { question: 'How do I create an account?', answer: 'Click on "Register" in the top menu, fill in your details including email and password, and verify your email address to activate your account.' },
      { question: 'I forgot my password. What should I do?', answer: 'Click on "Forgot Password" on the login page, enter your email address, and we\'ll send you a password reset link.' },
      { question: 'How do I update my account information?', answer: 'Log into your account, go to "Account Settings", and update your personal information, shipping addresses, or payment methods.' },
      { question: 'Is my personal information secure?', answer: 'Yes, we take data security seriously. All personal information is encrypted and stored securely. We never share your data with third parties without consent.' },
    ]
  },
  {
    id: 5,
    title: 'Products & Quality',
    faqs: [
      { question: 'Are your products organic?', answer: 'We offer a wide range of organic products clearly labeled in our "Organic Produce" category. All organic items are certified and meet quality standards.' },
      { question: 'How do you ensure product freshness?', answer: 'We source products daily from local farms and suppliers. Our cold chain logistics ensure items stay fresh from warehouse to your doorstep.' },
      { question: 'Do you have gluten-free options?', answer: 'Yes, we have a dedicated gluten-free section with a variety of products including bread, pasta, snacks, and baking ingredients.' },
      { question: 'Can I request specific products?', answer: 'Absolutely! Use our "Product Request" form in the Contact page, and we\'ll do our best to add requested items to our inventory.' },
    ]
  },
  {
    id: 6,
    title: 'Promotions & Loyalty',
    faqs: [
      { question: 'How do I use a promo code?', answer: 'Enter your promo code in the "Discount Code" field during checkout. The discount will be applied automatically to your order total.' },
      { question: 'Do you have a loyalty program?', answer: 'Yes! Join our Nest Rewards program to earn points on every purchase. Points can be redeemed for discounts on future orders.' },
      { question: 'How do I get notified about sales?', answer: 'Subscribe to our newsletter to receive exclusive deals, promotions, and early access to sales directly in your inbox.' },
      { question: 'Can I combine multiple discounts?', answer: 'Generally, only one promo code can be used per order. However, loyalty points can be combined with certain promotional offers.' },
    ]
  },
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleFAQ = (categoryId: number, faqIndex: number) => {
    const key = `${categoryId}-${faqIndex}`;
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-gray-500 hover:text-green-600">Home</Link>
              <IconChevronRight size={16} className="text-gray-400" />
              <span className="text-gray-800 font-medium">FAQ</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h1>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Find answers to common questions about our products, services, and policies. 
              Can't find what you're looking for? Contact our support team.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <IconSearch size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="container mx-auto px-4 py-12">
          {filteredCategories.length > 0 ? (
            <div className="max-w-4xl mx-auto space-y-8">
              {filteredCategories.map((category) => (
                <div key={category.id} className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                      {category.id}
                    </span>
                    {category.title}
                  </h2>
                  
                  <div className="space-y-4">
                    {category.faqs.map((faq, index) => {
                      const key = `${category.id}-${index}`;
                      const isOpen = openItems[key];
                      
                      return (
                        <div key={index} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                          <button
                            onClick={() => toggleFAQ(category.id, index)}
                            className="w-full flex items-center justify-between text-left py-3 hover:text-green-600 transition-colors"
                          >
                            <span className="font-medium text-gray-800 pr-4">{faq.question}</span>
                            <IconChevronDown
                              size={20}
                              className={`flex-shrink-0 text-gray-600 transition-transform ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          
                          {isOpen && (
                            <div className="pb-3 pr-8">
                              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-12 text-center">
              <p className="text-gray-500 text-lg">No results found for "{searchQuery}"</p>
              <p className="text-gray-400 mt-2">Try different keywords or browse all categories</p>
            </div>
          )}

          {/* Contact Support */}
          <div className="max-w-4xl mx-auto mt-12 bg-gradient-to-r from-green-600 to-green-500 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
            <p className="mb-6 opacity-90">Our support team is here to help you 24/7</p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-green-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Contact Support
              </Link>
              <a
                href="tel:1900888"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-green-600 transition-colors"
              >
                Call: 1900 - 888
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer01 />
      <Footer02 />
    </>
  );
}
