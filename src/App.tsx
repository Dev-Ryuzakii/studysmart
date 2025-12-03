import { useState } from 'react'
import {
  Menu,
  X,
  ClipboardList,
  Brain,
  Gamepad2,
  Users,
  TrendingDown,
  XCircle,
  TrendingUp,
  GraduationCap,
  Target,
  Globe,
  Rocket,
  Star,
  BookOpen,
  School,
  Check,
  ArrowRight
} from 'lucide-react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-sky-600 bg-clip-text text-transparent">
                SmartStudy
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-sky-500 transition">Home</a>
              <a href="#features" className="text-gray-700 hover:text-sky-500 transition">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-sky-500 transition">How It Works</a>
              <a href="#pricing" className="text-gray-700 hover:text-sky-500 transition">Pricing</a>
              <a href="#schools" className="text-gray-700 hover:text-sky-500 transition">For Schools</a>
            </div>
            <div className="hidden md:block">
              <button className="px-4 py-2 text-sky-600 hover:text-sky-700 font-medium">
                Sign In
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-lg hover:shadow-lg transition">
                Get Started
              </button>
            </div>
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <a href="#home" className="block py-2 text-gray-700">Home</a>
              <a href="#features" className="block py-2 text-gray-700">Features</a>
              <a href="#how-it-works" className="block py-2 text-gray-700">How It Works</a>
              <a href="#pricing" className="block py-2 text-gray-700">Pricing</a>
              <a href="#schools" className="block py-2 text-gray-700">For Schools</a>
              <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-lg">
                Get Started
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-50 via-white to-sky-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-sky-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-sky-500 to-sky-600 bg-clip-text text-transparent">
            Study Smarter, Not Harder
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto font-medium">
            AI-powered learning platform designed to help students overcome academic challenges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-lg text-lg font-semibold hover:shadow-2xl transition transform hover:-translate-y-1 hover:scale-105">
              Start Learning Free
            </button>
            <button className="px-8 py-4 bg-white text-sky-600 border-2 border-sky-500 rounded-lg text-lg font-semibold hover:bg-sky-50 transition transform hover:-translate-y-1">
              See How It Works
        </button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            The Student Struggle is Real
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 rounded-xl p-8 border border-red-100">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-bold text-gray-900">Common Challenges</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Poor study habits & time management</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Difficulty understanding complex topics</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Lack of personalized academic support</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Low motivation and engagement</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">One-size-fits-all learning methods</span>
                </li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded-xl p-8 border border-orange-100">
              <div className="flex items-center gap-3 mb-6">
                <TrendingDown className="w-8 h-8 text-orange-500" />
                <h3 className="text-2xl font-bold text-gray-900">Negative Outcomes</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <TrendingDown className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Poor academic performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingDown className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">High exam failure rates</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingDown className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Stress, anxiety & loss of confidence</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingDown className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Dropping interest in learning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Introducing SmartStudy HUB
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              An AI-powered digital learning platform that personalizes your learning experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                <ClipboardList className="w-6 h-6 text-sky-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Study Plans</h3>
              <p className="text-gray-600">
                AI-generated plans tailored to your pace, schedule, and performance
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-sky-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI Study Assistant</h3>
              <p className="text-gray-600">
                Simplifies complex topics into easy language and generates custom materials
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Gamepad2 className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Tools</h3>
              <p className="text-gray-600">
                Quizzes, flashcards, and progress tracking to boost engagement
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Peer Learning</h3>
              <p className="text-gray-600">
                Collaborate with other students and learn together
        </p>
      </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            How SmartStudy Works
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: 1, title: "Sign Up & Select Subjects", description: "Create your account and choose your academic subjects" },
              { step: 2, title: "Assessment", description: "Platform evaluates your learning needs and current level" },
              { step: 3, title: "Personalized Plan", description: "AI generates your customized study plan" },
              { step: 4, title: "Smart Learning", description: "Study using AI tools, quizzes, and collaborative features" },
              { step: 5, title: "Track & Improve", description: "Monitor progress and get continuous optimization" }
            ].map((item, index) => (
              <div key={item.step} className="relative">
                <div className="bg-gradient-to-br from-sky-50 to-white rounded-xl p-6 text-center h-full border-2 border-sky-100 hover:border-sky-300 transition">
                  <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                {index < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-sky-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose SmartStudy?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Personalized learning, not generic content",
              "AI-driven study assistance that simplifies complex topics",
              "Mobile-first & low-data design for accessibility",
              "Peer learning integration for collaboration",
              "Affordable & scalable solution"
            ].map((point, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md flex items-start gap-4">
                <Star className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700 font-medium">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Built For Every Learner
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: GraduationCap, group: "University Students", description: "Advanced learning tools for higher education", bgColor: "bg-sky-100", iconColor: "text-sky-500" },
              { icon: BookOpen, group: "Secondary School Students", description: "Foundational support for exam preparation", bgColor: "bg-emerald-100", iconColor: "text-emerald-500" },
              { icon: School, group: "Educational Institutions", description: "Institutional licensing with performance dashboards", bgColor: "bg-sky-100", iconColor: "text-sky-500" },
              { icon: Globe, group: "Nigerian & African Learners", description: "Localized content and affordable pricing", bgColor: "bg-orange-100", iconColor: "text-orange-500" }
            ].map((audience, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition">
                <div className={`w-12 h-12 ${audience.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <audience.icon className={`w-6 h-6 ${audience.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{audience.group}</h3>
                <p className="text-gray-600">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600">Start free, upgrade when ready</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Free",
                price: "$0",
                period: "forever",
                features: [
                  "Basic study plans",
                  "Limited quizzes",
                  "Community access",
                  "Standard progress tracking"
                ],
                cta: "Get Started"
              },
              {
                name: "Premium",
                price: "$9",
                period: "month",
                highlighted: true,
                features: [
                  "Advanced AI Study Assistant",
                  "Unlimited quizzes & flashcards",
                  "Personalized analytics & insights",
                  "Priority support",
                  "Offline access"
                ],
                cta: "Go Premium"
              },
              {
                name: "Institutional",
                price: "Custom",
                period: "per institution",
                features: [
                  "School-wide access",
                  "Performance dashboards",
                  "Custom content integration",
                  "Dedicated support",
                  "API access"
                ],
                cta: "Contact Sales"
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-8 shadow-lg ${plan.highlighted ? 'border-4 border-sky-500 transform scale-105' : 'border border-gray-200'} hover:shadow-xl transition`}
              >
                {plan.highlighted && (
                  <div className="bg-gradient-to-r from-sky-500 to-sky-600 text-white text-center py-1 rounded-full text-sm font-semibold mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-sky-500 to-sky-600 text-white hover:shadow-lg'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            The SmartStudy Impact
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { icon: TrendingUp, text: "Improved academic performance" },
              { icon: GraduationCap, text: "Better self-learning habits" },
              { icon: Target, text: "Increased engagement & motivation" },
              { icon: Globe, text: "Inclusive access to learning support" },
              { icon: Rocket, text: "Students prepared for digital futures" }
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-700 font-medium">{metric.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitors Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-sky-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
            What Makes Us Different
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            While competitors like Kami and Docedo offer similar tools, SmartStudy focuses on:
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Simplifying complex topics with student-friendly explanations",
              "Boosting engagement through interactive quizzes and challenges",
              "Fostering collaboration with peer learning features",
              "Designed specifically for African learners' needs"
            ].map((point, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md flex items-start gap-4">
                <Star className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-500 to-sky-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Study Smarter?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of students achieving more with SmartStudy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-sky-600 border-2 border-white rounded-lg text-lg font-semibold hover:bg-sky-50 transition transform hover:-translate-y-1">
              Start Your Free Trial
            </button>
            <button className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg text-lg font-semibold hover:bg-white/10 transition">
              Book a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-sky-600 bg-clip-text text-transparent">
                SmartStudy
              </span>
              <p className="mt-4 text-gray-400">
                Learn Smart. Achieve More.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-white transition">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">API</a></li>
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 SmartStudy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
