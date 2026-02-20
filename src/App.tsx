/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Download, 
  Zap, 
  Layout, 
  Layers, 
  Smartphone, 
  Code, 
  Globe, 
  CheckCircle2, 
  Star, 
  Play, 
  Plus, 
  Minus,
  ArrowRight,
  ShoppingBag,
  MousePointer2,
  Grid,
  Monitor,
  Cpu,
  Users,
  Building2,
  UserCircle2,
  Check,
  X,
  Mail
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-zinc-200 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <Grid className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-zinc-900">Retrina<span className="text-zinc-500 font-normal">Builder</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
          <a href="#features" className="hover:text-black transition-colors">Features</a>
          <a href="#widgets" className="hover:text-black transition-colors">Widgets</a>
          <a href="#showcase" className="hover:text-black transition-colors">Showcase</a>
          <a href="#pricing" className="hover:text-black transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="hidden sm:block text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors">Login</a>
          <button className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all flex items-center gap-2">
            Free Download <Download className="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>
  );
};

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="p-8 border border-zinc-100 bg-white rounded-2xl hover:shadow-xl hover:shadow-zinc-200/50 transition-all group">
    <div className="w-12 h-12 bg-zinc-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-semibold mb-3 text-zinc-900">{title}</h3>
    <p className="text-zinc-500 leading-relaxed">{description}</p>
  </div>
);

const PricingCard = ({ plan, price, description, features, highlighted = false, ctaText }: { plan: string, price: string, description: string, features: string[], highlighted?: boolean, ctaText: string }) => (
  <div className={`p-8 rounded-3xl border ${highlighted ? 'border-black bg-black text-white shadow-2xl scale-105' : 'border-zinc-200 bg-white text-zinc-900'} flex flex-col h-full`}>
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-2">{plan}</h3>
      <div className="flex items-baseline gap-1 mb-4">
        <span className="text-4xl font-bold">{price}</span>
        {price !== 'Free' && <span className={highlighted ? 'text-zinc-400' : 'text-zinc-500'}>/site</span>}
      </div>
      <p className={highlighted ? 'text-zinc-400' : 'text-zinc-500'}>{description}</p>
    </div>
    
    <div className="flex-grow space-y-4 mb-8">
      {features.map((feature, i) => (
        <div key={i} className="flex items-start gap-3">
          <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${highlighted ? 'text-white' : 'text-black'}`} />
          <span className="text-sm">{feature}</span>
        </div>
      ))}
    </div>
    
    <button className={`w-full py-4 rounded-xl font-semibold transition-all ${highlighted ? 'bg-white text-black hover:bg-zinc-100' : 'bg-black text-white hover:bg-zinc-800'}`}>
      {ctaText}
    </button>
  </div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-zinc-200 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group"
      >
        <span className="text-lg font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors">{question}</span>
        {isOpen ? <Minus className="w-5 h-5 text-zinc-400" /> : <Plus className="w-5 h-5 text-zinc-400" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-zinc-500 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-black selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_0%,transparent_70%)]" />
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 text-zinc-600 text-xs font-bold uppercase tracking-widest mb-8">
              <Zap className="w-3.5 h-3.5 fill-current" /> The #1 OpenCart Page Builder
            </span>
            <h1 className="text-5xl lg:text-8xl font-bold tracking-tight mb-8 max-w-4xl mx-auto leading-[0.95]">
              Build OpenCart Stores <span className="text-zinc-400">Without the Code.</span>
            </h1>
            <p className="text-xl text-zinc-500 max-w-2xl mx-auto mb-12 leading-relaxed">
              The most powerful drag-and-drop page builder for OpenCart. 50+ widgets, pre-designed templates, and developer-friendly output.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-zinc-200">
                Get Started Free <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-zinc-50 transition-all">
                View Pro Pricing
              </button>
            </div>

            {/* Hero Image / Video Placeholder */}
            <div className="relative max-w-5xl mx-auto">
              <div className="aspect-video bg-zinc-100 rounded-[2rem] border border-zinc-200 shadow-2xl overflow-hidden group cursor-pointer">
                <img 
                  src="https://picsum.photos/seed/retrina/1200/675" 
                  alt="Retrina Builder Interface" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 fill-black ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white/60 text-xs font-mono uppercase tracking-widest">
                  <span>Retrina Builder v2.4.0</span>
                  <span>Drag & Drop Interface</span>
                </div>
              </div>
              
              {/* Floating UI Elements */}
              <div className="hidden lg:block absolute -left-12 top-1/4 p-4 bg-white rounded-2xl shadow-2xl border border-zinc-100 animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-bold text-zinc-400 uppercase">Widget</div>
                    <div className="text-sm font-bold">Product Grid</div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block absolute -right-12 bottom-1/4 p-4 bg-white rounded-2xl shadow-2xl border border-zinc-100 animate-bounce-slow delay-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                    <MousePointer2 className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-bold text-zinc-400 uppercase">Action</div>
                    <div className="text-sm font-bold">Drag to Canvas</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] mb-10">Trusted by 5,000+ OpenCart Store Owners</p>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-40 grayscale">
            <div className="text-2xl font-black tracking-tighter">STOREFRONT</div>
            <div className="text-2xl font-black tracking-tighter">MODERNA</div>
            <div className="text-2xl font-black tracking-tighter">E-COMM</div>
            <div className="text-2xl font-black tracking-tighter">VELOCITY</div>
            <div className="text-2xl font-black tracking-tighter">NEXUS</div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">Everything you need to <span className="text-zinc-400">scale your store.</span></h2>
              <p className="text-lg text-zinc-500 leading-relaxed">Stop fighting with default OpenCart layouts. Retrina Builder gives you total creative control without touching a single line of code.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-zinc-50 rounded-2xl">
                <div className="text-3xl font-bold mb-1">98/100</div>
                <div className="text-sm text-zinc-500">PageSpeed Score</div>
              </div>
              <div className="p-6 bg-zinc-50 rounded-2xl">
                <div className="text-3xl font-bold mb-1">50+</div>
                <div className="text-sm text-zinc-500">Custom Widgets</div>
              </div>
              <div className="p-6 bg-zinc-50 rounded-2xl">
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-sm text-zinc-500">Responsive</div>
              </div>
              <div className="p-6 bg-zinc-50 rounded-2xl">
                <div className="text-3xl font-bold mb-1">24/7</div>
                <div className="text-sm text-zinc-500">Expert Support</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Layout} 
              title="Drag & Drop Builder" 
              description="Intuitive visual interface. Move elements around and see changes in real-time. No more refreshing."
            />
            <FeatureCard 
              icon={Smartphone} 
              title="Responsive Controls" 
              description="Customize how your site looks on mobile, tablet, and desktop independently. Perfect on every screen."
            />
            <FeatureCard 
              icon={Layers} 
              title="Pre-designed Templates" 
              description="Import professionally designed sections and pages in one click. Launch your store faster than ever."
            />
            <FeatureCard 
              icon={Code} 
              title="Developer Friendly" 
              description="Clean HTML/CSS output. Add custom CSS or JS directly to any element if you need that extra control."
            />
            <FeatureCard 
              icon={Globe} 
              title="Multi-language" 
              description="Full support for OpenCart's multi-language system. Translate your builder content with ease."
            />
            <FeatureCard 
              icon={Cpu} 
              title="Fast Performance" 
              description="Optimized for speed. No bloat, no heavy libraries. Your pages will load lightning fast."
            />
          </div>
        </div>
      </section>

      {/* Widgets Library */}
      <section id="widgets" className="py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">50+ Powerful Widgets</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">From basic text to complex ecommerce elements, we've got everything covered.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Product Grid', 'Image Slider', 'Testimonials', 'Countdown', 'Contact Form',
              'Google Maps', 'Video Player', 'Price Table', 'Tabs', 'Accordion',
              'Social Icons', 'Newsletter', 'Featured Products', 'Banners', 'Counter',
              'Progress Bar', 'Team Members', 'Blog Posts', 'Search Bar', 'Categories',
              'Breadcrumbs', 'Pagination', 'Filter', 'Cart Button'
            ].map((widget, i) => (
              <div key={i} className="p-4 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors flex flex-col items-center gap-3 text-center">
                <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">
                  <Plus className="w-4 h-4 text-white/40" />
                </div>
                <span className="text-xs font-medium text-zinc-300">{widget}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="text-white font-bold flex items-center gap-2 mx-auto hover:gap-4 transition-all">
              View All 50+ Widgets <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Personas Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">Built for <span className="text-zinc-400">everyone.</span></h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Store Owners</h3>
              <p className="text-zinc-500">Manage your store's appearance without hiring a developer for every small change.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Developers</h3>
              <p className="text-zinc-500">Speed up your workflow. Build complex layouts in minutes instead of hours.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Agencies</h3>
              <p className="text-zinc-500">Deliver high-quality stores to your clients faster and give them an easy way to edit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">Why Retrina?</h2>
            <p className="text-zinc-500 text-lg">See how we stack up against the alternatives.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-3xl overflow-hidden shadow-xl">
              <thead>
                <tr className="border-b border-zinc-100">
                  <th className="p-8 text-left text-sm font-bold uppercase tracking-widest text-zinc-400">Feature</th>
                  <th className="p-8 text-center text-lg font-bold">Retrina Builder</th>
                  <th className="p-8 text-center text-lg font-medium text-zinc-400">Default Editor</th>
                  <th className="p-8 text-center text-lg font-medium text-zinc-400">Generic Builders</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Drag & Drop Interface', retrina: true, default: false, generic: true },
                  { feature: 'OpenCart Native Integration', retrina: true, default: true, generic: false },
                  { feature: '50+ Specialized Widgets', retrina: true, default: false, generic: 'Limited' },
                  { feature: 'Clean Code Output', retrina: true, default: true, generic: false },
                  { feature: 'Multi-language Support', retrina: true, default: true, generic: 'Complex' },
                  { feature: 'Agency Workflow Tools', retrina: true, default: false, generic: false },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-zinc-50 last:border-0">
                    <td className="p-8 font-medium">{row.feature}</td>
                    <td className="p-8 text-center">
                      {row.retrina === true ? <Check className="w-6 h-6 text-emerald-500 mx-auto" /> : <span className="text-zinc-400">{row.retrina}</span>}
                    </td>
                    <td className="p-8 text-center">
                      {row.default === true ? <Check className="w-6 h-6 text-zinc-300 mx-auto" /> : <X className="w-6 h-6 text-zinc-200 mx-auto" />}
                    </td>
                    <td className="p-8 text-center">
                      {row.generic === true ? <Check className="w-6 h-6 text-zinc-300 mx-auto" /> : <span className="text-zinc-400">{row.generic}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Jenkins",
                role: "Store Owner",
                text: "Retrina Builder saved me thousands in developer fees. I built my entire home page in a weekend.",
                rating: 5
              },
              {
                name: "Marcello Rossi",
                role: "Agency Director",
                text: "The best builder for OpenCart, period. The code output is clean and it doesn't slow down the site.",
                rating: 5
              },
              {
                name: "David Chen",
                role: "Developer",
                text: "I was skeptical, but the developer tools and custom CSS options are top-notch. Highly recommended.",
                rating: 5
              }
            ].map((t, i) => (
              <div key={i} className="p-8 bg-zinc-50 rounded-3xl">
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-black text-black" />)}
                </div>
                <p className="text-lg mb-8 italic text-zinc-700">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zinc-200 rounded-full" />
                  <div>
                    <div className="font-bold text-sm">{t.name}</div>
                    <div className="text-xs text-zinc-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">Simple, transparent <span className="text-zinc-400">pricing.</span></h2>
            <p className="text-zinc-500 text-lg">Start for free, upgrade when you're ready.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard 
              plan="Free Version"
              price="Free"
              description="Perfect for getting started and basic page building."
              ctaText="Download Now"
              features={[
                "15+ Basic Widgets",
                "Drag & Drop Builder",
                "Responsive Controls",
                "Community Support",
                "Standard Templates"
              ]}
            />
            <PricingCard 
              plan="Pro Version"
              price="$59"
              description="Everything you need for a professional high-converting store."
              highlighted={true}
              ctaText="Get Pro Version"
              features={[
                "All 50+ Premium Widgets",
                "Advanced Ecommerce Widgets",
                "Premium Templates Library",
                "Priority 24/7 Support",
                "Custom CSS/JS Controls",
                "Lifetime Updates",
                "Agency Workflow Tools"
              ]}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 border-t border-zinc-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-12 text-center">Frequently Asked <span className="text-zinc-400">Questions</span></h2>
          <div className="space-y-2">
            <FAQItem 
              question="Is Retrina Builder compatible with my theme?"
              answer="Yes! Retrina Builder is designed to work with 99% of OpenCart themes. It works alongside your existing theme structure."
            />
            <FAQItem 
              question="Will it slow down my website?"
              answer="Absolutely not. We pride ourselves on clean code output. Retrina only loads the necessary assets for the widgets you actually use."
            />
            <FAQItem 
              question="Can I use it on multiple stores?"
              answer="The Pro license is per site. However, we offer bulk agency licenses if you're managing multiple client stores."
            />
            <FAQItem 
              question="Do I need coding skills?"
              answer="None at all. The builder is 100% visual. If you can drag a mouse, you can build a page."
            />
          </div>
        </div>
      </section>

      {/* Lead Capture / Final CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-black rounded-[3rem] p-12 lg:p-24 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-7xl font-bold tracking-tight mb-8">Ready to transform your <span className="text-zinc-400">OpenCart store?</span></h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12">Join 5,000+ store owners building better experiences with Retrina Builder.</p>
              
              <div className="max-w-md mx-auto">
                <form className="flex flex-col sm:flex-row gap-3 mb-6" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-grow bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                  />
                  <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-zinc-100 transition-all">
                    Get Started
                  </button>
                </form>
                <p className="text-xs text-zinc-500">No credit card required. Start with the free version today.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                <Grid className="text-white w-4 h-4" />
              </div>
              <span className="font-bold text-lg tracking-tight">RetrinaBuilder</span>
            </div>
            
            <div className="flex gap-8 text-sm text-zinc-500">
              <a href="#" className="hover:text-black transition-colors">Documentation</a>
              <a href="#" className="hover:text-black transition-colors">Support</a>
              <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            </div>
            
            <div className="text-sm text-zinc-400">
              © 2026 Retrina Builder. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
