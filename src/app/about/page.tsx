import Link from 'next/link';
import Header from '@/components/Header';
import Footer01 from '@/components/Footer01';
import Footer02 from '@/components/Footer02';
import { 
  IconMilk, 
  IconShirt, 
  IconDog, 
  IconCake, 
  IconApple, 
  IconBottle, 
  IconFish, 
  IconPizza, 
  IconCarrot, 
  IconBread,
  IconSearch 
} from '@tabler/icons-react';

export default function AboutPage() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="text-green-600 hover:text-green-700">Home</Link>
              <span>/</span>
              <span className="text-gray-900">About Us</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex gap-8">
            {/* Left Content - About Text (76%) */}
            <div className="w-[76%]">
              <div className="prose max-w-none">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome to Nest Mart & Grocery</h1>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Welcome to Nest, your trusted online destination for fresh groceries, organic produce, and everyday essentials. We are committed to bringing the finest quality products directly to your doorstep, making grocery shopping convenient, affordable, and enjoyable for families across the country.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Our Story</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Founded with a passion for healthy living and sustainable practices, Nest started as a small local grocery store with a big vision. Today, we've grown into a comprehensive online marketplace that serves thousands of customers daily. Our journey began with a simple belief: everyone deserves access to fresh, high-quality groceries without compromising on convenience or breaking the bank.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">What We Offer</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  At Nest, we pride ourselves on offering an extensive selection of products across multiple categories:
                </p>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
                  <li><strong>Fresh Produce:</strong> Farm-fresh fruits and vegetables sourced from local farmers</li>
                  <li><strong>Organic Products:</strong> A wide range of certified organic items for health-conscious shoppers</li>
                  <li><strong>Dairy & Bakery:</strong> Fresh milk, cheese, bread, and baked goods delivered daily</li>
                  <li><strong>Meat & Seafood:</strong> Premium quality meats and fresh seafood from trusted suppliers</li>
                  <li><strong>Pantry Staples:</strong> Everything you need to stock your kitchen, from grains to spices</li>
                  <li><strong>Beverages:</strong> Coffee, tea, juices, and specialty drinks for every taste</li>
                  <li><strong>Pet Care:</strong> Nutritious food and supplies for your furry friends</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Our Commitment to Quality</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Quality is at the heart of everything we do. We work directly with farmers, producers, and trusted brands to ensure that every product meets our strict quality standards. Our team carefully inspects each item before it reaches your home, guaranteeing freshness and excellence in every order. We believe that good food is the foundation of a healthy life, and we're dedicated to making it accessible to everyone.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Sustainability & Community</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We're committed to sustainable practices that benefit both our customers and the environment. From eco-friendly packaging to supporting local farmers and reducing food waste, we continuously work towards a greener future. We believe in giving back to the communities we serve through various initiatives, partnerships with local food banks, and educational programs about nutrition and sustainable living.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Why Choose Nest?</h2>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
                  <li><strong>Convenience:</strong> Shop from the comfort of your home with easy online ordering</li>
                  <li><strong>Fast Delivery:</strong> Same-day and next-day delivery options available</li>
                  <li><strong>Competitive Prices:</strong> Best value for your money with regular deals and discounts</li>
                  <li><strong>Quality Guarantee:</strong> 100% satisfaction guaranteed or your money back</li>
                  <li><strong>24/7 Support:</strong> Our customer service team is always here to help</li>
                  <li><strong>Secure Shopping:</strong> Safe and secure payment options for peace of mind</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Join the Nest Family</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  When you shop with Nest, you're not just a customer—you're part of our family. We value your trust and strive to exceed your expectations with every order. Whether you're planning a family dinner, stocking up on essentials, or exploring new organic products, we're here to make your shopping experience seamless and enjoyable.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Thank you for choosing Nest Mart & Grocery. We look forward to serving you and being your partner in healthy, convenient living. If you have any questions or feedback, please don't hesitate to reach out to our support team. Happy shopping!
                </p>
              </div>
            </div>

            {/* Right Sidebar (24%) */}
            <div className="w-[24%]">
              <div className="space-y-6 sticky top-4">
                {/* Search Bar */}
                <div className="bg-white border rounded-lg p-4">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search..." 
                      className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-600"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-600">
                      <IconSearch size={20} />
                    </button>
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-white border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Categories</h3>
                  <div className="w-16 h-1 bg-green-400 mb-6"></div>
                  
                  <div className="space-y-3">
                    <Link href="/category/milk" className="flex items-center justify-between py-2 hover:text-green-600 transition group">
                      <div className="flex items-center gap-3">
                        <IconMilk size={32} className="text-green-600" />
                        <span className="text-gray-700 group-hover:text-green-600">Milks and Dairies</span>
                      </div>
                      <span className="bg-green-100 text-green-600 text-xs px-2.5 py-1 rounded-full font-medium">5</span>
                    </Link>

                    <Link href="/category/clothing" className="flex items-center justify-between py-2 hover:text-green-600 transition group">
                      <div className="flex items-center gap-3">
                        <IconShirt size={32} className="text-green-600" />
                        <span className="text-gray-700 group-hover:text-green-600">Clothing & beauty</span>
                      </div>
                      <span className="bg-green-100 text-green-600 text-xs px-2.5 py-1 rounded-full font-medium">5</span>
                    </Link>

                    <Link href="/category/pet" className="flex items-center justify-between py-2 hover:text-green-600 transition group">
                      <div className="flex items-center gap-3">
                        <IconDog size={32} className="text-green-600" />
                        <span className="text-gray-700 group-hover:text-green-600">Pet Toy</span>
                      </div>
                      <span className="bg-green-100 text-green-600 text-xs px-2.5 py-1 rounded-full font-medium">14</span>
                    </Link>

                    <Link href="/category/baking" className="flex items-center justify-between py-2 hover:text-green-600 transition group">
                      <div className="flex items-center gap-3">
                        <IconCake size={32} className="text-green-600" />
                        <span className="text-gray-700 group-hover:text-green-600">Baking material</span>
                      </div>
                      <span className="bg-green-100 text-green-600 text-xs px-2.5 py-1 rounded-full font-medium">8</span>
                    </Link>

                    <Link href="/category/fruit" className="flex items-center justify-between py-2 hover:text-green-600 transition group">
                      <div className="flex items-center gap-3">
                        <IconApple size={32} className="text-green-600" />
                        <span className="text-gray-700 group-hover:text-green-600">Fresh Fruit</span>
                      </div>
                      <span className="bg-green-100 text-green-600 text-xs px-2.5 py-1 rounded-full font-medium">7</span>
                    </Link>

                    <Link href="/category/wine" className="flex items-center justify-between py-2 hover:text-green-600 transition group">
                      <div className="flex items-center gap-3">
                        <IconBottle size={32} className="text-green-600" />
                        <span className="text-gray-700 group-hover:text-green-600">Wines & Drinks</span>
                      </div>
                      <span className="bg-green-100 text-green-600 text-xs px-2.5 py-1 rounded-full font-medium">7</span>
                    </Link>

                    <Link href="/category/seafood" className="flex items-center justify-between py-2 hover:text-green-600 transition group">
                      <div className="flex items-center gap-3">
                        <IconFish size={32} className="text-green-600" />
                        <span className="text-gray-700 group-hover:text-green-600">Fresh Seafood</span>
                      </div>
                      <span className="bg-green-100 text-green-600 text-xs px-2.5 py-1 rounded-full font-medium">7</span>
                    </Link>

                    <Link href="/category/fastfood" className="flex items-center justify-between py-2 hover:text-green-600 transition group">
                      <div className="flex items-center gap-3">
                        <IconPizza size={32} className="text-green-600" />
                        <span className="text-gray-700 group-hover:text-green-600">Fast food</span>
                      </div>
                      <span className="bg-green-100 text-green-600 text-xs px-2.5 py-1 rounded-full font-medium">6</span>
                    </Link>

                    <Link href="/category/vegetables" className="flex items-center justify-between py-2 hover:text-green-600 transition group">
                      <div className="flex items-center gap-3">
                        <IconCarrot size={32} className="text-green-600" />
                        <span className="text-gray-700 group-hover:text-green-600">Vegetables</span>
                      </div>
                      <span className="bg-green-100 text-green-600 text-xs px-2.5 py-1 rounded-full font-medium">7</span>
                    </Link>

                    <Link href="/category/bread" className="flex items-center justify-between py-2 hover:text-green-600 transition group">
                      <div className="flex items-center gap-3">
                        <IconBread size={32} className="text-green-600" />
                        <span className="text-gray-700 group-hover:text-green-600">Bread and Juice</span>
                      </div>
                      <span className="bg-green-100 text-green-600 text-xs px-2.5 py-1 rounded-full font-medium">3</span>
                    </Link>
                  </div>
                </div>

                {/* Trending Now */}
                <div className="bg-white border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Trending Now</h3>
                  <div className="w-16 h-1 bg-green-400 mb-6"></div>
                  
                  <div className="space-y-4">
                    <Link href="/product/1" className="flex gap-3 group">
                      <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&h=200&fit=crop" alt="Product" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm text-green-600 font-medium group-hover:text-green-700 mb-1">Seeds of Change Organic Quinoe</h4>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-gray-800 font-bold">$1,620.80</span>
                          <span className="text-gray-400 text-xs line-through">$2,026.00</span>
                        </div>
                        <div className="flex text-yellow-400 text-xs">
                          ★★★★★
                        </div>
                      </div>
                    </Link>

                    <Link href="/product/2" className="flex gap-3 group">
                      <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=200&h=200&fit=crop" alt="Product" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm text-green-600 font-medium group-hover:text-green-700 mb-1">Pepperidge Farm Farmhouse Hearty White Bread</h4>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-gray-800 font-bold">$575.00</span>
                        </div>
                        <div className="flex text-yellow-400 text-xs">
                          ★★★★☆
                        </div>
                      </div>
                    </Link>

                    <Link href="/product/3" className="flex gap-3 group">
                      <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=200&h=200&fit=crop" alt="Product" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm text-green-600 font-medium group-hover:text-green-700 mb-1">Nestle Original Coffee-Mate Coffee Creamer</h4>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-gray-800 font-bold">$821.79</span>
                          <span className="text-gray-400 text-xs line-through">$1,355.00</span>
                        </div>
                        <div className="flex text-yellow-400 text-xs">
                          ★★★★☆
                        </div>
                      </div>
                    </Link>

                    <Link href="/product/4" className="flex gap-3 group">
                      <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1600952841320-db92ec4047ca?w=200&h=200&fit=crop" alt="Product" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm text-green-600 font-medium group-hover:text-green-700 mb-1">Angie's Boomchickapop Sweet & Salty Kettle Corn</h4>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-gray-800 font-bold">$1,305.72</span>
                          <span className="text-gray-400 text-xs line-through">$2,425.00</span>
                        </div>
                        <div className="flex text-yellow-400 text-xs">
                          ★★★★☆
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Popular Tags */}
                <div className="bg-white border rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Popular Tags</h3>
                  <div className="w-16 h-1 bg-green-400 mb-6"></div>
                  
                  <div className="flex flex-wrap gap-2">
                    <Link href="/tag/general" className="px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-600 hover:border-green-500 hover:text-green-600 transition flex items-center gap-2">
                      <span className="text-gray-400">×</span>
                      General
                    </Link>
                    <Link href="/tag/design" className="px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-600 hover:border-green-500 hover:text-green-600 transition flex items-center gap-2">
                      <span className="text-gray-400">×</span>
                      Design
                    </Link>
                    <Link href="/tag/fashion" className="px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-600 hover:border-green-500 hover:text-green-600 transition flex items-center gap-2">
                      <span className="text-gray-400">×</span>
                      Fashion
                    </Link>
                    <Link href="/tag/branding" className="px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-600 hover:border-green-500 hover:text-green-600 transition flex items-center gap-2">
                      <span className="text-gray-400">×</span>
                      Branding
                    </Link>
                    <Link href="/tag/modern" className="px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-600 hover:border-green-500 hover:text-green-600 transition flex items-center gap-2">
                      <span className="text-gray-400">×</span>
                      Modern
                    </Link>
                  </div>
                </div>

                {/* Advertisement */}
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg overflow-hidden">
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-1">Organic</p>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Save 17%<br />
                      on Oganic<br />
                      Juice
                    </h3>
                    <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition flex items-center gap-2 text-sm font-medium">
                      Shop now
                      <span>→</span>
                    </button>
                  </div>
                  <div className="relative h-48">
                    <img 
                      src="https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop" 
                      alt="Organic Juice" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer01 />
      <Footer02 />
    </>
  );
}
