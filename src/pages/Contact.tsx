import { Mail, MessageCircle, Clock, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mpqonbrb', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        alert('Oops! There was a problem submitting your form');
      }
    } catch (error) {
      alert('Oops! There was a problem submitting your form');
    }
  };

  return (
    <div className="pt-32 pb-32 min-h-screen bg-support">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-6xl font-display font-bold text-primary mb-6">Get in Touch.</h1>
          <p className="text-xl text-gray-600">Our dedicated support team is here to assist with your research inquiries and order status.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info Cards */}
          <div className="space-y-8">
            {/* WhatsApp Card */}
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-[#25D366]/20 relative overflow-hidden group hover:shadow-xl transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#25D366]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-[#25D366]/10 rounded-3xl flex items-center justify-center text-[#25D366]">
                    <MessageCircle size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-gray-900">WhatsApp Support</h3>
                    <p className="text-sm text-[#25D366] font-bold uppercase tracking-widest">Recommended</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  The fastest way to get a response. Our team is active on WhatsApp for real-time order updates and technical support.
                </p>
                <div className="bg-support rounded-2xl p-6 mb-8">
                  <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-4">
                    <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">Response Time</span>
                    <span className="text-sm font-bold text-primary">~15 Minutes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">Availability</span>
                    <span className="text-sm font-bold text-primary">Mon - Sat, 9AM - 6PM</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/447341056054"
                  target="_blank"
                  className="w-full bg-[#25D366] text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-lg active:scale-95"
                >
                  <MessageCircle size={20} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-secondary/20 relative overflow-hidden group hover:shadow-xl transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-secondary/10 rounded-3xl flex items-center justify-center text-secondary">
                    <Mail size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-gray-900">Email Inquiries</h3>
                    <p className="text-sm text-secondary font-bold uppercase tracking-widest">Official Channel</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  For detailed research inquiries, bulk order requests, or formal documentation, please reach out via email.
                </p>
                <div className="flex items-center gap-3 text-primary font-bold mb-8 p-4 bg-support rounded-2xl border border-gray-100">
                  <Mail size={18} className="text-secondary" />
                  <span>info@tesamorelinlab.co.uk</span>
                </div>
                <a
                  href="mailto:info@tesamorelinlab.co.uk"
                  className="w-full bg-secondary text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-lg active:scale-95"
                >
                  <Mail size={20} />
                  <span>Send an Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-12 md:p-16 rounded-[4rem] shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 text-support">
              <Clock size={120} />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-display font-bold text-primary mb-12">Submit a Request.</h2>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-widest px-2">Full Name</label>
                    <input
                      name="name"
                      required
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-6 py-4 bg-support rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-medium"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-widest px-2">Email Address</label>
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 bg-support rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold text-gray-600 uppercase tracking-widest px-2">Subject</label>
                  <select name="subject" className="w-full px-6 py-4 bg-support rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-medium appearance-none">
                    <option>Order Status Inquiry</option>
                    <option>Technical Product Question</option>
                    <option>Bulk Order Request</option>
                    <option>Payment Issue</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold text-gray-600 uppercase tracking-widest px-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="How can we help you today?"
                    className="w-full px-6 py-4 bg-support rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-medium resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className={cn(
                    'w-full py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 transition-all shadow-lg active:scale-95',
                    isSubmitted ? 'bg-green-500 text-white' : 'bg-primary text-white hover:bg-primary/90'
                  )}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle2 size={24} />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

              <div className="mt-12 flex items-center gap-4 p-6 bg-red-50 rounded-3xl border border-red-100">
                <AlertCircle className="text-red-500 flex-shrink-0" size={24} />
                <p className="text-xs text-red-700 leading-relaxed font-medium">
                  <strong>Security Note:</strong> We will never ask for your payment details or passwords via this form or email. All payments are handled through secure, verified channels provided by our team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
