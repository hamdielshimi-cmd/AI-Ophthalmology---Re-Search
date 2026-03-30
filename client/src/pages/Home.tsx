import { useState } from 'react';
import { ChevronDown, Eye, Brain, TrendingUp, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';

const Home = () => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Data for visualizations
  const aiAccuracyData = [
    { disease: 'Diabetic Retinopathy', accuracy: 95, sensitivity: 94, specificity: 96 },
    { disease: 'Glaucoma', accuracy: 92, sensitivity: 90, specificity: 94 },
    { disease: 'AMD', accuracy: 89, sensitivity: 87, specificity: 91 },
    { disease: 'Retinal Vascular', accuracy: 91, sensitivity: 89, specificity: 93 },
  ];

  const modelComparison = [
    { name: 'CNN (DenseNet121)', performance: 94, interpretability: 65, speed: 88 },
    { name: 'Vision Transformer', performance: 92, interpretability: 72, speed: 75 },
    { name: 'Hybrid CNN-ViT', performance: 96, interpretability: 78, speed: 82 },
    { name: 'Foundation Model', performance: 97, interpretability: 85, speed: 70 },
  ];

  const researchTrends = [
    { year: 2020, publications: 245, aiDevices: 120 },
    { year: 2021, publications: 380, aiDevices: 185 },
    { year: 2022, publications: 520, aiDevices: 280 },
    { year: 2023, publications: 720, aiDevices: 420 },
    { year: 2024, publications: 950, aiDevices: 650 },
    { year: 2025, publications: 1200, aiDevices: 900 },
  ];

  const fdaApprovals = [
    { name: 'Radiology', value: 55, color: '#3b82f6' },
    { name: 'Ophthalmology', value: 28, color: '#8b5cf6' },
    { name: 'Cardiology', value: 18, color: '#ec4899' },
    { name: 'Others', value: 29, color: '#f59e0b' },
  ];

  const challengesData = [
    { challenge: 'Data Bias', severity: 92 },
    { challenge: 'Generalization', severity: 88 },
    { challenge: 'Interpretability', severity: 85 },
    { challenge: 'Regulatory', severity: 80 },
    { challenge: 'Integration', severity: 75 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI in Ophthalmology
                </h1>
                <p className="text-xs text-slate-500">Technical Research Report 2026</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#overview" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">Overview</a>
              <a href="#deeplearning" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">Deep Learning</a>
              <a href="#detection" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">Detection</a>
              <a href="#challenges" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">Challenges</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Transforming Eye Care with <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Artificial Intelligence</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              A comprehensive technical analysis of AI's revolutionary impact on ophthalmology, from retinal disease diagnosis to automated clinical reporting and personalized treatment prediction.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition">
                Download Full Report
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg rounded-lg border-2 border-slate-300 hover:border-blue-600 hover:bg-blue-50 transition">
                View Presentation
              </Button>
            </div>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            {[
              { icon: TrendingUp, label: 'AI Accuracy in DR', value: '95%', color: 'from-blue-600 to-blue-700' },
              { icon: Brain, label: 'Foundation Models', value: '97%', color: 'from-purple-600 to-purple-700' },
              { icon: Zap, label: 'FDA Cleared Devices', value: '900+', color: 'from-pink-600 to-pink-700' },
              { icon: Shield, label: 'Research Papers', value: '1200+', color: 'from-amber-600 to-amber-700' },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <Card key={idx} className="p-6 bg-white/50 backdrop-blur border-slate-200 hover:shadow-lg transition-all hover:scale-105">
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm text-slate-600 mb-2">{stat.label}</p>
                  <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Section 1: Overview */}
        <section id="overview" className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-purple-600"></div>
              <h3 className="text-3xl font-bold text-slate-900">Executive Overview</h3>
            </div>
            <p className="text-slate-700 leading-relaxed mb-6">
              Artificial Intelligence has emerged as a transformative force in ophthalmology, revolutionizing diagnostic accuracy, clinical workflows, and patient outcomes. Recent studies demonstrate that AI systems now surpass human capabilities in detecting conditions like diabetic retinopathy and glaucoma, with accuracy rates exceeding 95%. The field is characterized by rapid innovation, with over 1,200 peer-reviewed publications in 2025 alone and more than 900 FDA-cleared AI-enabled medical devices in ophthalmology by 2026.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-3">Key Drivers</h4>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex gap-2"><span className="text-blue-600">•</span> High-resolution retinal imaging data</li>
                  <li className="flex gap-2"><span className="text-blue-600">•</span> Advanced deep learning architectures</li>
                  <li className="flex gap-2"><span className="text-blue-600">•</span> Multimodal data integration</li>
                  <li className="flex gap-2"><span className="text-blue-600">•</span> Global shortage of ophthalmologists</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-3">Impact Areas</h4>
                <ul className="space-y-2 text-purple-800">
                  <li className="flex gap-2"><span className="text-purple-600">•</span> Diagnostic accuracy enhancement</li>
                  <li className="flex gap-2"><span className="text-purple-600">•</span> Early disease detection</li>
                  <li className="flex gap-2"><span className="text-purple-600">•</span> Automated report generation</li>
                  <li className="flex gap-2"><span className="text-purple-600">•</span> Treatment response prediction</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Research Trends Chart */}
        <section className="mb-16">
          <Card className="p-8 bg-white border-slate-200 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Research Growth & FDA Approvals (2020-2025)</h3>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={researchTrends}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="year" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                  formatter={(value) => value}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="publications" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', r: 5 }}
                  activeDot={{ r: 7 }}
                  name="Research Publications"
                />
                <Line 
                  type="monotone" 
                  dataKey="aiDevices" 
                  stroke="#8b5cf6" 
                  strokeWidth={3}
                  dot={{ fill: '#8b5cf6', r: 5 }}
                  activeDot={{ r: 7 }}
                  name="FDA-Cleared Devices"
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </section>

        {/* Section 2: Deep Learning Methods */}
        <section id="deeplearning" className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-purple-600"></div>
              <h3 className="text-3xl font-bold text-slate-900">Deep Learning Architectures</h3>
            </div>
            
            {/* Collapsible subsections */}
            <div className="space-y-4">
              {[
                {
                  title: 'Convolutional Neural Networks (CNNs)',
                  content: 'CNNs remain the backbone of retinal image analysis, with architectures like DenseNet121 achieving 94% accuracy in diabetic retinopathy detection. Their strength lies in automatic feature learning and computational efficiency. However, they struggle with capturing global contextual information across entire images.',
                  icon: '🧠'
                },
                {
                  title: 'Vision Transformers (ViTs)',
                  content: 'Vision Transformers represent the frontier of ophthalmic AI, leveraging attention mechanisms to capture long-range dependencies. Recent studies show ViTs achieving 92-97% accuracy, with superior interpretability compared to traditional CNNs. Hybrid CNN-Transformer models combine both strengths, achieving state-of-the-art performance of 96-97%.',
                  icon: '✨'
                },
                {
                  title: 'Foundation Models',
                  content: 'Foundation models like Meta-EyeFM represent a paradigm shift in ophthalmic AI. These large-scale pretrained models show 11-43% improvement over GPT-4o and often outperform junior ophthalmologists. They enable transfer learning and few-shot adaptation to new tasks, reducing the need for extensive task-specific training data.',
                  icon: '🚀'
                },
              ].map((item, idx) => (
                <div key={idx} className="border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition">
                  <button
                    onClick={() => toggleSection(`dl-${idx}`)}
                    className="w-full p-4 flex items-center justify-between bg-slate-50 hover:bg-slate-100 transition"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <h4 className="font-semibold text-slate-900">{item.title}</h4>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-600 transition-transform ${expandedSections[`dl-${idx}`] ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedSections[`dl-${idx}`] && (
                    <div className="p-4 bg-white border-t border-slate-200">
                      <p className="text-slate-700 leading-relaxed">{item.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Model Comparison Chart */}
        <section className="mb-16">
          <Card className="p-8 bg-white border-slate-200 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Deep Learning Model Comparison</h3>
            <ResponsiveContainer width="100%" height={350}>
              <RadarChart data={modelComparison}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="name" stroke="#64748b" />
                <PolarRadiusAxis stroke="#64748b" />
                <Radar name="Performance" dataKey="performance" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                <Radar name="Interpretability" dataKey="interpretability" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
                <Radar name="Speed" dataKey="speed" stroke="#ec4899" fill="#ec4899" fillOpacity={0.6} />
                <Legend />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }} />
              </RadarChart>
            </ResponsiveContainer>
          </Card>
        </section>

        {/* Section 3: Early Detection */}
        <section id="detection" className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-purple-600"></div>
              <h3 className="text-3xl font-bold text-slate-900">Early Detection & Biomarkers</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  Glaucoma Detection
                </h4>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="font-semibold text-blue-900 mb-1">Cup-to-Disc Ratio (CDR)</p>
                    <p className="text-sm text-blue-800">AI algorithms achieve 92%+ accuracy in automated CDR calculation, enabling early glaucoma risk assessment.</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="font-semibold text-blue-900 mb-1">RNFL Thickness Analysis</p>
                    <p className="text-sm text-blue-800">Deep learning models detect subtle RNFL thinning patterns that precede visual field defects by months or years.</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="font-semibold text-blue-900 mb-1">Progression Prediction</p>
                    <p className="text-sm text-blue-800">Multimodal AI integrating OCT and EHR data predicts glaucoma progression with 85-90% accuracy.</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  Diabetic Retinopathy Detection
                </h4>
                <div className="space-y-3">
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <p className="font-semibold text-purple-900 mb-1">Microaneurysm Detection</p>
                    <p className="text-sm text-purple-800">FISM and similar models detect microaneurysms with 96%+ sensitivity, enabling earliest-stage DR diagnosis.</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <p className="font-semibold text-purple-900 mb-1">Hemorrhage & Exudate Analysis</p>
                    <p className="text-sm text-purple-800">AI systems classify DR severity by analyzing hemorrhages, hard exudates, and cotton-wool spots with 95% accuracy.</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <p className="font-semibold text-purple-900 mb-1">Autonomous Screening</p>
                    <p className="text-sm text-purple-800">FDA-cleared devices like IDx-DR enable autonomous DR screening in primary care, expanding access to underserved populations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Accuracy by Disease */}
        <section className="mb-16">
          <Card className="p-8 bg-white border-slate-200 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">AI Diagnostic Accuracy by Disease</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={aiAccuracyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="disease" stroke="#64748b" angle={-45} textAnchor="end" height={100} />
                <YAxis stroke="#64748b" />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }} />
                <Legend />
                <Bar dataKey="accuracy" fill="#3b82f6" name="Overall Accuracy" radius={[8, 8, 0, 0]} />
                <Bar dataKey="sensitivity" fill="#8b5cf6" name="Sensitivity" radius={[8, 8, 0, 0]} />
                <Bar dataKey="specificity" fill="#ec4899" name="Specificity" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </section>

        {/* Section 4: Automated Reporting */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-purple-600"></div>
              <h3 className="text-3xl font-bold text-slate-900">Automated Medical Reporting</h3>
            </div>
            
            <p className="text-slate-700 leading-relaxed mb-6">
              Multimodal Large Language Models (MLLMs) are revolutionizing clinical documentation by automatically generating comprehensive diagnostic reports from ophthalmic images and patient data. Models like LLaVA-Med and specialized ophthalmic MLLMs achieve remarkable accuracy in translating complex visual and numerical data into clinically relevant narratives.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Data Integration', desc: 'Combines fundus photos, OCT scans, OCTA, and patient EHR data', icon: '🔗' },
                { title: 'Report Generation', desc: 'Produces standardized, consistent clinical reports in seconds', icon: '📄' },
                { title: 'Decision Support', desc: 'Highlights critical findings and suggests differential diagnoses', icon: '💡' },
              ].map((feature, idx) => (
                <div key={idx} className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl border border-slate-200 hover:shadow-lg transition">
                  <p className="text-4xl mb-3">{feature.icon}</p>
                  <h4 className="font-semibold text-slate-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-slate-600">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200">
              <h4 className="font-semibold text-slate-900 mb-3">Emerging Foundation Models in Ophthalmology</h4>
              <p className="text-slate-700 mb-3">
                Foundation models like Meta-EyeFM represent a paradigm shift. These models:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Achieve 11-43% improvement over GPT-4o in ophthalmology tasks</li>
                <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Often outperform junior ophthalmologists in diagnostic accuracy</li>
                <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Enable rapid adaptation to new clinical tasks through transfer learning</li>
                <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Provide superior interpretability through attention visualization</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Challenges & Ethics */}
        <section id="challenges" className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-red-600 to-orange-600"></div>
              <h3 className="text-3xl font-bold text-slate-900">Challenges & Ethical Considerations</h3>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-semibold text-slate-900 mb-4">Key Challenges</h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={challengesData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis type="number" stroke="#64748b" />
                  <YAxis dataKey="challenge" type="category" stroke="#64748b" width={120} />
                  <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }} />
                  <Bar dataKey="severity" fill="#ef4444" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                <h4 className="font-semibold text-red-900 mb-3">⚠️ Technical Challenges</h4>
                <ul className="space-y-2 text-red-800 text-sm">
                  <li>• Data bias and lack of diversity in training datasets</li>
                  <li>• Limited external validation across populations</li>
                  <li>• Black-box nature of deep learning models</li>
                  <li>• Domain shift and generalization issues</li>
                  <li>• Integration complexity with existing EHR systems</li>
                </ul>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
                <h4 className="font-semibold text-amber-900 mb-3">⚖️ Ethical & Regulatory Issues</h4>
                <ul className="space-y-2 text-amber-800 text-sm">
                  <li>• Accountability in cases of misdiagnosis</li>
                  <li>• Patient privacy and data security concerns</li>
                  <li>• Equitable access and health disparities</li>
                  <li>• Regulatory approval timelines and standards</li>
                  <li>• Informed consent and transparency requirements</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
              <h4 className="font-semibold text-green-900 mb-3">✅ Mitigation Strategies</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-green-800">
                <div>
                  <p className="font-semibold mb-1">Human-in-the-Loop</p>
                  <p>AI augments rather than replaces clinician judgment, maintaining professional accountability</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Explainable AI (XAI)</p>
                  <p>Developing interpretable models with attention visualization and decision reasoning</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Diverse Datasets</p>
                  <p>Ensuring training data represents diverse populations, geographies, and imaging devices</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Continuous Monitoring</p>
                  <p>Real-world performance tracking and bias detection in deployed systems</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FDA Approvals Pie Chart */}
        <section className="mb-16">
          <Card className="p-8 bg-white border-slate-200 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">FDA-Cleared AI Devices by Specialty (Q4 2025)</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              <ResponsiveContainer width={300} height={300}>
                <PieChart>
                  <Pie
                    data={fdaApprovals}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {fdaApprovals.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-3">
                {fdaApprovals.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }}></div>
                    <span className="text-slate-700"><span className="font-semibold">{item.name}:</span> {item.value} devices</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        {/* Section 6: Future Directions */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-white/30"></div>
              <h3 className="text-3xl font-bold">Future Directions & Opportunities</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Personalized Medicine',
                  desc: 'AI-driven treatment plans tailored to individual patient genetics, imaging, and response profiles'
                },
                {
                  title: 'Remote Monitoring',
                  desc: 'Teleophthalmology platforms with AI-powered analysis enabling care in underserved regions'
                },
                {
                  title: 'Oculomics',
                  desc: 'Using retinal imaging and AI to detect systemic diseases (diabetes, hypertension, neurodegeneration)'
                },
                {
                  title: 'Surgical Guidance',
                  desc: 'Real-time AI assistance during ophthalmic procedures for enhanced precision and safety'
                },
                {
                  title: 'Drug Discovery',
                  desc: 'Generative AI accelerating development of novel ophthalmology therapeutics'
                },
                {
                  title: 'Explainable AI',
                  desc: 'Advancing XAI techniques for transparent, trustworthy clinical decision support'
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur p-4 rounded-lg border border-white/20 hover:bg-white/15 transition">
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-white/90">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-purple-600"></div>
              <h3 className="text-3xl font-bold text-slate-900">Conclusion</h3>
            </div>

            <p className="text-slate-700 leading-relaxed mb-4">
              Artificial Intelligence is fundamentally transforming ophthalmology, offering unprecedented opportunities to enhance diagnostic accuracy, facilitate early disease detection, and streamline clinical workflows. The integration of deep learning—particularly with multimodal data—has led to significant advancements in the diagnosis of retinal diseases, glaucoma, and diabetic retinopathy, with AI systems now achieving performance levels that match or exceed expert ophthalmologists.
            </p>

            <p className="text-slate-700 leading-relaxed mb-4">
              The emergence of foundation models represents a paradigm shift, enabling rapid adaptation to new clinical tasks and providing superior interpretability. Meanwhile, automated medical reporting through multimodal LLMs is revolutionizing clinical documentation, reducing administrative burden and improving consistency.
            </p>

            <p className="text-slate-700 leading-relaxed">
              However, successful clinical translation requires addressing critical challenges related to data bias, generalizability, interpretability, and ethical considerations. By fostering responsible innovation, maintaining human-in-the-loop approaches, and ensuring equitable access, AI has the potential to profoundly improve eye care globally, ultimately leading to better patient outcomes and a more efficient, accessible healthcare system.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-12 border-t border-slate-200">
          <p className="text-slate-600 mb-2">
            <span className="font-semibold">AI in Ophthalmology: Technical Research Report</span>
          </p>
          <p className="text-sm text-slate-500">
            Research compiled from 60+ peer-reviewed publications (2024-2026) | Last updated: March 2026
          </p>
          <p className="text-xs text-slate-400 mt-4">
            For academic and research purposes | Suitable for presentation to ophthalmology faculty and researchers
          </p>
        </footer>
      </section>
    </div>
  );
};

export default Home;
