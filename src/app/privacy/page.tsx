import Link from 'next/link';
import { IconChevronRight } from '@tabler/icons-react';
import Header from '@/components/Header';
import Footer01 from '@/components/Footer01';
import Footer02 from '@/components/Footer02';

export default function PrivacyPage() {
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
              <span className="text-gray-800 font-medium">Privacy Policy</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-[90rem] mx-auto bg-white rounded-xl shadow-sm p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
            <p className="text-gray-500 mb-8">Last updated: December 4, 2024</p>

            <div className="prose max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  At Nest Mart & Grocery, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or make a purchase.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Information We Collect</h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    When you create an account or make a purchase, we collect:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                    <li>Name and contact information (email, phone number, address)</li>
                    <li>Payment information (credit card details, billing address)</li>
                    <li>Account credentials (username, password)</li>
                    <li>Purchase history and preferences</li>
                    <li>Delivery instructions and preferences</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    When you visit our website, we automatically collect:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                    <li>IP address and browser type</li>
                    <li>Device information and operating system</li>
                    <li>Pages visited and time spent on site</li>
                    <li>Referring website and search terms</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">How We Use Your Information</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use your information to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                  <li>Process and fulfill your orders</li>
                  <li>Communicate with you about your orders and account</li>
                  <li>Provide customer support</li>
                  <li>Send promotional emails and special offers (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Prevent fraud and enhance security</li>
                  <li>Comply with legal obligations</li>
                  <li>Analyze website usage and customer behavior</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Information Sharing</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We do not sell your personal information. We may share your information with:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Service Providers</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We share information with third-party service providers who help us operate our business (payment processors, shipping companies, email service providers).
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Legal Requirements</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We may disclose information when required by law, to protect our rights, or to comply with legal processes.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Business Transfers</h3>
                    <p className="text-gray-600 leading-relaxed">
                      In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new owner.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Security</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We implement appropriate technical and organizational measures to protect your personal data:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure servers and databases</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and authentication</li>
                  <li>Employee training on data protection</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mb-4">
                  However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Rights</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                  <li><strong>Data Portability:</strong> Receive your data in a portable format</li>
                  <li><strong>Object:</strong> Object to certain processing of your data</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To exercise these rights, please contact us at privacy@nest.com.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Cookies</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use cookies and similar technologies to enhance your experience. You can control cookies through your browser settings. For more information, see our <Link href="/cookie" className="text-green-600 hover:underline">Cookie Policy</Link>.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Third-Party Links</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these sites. We encourage you to review their privacy policies.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Children's Privacy</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our services are not intended for children under 13. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Retention</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We retain your personal data for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. When data is no longer needed, we securely delete or anonymize it.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">International Data Transfers</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this privacy policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to This Policy</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may update this privacy policy from time to time. We will notify you of significant changes by posting the new policy on this page and updating the "Last updated" date. Continued use of our services after changes constitutes acceptance of the updated policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have questions about this privacy policy or our data practices:
                </p>
                <ul className="list-none space-y-2 text-gray-600">
                  <li><strong>Email:</strong> privacy@nest.com</li>
                  <li><strong>Phone:</strong> 1900 - 888</li>
                  <li><strong>Address:</strong> 5171 W Campbell Ave, Utah 53127 United States</li>
                  <li><strong>Data Protection Officer:</strong> dpo@nest.com</li>
                </ul>
              </section>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 mt-8">
                <h3 className="font-bold text-gray-800 mb-2">Your Privacy Matters</h3>
                <p className="text-gray-700">
                  We are committed to protecting your privacy and handling your data responsibly. If you have any concerns or questions, please don't hesitate to reach out to us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer01 />
      <Footer02 />
    </>
  );
}
