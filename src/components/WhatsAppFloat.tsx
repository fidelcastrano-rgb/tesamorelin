import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/447341056054"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-3 group"
    >
      <MessageCircle size={24} />
      <span className="font-bold text-sm hidden md:block group-hover:mr-2 transition-all">
        Chat with us
      </span>
    </a>
  );
}
