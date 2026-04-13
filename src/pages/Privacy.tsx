export default function Privacy() {
  return (
    <div className="pt-32 pb-32 min-h-screen bg-support">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-12 md:p-20 rounded-[4rem] shadow-xl border border-gray-100">
          <h1 className="text-5xl font-display font-bold text-primary mb-12">Privacy Policy.</h1>
          <div className="prose prose-lg prose-primary max-w-none text-gray-600 leading-relaxed space-y-8">
            <section>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">1. Data Collection</h2>
              <p>We collect minimal data necessary to process your research inquiries and orders. This includes your name, email, and shipping address provided during the ordering process.</p>
            </section>
            <section>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">2. Data Usage</h2>
              <p>Your data is used solely for order fulfillment and communication regarding your inquiries. We do not sell or share your data with third-party marketing companies.</p>
            </section>
            <section>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">3. Security</h2>
              <p>We implement industry-standard security measures to protect your information. All communications are handled through encrypted channels.</p>
            </section>
            <section>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">4. Cookies</h2>
              <p>Our website uses essential cookies to manage your order builder and site preferences. No tracking or advertising cookies are used.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
