"use client"

import { useState } from "react"
import { Check, Zap, Shield, ArrowRight, Star, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Home() {
  // Estado do Quiz
  const [showQuiz, setShowQuiz] = useState(true)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({
    name: "",
    age: "",
    difficulty: "",
    goal: ""
  })

  // URL do checkout - redirecionamento para Hotmart
  const CHECKOUT_URL = "https://hotm.io/ocodigodamente1nabalavel"
  
  const redirectToCheckout = () => {
    window.location.href = CHECKOUT_URL
  }

  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Perguntas do Quiz
  const questions = [
    {
      id: "name",
      question: "Qual o seu nome?",
      placeholder: "Digite seu nome aqui..."
    },
    {
      id: "age",
      question: "Quantos anos você tem?",
      placeholder: "Digite sua idade..."
    },
    {
      id: "difficulty",
      question: "Qual a sua maior dificuldade em seguir uma rotina?",
      placeholder: "Ex: Falta de disciplina, procrastinação..."
    },
    {
      id: "goal",
      question: "Qual o seu objetivo a longo prazo?",
      placeholder: "Ex: Ter mais foco, construir disciplina..."
    }
  ]

  const handleAnswerChange = (value: string) => {
    const questionId = questions[currentQuestion].id as keyof typeof answers
    setAnswers({ ...answers, [questionId]: value })
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowQuiz(false)
    }
  }

  const canProceed = () => {
    const questionId = questions[currentQuestion].id as keyof typeof answers
    return answers[questionId].trim().length > 0
  }

  // Quiz Screen
  if (showQuiz) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-200">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-slate-600">
                  Pergunta {currentQuestion + 1} de {questions.length}
                </span>
                <span className="text-sm font-medium text-teal-600">
                  {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                </span>
              </div>
              <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-teal-500 to-blue-500 transition-all duration-500 ease-out"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
                {questions[currentQuestion].question}
              </h2>

              <div className="space-y-2">
                <Input
                  type="text"
                  value={answers[questions[currentQuestion].id as keyof typeof answers]}
                  onChange={(e) => handleAnswerChange(e.target.value)}
                  placeholder={questions[currentQuestion].placeholder}
                  className="w-full px-6 py-6 text-lg border-2 border-slate-200 rounded-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all"
                  autoFocus
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && canProceed()) {
                      handleNext()
                    }
                  }}
                />
              </div>

              <Button
                onClick={handleNext}
                disabled={!canProceed()}
                className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {currentQuestion < questions.length - 1 ? (
                  <>
                    Próxima <ChevronRight className="ml-2 h-5 w-5" />
                  </>
                ) : (
                  <>
                    Ver minha solução <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </div>

            {/* Decorative elements */}
            <div className="mt-8 pt-8 border-t border-slate-200">
              <p className="text-center text-sm text-slate-500">
                🔒 Suas respostas são privadas e seguras
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Main Sales Page
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 text-slate-800">
      {/* HERO SECTION - Personalizado com nome */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Background subtle effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-100/30 via-transparent to-blue-100/30" />
        
        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
          <div className="inline-block bg-teal-100 text-teal-700 px-6 py-2 rounded-full text-sm font-semibold mb-4">
            ✨ Olá, {answers.name}! Esta é a sua solução personalizada
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight text-slate-900">
            Domine sua mente.<br />
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Transforme sua vida.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {answers.name}, você mencionou que sua maior dificuldade é <span className="font-semibold text-teal-700">{answers.difficulty.toLowerCase()}</span>.<br />
            <span className="text-teal-600 font-semibold">Este método foi criado exatamente para resolver isso.</span>
          </p>

          {/* Ebook mockup */}
          <div className="pt-12">
            <div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl shadow-2xl shadow-teal-500/20 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-center space-y-4 p-8">
                <div className="text-6xl">🧠</div>
                <h3 className="text-2xl font-bold text-white">Código da Mente<br />Inabalável</h3>
                <p className="text-sm text-teal-100">Sistema OSM</p>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <Button 
              onClick={scrollToOffer}
              size="lg" 
              className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-12 py-6 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Quero começar agora <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* PROBLEMA REAL - Personalizado */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12">
              {answers.name}, reconhece esses sinais?
            </h2>

            <div className="space-y-6">
              <p className="text-2xl md:text-3xl text-slate-700 leading-relaxed">
                Você sabe o que precisa fazer, <span className="text-red-500 font-semibold">mas não faz</span>.
              </p>
              <p className="text-2xl md:text-3xl text-slate-700 leading-relaxed">
                Começa motivado e <span className="text-red-500 font-semibold">desiste no meio</span>.
              </p>
              <p className="text-2xl md:text-3xl text-slate-700 leading-relaxed">
                Oscila entre <span className="text-red-500 font-semibold">foco e distração</span>.
              </p>
              <p className="text-2xl md:text-3xl text-slate-700 leading-relaxed">
                Sente que <span className="text-red-500 font-semibold">poderia ser muito mais</span>.
              </p>
            </div>

            <div className="pt-12">
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 border-2 border-teal-200 rounded-2xl p-8 md:p-12">
                <p className="text-3xl md:text-4xl font-bold leading-tight text-slate-900">
                  O problema não é você, {answers.name}.<br />
                  <span className="text-teal-600">É o sistema mental que você está usando.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A GRANDE SOLUÇÃO */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900">
                Sistema <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">OSM</span>
              </h2>
              <p className="text-2xl text-slate-600">Operacional Superior da Mente</p>
              <p className="text-lg text-teal-600 font-semibold max-w-2xl mx-auto">
                A solução definitiva para {answers.difficulty.toLowerCase()} e alcançar {answers.goal.toLowerCase()}
              </p>
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
                <div key={idx} className="bg-white/80 backdrop-blur-sm border-2 border-teal-100 rounded-xl p-6 hover:border-teal-300 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <benefit.icon className="h-10 w-10 text-teal-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-slate-900">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL - Urgência */}
      <section className="py-16 px-4 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-3xl md:text-4xl font-bold">
            Mais de 2.847 pessoas já transformaram suas mentes
          </p>
          <p className="text-xl text-teal-100">
            {answers.name}, você está a um passo de se juntar a elas
          </p>
          <div className="flex justify-center gap-8 pt-4">
            <div className="text-center">
              <p className="text-4xl font-bold">4.9/5</p>
              <p className="text-teal-100">Avaliação média</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">98%</p>
              <p className="text-teal-100">Recomendariam</p>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ VAI APRENDER */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
            O Que Você Vai <span className="text-teal-600">Aprender</span>
          </h2>
          <p className="text-center text-xl text-slate-600 mb-16">
            Tudo que você precisa para superar {answers.difficulty.toLowerCase()}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Reprogramar padrões mentais que te sabotam",
              "Instalar disciplina verdadeira e duradoura",
              "Criar foco profundo mesmo com distrações",
              "Neutralizar sabotadores invisíveis",
              "Dominar suas emoções e impulsos",
              "Formar hábitos inabaláveis",
              "Criar uma rotina de alta performance sustentável"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white border-2 border-teal-100 rounded-xl p-6 hover:border-teal-300 hover:shadow-md transition-all duration-300">
                <Check className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <p className="text-lg text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OS PILARES DO MÉTODO */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
            Os 5 <span className="text-teal-600">Pilares</span> do Método
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Clareza Mental", desc: "Elimine a névoa mental e veja com precisão" },
              { num: "02", title: "Disciplina Sistêmica", desc: "Transforme ação em automatismo" },
              { num: "03", title: "Resiliência Emocional", desc: "Mantenha-se firme sob pressão" },
              { num: "04", title: "Hábitos Inabaláveis", desc: "Construa rotinas que sustentam resultados" },
              { num: "05", title: "Alta Performance Sustentável", desc: "Evolua sem burnout" }
            ].map((pilar, idx) => (
              <div key={idx} className="relative bg-white/80 backdrop-blur-sm border-2 border-teal-100 rounded-2xl p-8 hover:border-teal-300 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="text-6xl font-bold text-teal-100 absolute top-4 right-4">{pilar.num}</div>
                <h3 className="text-2xl font-bold mb-3 relative z-10 text-slate-900">{pilar.title}</h3>
                <p className="text-slate-600 relative z-10">{pilar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
            {answers.name}, Este Método É <span className="text-teal-600">Para Você</span>
          </h2>

          <div className="bg-gradient-to-br from-teal-50 to-blue-50 border-2 border-teal-200 rounded-2xl p-8 md:p-12">
            <p className="text-2xl font-semibold mb-8 text-center text-teal-700">Especialmente se você:</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Está cansado de viver abaixo do seu potencial",
                "Quer disciplina real, não motivação temporária",
                "Deseja parar de se sabotar definitivamente",
                "Busca foco e constância verdadeiros",
                "Quer dominar a própria mente",
                "Deseja evolução mental e emocional",
                "Quer força interna e estabilidade duradoura"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-teal-600 flex-shrink-0" />
                  <p className="text-lg text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRANSFORMAÇÃO */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-slate-900">
            A Transformação Que Te Espera
          </h2>
          <p className="text-xl text-center text-slate-600 mb-16">
            Quando você aplicar o Código, {answers.name}, você vai:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Acordar com clareza e propósito",
              "Cortar distrações sem esforço",
              "Agir mesmo sem vontade",
              "Tomar decisões inteligentes rapidamente",
              "Resistir a impulsos destrutivos",
              "Sentir controle interno real",
              "Se tornar mais confiável, forte e estável"
            ].map((result, idx) => (
              <div key={idx} className="bg-white border-2 border-teal-100 rounded-xl p-6 hover:border-teal-300 hover:shadow-md transition-all duration-300 hover:scale-105">
                <Zap className="h-8 w-8 text-teal-600 mb-3" />
                <p className="text-lg font-semibold text-slate-800">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ RECEBE */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
            O Que Você <span className="text-teal-600">Recebe</span>
          </h2>

          <div className="bg-gradient-to-br from-teal-50 to-blue-50 border-2 border-teal-200 rounded-2xl p-8 md:p-12">
            <div className="space-y-6">
              {[
                "E-book completo em PDF (acesso vitalício)",
                "Método OSM passo a passo",
                "Protocolos práticos de aplicação imediata",
                "Ferramentas de reprogramação mental",
                "Acesso imediato após pagamento"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="bg-teal-100 rounded-full p-2">
                    <Check className="h-6 w-6 text-teal-600" />
                  </div>
                  <p className="text-xl text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA - URGÊNCIA E ESCASSEZ */}
      <section id="oferta" className="py-20 px-4 bg-gradient-to-br from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-16 text-center space-y-8 shadow-2xl">
            <div className="inline-block bg-red-100 text-red-700 px-6 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
              ⚡ OFERTA POR TEMPO LIMITADO
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Oferta <span className="text-teal-600">Especial</span> Para Você, {answers.name}
            </h2>

            <div className="space-y-4">
              <p className="text-2xl text-slate-500 line-through">De: R$ 97,00</p>
              <div className="space-y-2">
                <p className="text-xl text-teal-600 font-semibold">Por apenas:</p>
                <p className="text-6xl md:text-7xl font-bold text-slate-900">R$ 19,90</p>
                <p className="text-lg text-slate-600">Investimento único • Acesso vitalício</p>
              </div>
            </div>

            <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-6">
              <p className="text-slate-700 font-semibold mb-2">🎁 Você também recebe GRÁTIS:</p>
              <ul className="text-left space-y-2 text-slate-600">
                <li>✓ Checklist da Mente Inabalável</li>
                <li>✓ Guia Anti-Procrastinação</li>
                <li>✓ Diário de Performance (7 dias)</li>
                <li>✓ 21 Frases de Reprogramação Mental</li>
              </ul>
            </div>

            <div className="pt-8">
              <Button 
                onClick={redirectToCheckout}
                size="lg" 
                className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-16 py-8 text-xl font-bold rounded-xl shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105 w-full md:w-auto"
              >
                👉 Quero acessar agora por R$19,90
              </Button>
            </div>

            <div className="space-y-2 pt-4">
              <p className="text-sm text-slate-500">🔒 Pagamento 100% seguro</p>
              <p className="text-sm text-slate-500">✅ Acesso imediato após confirmação</p>
              <p className="text-sm text-slate-500">📱 Compatível com todos os dispositivos</p>
            </div>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 border-2 border-teal-200 rounded-2xl p-8 md:p-12">
            <div className="text-5xl mb-4">🛡️</div>
            <h3 className="text-3xl font-bold mb-4 text-slate-900">Garantia de 7 Dias</h3>
            <p className="text-lg text-slate-700 leading-relaxed">
              Se por qualquer motivo você não ficar satisfeito com o conteúdo, devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.
            </p>
          </div>
        </div>
      </section>

      {/* CHAMADA FINAL - URGÊNCIA */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h3 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">
            {answers.name}, Sua Mente É Seu <span className="text-teal-600">Maior Ativo</span>
          </h3>

          <p className="text-2xl md:text-3xl text-slate-700 leading-relaxed">
            Você tem dois caminhos:<br />
            <span className="text-red-500 font-semibold">Continuar lutando com {answers.difficulty.toLowerCase()}</span><br />
            ou<br />
            <span className="text-teal-600 font-semibold">Instalar o sistema que vai te levar a {answers.goal.toLowerCase()}</span>
          </p>

          <div className="pt-8">
            <Button 
              onClick={redirectToCheckout}
              size="lg" 
              className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-12 py-7 text-lg font-bold rounded-xl shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105"
            >
              Quero transformar minha mente agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <p className="text-slate-600 pt-4">
            ⏰ Esta oferta pode encerrar a qualquer momento
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-4 bg-slate-100 border-t border-slate-200">
        <div className="max-w-6xl mx-auto text-center text-slate-600">
          <p>© 2024 Código da Mente Inabalável. Todos os direitos reservados.</p>
          <p className="text-sm mt-2">🔒 Seus dados estão protegidos e seguros</p>
        </div>
      </footer>
    </div>
  )
}
