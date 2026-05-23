import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans antialiased min-h-screen flex flex-col justify-between">

      {/* CABEÇALHO / NAVBAR */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-extrabold text-indigo-600 tracking-tight">Maria Luiza Alves</span>
          <nav className="space-x-6 font-semibold text-gray-600">
            <a href="#sobre" className="hover:text-indigo-600 transition-colors">Sobre</a>
            <a href="#experiencia" className="hover:text-indigo-600 transition-colors">Experiência</a>
            <a href="#competencias" className="hover:text-indigo-600 transition-colors">Competências</a>
          </nav>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="max-w-5xl w-full mx-auto px-6 py-12 flex-grow">
        
        {/* SECÇÃO: SOBRE MIM */}
        <section id="sobre" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col md:flex-row items-center gap-8 mb-12">
          
          {/* Foto de Perfil usando o componente nativo do Next.js */}
          <div className="relative w-32 h-32 shrink-0">
            <Image 
              src="/foto.jpeg" 
              alt="Foto de Maria Luiza" 
              fill
              sizes="(max-w-128px) 100vw, 128px"
              className="rounded-full object-cover shadow-md border-2 border-indigo-100"
              priority
            />
          </div>
          
          <div className="text-center md:text-left space-y-4">
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Maria Luiza Alves</h1>
              <p className="text-lg font-medium text-indigo-600">Graduanda em Tecnologia da Informação (UFERSA)</p>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-2xl">
              Desenvolvedora focada em estruturação e estilização de páginas web modernas. Atuo também no ecossistema de inovação e educação, aplicando conceitos de design instrucional e inteligência artificial generativa em projetos de impacto.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 border border-gray-200">📍 Pau dos Ferros - RN</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-50 text-indigo-700 border border-indigo-100">🎓 UFERSA</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-50 text-purple-700 border border-purple-100">🗣️ Inglês Intermediário (Fisk)</span>
            </div>
          </div>
        </section>

        {/* SECÇÃO DOIS: EXPERIÊNCIA E HABILIDADES */}
        <div className="grid md:grid-cols-3 gap-8">
            
          {/* Coluna de Experiência */}
          <div id="experiencia" className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-indigo-600 rounded-full block"></span>
              Experiência Profissional
            </h2>

            {/* Card Projeto Tutor Inteligente */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-3 hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Design Instrucional</h3>
                  <p className="text-sm font-medium text-indigo-600">Projeto Sistema de Tutor Inteligente Unplugged com IA Generativa</p>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-100 shrink-0 text-center sm:text-left">2025 - 2026</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Prestação de serviços profissionais para o ensino de física, em parceria com a Fundação Itaú. Atuação direta no desenvolvimento de lógicas educacionais integradas a inteligências artificiais inovadoras.
              </p>
            </div>

            {/* Card Curso HTML/CSS */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-3 hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Desenvolvimento de Sites</h3>
                  <p className="text-sm font-medium text-indigo-600">Curso Prático de HTML5 & CSS3</p>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100 shrink-0 text-center sm:text-left">2025</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Adquiri e consolidei conhecimentos essenciais focados na estruturação semântica de páginas web e estilização visual avançada.
              </p>
            </div>
          </div>

          {/* Coluna de Habilidades e Objetivo */}
          <div id="competencias" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-indigo-600 rounded-full block"></span>
              Habilidades
            </h2>
            
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 grid grid-cols-2 gap-3">
              <div className="bg-gray-50 px-3 py-2 rounded-lg text-center text-xs font-bold text-gray-700 border border-gray-100">⚡ Proatividade</div>
              <div className="bg-gray-50 px-3 py-2 rounded-lg text-center text-xs font-bold text-gray-700 border border-gray-100">👥 Trabalho em Equipe</div>
              <div className="bg-gray-50 px-3 py-2 rounded-lg text-center text-xs font-bold text-gray-700 border border-gray-100">📅 Organização</div>
              <div className="bg-gray-50 px-3 py-2 rounded-lg text-center text-xs font-bold text-gray-700 border border-gray-100">🧠 Aprendizado Rápido</div>
              <div className="bg-indigo-50 px-3 py-2 rounded-lg text-center text-xs font-bold text-indigo-700 border border-indigo-100 col-span-2">💻 HTML5 & CSS3 & Next.js</div>
            </div>

            <div className="bg-indigo-900 text-indigo-100 rounded-xl p-6 space-y-2 shadow-sm">
              <h3 className="font-bold text-white text-md">Objetivo Profissional</h3>
              <p className="text-xs text-indigo-200 leading-relaxed">
                Colaborar ativamente para o crescimento mútuo, superando expectativas através do desenvolvimento contínuo de competências técnicas em TI.
              </p>
            </div>
          </div>

        </div>
      </main>

      {/* RODAPÉ */}
      <footer className="bg-gray-950 text-gray-400 py-8 border-t border-gray-900">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-center md:text-left">
            <p className="font-semibold text-gray-200">Maria Luiza Alves</p>
            <p className="text-xs mt-1 text-gray-500">&copy; 2026 • Desenvolvido com Next.js e Tailwind CSS</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-xs font-medium">
            <a href="mailto:mariaaluizaaalvess22@gmail.com" className="hover:text-indigo-400 transition-colors">✉️ E-mail</a>
            <a href="https://linkedin.com/in/maria-luiza-alves-7182102b5" target="_blank" className="hover:text-indigo-400 transition-colors">🔗 LinkedIn</a>
            <span className="text-gray-600">📱 (83) 98101-3510</span>
          </div>
        </div>
      </footer>

    </div>
  );
}