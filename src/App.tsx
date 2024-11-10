import React, { useState } from 'react';
import { 
  Wand2, 
  X,
  ChevronDown,
  ChevronUp,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Search,
  TrendingUp,
  Target
} from 'lucide-react';
import { ExitIntentPopup } from './components/ExitIntentPopup';
import { useExitIntent } from './hooks/useExitIntent';

function App() {
  const [keywords1, setKeywords1] = useState('');
  const [keywords2, setKeywords2] = useState('');
  const [result, setResult] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { showExitIntent, setShowExitIntent } = useExitIntent(2000); // 2 second delay

  const combineKeywords = () => {
    const list1 = keywords1.split('\n').filter(k => k.trim());
    const list2 = keywords2.split('\n').filter(k => k.trim());
    
    const combinations = list1.flatMap(k1 => 
      list2.map(k2 => `${k1.trim()} ${k2.trim()}`)
    );
    
    setResult(combinations);
  };

  const features = [
    {
      icon: <Search className="h-8 w-8 text-blue-600" />,
      title: "Unlimited Keyword Combinations",
      description: "Generate thousands of keyword combinations instantly with our free tool. Perfect for content creators and SEO professionals."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: "SEO-Optimized Results",
      description: "Discover long-tail keywords that can help you rank higher in search results and attract more targeted traffic."
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Target Multiple Keywords",
      description: "Expand your keyword research by combining multiple seed keywords to find untapped opportunities."
    }
  ];

  const benefits = [
    "Save hours of manual keyword research time",
    "Discover new content opportunities",
    "Find low-competition keywords",
    "Improve your SEO strategy",
    "Generate content ideas quickly",
    "Identify valuable long-tail keywords"
  ];

  const faqs = [
    {
      q: "What is the Free Keyword Combiner Tool?",
      a: "The Free Keyword Combiner Tool is a powerful SEO utility that helps you generate multiple keyword combinations by combining two lists of keywords. It's designed for content creators, digital marketers, and SEO professionals who want to discover new keyword opportunities and expand their content strategy."
    },
    {
      q: "How do I use the Free Keyword Combiner Tool?",
      a: "Using our free tool is simple: 1) Enter your first list of keywords in the left box, 2) Add your second list in the right box, 3) Click 'Combine Keywords' to generate all possible combinations. Each keyword should be on a new line for best results."
    },
    {
      q: "Why should I use a keyword combination tool?",
      a: "A keyword combination tool helps you discover valuable long-tail keywords that your competitors might miss. It's essential for comprehensive keyword research, content planning, and identifying new SEO opportunities that can drive more targeted traffic to your website."
    },
    {
      q: "Is this keyword combiner tool really free?",
      a: "Yes! Our keyword combiner tool is completely free to use with no limitations. You can generate as many keyword combinations as you need without any cost."
    },
    {
      q: "Can I export the combined keywords?",
      a: "Yes! You can easily copy all the generated keyword combinations from the results box and paste them into your preferred SEO tool, spreadsheet, or content planning document."
    }
  ];

  const CTAButton = () => (
    <a
      href="https://go.juliangoldie.com/strategy-session"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
    >
      Book Your Free SEO Strategy Session <ArrowRight className="ml-2 h-5 w-5" />
    </a>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <ExitIntentPopup isOpen={showExitIntent} onClose={() => setShowExitIntent(false)} />
      
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full relative">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="text-center">
              <Calendar className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h2 className="text-2xl font-bold mb-3">Want to 10x Your SEO Results?</h2>
              <p className="mb-6 text-gray-600">Book a free SEO strategy session with me, Julian Goldie, and let's unlock your website's true potential!</p>
              <CTAButton />
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <CTAButton />
          </div>
          <h1 className="text-5xl font-bold mb-6">Free Keyword Combiner Tool</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Generate powerful keyword combinations instantly with our free SEO tool. Perfect for content creators, digital marketers, and SEO professionals looking to discover new ranking opportunities.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First List of Keywords
              </label>
              <textarea
                className="w-full h-40 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter keywords (one per line)"
                value={keywords1}
                onChange={(e) => setKeywords1(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Second List of Keywords
              </label>
              <textarea
                className="w-full h-40 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter keywords (one per line)"
                value={keywords2}
                onChange={(e) => setKeywords2(e.target.value)}
              />
            </div>
          </div>
          <button
            onClick={combineKeywords}
            className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            <Wand2 className="mr-2 h-5 w-5" />
            Combine Keywords
          </button>
          {result.length > 0 && (
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Combined Keywords ({result.length} combinations)
              </label>
              <textarea
                className="w-full h-40 p-3 border rounded-lg"
                readOnly
                value={result.join('\n')}
              />
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Use Our Free Keyword Combiner Tool?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="prose max-w-none mb-16">
          <h2 className="text-3xl font-bold mb-6">How to Use the Free Keyword Combiner Tool</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <ol className="list-decimal pl-6 space-y-4 text-gray-700">
              <li className="text-lg">Enter your primary keywords in the first box (one per line)</li>
              <li className="text-lg">Add your secondary keywords in the second box (one per line)</li>
              <li className="text-lg">Click the "Combine Keywords" button to generate all possible combinations</li>
              <li className="text-lg">Copy your new keyword combinations from the results box</li>
              <li className="text-lg">Use these combinations for your content strategy and SEO campaigns</li>
            </ol>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg bg-white">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold">{faq.q}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-gray-50">
                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your SEO Strategy?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to create an SEO strategy that drives real results for your business. Book your free strategy session today!
          </p>
          <a
            href="https://go.juliangoldie.com/strategy-session"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-100 transition-colors"
          >
            Book Your Free SEO Strategy Session <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12 prose prose-lg">
          <h2 className="text-3xl font-bold mb-6">Why Our Free Keyword Combiner Tool is Your Secret Weapon for SEO Success</h2>
          
          <p className="mb-4">
            Let's talk about why the Free Keyword Combiner Tool is absolutely crushing it right now. I've spent millions on SEO, and I'll tell you straight up - most people overcomplicate this stuff.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">The Real Cost of Not Using a Free Keyword Combiner Tool</h3>
          
          <p className="mb-4">
            Here's the deal - I see businesses burning cash on fancy SEO tools when our Free Keyword Combiner Tool could save them thousands. Want to know something wild? The average business spends £2,000-£10,000 monthly on SEO tools.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h4 className="text-xl font-bold mb-4">Quick Math: SEO Tool Costs vs Free Keyword Combiner Tool</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Premium SEO Tools: £200-500/month</li>
              <li>Keyword Research Tools: £100-300/month</li>
              <li>Our Free Keyword Combiner Tool: £0/month</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">How I Used the Free Keyword Combiner Tool to 10x My Traffic</h3>

          <p className="mb-4">
            Look, I'll keep it real with you. When I started using the Free Keyword Combiner Tool for my own sites, I discovered something most "gurus" won't tell you: The money is in the long-tail combinations.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h4 className="text-xl font-bold mb-4">Real Results Using Our Free Keyword Combiner Tool:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Found 300+ untapped keyword combinations</li>
              <li>Increased organic traffic by 312% in 3 months</li>
              <li>Reduced keyword research time by 80%</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">The Free Keyword Combiner Tool Strategy I Use Daily</h3>

          <ol className="list-decimal pl-6 space-y-4 mb-8">
            <li>Start with your main money keywords</li>
            <li>Add modifiers like "best", "top", "review" in the second box</li>
            <li>Use the Free Keyword Combiner Tool to generate combinations</li>
            <li>Filter for gems with high intent, low competition</li>
            <li>Create content clusters around these combinations</li>
          </ol>

          <h3 className="text-2xl font-bold mt-8 mb-4">Advanced Free Keyword Combiner Tool FAQs</h3>

          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold mb-2">Can the Free Keyword Combiner Tool replace paid SEO tools?</h4>
              <p>For keyword research? Often, yes. I've built seven-figure businesses using simple tools like our Free Keyword Combiner Tool combined with free Google tools.</p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-2">How does the Free Keyword Combiner Tool impact my SEO budget?</h4>
              <p>It's simple math - every pound you're not spending on expensive tools is a pound you can invest in content creation or link building.</p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-2">What's the best way to use the Free Keyword Combiner Tool for local SEO?</h4>
              <p>Add location modifiers in one box and your services in another. The Free Keyword Combiner Tool will create all possible local SEO combinations.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-lg mt-8 mb-8">
            <h4 className="text-xl font-bold mb-4">Pro Tip: Free Keyword Combiner Tool Power User Strategy</h4>
            <p>
              Here's what the top 1% of SEOs do with our Free Keyword Combiner Tool that others miss: They use it to find question-based keywords. Put question words in one box (how, why, what, where) and your topic in another. Game changer for featured snippets.
            </p>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">The Bottom Line on the Free Keyword Combiner Tool</h3>

          <p className="mb-4">
            Listen, I could charge for this Free Keyword Combiner Tool. But here's why I don't: When you win with SEO, we all win. The internet needs better content, and this tool helps make that happen.
          </p>

          <p className="mb-4">
            Ready to stop overthinking SEO and start seeing results? The Free Keyword Combiner Tool is your first step. No fluff, no complexity - just pure SEO leverage at your fingertips.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;