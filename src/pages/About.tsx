import { motion } from 'motion/react';
import { Shield, Target, Users, Award, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-primary text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/about.webp')] opacity-10 bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-display font-bold mb-8"
          >
            Our Mission.
          </motion.h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Advancing scientific discovery through the provision of ultra-pure research compounds and unparalleled laboratory support.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Purity Standard', value: '99%+' },
              { label: 'Lab Batches', value: '12k+' },
              { label: 'Researchers', value: '5k+' },
              { label: 'UK Locations', value: '2' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-4xl font-display font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-xs font-bold text-gray-600 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-display font-bold text-primary mb-8">Excellence in Every Atom.</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in London, Tesamorelin Health emerged from a need for consistent, high-purity research materials in the UK biotech sector. We understood that the integrity of scientific research depends entirely on the quality of the compounds used.
                </p>
                <p>
                  Today, we operate two state-of-the-art distribution centers in London and Northern Ireland, ensuring that researchers across the UK have access to the materials they need, exactly when they need them.
                </p>
              </div>
              
              <div className="mt-12 p-8 bg-support rounded-3xl border border-primary/5">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white">
                    <Award size={24} />
                  </div>
                  <h4 className="font-display font-bold text-gray-900">Certified Quality</h4>
                </div>
                <p className="text-sm text-gray-600">Every product we ship is accompanied by a Certificate of Analysis (COA) verifying its purity and composition.</p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/about.webp" 
                alt="Lab Work" 
                className="rounded-[3rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-secondary p-8 rounded-3xl text-white shadow-xl max-w-xs">
                <p className="text-3xl font-display font-bold mb-2">99.8%</p>
                <p className="text-sm font-medium opacity-80">Average purity rating across all 2025 laboratory batches.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-support">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display font-bold text-primary mb-6">Our Core Values.</h2>
            <p className="text-lg text-gray-600">The principles that guide our commitment to the scientific community.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Shield size={32} />, title: 'Integrity', desc: 'We never compromise on purity. Our reputation is built on the accuracy of our data.' },
              { icon: <Target size={32} />, title: 'Precision', desc: 'From molecular weight to delivery timing, precision is at the heart of everything we do.' },
              { icon: <Users size={32} />, title: 'Support', desc: 'We are partners in your research, providing technical support whenever it is needed.' },
            ].map((value, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
                <div className="text-secondary mb-6">{value.icon}</div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scam Warning */}
      <section className="py-32 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border-2 border-red-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 text-red-100">
              <AlertTriangle size={120} />
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
                <AlertTriangle size={14} />
                <span>Security Alert</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8">Protect Your Research.</h2>
              <p className="text-lg text-gray-600 mb-12 max-w-2xl">
                The research peptide market is unfortunately targeted by fraudulent websites. Always verify you are on <strong>tesamorelinlab.co.uk</strong> before placing an order.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-red-50/50 rounded-2xl border border-red-100">
                  <h4 className="font-bold text-red-900 mb-2">Fake Websites</h4>
                  <p className="text-sm text-red-700/70">Lookalikes often use .net or .org extensions to mimic our official domain.</p>
                </div>
                <div className="p-6 bg-red-50/50 rounded-2xl border border-red-100">
                  <h4 className="font-bold text-red-900 mb-2">Unrealistic Prices</h4>
                  <p className="text-sm text-red-700/70">If a price seems too good to be true, it likely indicates a lack of purity testing.</p>
                </div>
                <div className="p-6 bg-red-50/50 rounded-2xl border border-red-100">
                  <h4 className="font-bold text-red-900 mb-2">Social Media Scams</h4>
                  <p className="text-sm text-red-700/70">We never solicit orders via Instagram DMs or Telegram groups.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
