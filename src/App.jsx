import React, { useState, useEffect } from 'react';
import { 
  Palmtree, 
  MapPin, 
  Star, 
  ChevronRight, 
  Search, 
  Menu, 
  X, 
  LayoutDashboard, 
  Plus, 
  Trash2, 
  Edit3, 
  Tag, 
  MessageSquare, 
  BookOpen, 
  ArrowRight, 
  Send, 
  CheckCircle, 
  Clock, 
  Instagram, 
  Facebook, 
  Twitter, 
  Settings, 
  ShieldCheck,
  Image as ImageIcon
} from 'lucide-react';

// --- INITIAL MOCK DATA ---
const INITIAL_DESTINATIONS = [
  { id: '1', name: 'Bali, Indonesia', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80', description: 'Tropical paradise with lush jungles and pristine beaches.' },
  { id: '2', name: 'Santorini, Greece', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80', description: 'Iconic white-washed buildings overlooking the Aegean Sea.' },
  { id: '3', name: 'Kyoto, Japan', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80', description: 'Timeless beauty with ancient temples and zen gardens.' }
];

const INITIAL_PACKAGES = [
  { 
    id: 'p1', 
    title: 'Bali Wellness Retreat', 
    price: 1299, 
    duration: '7 Days', 
    destinationId: '1', 
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    itinerary: 'Day 1: Arrival & Ubud Welcome Dinner. Day 2: Morning Yoga & Jungle Trek. Day 3: Holy Water Temple Visit...',
    category: 'Wellness'
  },
  { 
    id: 'p2', 
    title: 'Santorini Sunset Tour', 
    price: 1850, 
    duration: '5 Days', 
    destinationId: '2', 
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
    rating: 5.0,
    itinerary: 'Day 1: Fira Walk. Day 2: Private Catamaran Cruise. Day 3: Wine Tasting in Pyrgos...',
    category: 'Luxury'
  },
  { 
    id: 'p3', 
    title: 'Hidden Kyoto Explorer', 
    price: 2100, 
    duration: '10 Days', 
    destinationId: '3', 
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80', 
    rating: 4.8,
    itinerary: 'Day 1: Arrival in Kyoto. Day 2: Gion District morning walk. Day 3: Arashiyama Bamboo Grove. Day 4: Kinkaku-ji Golden Pavilion. Day 5: Fushimi Inari Shrine visit.',
    category: 'Cultural'
  }
];

const INITIAL_BLOGS = [
  { 
    id: 'b1', 
    title: '5 Hidden Gems in Bali', 
    date: 'Oct 24, 2023', 
    excerpt: 'Beyond the crowded beaches, Bali hides secret waterfalls and villages...', 
    author: 'Sarah J.', 
    // Updated image URL for Bali Blog with a high-quality landscape source
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80' 
  },
  { 
    id: 'b2', 
    title: 'Ultimate Packing List for Japan', 
    date: 'Nov 12, 2023', 
    excerpt: 'Everything you need to navigate the seasons and cities of Japan...', 
    author: 'Kenji T.', 
    image: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=1200&q=80' 
  }
];

const TESTIMONIALS = [
  { id: 1, name: "Alex Rivera", text: "VibeQuest planned the most seamless trip to Greece. Every detail was perfect.", role: "Solo Traveler" },
  { id: 2, name: "The Millers", text: "Our family package to Bali was life-changing. Great value and amazing guides.", role: "Family Group" }
];

export default function App() {
  const [view, setView] = useState('home'); 
  const [destinations] = useState(INITIAL_DESTINATIONS);
  const [packages, setPackages] = useState(INITIAL_PACKAGES);
  const [blogs] = useState(INITIAL_BLOGS);
  const [bookings, setBookings] = useState([
    { id: 'bk1', customer: 'John Doe', package: 'Bali Wellness', status: 'Pending', date: '2023-11-20' }
  ]);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateTo = (newView, data = null) => {
    setView(newView);
    if (data) setSelectedPackage(data);
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  const Navbar = () => (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center cursor-pointer" onClick={() => navigateTo('home')}>
            <div className="bg-gradient-to-br from-orange-500 to-pink-500 p-2 rounded-lg mr-2">
              <Palmtree className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-pink-600">
              VIBEQUEST
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8 font-medium text-gray-700">
            <button onClick={() => navigateTo('home')} className="hover:text-orange-600 transition">Home</button>
            <button onClick={() => navigateTo('packages')} className="hover:text-orange-600 transition">Destinations</button>
            <button onClick={() => navigateTo('blog')} className="hover:text-orange-600 transition">Travel Blog</button>
            <button onClick={() => navigateTo('admin')} className="flex items-center text-gray-400 hover:text-gray-900 transition">
              <ShieldCheck className="w-4 h-4 mr-1" /> Admin
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-700">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b absolute w-full flex flex-col p-4 space-y-4 shadow-lg">
          <button onClick={() => navigateTo('home')} className="text-left font-bold text-lg text-gray-900">Home</button>
          <button onClick={() => navigateTo('packages')} className="text-left font-bold text-lg text-gray-900">Destinations</button>
          <button onClick={() => navigateTo('blog')} className="text-left font-bold text-lg text-gray-900">Travel Blog</button>
          <button onClick={() => navigateTo('admin')} className="text-left text-gray-500">Admin Dashboard</button>
        </div>
      )}
    </nav>
  );

  const PackageCard = ({ pkg }) => (
    <div 
      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100 flex flex-col h-full"
      onClick={() => navigateTo('package-detail', pkg)}
    >
      <div className="relative h-64 overflow-hidden bg-gray-200">
        <img 
          src={pkg.image} 
          alt={pkg.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-orange-600 uppercase tracking-widest shadow-sm">
          {pkg.category}
        </div>
        <div className="absolute bottom-4 right-4 bg-orange-600 text-white px-4 py-2 rounded-2xl font-black text-lg">
          ${pkg.price}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 leading-tight mb-3">{pkg.title}</h3>
        <div className="flex items-center text-sm text-gray-500 mb-4 gap-4">
          <span className="flex items-center"><Clock className="w-4 h-4 mr-1 text-orange-500" /> {pkg.duration}</span>
          <span className="flex items-center text-orange-500 font-medium"><Star className="w-4 h-4 mr-1 fill-current" /> {pkg.rating}</span>
        </div>
        <p className="text-gray-500 text-sm line-clamp-2 mb-6">
          Experience the best of {destinations.find(d => d.id === pkg.destinationId)?.name || 'the world'} with our curated itinerary.
        </p>
        <button className="mt-auto w-full border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white py-3 rounded-xl font-bold transition flex items-center justify-center">
          View Details <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>
    </div>
  );

  const HomeView = () => (
    <div className="pt-0">
      {/* Hero */}
      <div className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover" 
            alt="Tropical Beach" 
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-xl">
            Escape the Ordinary.
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Discover handpicked boutique travel experiences designed for those who seek adventure, culture, and luxury.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigateTo('packages')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition flex items-center justify-center shadow-lg shadow-orange-500/30"
            >
              Explore Packages <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Destinations */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-2">Popular Destinations</h2>
            <div className="h-1.5 w-20 bg-orange-500 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map(dest => (
              <div 
                key={dest.id} 
                className="relative h-96 rounded-[2.5rem] overflow-hidden group cursor-pointer bg-gray-100"
                onClick={() => navigateTo('packages')}
              >
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{dest.name}</h3>
                  <p className="text-white/80 text-sm font-light mb-4">{dest.description}</p>
                  <button className="text-white flex items-center text-sm font-bold group-hover:translate-x-2 transition">
                    View Trips <ChevronRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Packages */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-bold tracking-widest uppercase text-xs">Unforgettable Experiences</span>
            <h2 className="text-4xl font-black text-gray-900 mt-2">Latest Travel Packages</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.slice(0, 3).map(pkg => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
          <div className="mt-16 text-center">
            <button 
              onClick={() => navigateTo('packages')}
              className="bg-white text-gray-900 border-2 border-gray-100 hover:border-orange-500 hover:text-orange-500 px-10 py-4 rounded-full font-bold transition shadow-sm"
            >
              See All Packages
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-8 leading-tight">What Our Explorers Say About Us</h2>
              <div className="space-y-8">
                {TESTIMONIALS.map(t => (
                  <div key={t.id} className="bg-gray-50 p-8 rounded-3xl relative">
                    <Star className="absolute top-8 right-8 text-orange-500 w-5 h-5 fill-current" />
                    <p className="text-gray-600 text-lg italic mb-6">"{t.text}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center font-bold text-orange-600">
                        {t.name[0]}
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-gray-900">{t.name}</h4>
                        <p className="text-sm text-gray-500">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-orange-100 rounded-full -z-10" />
              <img 
                src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1000&q=80" 
                alt="Travelers" 
                className="rounded-[3rem] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const PackageDetailView = () => {
    const [booked, setBooked] = useState(false);
    if (!selectedPackage) return null;

    const handleInquiry = (e) => {
      e.preventDefault();
      setBooked(true);
      setBookings(prev => [...prev, {
        id: 'bk' + Date.now(),
        customer: 'Website User',
        package: selectedPackage.title,
        status: 'Pending',
        date: new Date().toISOString().split('T')[0]
      }]);
    };

    return (
      <div className="pt-16 pb-24 bg-white">
        <div className="h-[60vh] relative">
          <img src={selectedPackage.image} className="w-full h-full object-cover" alt={selectedPackage.title} />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 -mt-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-50">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-black uppercase">{selectedPackage.category}</span>
                  <div className="flex items-center text-orange-500 font-bold"><Star className="w-5 h-5 mr-1 fill-current" /> {selectedPackage.rating}</div>
                </div>
                <h1 className="text-5xl font-black text-gray-900 mb-6">{selectedPackage.title}</h1>
                <div className="flex gap-8 mb-10 pb-8 border-b border-gray-100">
                  <div>
                    <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Duration</div>
                    <div className="text-xl font-bold">{selectedPackage.duration}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Price From</div>
                    <div className="text-xl font-bold text-orange-600">${selectedPackage.price}</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">The Itinerary</h3>
                <div className="space-y-6 text-gray-600 leading-relaxed mb-10">
                  {selectedPackage.itinerary.split('. ').map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {idx + 1}
                      </div>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <aside className="lg:col-span-1">
              <div className="sticky top-24 bg-gray-900 text-white p-8 rounded-[2.5rem] shadow-2xl overflow-hidden">
                {!booked ? (
                  <>
                    <h3 className="text-2xl font-bold mb-6">Inquire Now</h3>
                    <form className="space-y-4" onSubmit={handleInquiry}>
                      <input required type="text" className="w-full bg-gray-800 border-none rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-orange-500" placeholder="Full Name" />
                      <input required type="date" className="w-full bg-gray-800 border-none rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-orange-500" />
                      <textarea rows="4" className="w-full bg-gray-800 border-none rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-orange-500" placeholder="Message"></textarea>
                      <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-black transition">
                        Request Booking
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Request Sent!</h3>
                    <button onClick={() => navigateTo('packages')} className="text-orange-500 font-bold hover:underline">Browse more packages</button>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </div>
    );
  };

  const PackagesView = () => (
    <div className="pt-24 pb-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-black text-gray-900 mb-12">Curated Experiences</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map(pkg => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </div>
  );

  const BlogView = () => (
    <div className="pt-24 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-black text-gray-900 mb-20 text-center">The Explorer Journal</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {blogs.map(post => (
            <article key={post.id} className="group cursor-pointer">
              <div className="h-96 rounded-[3rem] overflow-hidden mb-6 bg-gray-100">
                <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition duration-1000" alt={post.title} />
              </div>
              <h2 className="text-3xl font-black text-gray-900 group-hover:text-orange-500 transition mb-4">{post.title}</h2>
              <p className="text-gray-500 mb-6">{post.excerpt}</p>
              <button className="flex items-center font-black">Read More <ArrowRight className="ml-2 w-5 h-5 text-orange-500" /></button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );

  const AdminView = () => (
    <div className="pt-24 p-8 min-h-screen bg-gray-50">
      <h2 className="text-3xl font-black mb-8">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <h3 className="text-xl font-bold mb-4">Recent Bookings</h3>
          {bookings.map(b => (
            <div key={b.id} className="py-3 border-b border-gray-50 flex justify-between">
              <div>
                <div className="font-bold">{b.customer}</div>
                <div className="text-sm text-gray-500">{b.package}</div>
              </div>
              <span className="text-orange-500 font-bold text-sm">{b.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center mb-6">
            <Palmtree className="text-orange-500 w-6 h-6 mr-2" />
            <span className="text-2xl font-black">VIBEQUEST</span>
          </div>
          <p className="text-gray-400">Hand-curated travel for the modern explorer.</p>
        </div>
        <div>
          <h4 className="font-bold mb-6">Explore</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="cursor-pointer hover:text-orange-500" onClick={() => navigateTo('home')}>Home</li>
            <li className="cursor-pointer hover:text-orange-500" onClick={() => navigateTo('packages')}>Destinations</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Newsletter</h4>
          <div className="flex bg-gray-800 rounded-lg p-2">
            <input type="text" placeholder="Email" className="bg-transparent border-none flex-grow p-2" />
            <button className="bg-orange-500 p-2 rounded-lg"><Send className="w-4 h-4" /></button>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="font-sans antialiased text-gray-900">
      <Navbar />
      {view === 'home' && <HomeView />}
      {view === 'packages' && <PackagesView />}
      {view === 'package-detail' && <PackageDetailView />}
      {view === 'blog' && <BlogView />}
      {view === 'admin' && <AdminView />}
      {view !== 'admin' && <Footer />}
    </div>
  );
}