import { Product, BlogPost } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'tirzepatide',
    name: 'Tirzepatide',
    slug: 'tirzepatide',
    category: 'Metabolic / GLP-1',
    description: 'High-purity Tirzepatide research peptide for laboratory studies. Dual GLP-1/GIP receptor agonist supporting advanced metabolic research in the UK.',
    image: '/tirzepatide.jpg',
    isBestSeller: true,
    variants: [
      { size: '5mg', price: 36.26 },
      { size: '10mg', price: 49.69 },
      { size: '15mg', price: 61.11 },
      { size: '20mg', price: 80.58 },
      { size: '30mg', price: 114.83 },
    ],
  },
  {
    id: 'semaglutide',
    name: 'Semaglutide',
    slug: 'semaglutide',
    category: 'Metabolic / GLP-1',
    description: 'Laboratory-grade Semaglutide peptide for metabolic and appetite regulation studies. High-purity GLP-1 receptor agonists for UK research.',
    image: '/semaglutide.jpeg',
    variants: [
      { size: '5mg', price: 30.22 },
      { size: '10mg', price: 43.65 },
      { size: '15mg', price: 55.06 },
      { size: '20mg', price: 72.52 },
    ],
  },
  {
    id: 'retatrutide',
    name: 'Retatrutide',
    slug: 'retatrutide',
    category: 'Advanced Metabolic',
    description: 'Next-generation Retatrutide research peptide. Triple agonist for advanced metabolic and obesity laboratory studies in the UK.',
    image: '/retatrutide.webp',
    variants: [
      { size: '5mg', price: 141.02 },
      { size: '10mg', price: 265.24 },
    ],
  },
  {
    id: 'cagrilintide',
    name: 'Cagrilintide',
    slug: 'cagrilintide',
    category: 'Appetite Control',
    description: 'High-purity Cagrilintide peptide for research. Investigate amylin analog effects on appetite regulation and satiety in laboratory settings.',
    image: '/Cagrilintide.webp',
    variants: [
      { size: '5mg', price: 80.58 },
      { size: '10mg', price: 141.02 },
    ],
  },
  {
    id: 'aod-9604',
    name: 'AOD-9604',
    slug: 'aod-9604',
    category: 'Metabolic Support',
    description: 'AOD-9604 research peptide for fat metabolism and lipolysis studies. Laboratory-grade anti-obesity drug derivatives in the UK.',
    image: '/AOD-9604.webp',
    variants: [
      { size: '5mg', price: 33.99 },
      { size: '10mg', price: 50.99 },
    ],
  },
  {
    id: 'tesamorelin',
    name: 'Tesamorelin',
    slug: 'tesamorelin',
    category: 'Metabolic / HGH',
    description: 'Tesamorelin peptide for research. High-purity GHRH analog for studying fat metabolism, body composition, and growth hormone release.',
    image: '/Tesamorelin.webp',
    variants: [
      { size: '2mg', price: 25.52 },
      { size: '5mg', price: 50.36 },
      { size: '10mg', price: 90.65 },
    ],
  },
  {
    id: 'ipamorelin',
    name: 'Ipamorelin',
    slug: 'ipamorelin',
    category: 'Growth Hormone',
    description: 'Laboratory-grade Ipamorelin peptide. Selective growth hormone secretagogue for anti-aging and recovery research studies.',
    image: '/Ipamorelin.webp',
    variants: [
      { size: '2mg', price: 14.77 },
      { size: '5mg', price: 24.17 },
      { size: '10mg', price: 43.65 },
    ],
  },
  {
    id: 'cjc-1295',
    name: 'CJC-1295',
    slug: 'cjc-1295',
    category: 'Growth Hormone',
    description: 'CJC-1295 research peptide. High-purity GHRH analog for studying sustained growth hormone release and metabolic function.',
    image: '/CJC-1295.webp',
    variants: [
      { size: '2mg', price: 18.80 },
      { size: '5mg', price: 32.23 },
    ],
  },
  {
    id: 'bpc-157',
    name: 'BPC-157',
    slug: 'bpc-157',
    category: 'Recovery / Healing',
    description: 'BPC-157 research peptide for tissue repair and healing studies. High-purity Body Protection Compound for UK laboratory research.',
    image: '/bpc-157.jpg',
    isBestSeller: true,
    variants: [
      { size: '2mg', price: 12.09 },
      { size: '5mg', price: 18.80 },
    ],
  },
  {
    id: 'tb500',
    name: 'TB500',
    slug: 'tb500',
    category: 'Recovery / Healing',
    description: 'TB500 (Thymosin Beta-4) peptide for research. Investigate muscle recovery, tissue healing, and cellular migration in laboratory models.',
    image: '/tb500.webp',
    variants: [
      { size: '2mg', price: 16.79 },
      { size: '5mg', price: 28.20 },
    ],
  },
  {
    id: 'igf-1-lr3',
    name: 'IGF-1 LR3',
    slug: 'igf-1-lr3',
    category: 'Muscle Growth',
    description: 'IGF-1 LR3 research peptide. High-purity Insulin-like Growth Factor 1 analog for studying muscle development and cellular hyperplasia.',
    image: '/igf-1-lr3.png',
    variants: [
      { size: '1mg', price: 147.73 },
    ],
  },
  {
    id: 'ghrp-2',
    name: 'GHRP-2',
    slug: 'ghrp-2',
    category: 'Growth Hormone',
    description: 'GHRP-2 research peptide. High-purity Growth Hormone Releasing Peptide for laboratory studies on hormone stimulation and appetite.',
    image: '/ghrp-2.jpg',
    variants: [
      { size: '5mg', price: 20.82 },
      { size: '10mg', price: 40.29 },
    ],
  },
  {
    id: 'ghrp-6',
    name: 'GHRP-6',
    slug: 'ghrp-6',
    category: 'Growth Hormone',
    description: 'Laboratory-grade GHRP-6 peptide. Investigate growth hormone release, appetite stimulation, and metabolic pathways in research models.',
    image: '/ghrp-6.webp',
    variants: [
      { size: '5mg', price: 20.82 },
      { size: '10mg', price: 40.29 },
    ],
  },
  {
    id: 'ghk-cu',
    name: 'GHK-Cu',
    slug: 'ghk-cu',
    category: 'Anti-Aging / Skin',
    description: 'GHK-Cu copper peptide for research. High-purity compound for studying skin health, collagen production, and tissue remodeling.',
    image: '/ghk-cu.png',
    variants: [
      { size: '50mg', price: 141.02 },
    ],
  },
  {
    id: 'epitalon',
    name: 'Epitalon',
    slug: 'epitalon',
    category: 'Longevity',
    description: 'Epitalon research peptide. Investigate telomerase activation, anti-aging, and cellular longevity in laboratory studies.',
    image: '/epitalon.jpg',
    variants: [
      { size: '10mg', price: 28.20 },
    ],
  },
  {
    id: 'hyaluronic-acid',
    name: 'Hyaluronic Acid',
    slug: 'hyaluronic-acid',
    category: 'Skin / Hydration',
    description: 'Laboratory-grade Hyaluronic Acid for research. High-purity compound for studying tissue hydration, joint health, and dermal applications.',
    image: '/hyaluronic-acid.webp',
    variants: [
      { size: '5mg', price: 172.58 },
    ],
  },
  {
    id: 'kisspeptin-10',
    name: 'Kisspeptin-10',
    slug: 'kisspeptin-10',
    category: 'Hormone Support',
    description: 'Kisspeptin-10 research peptide. High-purity compound for studying reproductive hormone signaling and neuroendocrine pathways.',
    image: '/kisspeptin-10.png',
    variants: [
      { size: '5mg', price: 36.93 },
    ],
  },
  {
    id: 'pt-141',
    name: 'PT-141',
    slug: 'pt-141',
    category: 'Wellness',
    description: 'PT-141 (Bremelanotide) research peptide. Investigate melanocortin receptor agonism and sexual dysfunction in laboratory models.',
    image: '/PT-141.png',
    variants: [
      { size: '10mg', price: 32.23 },
    ],
  },
  {
    id: 'thymosin-alpha-1',
    name: 'Thymosin Alpha-1',
    slug: 'thymosin-alpha-1',
    category: 'Immune Support',
    description: 'Thymosin Alpha-1 research peptide. High-purity compound for studying immune system modulation and T-cell function.',
    image: '/Thymosin-Alpha-1-10mg.webp',
    variants: [
      { size: '10mg', price: 63.79 },
    ],
  },
  {
    id: 'dsip',
    name: 'DSIP',
    slug: 'dsip',
    category: 'Sleep Support',
    description: 'DSIP (Delta Sleep-Inducing Peptide) for research. Investigate sleep regulation, stress response, and recovery cycles in laboratory models.',
    image: '/DSIP.webp',
    variants: [
      { size: '5mg', price: 25.52 },
    ],
  },
  {
    id: 'melanotan-ii',
    name: 'Melanotan II',
    slug: 'melanotan-ii',
    category: 'Tanning',
    description: 'Melanotan II research peptide. High-purity melanocortin analog for studying skin pigmentation and melanogenesis in the UK.',
    image: '/melanotan-ii.webp',
    variants: [
      { size: '10mg', price: 23.50 },
    ],
  },
  {
    id: 'alluvi-supplement-box',
    name: 'Alluvi Supplement Box',
    slug: 'alluvi-supplement-box',
    category: 'Wellness Bundles',
    description: 'A curated collection of premium wellness supplements designed to support your health, beauty, and vitality goals. The ultimate all-in-one routine support.',
    image: 'https://alluvistore.co.uk/wp-content/uploads/2026/02/alluvi-supplement-box-1-300x300.webp',
    variants: [
      { size: '1 Box', price: 97.00 },
    ],
  },
  {
    id: 'bpc-157-tb-500-40mg',
    name: 'BPC-157 & TB-500 40mg',
    slug: 'bpc-157-tb-500-40mg',
    category: 'Recovery / Healing',
    description: 'Advanced dual peptide blend containing BPC-157 and TB-500. Engineered for research precision in tissue repair and recovery studies.',
    image: 'https://alluvistore.co.uk/wp-content/uploads/2026/02/bpc-157-tb-500-40mg-r-d-only-1-300x300.png',
    variants: [
      { size: '40mg', price: 92.00 },
    ],
  },
  {
    id: 'glow-70mg',
    name: 'Glow 70mg (GHK-Cu)',
    slug: 'glow-70mg',
    category: 'Anti-Aging / Skin',
    description: 'High-concentration GHK-Cu copper peptide for advanced research into skin health, collagen production, and tissue remodeling.',
    image: 'https://alluvistore.co.uk/wp-content/uploads/2026/02/glow-70mg-r-d-only-1-300x300.jpg',
    variants: [
      { size: '70mg', price: 90.00 },
    ],
  },
  {
    id: 'nad-1000mg',
    name: 'NAD+ 1000mg',
    slug: 'nad-1000mg',
    category: 'Longevity / Energy',
    description: 'High-purity Nicotinamide Adenine Dinucleotide (NAD+) for advanced research into cellular energy, DNA repair, and longevity.',
    image: 'https://alluvistore.co.uk/wp-content/uploads/2026/02/nad-1-000mg-300x300.jpg',
    variants: [
      { size: '1000mg', price: 105.00 },
    ],
  },
  {
    id: 'protein-gummy-bites',
    name: 'Protein Gummy Bites',
    slug: 'protein-gummy-bites',
    category: 'Nutrition / Recovery',
    description: 'High-quality protein gummies designed for muscle support and recovery. A convenient and delicious way to support research into protein synthesis.',
    image: 'https://alluvistore.co.uk/wp-content/uploads/2026/02/protein-gummy-bites-300x300.webp',
    variants: [
      { size: '1 Pack', price: 90.00 },
    ],
  },
  {
    id: 'retatrutide-20mg-alluvi',
    name: 'Retatrutide 20mg',
    slug: 'retatrutide-20mg-alluvi',
    category: 'Advanced Metabolic',
    description: 'High-purity Retatrutide triple agonist for advanced metabolic research. 20mg concentration for precise laboratory applications.',
    image: 'https://alluvistore.co.uk/wp-content/uploads/2026/02/retatrutide-20mg-r-d-only-1-300x300.jpg',
    variants: [
      { size: '20mg', price: 119.00 },
    ],
  },
  {
    id: 'retatrutide-40mg-alluvi',
    name: 'Retatrutide 40mg',
    slug: 'retatrutide-40mg-alluvi',
    category: 'Advanced Metabolic',
    description: 'Premium research-grade Retatrutide 40mg. Maximum concentration for comprehensive metabolic studies.',
    image: 'https://alluvistore.co.uk/wp-content/uploads/2026/02/retatrutide-40mg-r-d-only-300x300.jpg',
    variants: [
      { size: '40mg', price: 125.00 },
    ],
  },
  {
    id: 'tirzepatide-20mg-alluvi',
    name: 'Tirzepatide 20mg',
    slug: 'tirzepatide-20mg-alluvi',
    category: 'Metabolic / GLP-1',
    description: 'High-purity Tirzepatide 20mg dual agonist for advanced metabolic research. Ideal for studying GIP/GLP-1 receptor pathways.',
    image: 'https://alluvistore.co.uk/wp-content/uploads/2026/02/tirzepatide-20mg-r-d-only-300x300.jpg',
    variants: [
      { size: '20mg', price: 90.00 },
    ],
  },
  {
    id: 'tirzepatide-40mg-alluvi',
    name: 'Tirzepatide 40mg',
    slug: 'tirzepatide-40mg-alluvi',
    category: 'Metabolic / GLP-1',
    description: 'Premium Tirzepatide 40mg research peptide. High-concentration dual agonist for comprehensive metabolic and obesity research.',
    image: 'https://alluvistore.co.uk/wp-content/uploads/2026/02/tirzepatide-40mg-r-d-only-300x300.jpg',
    variants: [
      { size: '40mg', price: 101.00 },
    ],
  },
];


export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Sourcing Tirzepatide in the UK',
    slug: 'sourcing-tirzepatide-uk',
    category: 'Research Guide',
    author: 'Medical Team',
    date: 'April 7, 2026',
    excerpt: 'A comprehensive guide on finding reliable research peptide suppliers in the UK.',
    image: '/blog-tirzepatide-uk.webp',
    content: `
      <p>Sourcing high-purity research peptides in the United Kingdom requires careful consideration of laboratory standards, third-party testing, and supplier reliability. Among the most sought-after compounds in contemporary metabolic research is Tirzepatide, a dual GIP and GLP-1 receptor agonist that has demonstrated profound effects on energy expenditure and metabolic regulation in clinical models.</p>

      <h2 class="text-3xl font-display font-bold text-primary mt-12 mb-6">Understanding Tirzepatide in a Research Context</h2>
      <p>Tirzepatide represents a significant advancement in peptide engineering. By agonizing both the glucose-dependent insulinotropic polypeptide (GIP) and glucagon-like peptide-1 (GLP-1) receptors, it offers a synergistic approach to metabolic regulation. Researchers in the UK are increasingly utilizing this compound to study its impact on glycemic control, lipid metabolism, and adipocyte function.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
        <div class="p-8 bg-primary text-white rounded-[2.5rem] shadow-xl">
          <h4 class="text-xl font-display font-bold mb-4">Purity is Paramount</h4>
          <p class="text-white/70 text-sm leading-relaxed">
            When conducting sensitive in vitro or in vivo studies, the presence of impurities or truncated sequences can severely skew data. Always demand a Certificate of Analysis (CoA) demonstrating >99% purity via HPLC.
          </p>
        </div>
        <div class="p-8 bg-secondary text-white rounded-[2.5rem] shadow-xl">
          <h4 class="text-xl font-display font-bold mb-4">Storage Protocol</h4>
          <p class="text-white/70 text-sm leading-relaxed">
            Lyophilized Tirzepatide should be stored at -20°C for long-term stability. Once reconstituted with bacteriostatic water, it must be kept refrigerated between 2°C and 8°C.
          </p>
        </div>
      </div>

      <h2 class="text-3xl font-display font-bold text-primary mt-12 mb-6">Key Factors When Choosing a UK Supplier</h2>
      <p>Not all peptide suppliers operate with the same level of scientific rigor. When looking to source Tirzepatide in the UK for laboratory use, consider the following criteria:</p>
      <ul class="list-disc pl-6 space-y-4 mt-4">
        <li><strong>Third-Party Lab Testing:</strong> The supplier must provide independent High-Performance Liquid Chromatography (HPLC) and Mass Spectrometry (MS) results for every batch.</li>
        <li><strong>Cold Chain Logistics:</strong> Peptides are sensitive to temperature fluctuations. Ensure the supplier utilizes appropriate packaging to maintain compound integrity during transit.</li>
        <li><strong>Domestic Shipping:</strong> Sourcing domestically within the UK minimizes transit times and avoids potential customs delays that could compromise the peptide's stability.</li>
      </ul>

      <blockquote class="border-l-8 border-secondary pl-8 py-4 my-12 bg-support rounded-r-3xl">
        <p class="text-2xl font-display font-bold text-primary italic">
          "The integrity of your research data is directly proportional to the quality of your raw materials. Never compromise on peptide purity."
        </p>
      </blockquote>

      <p>At Tesamorelin Peptide, we pride ourselves on supplying the UK research community with the highest grade Tirzepatide available. Our compounds undergo rigorous testing to ensure they meet the exacting standards required for advanced scientific inquiry.</p>
    `,
  },
  {
    id: '2',
    title: 'Tirzepatide vs Semaglutide: Which is right for your research?',
    slug: 'tirzepatide-vs-semaglutide-uk',
    category: 'Research',
    author: 'Research Dept',
    date: 'April 5, 2026',
    excerpt: 'Comparing the two most popular GLP-1 agonists for metabolic studies.',
    image: '/blog-tirzepatide-vs-semaglutide.jpg',
    content: `
      <p>The landscape of metabolic research has been revolutionized by the development of incretin mimetics. For laboratories investigating obesity models, glycemic control, and metabolic syndrome, two compounds frequently dominate the discussion: Semaglutide and Tirzepatide. While both have shown remarkable efficacy in modulating metabolic pathways, their mechanisms of action differ significantly.</p>

      <h2 class="text-3xl font-display font-bold text-primary mt-12 mb-6">Mechanism of Action: Single vs. Dual Agonism</h2>
      <p>The fundamental difference between these two peptides lies in their receptor targets. <strong>Semaglutide</strong> is a potent, long-acting GLP-1 (glucagon-like peptide-1) receptor agonist. It functions primarily by enhancing glucose-dependent insulin secretion, suppressing inappropriate glucagon release, and slowing gastric emptying.</p>

      <p><strong>Tirzepatide</strong>, on the other hand, is a "twincretin"—a dual agonist that targets both the GLP-1 receptor and the GIP (glucose-dependent insulinotropic polypeptide) receptor. This dual action creates a synergistic effect that researchers are keenly studying for its potential to yield more profound metabolic shifts than GLP-1 agonism alone.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
        <div class="p-8 bg-primary text-white rounded-[2.5rem] shadow-xl">
          <h4 class="text-xl font-display font-bold mb-4">Semaglutide Profile</h4>
          <p class="text-white/70 text-sm leading-relaxed">
            Highly specific GLP-1 receptor agonist. Excellent for isolating the effects of GLP-1 pathways on appetite regulation and pancreatic beta-cell function.
          </p>
        </div>
        <div class="p-8 bg-secondary text-white rounded-[2.5rem] shadow-xl">
          <h4 class="text-xl font-display font-bold mb-4">Tirzepatide Profile</h4>
          <p class="text-white/70 text-sm leading-relaxed">
            Dual GIP/GLP-1 agonist. Ideal for complex metabolic studies examining the synergistic effects of incretin hormones on lipid metabolism and energy expenditure.
          </p>
        </div>
      </div>

      <h2 class="text-3xl font-display font-bold text-primary mt-12 mb-6">Choosing the Right Compound for Your Study</h2>
      <p>When designing an experimental protocol, the choice between Semaglutide and Tirzepatide depends entirely on the specific variables being investigated:</p>
      <ul class="list-disc pl-6 space-y-4 mt-4">
        <li><strong>Isolating Variables:</strong> If your research aims to map the specific downstream effects of GLP-1 receptor activation without confounding variables, Semaglutide is the logical choice.</li>
        <li><strong>Synergistic Metabolism:</strong> If your study focuses on maximizing metabolic output, lipid oxidation, or investigating the interplay between different incretin receptors, Tirzepatide provides a more comprehensive model.</li>
      </ul>

      <blockquote class="border-l-8 border-secondary pl-8 py-4 my-12 bg-support rounded-r-3xl">
        <p class="text-2xl font-display font-bold text-primary italic">
          "The evolution from single to dual incretin agonism represents a paradigm shift in how we approach metabolic research."
        </p>
      </blockquote>

      <p>Both compounds require meticulous handling, precise reconstitution, and strict temperature control to maintain their structural integrity. Whether your laboratory requires Semaglutide or Tirzepatide, Tesamorelin Peptide provides laboratory-grade, HPLC-verified peptides to ensure the accuracy and reproducibility of your research data.</p>
    `,
  },
];


export const FAQS = [
  {
    question: 'How do I place an order?',
    answer: 'You can add items to your order builder and then send the order via WhatsApp or Email. Our team will then provide payment instructions.',
    category: 'Ordering',
  },
  {
    question: 'What are the shipping times?',
    answer: 'We offer next-day delivery for all UK orders placed before 2 PM.',
    category: 'Shipping',
  },
  {
    question: 'Are your products for human consumption?',
    answer: 'Yes, we do. Our products are intended for human consumption.',
    category: 'Legal',
  },
];
