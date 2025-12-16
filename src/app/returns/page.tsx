import Link from 'next/link';
import { IconChevronRight } from '@tabler/icons-react';
import Header from '@/components/Header';
import Footer01 from '@/components/Footer01';
import Footer02 from '@/components/Footer02';

export default function ReturnsPage() {
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
              <span className="text-gray-800 font-medium">Returns & Exchanges</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-[90rem] mx-auto bg-white rounded-xl shadow-sm p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Returns & Exchanges Policy</h1>
            <p className="text-gray-500 mb-8">Last updated: December 4, 2024</p>

            <div className="prose max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Commitment</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  At Nest Mart & Grocery, we want you to be completely satisfied with your purchase. If you're not happy with your order, we're here to help with returns and exchanges.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">30-Day Return Policy</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You have 30 calendar days from the date of delivery to return most items for a full refund or exchange. To be eligible for a return:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                  <li>Items must be unused and in the same condition as received</li>
                  <li>Items must be in original packaging</li>
                  <li>You must provide proof of purchase (receipt or order confirmation)</li>
                  <li>Items must not be past their expiration date</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Non-Returnable Items</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  For health and safety reasons, the following items cannot be returned:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                  <li>Fresh produce (fruits, vegetables)</li>
                  <li>Fresh meat, poultry, and seafood</li>
                  <li>Dairy products that have been opened</li>
                  <li>Bakery items</li>
                  <li>Prepared foods</li>
                  <li>Personal care items that have been opened</li>
                  <li>Gift cards</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">How to Return an Item</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 1: Initiate Return</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Log into your account, go to "My Orders", select the item you want to return, and click "Request Return". Provide a reason for the return.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 2: Receive Return Label</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Once your return request is approved, you'll receive a prepaid return shipping label via email within 24 hours.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 3: Pack Your Item</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Securely pack the item in its original packaging. Include all accessories, manuals, and documentation.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 4: Ship Your Return</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Attach the return label to the package and drop it off at any authorized shipping location.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Refund Process</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Once we receive your return, we will inspect the item and process your refund within 5-7 business days. Refunds will be issued to your original payment method.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Please note:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                  <li>Original shipping charges are non-refundable</li>
                  <li>Return shipping is free for defective or incorrect items</li>
                  <li>For other returns, return shipping costs will be deducted from your refund</li>
                  <li>It may take 5-10 business days for the refund to appear in your account</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Exchanges</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you need to exchange an item for a different size, color, or product:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                  <li>Return the original item following the return process</li>
                  <li>Place a new order for the replacement item</li>
                  <li>Once we receive your return, we'll process your refund</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mb-4">
                  This ensures you receive your replacement item as quickly as possible.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Damaged or Defective Items</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you receive a damaged or defective item:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                  <li>Contact us within 48 hours of delivery</li>
                  <li>Provide photos of the damaged item and packaging</li>
                  <li>We'll arrange for a replacement or full refund</li>
                  <li>Return shipping will be free</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Wrong Item Received</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you receive the wrong item, please contact us immediately. We'll send you the correct item at no additional cost and arrange for the return of the incorrect item.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Late or Missing Refunds</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you haven't received your refund after 10 business days:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                  <li>Check your bank account again</li>
                  <li>Contact your credit card company (it may take time to post)</li>
                  <li>Contact your bank (processing time varies)</li>
                  <li>If you've done all of this and still haven't received your refund, contact us</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  For questions about returns and exchanges:
                </p>
                <ul className="list-none space-y-2 text-gray-600">
                  <li>Email: returns@nest.com</li>
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
