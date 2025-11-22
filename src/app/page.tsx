"use client"

import { Check, Zap, Shield, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.1),transparent_50%)]" />
        
        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
            Domine sua mente.<br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Transforme sua vida.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Pare de tentar mudar a vida com a mesma mente que te sabotou até hoje.<br />
            <span className="text-purple-400 font-semibold">Instale o Sistema Operacional Superior da Mente.</span>
          </p>
          
          <div className="pt-8">
            <Button 
              onClick={scrollToOffer}
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-7 text-lg font-bold rounded-xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              Quero acessar agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Ebook mockup placeholder */}
          <div className="pt-12">
            <div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-gradient-to-br from-purple-900 to-blue-900 rounded-2xl shadow-2xl shadow-purple-500/30 flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <div className="text-6xl">🧠</div>
                <h3 className="text-2xl font-bold">Código da Mente<br />Inabalável</h3>
                <p className="text-sm text-gray-300">Sistema OSM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA REAL */}
      <section className="py-20 px-4 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-center">
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed">
                Você sabe o que precisa fazer, <span className="text-red-400 font-semibold">mas não faz</span>.
              </p>
              <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed">
                Começa e <span className="text-red-400 font-semibold">para</span>.
              </p>
              <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed">
                Oscila entre <span className="text-red-400 font-semibold">foco e distração</span>.
              </p>
              <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed">
                Sente que <span className="text-red-400 font-semibold">poderia ser muito mais</span>.
              </p>
            </div>

            <div className="pt-12">
              <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-2xl p-8 md:p-12">
                <p className="text-3xl md:text-4xl font-bold leading-tight">
                  O problema não é você.<br />
                  <span className="text-purple-400">É o sistema mental que você está usando.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A GRANDE SOLUÇÃO */}
      <section className="py-20 px-4 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold">
                Sistema <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">OSM</span>
              </h2>
              <p className="text-2xl text-gray-300">Operacional Superior da Mente</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
              {[
                { icon: Check, title: "Elimina sabotadores", desc: "Neutralize padrões que te impedem de agir" },
                { icon: Zap, title: "Instala disciplina", desc: "Transforme disciplina em parte da sua identidade" },
                { icon: Shield, title: "Cria foco profundo", desc: "Desenvolva concentração inabalável" },
                { icon: Star, title: "Aumenta clareza mental", desc: "Tome decisões com precisão e confiança" },
                { icon: Check, title: "Transforma identidade", desc: "Torne-se a versão superior de si mesmo" },
                { icon: Zap, title: "Alta performance", desc: "Sistema prático e sustentável" }
              ].map((benefit, idx) => (
                <div key={idx} className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                  <benefit.icon className="h-10 w-10 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ VAI APRENDER */}
      <section className="py-20 px-4 bg-[#0D0D0D]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            O Que Você Vai <span className="text-purple-400">Aprender</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Reprogramar padrões mentais",
              "Instalar disciplina verdadeira",
              "Criar foco profundo",
              "Neutralizar sabotadores invisíveis",
              "Dominar emoções",
              "Formar hábitos inabaláveis",
              "Criar uma rotina de alta performance sustentável"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-[#0A0A0A] border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                <Check className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OS PILARES DO MÉTODO */}
      <section className="py-20 px-4 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Os 5 <span className="text-purple-400">Pilares</span> do Método
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Clareza Mental", desc: "Elimine a névoa mental e veja com precisão" },
              { num: "02", title: "Disciplina Sistêmica", desc: "Transforme ação em automatismo" },
              { num: "03", title: "Resiliência Emocional", desc: "Mantenha-se firme sob pressão" },
              { num: "04", title: "Hábitos Inabaláveis", desc: "Construa rotinas que sustentam resultados" },
              { num: "05", title: "Alta Performance Sustentável", desc: "Evolua sem burnout" }
            ].map((pilar, idx) => (
              <div key={idx} className="relative bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500/60 transition-all duration-300 hover:scale-105">
                <div className="text-6xl font-bold text-purple-400/20 absolute top-4 right-4">{pilar.num}</div>
                <h3 className="text-2xl font-bold mb-3 relative z-10">{pilar.title}</h3>
                <p className="text-gray-400 relative z-10">{pilar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="py-20 px-4 bg-[#0D0D0D]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Para Quem É <span className="text-purple-400">Este E-book?</span>
          </h2>

          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl p-8 md:p-12">
            <p className="text-2xl font-semibold mb-8 text-center text-purple-400">Para pessoas que:</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Estão cansadas de viver abaixo do potencial",
                "Querem disciplina real",
                "Desejam parar de se sabotar",
                "Buscam foco e constância",
                "Querem dominar a própria mente",
                "Desejam evolução mental e emocional",
                "Querem força interna e estabilidade"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-purple-400 flex-shrink-0" />
                  <p className="text-lg text-gray-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* O QUE ACONTECE QUANDO VOCÊ APLICA */}
      <section className="py-20 px-4 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            O Que Acontece Quando Você <span className="text-purple-400">Aplica o Código</span>
          </h2>
          <p className="text-xl text-center text-gray-300 mb-16">Você vai:</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Acordar com clareza",
              "Cortar distrações",
              "Agir mesmo sem vontade",
              "Tomar decisões inteligentes",
              "Resistir a impulsos",
              "Sentir controle interno",
              "Se tornar mais confiável, forte e estável"
            ].map((result, idx) => (
              <div key={idx} className="bg-[#0D0D0D] border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                <Zap className="h-8 w-8 text-purple-400 mb-3" />
                <p className="text-lg font-semibold">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BÔNUS EXCLUSIVOS */}
      <section className="py-20 px-4 bg-[#0D0D0D]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Bônus <span className="text-purple-400">Exclusivos</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { emoji: "🎁", title: "Checklist da Mente Inabalável", desc: "Guia prático para aplicação diária" },
              { emoji: "🎁", title: "Guia Anti-Procrastinação", desc: "Técnicas comprovadas para agir agora" },
              { emoji: "🎁", title: "Diário de Performance (7 dias)", desc: "Acompanhe sua evolução mental" },
              { emoji: "🎁", title: "21 Frases de Reprogramação Mental", desc: "Instale novos padrões de pensamento" }
            ].map((bonus, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-xl p-6 hover:border-purple-500/60 transition-all duration-300">
                <div className="text-4xl mb-3">{bonus.emoji}</div>
                <h3 className="text-xl font-bold mb-2">{bonus.title}</h3>
                <p className="text-gray-400">{bonus.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ RECEBE */}
      <section className="py-20 px-4 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            O Que Você <span className="text-purple-400">Recebe</span>
          </h2>

          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl p-8 md:p-12">
            <div className="space-y-6">
              {[
                "E-book completo em PDF",
                "Método OSM",
                "Protocolos práticos",
                "Ferramentas de reprogramação mental",
                "Acesso imediato"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="bg-purple-500/20 rounded-full p-2">
                    <Check className="h-6 w-6 text-purple-400" />
                  </div>
                  <p className="text-xl text-gray-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="py-20 px-4 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-2 border-purple-500/50 rounded-3xl p-8 md:p-16 text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Oferta <span className="text-purple-400">Especial</span>
            </h2>

            <div className="space-y-4">
              <p className="text-2xl text-gray-400 line-through">De: R$ 97,00</p>
              <div className="space-y-2">
                <p className="text-xl text-purple-400 font-semibold">Por apenas:</p>
                <p className="text-6xl md:text-7xl font-bold text-white">R$ 19,90</p>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-16 py-8 text-xl font-bold rounded-xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 w-full md:w-auto"
            >
              👉 Quero acessar agora por R$19,90
            </Button>

            <p className="text-sm text-gray-400 pt-4">Acesso imediato após a confirmação do pagamento</p>
          </div>
        </div>
      </section>

      {/* CHAMADA FINAL */}
      <section className="py-20 px-4 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed">
            Sua mente é o único lugar que você nunca pode abandonar.<br />
            <span className="text-purple-400 font-semibold">É ali que começa sua força, sua disciplina e sua evolução.</span>
          </p>

          <div className="pt-8">
            <h3 className="text-4xl md:text-5xl font-bold mb-8">
              Baixe agora o <span className="text-purple-400">Código da Mente Inabalável</span>
            </h3>
            <Button 
              onClick={scrollToOffer}
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-7 text-lg font-bold rounded-xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              Quero transformar minha mente agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-4 bg-[#0D0D0D] border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>© 2024 Código da Mente Inabalável. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
