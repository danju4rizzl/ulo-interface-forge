
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Clock, Phone, Globe, Users, TrendingUp, Shield } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-normal text-gray-900">Ulo</div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">Products</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">Solutions</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">Resources</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-sm text-gray-700">Sign in</Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-6">Get started</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-normal text-gray-900 mb-6 leading-tight">
                Stand out on<br />
                Ulo with a free<br />
                Business Profile
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Turn people who find you on Ulo Search and Maps into new customers with a free Business Profile for your storefront or service area.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base">
                Get started
              </Button>
            </div>
            <div className="relative">
              <Card className="bg-white shadow-lg border-0 shadow-gray-200/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">Rosa's Italian Restaurant</h3>
                      <div className="flex items-center mt-1">
                        <div className="flex items-center">
                          {[1,2,3,4,5].map((star) => (
                            <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 ml-2">4.8 (127)</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Italian restaurant • $$</p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      123 Main Street, Downtown
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      Open until 10:00 PM
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="w-4 h-4 mr-2" />
                      (555) 123-4567
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[1,2,3,4,5,6].map((img) => (
                      <div key={img} className="aspect-square bg-gray-200 rounded"></div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Connect with customers</h3>
              <p className="text-gray-600">Help people discover your business and engage with your customers.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Share what makes you special</h3>
              <p className="text-gray-600">Upload photos, respond to reviews, post updates, and more.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Turn viewers into customers</h3>
              <p className="text-gray-600">Get the insights you need to keep customers coming back.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal text-gray-900 mb-4">Turn a Ulo search into a visit to your business</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Get discovered</h3>
              <p className="text-lg text-gray-600 mb-6">
                Your Business Profile lets you connect with customers across Ulo Search and Maps. When people search for businesses like yours, make sure they find your business.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1,2,3,4].map((item) => (
                <div key={item} className="aspect-square bg-gray-200 rounded-lg"></div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="lg:order-2">
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Build trust</h3>
              <p className="text-lg text-gray-600 mb-6">
                Customers are more likely to choose a business with photos, reviews, and up-to-date information. Your Business Profile helps you put your best foot forward.
              </p>
            </div>
            <div className="lg:order-1">
              <Card className="bg-white shadow-lg border-0 shadow-gray-200/50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl font-light text-gray-900 mr-2">4.5</div>
                    <div>
                      <div className="flex items-center mb-1">
                        {[1,2,3,4,5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-600">Based on 127 reviews</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[5,4,3,2,1].map((rating) => (
                      <div key={rating} className="flex items-center">
                        <span className="text-sm text-gray-600 w-4">{rating}</span>
                        <div className="flex-1 mx-3 bg-gray-200 rounded-full h-2">
                          <div className="bg-yellow-400 h-2 rounded-full" style={{width: `${rating * 20}%`}}></div>
                        </div>
                        <span className="text-sm text-gray-600">{Math.floor(Math.random() * 50) + 10}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-normal text-gray-900 mb-6">
                50% of consumers who conducted a local search on their smartphone visited a store within a day
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Source: Think with Ulo, "How Mobile has Changed What It Means to Shop Local," May 2019.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Get started
              </Button>
            </div>
            <div>
              <Card className="bg-white shadow-lg border-0 shadow-gray-200/50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Performance insights</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Profile views</span>
                      <span className="font-medium text-gray-900">8,240</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Search views</span>
                      <span className="font-medium text-gray-900">5,123</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Direction requests</span>
                      <span className="font-medium text-gray-900">1,847</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Phone calls</span>
                      <span className="font-medium text-gray-900">892</span>
                    </div>
                  </div>
                  <div className="mt-6 h-32 bg-blue-50 rounded flex items-end justify-center">
                    <div className="text-blue-600 text-sm">Chart visualization</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-10 h-10 bg-white rounded-full"></div>
          </div>
          <h2 className="text-4xl font-normal text-gray-900 mb-6">
            Show the best of your business
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Upload</h3>
              <p className="text-gray-600">Add photos of your business, products, and team</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Promote</h3>
              <p className="text-gray-600">Share updates and offers with potential customers</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Manage</h3>
              <p className="text-gray-600">View insights and respond to customer reviews</p>
            </div>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base">
            Get started
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-normal text-gray-900 mb-12 text-center">Your questions, answered</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">How do I get started with Ulo Business Profile?</h3>
              <p className="text-gray-600">Getting started is easy and free. Simply click "Get started" and follow the steps to create your business profile.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">How long do profile changes take to appear?</h3>
              <p className="text-gray-600">Most changes to your Business Profile appear within a few minutes, though some updates may take longer.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Is Ulo Business Profile really free?</h3>
              <p className="text-gray-600">Yes, creating and maintaining your Business Profile on Ulo is completely free.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Ulo</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">About</a></li>
                <li><a href="#" className="hover:text-gray-900">Products</a></li>
                <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
                <li><a href="#" className="hover:text-gray-900">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Business</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Advertising</a></li>
                <li><a href="#" className="hover:text-gray-900">Solutions</a></li>
                <li><a href="#" className="hover:text-gray-900">How Search works</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Developers</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Ulo API</a></li>
                <li><a href="#" className="hover:text-gray-900">Ulo Cloud</a></li>
                <li><a href="#" className="hover:text-gray-900">Ulo Maps Platform</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Help</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Support</a></li>
                <li><a href="#" className="hover:text-gray-900">Contact</a></li>
                <li><a href="#" className="hover:text-gray-900">Community</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-sm text-gray-600">
            <p>&copy; 2024 Ulo LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
