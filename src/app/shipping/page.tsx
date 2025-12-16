import Link from 'next/link';
import { IconChevronRight, IconTruck, IconClock } from '@tabler/icons-react';
import Header from '@/components/Header';
import Footer01 from '@/components/Footer01';
import Footer02 from '@/components/Footer02';

export default function ShippingPage() {
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
              <span className="text-gray-800 font-medium">Shipping & Delivery</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-[90rem] mx-auto bg-white rounded-xl shadow-sm p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Shipping & Delivery</h1>
            <p className="text-gray-500 mb-8">Last updated: December 4, 2024</p>

            <div className="prose max-w-none">
              {/* Shipping Options */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Shipping Options</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border-2 border-green-200 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <IconTruck size={32} className="text-green-600" />
                      <h3 className="text-xl font-bold text-gray-800">Standard Delivery</h3>
                    </div>
                    <p className="text-gray-600 mb-3">3-5 business days</p>
                    <p className="text-2xl font-bold text-green-600 mb-3">FREE</p>
                    <p className="text-sm text-gray-500">On orders over $50</p>
                  </div>

                  <div className="border-2 border-blue-200 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <IconClock size={32} className="text-blue-600" />
                      <h3 className="text-xl font-bold text-gray-800">Express Delivery</h3>
                    </div>
                    <p className="text-gray-600 mb-3">1-2 business days</p>
                    <p className="text-2xl font-bold text-blue-600 mb-3">$9.99</p>
                    <p className="text-sm text-gray-500">Next-day delivery available</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Delivery Areas</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We currently deliver to all addresses within the United States. Delivery times may vary based on your location:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                  <li><strong>Urban areas:</strong> 2-3 business days (standard), 1 business day (express)</li>
                  <li><strong>Suburban areas:</strong> 3-4 business days (standard), 1-2 business days (express)</li>
                  <li><strong>Rural areas:</strong> 4-5 business days (standard), 2 business days (express)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Processing</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Orders are processed Monday through Saturday, excluding holidays. Orders placed after 2:00 PM will be processed the next business day.
                </p>
                <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-4">
                  <p className="text-gray-700">
                    <strong>Pro Tip:</strong> Order before 2:00 PM for same-day processing and faster delivery!
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Shipping Costs</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-3 text-left">Order Value</th>
                        <th className="border border-gray-300 px-4 py-3 text-left">Standard Shipping</th>
                        <th className="border border-gray-300 px-4 py-3 text-left">Express Shipping</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">Under $50</td>
                        <td className="border border-gray-300 px-4 py-3">$5.99</td>
                        <td className="border border-gray-300 px-4 py-3">$14.99</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3">$50 - $100</td>
                        <td className="border border-gray-300 px-4 py-3 text-green-600 font-bold">FREE</td>
                        <td className="border border-gray-300 px-4 py-3">$9.99</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">Over $100</td>
                        <td className="border border-gray-300 px-4 py-3 text-green-600 font-bold">FREE</td>
                        <td className="border border-gray-300 px-4 py-3 text-green-600 font-bold">FREE</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Tracking</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Once your order ships, you'll receive a confirmation email with a tracking number. You can track your order:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                  <li>Through the link in your shipping confirmation email</li>
                  <li>By logging into your account and visiting "My Orders"</li>
                  <li>On our <Link href="/order-tracking" className="text-green-600 hover:underline">Order Tracking</Link> page</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Delivery Instructions</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  During checkout, you can provide special delivery instructions such as:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                  <li>Leave package at door</li>
                  <li>Deliver to reception/concierge</li>
                  <li>Ring doorbell</li>
                  <li>Call upon arrival</li>
                  <li>Gate codes or access instructions</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Packaging</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We take great care in packaging your order:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                  <li>Fresh and frozen items are packed with ice packs and insulation</li>
                  <li>Fragile items are wrapped with protective materials</li>
                  <li>All packages are sealed to ensure freshness and safety</li>
                  <li>We use eco-friendly packaging materials whenever possible</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Delivery Issues</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Missed Delivery</h3>
                    <p className="text-gray-600 leading-relaxed">
                      If you miss a delivery, the carrier will leave a notice with instructions for redelivery or pickup. You can also contact us to reschedule.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Damaged Package</h3>
                    <p className="text-gray-600 leading-relaxed">
                      If your package arrives damaged, please take photos and contact us within 48 hours. We'll arrange for a replacement or refund.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Lost Package</h3>
                    <p className="text-gray-600 leading-relaxed">
                      If your package is marked as delivered but you haven't received it, please check with neighbors and your building's reception. Contact us if you still can't locate it.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">International Shipping</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We currently do not offer international shipping. We're working on expanding our delivery areas and will update this page when international shipping becomes available.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Holidays and Peak Seasons</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  During holidays and peak seasons, delivery times may be extended by 1-2 business days. We recommend ordering early to ensure timely delivery. We'll notify you of any delays via email.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  For shipping and delivery questions:
                </p>
                <ul className="list-none space-y-2 text-gray-600">
                  <li>Email: shipping@nest.com</li>
                  <li>Phone: 1900 - 888</li>
                  <li>Hours: Monday - Saturday, 10:00 AM - 6:00 PM</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer01 />
      <Footer02 />
    </>
  );
}
