"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing-section")
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-blue-50 to-amber-50 py-24 px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-amber-200/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-emerald-300/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center space-y-12">
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="flex justify-center">
              <Badge
                variant="secondary"
                className="text-base font-semibold px-6 py-2 bg-gradient-to-r from-emerald-100 to-blue-100 text-emerald-800 border-emerald-200"
              >
                🏆 Mais Vendido
              </Badge>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight bg-gradient-to-r from-emerald-700 via-blue-700 to-emerald-600 bg-clip-text text-transparent">
              Transforme Suas Aulas com Atividades Prontas, Criativas e Gamificadas
            </h1>

            <p className="text-2xl md:text-3xl text-slate-600 text-pretty leading-relaxed font-medium max-w-3xl mx-auto">
              Mais de 40 atividades coloridas e envolventes para o ensino fundamental – prontas para imprimir e aplicar
            </p>

            <div className="flex justify-center py-8">
              <div className="relative">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2029%20de%20ago.%20de%202025%2C%2013_09_17-GnFycYALAtH8blV4dCBXHJw9hyCOzB.png"
                  alt="Kit Bio Premium - Materiais educativos de biologia"
                  className="max-w-full h-auto max-h-96 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-200/20 via-blue-200/20 to-amber-200/20 rounded-3xl blur-xl -z-10"></div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                onClick={scrollToPricing}
                size="lg"
                className="text-xl px-12 py-8 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold animate-pulse"
              >
                🚀 Quero Acessar o Kit Agora
              </Button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-lg font-medium">
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full animate-pulse"></div>
                <span className="text-emerald-700">⚡ Acesso Imediato</span>
              </div>
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-pulse delay-300"></div>
                <span className="text-blue-700">💻 100% Digital</span>
              </div>
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full animate-pulse delay-700"></div>
                <span className="text-amber-700">✅ Pronto para Usar</span>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-emerald-200/50">
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">500+</div>
                <div className="text-sm text-slate-600">Professores Satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">40+</div>
                <div className="text-sm text-slate-600">Atividades Incluídas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">100%</div>
                <div className="text-sm text-slate-600">Garantia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
