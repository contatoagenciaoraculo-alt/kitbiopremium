"use client"

import { Shield, CheckCircle, Clock, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GuaranteeSection() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing-section")
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50" />

      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-200/30 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-teal-200/20 rounded-full blur-2xl animate-bounce" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-200/25 rounded-full blur-lg animate-pulse delay-1000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6 shadow-lg">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Garantia de 30 Dias
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Sua satisfação é nossa prioridade. Teste o Kit Bio Premium por 30 dias sem riscos!
            </p>
          </div>

          {/* Guarantee Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50 mb-12 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  100% Livre de Riscos
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      <strong>30 dias completos</strong> para testar todos os materiais
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      <strong>Reembolso integral</strong> se não ficar satisfeito
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      <strong>Sem perguntas</strong> ou burocracias desnecessárias
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      <strong>Suporte dedicado</strong> durante todo o período
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-8 mb-6">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <Clock className="w-8 h-8 text-emerald-600" />
                    <span className="text-4xl font-bold text-emerald-600">30</span>
                    <span className="text-xl text-emerald-600 font-semibold">DIAS</span>
                  </div>
                  <p className="text-emerald-700 font-medium">Para testar sem compromisso</p>
                </div>

                <div className="flex items-center justify-center gap-2 text-teal-600">
                  <RefreshCw className="w-5 h-5" />
                  <span className="font-semibold">Reembolso garantido</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-12 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={scrollToPricing}
            >
              Começar Agora Sem Riscos
            </Button>
            <p className="text-sm text-gray-500 mt-3">✓ Acesso imediato • ✓ Garantia de 30 dias • ✓ Suporte incluído</p>
          </div>
        </div>
      </div>
    </section>
  )
}
