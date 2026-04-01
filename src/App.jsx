import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isActive, setIsActive] = useState("product");
  useEffect(() => {
    const data = [
      { id: 1, name: "AI Writing Pro", badge: "Best Seller", billingType: "Mo", price: 29, icon: "/writing_2327400 1.png", desc: "Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.", features: ["Unlimited AI generations", "50+ writing templates", "Grammar checker"] },
      { id: 2, name: "Design Templates Pack", badge: "Popular", billingType: "One-Time", price: 49, icon: "/design-tool.png", desc: "2000+ premium templates for social media, presentations, and marketing materials.", features: ["2000+ templates", "Monthly updates", "Commercial license"] },
      { id: 3, name: "Premium Stock Assets", badge: "New", billingType: "Mo", price: 19, icon: "/portfolio.png", desc: "Access millions of royalty-free photos, videos, and graphics for your projects.", features: ["10M+ assets", "Commercial use", "No attribution"] },
      { id: 4, name: "Automation Toolkit", badge: "Popular", billingType: "Mo", price: 79, icon: "/operation.png", desc: "Automate repetitive tasks and streamline your workflow with powerful tools.", features: ["50+ automations", "API access", "Custom workflows"] },
      { id: 5, name: "Resume Builder Pro", badge: "New", billingType: "One-Time", price: 15, icon: "/package.png", desc: "Create professional resumes and cover letters that land interviews.", features: ["100+ templates", "ATS optimization", "Export to PDF"] },
      { id: 6, name: "Social Media Content Kit", badge: "Best Seller", billingType: "Mo", price: 39, icon: "/social-media.png", desc: "Complete toolkit for creating engaging social media content across all platforms.", features: ["5000+ assets", "Scheduler included", "Analytics dashboard"] }
    ];
    setProducts(data);
  }, []);
  const handleAddToCart = (p) => {
    if (!cart.find((item) => item.id === p.id)) {
      setCart([...cart, p]);
      toast.success(`${p.name} added to cart!`);
    } else {
      toast.warn("Already in cart!");
    }
  };
  const handleRemove = (id) => {
    setCart(cart.filter(item => item.id !== id));
    toast.error("Removed from cart");
  };
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="bg-white font-sans text-[#1E293B]">
      
      <nav className="flex justify-between items-center py-5 px-6 md:px-24 bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-50">
        <div className="text-3xl font-black text-[#8B2CFF] cursor-pointer" onClick={() => setIsActive("product")}>DigiTools</div>
        <div className="hidden lg:flex gap-8 text-[14px] font-bold text-slate-500 uppercase tracking-widest">
          <a href="#" className="hover:text-[#8B2CFF]">Products</a>
          <a href="#" className="hover:text-[#8B2CFF]">Features</a>
          <a href="#pricing" className="hover:text-[#8B2CFF]">Pricing</a>
          <a href="#" className="hover:text-[#8B2CFF]">Testimonials</a>
          <a href="#" className="hover:text-[#8B2CFF]">FAQ</a>
        </div>
        <div className="flex gap-8 items-center">
          <div className="relative cursor-pointer" onClick={() => setIsActive("cart")}>
              <img src="/shopping-cart.png" className="w-6 h-6 opacity-70" alt="Cart" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#8B2CFF] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md">
                  {cart.length}
                </span>
              )}
          </div>
          <div className="font-bold text-slate-700 cursor-pointer hover:text-[#8B2CFF]">Login</div>
          <button className="bg-[#8B2CFF] text-white px-7 py-2.5 rounded-full text-[14px] font-bold shadow-md hover:bg-[#7615F0]">Get Started</button>
        </div>
      </nav>
      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-left">
          <div className="inline-flex items-center gap-2 bg-[#F3E8FF] text-[#8B2CFF] px-4 py-1.5 rounded-full text-xs font-bold mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B2CFF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8B2CFF]"></span>
            </span>
            New: AI-Powered Tools Available
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] text-[#1E293B] mb-8">Supercharge Your <br/> Digital Workflow</h1>
          <p className="text-slate-500 text-lg mb-10 max-w-lg">Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.</p>
          <div className="flex gap-5">
            <button className="bg-[#8B2CFF] text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl">Explore Products</button>
            <button className="flex items-center gap-2 font-bold px-10 py-4 bg-white border-2 border-[#8B2CFF]/10 text-[#1E293B] rounded-full hover:bg-slate-50">
              <img src="/Play.png" className="w-5 h-5" alt="" /> Watch Demo
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img src="/banner.png" className="w-full rounded-[40px] shadow-2xl" alt="Hero Banner" />
        </div>
      </section>
      <section className="bg-[#8B2CFF] py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-white text-center">
          <div><h2 className="text-6xl font-black">50K+</h2><p className="uppercase tracking-widest font-bold mt-2 text-sm opacity-80">Active Users</p></div>
          <div className="md:border-x border-white/20"><h2 className="text-6xl font-black">200+</h2><p className="uppercase tracking-widest font-bold mt-2 text-sm opacity-80">Premium Tools</p></div>
          <div><h2 className="text-6xl font-black">4.9</h2><p className="uppercase tracking-widest font-bold mt-2 text-sm opacity-80">Rating</p></div>
        </div>
      </section>
      <section className="py-24 bg-[#FAFAFA] text-center">
        <h2 className="text-5xl font-black mb-4 text-[#1E293B]">Premium Digital Tools</h2>
        <p className="text-slate-500 mb-12 max-w-2xl mx-auto">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
        
        <div className="inline-flex bg-white p-1.5 rounded-full border border-slate-200 mb-20 shadow-sm">
          <button onClick={() => setIsActive("product")} className={`px-12 py-3 rounded-full font-bold text-sm transition-all ${isActive === 'product' ? 'bg-[#8B2CFF] text-white shadow-lg' : 'text-slate-600 bg-white'}`}>Products</button>
          <button onClick={() => setIsActive("cart")} className={`px-12 py-3 rounded-full font-bold text-sm transition-all ${isActive === 'cart' ? 'bg-[#8B2CFF] text-white shadow-lg' : 'text-slate-600 bg-white'}`}>Cart ({cart.length})</button>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          {isActive === "product" ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {products.map(p => (
                <div key={p.id} className="bg-white border border-slate-100 p-8 rounded-[40px] text-left relative hover:shadow-2xl transition-all group">
                  <div className="absolute top-6 right-8 bg-[#F3E8FF] text-[#8B2CFF] px-4 py-1 rounded-full text-[10px] font-black uppercase">{p.badge}</div>
                  <div className="w-16 h-16 bg-[#F8FAFC] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#F3E8FF] transition-colors"><img src={p.icon} className="w-8 h-8" alt="" /></div>
                  <h3 className="text-2xl font-bold mb-3">{p.name}</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-2">{p.desc}</p>
                  <div className="text-3xl font-black text-slate-800 mb-8">${p.price}<span className="text-sm font-normal text-slate-400">/{p.billingType}</span></div>
                  <ul className="space-y-4 mb-10 text-sm text-slate-600 font-medium">
                    {p.features.map(f => <li key={f}>✓ {f}</li>)}
                  </ul>
                  <button onClick={() => handleAddToCart(p)} className="w-full bg-[#8B2CFF] text-white py-4 rounded-2xl font-bold hover:bg-[#7615F0]">Buy Now</button>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-4xl mx-auto bg-white border border-slate-100 p-10 rounded-[40px] text-left shadow-xl">
              <h2 className="text-3xl font-black mb-10">Your Cart</h2>
              {cart.map(item => (
                <div key={item.id} className="flex justify-between items-center bg-[#F8FAFC] p-6 rounded-3xl mb-4 border border-slate-50 transition-all hover:border-[#8B2CFF]/20">
                  <div className="flex items-center gap-6">
                    <img src={item.icon} className="w-12 h-12" alt="" />
                    <div><h4 className="font-bold text-lg">{item.name}</h4><p className="text-[#8B2CFF] font-black">${item.price}</p></div>
                  </div>
                  <button onClick={() => handleRemove(item.id)} className="text-red-500 font-bold text-sm px-4 py-2 bg-red-50 rounded-full hover:bg-red-500 hover:text-white transition-all">Remove</button>
                </div>
              ))}
              <div className="flex justify-between py-10 border-t mt-10 font-bold text-2xl"><span className="text-slate-400">Total:</span><span className="font-black">${total}</span></div>
              <button className="w-full bg-[#8B2CFF] text-white py-5 rounded-2xl font-black text-xl shadow-lg">Proceed To Checkout</button>
            </div>
          )}
        </div>
      </section>
      <section className="py-24 bg-white text-center">
        <h2 className="text-5xl font-black mb-4 text-[#1E293B]">Get Started In 3 Steps</h2>
        <p className="text-slate-500 mb-20">Start using premium digital tools in minutes, not hours.</p>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { id: "01", title: "Create Account", desc: "Sign up for free in seconds. No credit card required to get started.", img: "/user.png" },
            { id: "02", title: "Choose Products", desc: "Browse our catalog and select the tools that fit your needs.", img: "/portfolio.png" },
            { id: "03", title: "Start Creating", desc: "Download and start using your premium tools immediately.", img: "/rocket.png" }
          ].map((step) => (
            <div key={step.id} className="p-10 rounded-[40px] bg-[#F8FAFC] flex flex-col items-center border-2 border-transparent hover:border-[#8B2CFF] transition-all group relative">
                <div className="absolute top-6 right-8 bg-[#8B2CFF] text-white text-[10px] font-black w-7 h-7 rounded-full flex items-center justify-center">{step.id}</div>
                <div className="w-24 h-24 bg-white shadow-xl rounded-[30px] flex items-center justify-center mb-8 group-hover:bg-[#F3E8FF] transition-colors">
                  <img src={step.img} className="w-10 h-10" alt="" />
                </div>
                <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="pricing" className="py-24 px-6 text-center bg-[#FAFAFA]">
        <h2 className="text-5xl font-black mb-4 text-[#1E293B]">Simple, Transparent Pricing</h2>
        <p className="text-slate-500 mb-20">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {["Starter", "Pro", "Enterprise"].map((plan, index) => (
            <div key={plan} className={`p-12 rounded-[45px] border border-slate-200 bg-white text-left transition-all duration-500 hover:bg-[#8B2CFF] hover:text-white group hover:shadow-2xl hover:scale-110 relative cursor-pointer`}>
              {plan === "Pro" && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-[#1E293B] text-[10px] font-black py-1.5 px-6 rounded-full uppercase z-10">Most Popular</div>}
              <h4 className="font-bold text-2xl mb-2 group-hover:text-white transition-colors">{plan}</h4>
              <p className="text-slate-400 text-sm mb-8 group-hover:text-purple-100 transition-colors">Best for {plan === "Starter" ? "beginners" : plan === "Pro" ? "professionals" : "teams"}</p>
              <div className="text-5xl font-black mb-10 text-[#1E293B] group-hover:text-white transition-colors">${index === 0 ? "0" : index === 1 ? "29" : "99"}<span className="text-sm font-normal opacity-60">/Month</span></div>
              <ul className="space-y-4 mb-12 text-slate-500 font-medium group-hover:text-white transition-colors">
                <li>✓ Access to {index === 0 ? "10" : "all"} tools</li><li>✓ Priority support</li><li>✓ Cloud storage</li><li>✓ Custom branding</li>
              </ul>
              <button className="w-full py-5 rounded-3xl font-black bg-[#8B2CFF] text-white group-hover:bg-white group-hover:text-[#8B2CFF] transition-all shadow-lg">Get Started</button>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#8B2CFF] py-28 text-center text-white px-6">
        <h2 className="text-5xl font-black mb-6 leading-tight">Ready To Transform Your Workflow?</h2>
        <p className="text-purple-100 mb-12 max-w-2xl mx-auto leading-relaxed">Join thousands of professionals who are already using Digitools to work smarter. <br/> Start your free trial today.</p>
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <button onClick={() => setIsActive("product")} className={`px-10 py-4 rounded-full font-black shadow-2xl hover:scale-105 transition-all ${isActive === 'product' ? 'bg-white text-[#8B2CFF]' : 'bg-transparent border-2 border-white text-white'}`}>
            Explore Products
          </button>
          <button onClick={() => {
            setIsActive("cart");
            document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
          }} className={`px-10 py-4 rounded-full font-black transition-all ${isActive === 'cart' ? 'bg-white text-[#8B2CFF]' : 'bg-transparent border-2 border-white text-white'}`}>
            View Pricing
          </button>
        </div>
        <p className="text-purple-200 text-sm opacity-80">14-day free trial • No credit card required • Cancel anytime</p>
      </section>
      <footer className="bg-[#0B1221] text-slate-400 pt-28 pb-12 px-6 md:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-20">
           {/* Column 1: Logo & Info */}
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-black text-white mb-8 tracking-tighter">DigiTools</h2>
              <p className="max-w-xs leading-relaxed text-slate-500 font-medium">Premium digital tools for creators and professionals.</p>
            </div>
           {/* Column 2: Product */}
            <div>
              <h4 className="text-white font-black mb-8 uppercase text-xs tracking-widest">Product</h4>
              <ul className="space-y-4 text-sm font-semibold hover:cursor-pointer">
                <li>Features</li>
                <li>Pricing</li>
                <li>Templates</li>
                <li>Integrations</li>
              </ul>
            </div>
           {/* Column 3: Company */}
            <div>
              <h4 className="text-white font-black mb-8 uppercase text-xs tracking-widest">Company</h4>
              <ul className="space-y-4 text-sm font-semibold hover:cursor-pointer">
                <li>About Us</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
           {/* Column 4: Resources */}
            <div>
              <h4 className="text-white font-black mb-8 uppercase text-xs tracking-widest">Resources</h4>
              <ul className="space-y-4 text-sm font-semibold hover:cursor-pointer">
                <li>Documentation</li>
                <li>Help Center</li>
                <li>Community</li>
                <li>Contact</li>
              </ul>
            </div>
           {/* Column 5: Social Links (Serial line-up) */}
            <div>
              <h4 className="text-white font-black mb-8 uppercase text-xs tracking-widest">Social Links</h4>
              <ul className="grid grid-cols-3  text-sm font-semibold hover:cursor-pointer">
                <li className="flex items-center gap-3 hover:text-[#8B2CFF] transition-colors">
                  <i className="fa-brands fa-instagram text-lg"></i>
                </li>
                <li className="flex items-center gap-3 hover:text-[#8B2CFF] transition-colors">
                  <i className="fa-brands fa-facebook-f text-lg"></i>
                </li>
                <li className="flex items-center gap-3 hover:text-[#8B2CFF] transition-colors">
                  <i className="fa-brands fa-x-twitter text-lg"></i>
                </li>
              </ul>
            </div>
        </div>
        
        <div className="max-w-7xl mx-auto border-t border-slate-800/50 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] uppercase tracking-[0.3em] font-black opacity-30">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-10"><span>Privacy Policy</span><span>Terms of Service</span><span>Cookies</span></div>
        </div>
      </footer>

      <ToastContainer position="bottom-right" autoClose={1500} theme="colored" hideProgressBar={false} closeOnClick pauseOnHover draggable />
    </div>
  );
};

export default App;/ /   R e f i n e d   p r o d u c t   c a r d   U I   w i t h   b e t t e r   s p a c i n g   a n d   s h a d o w  
 / /   L o g i c   f o r   a d d i n g   p r o d u c t s   a n d   u p d a t i n g   c o u n t   i n   n a v b a r  
 / /   I n t e g r a t e d   n o t i f i c a t i o n s   f o r   a   b e t t e r   u s e r   e x p e r i e n c e  
 / /   F u n c t i o n a l i t y   t o   r e m o v e   i t e m s   a n d   c l e a r   t h e   c a r t  
 / /   P r o f e s s i o n a l   f o o t e r   a d d e d  
 / /   F i n a l   r e s p o n s i v e   c h e c k   a n d   c l e a n u p  
 / /   U I :   A d d e d   b a n n e r   a n d   s t a t s   s e c t i o n  
 / /   L o g i c :   H a n d l i n g   p r o d u c t   d a t a   f r o m   j s o n  
 / /   F e a t u r e :   A d d e d   s h o p / c a r t   t o g g l e   l o g i c  
 / /   C h a l l e n g e :   I n t e g r a t e d   R e a c t - T o a s t i f y   a l e r t s  
 