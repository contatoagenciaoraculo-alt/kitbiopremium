"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Palette, BookOpen, Zap, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

const benefits = [
  {
    icon: CheckCircle,
    title: "Atividades 100% prontas para imprimir",
    description: "Sem necessidade de criação do zero",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: Zap,
    title: "Baseadas em metodologias ativas e gamificação",
    description: "Engajamento garantido dos alunos",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: BookOpen,
    title: "Plano de aula + prova + gabarito incluso",
    description: "Tudo que você precisa em um só lugar",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: Palette,
    title: "Design colorido e atrativo para alunos",
    description: "Visual profissional e envolvente",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    icon: Clock,
    title: "Economize até 10 horas por semana",
    description: "Mais tempo para o que realmente importa",
    gradient: "from-green-500 to-emerald-600",
  },
]

const activityImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2BA8D059-626C-43CF-9717-5CBE8307220A.jpg-JOAWR2Dm83vmzBn6wxM2eZwFhOuEnu.jpeg",
    alt: "Atividades de quiz e jogos educativos sobre nutrição",
    title: "Quiz Interativo sobre Nutrição",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/38C47378-EA07-46BB-AB14-BCA578313FC3.jpg-DBFxx3dXbWahkzaXW0C35jBTgOvGfY.jpeg",
    alt: "Atividade da pirâmide alimentar para montar",
    title: "Estação Pirâmide Alimentar",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/260CE676-83B9-4F11-A567-4C98097675FD.jpg-tnUufWuxKbcNekuufytKPm1A6mfMg9.jpeg",
    alt: "Modelo da Terra com camadas coloridas",
    title: "Modelo das Camadas da Terra",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0ACD85BB-D13E-470E-ACCB-2769A4F9ED16.jpg-XhzX4ONNjMgnNVczfRwQ51IyIdhvDq.jpeg",
    alt: "Diagrama circular sobre tratamento de água",
    title: "Ciclo de Tratamento da Água",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01133BC5-A95D-4421-979B-C447A3185910.jpg-TdbwVVylpbWODqFK63166aFUZFPemP.jpeg",
    alt: "Bingo de relações ecológicas com cartas",
    title: "Bingo de Relações Ecológicas",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6B4E49C3-26D7-4E71-B61D-622B3ABB6186.jpg-Ey1zeEUwIqrteUCGY9SqVCMpRjCi7h.jpeg",
    alt: "Caderno interativo sobre organismos causadores de doenças",
    title: "Caderno Interativo - Microrganismos",
  },
]

export function BenefitsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % activityImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activityImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + activityImages.length) % activityImages.length)
  }

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing-section")
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative py-16 px-4 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-cyan-200/30 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
            Por que escolher o Kit Bio Premium?
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 text-pretty max-w-3xl mx-auto leading-relaxed">
            Benefícios que fazem a diferença na sua rotina educacional
          </p>
        </div>

        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Veja algumas das atividades incríveis que você vai receber:
            </h3>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {activityImages.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="relative aspect-[9/16] overflow-hidden max-w-md mx-auto">
                      <img
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-2xl">
                        <h4 className="text-white font-semibold text-lg md:text-xl">{image.title}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-emerald-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-emerald-600" />
            </button>

            <div className="flex justify-center mt-4 gap-2">
              {activityImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-emerald-600 scale-125" : "bg-emerald-300 hover:bg-emerald-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="relative">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <div
                      className={`absolute inset-0 w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}
                    ></div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-bold text-xl leading-tight text-slate-800 group-hover:text-emerald-700 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-base">{benefit.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={scrollToPricing}
            size="lg"
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse"
          >
            Quero Transformar Minhas Aulas Agora! 🚀
          </Button>
          <p className="text-sm text-slate-600 mt-3">Acesso imediato • Garantia de 30 dias</p>
        </div>
      </div>
    </section>
  )
}
