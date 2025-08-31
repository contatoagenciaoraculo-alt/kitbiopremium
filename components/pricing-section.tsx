"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, X, Star } from "lucide-react"

const plans = [
  {
    name: "Combo Simples",
    price: "17,00",
    description: "Atividades padrão",
    checkoutUrl: "https://pay.cakto.com.br/3as67vh",
    features: [
      { name: "20 atividades em PDF", included: true },
      { name: "Planos de aula básicos", included: true },
      { name: "Suporte por email", included: true },
      { name: "Bônus exclusivos", included: false },
      { name: "Atividades premium", included: false },
      { name: "Suporte prioritário", included: false },
    ],
    popular: false,
  },
  {
    name: "Kit Premium",
    price: "29,90",
    description: "Atividades + bônus + versão premium",
    checkoutUrl: "https://pay.cakto.com.br/38fkota_549627",
    features: [
      { name: "40+ atividades em PDF", included: true },
      { name: "Planos de aula detalhados", included: true },
      { name: "Todos os 5 bônus inclusos", included: true },
      { name: "Atividades premium gamificadas", included: true },
      { name: "Suporte prioritário", included: true },
      { name: "Atualizações gratuitas", included: true },
    ],
    popular: true,
  },
]

export function PricingSection() {
  return (
    <section
      id="pricing-section"
      className="relative py-16 md:py-24 px-4 bg-gradient-to-br from-emerald-50 via-blue-50 to-amber-50 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-amber-200/15 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute bottom-32 left-1/4 w-28 h-28 bg-emerald-300/15 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance bg-gradient-to-r from-emerald-700 via-blue-700 to-emerald-600 bg-clip-text text-transparent">
            Escolha seu plano
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-slate-600 text-pretty max-w-3xl mx-auto leading-relaxed px-4">
            Opções flexíveis para atender suas necessidades
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`group relative shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border-0 ${
                plan.popular
                  ? "bg-gradient-to-br from-emerald-50 to-teal-50 ring-2 ring-emerald-400"
                  : "bg-white/95 backdrop-blur-sm"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 md:px-6 py-1.5 md:py-2 text-xs md:text-sm font-bold shadow-lg">
                    <Star className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    Mais Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-6 md:pb-8 px-4 md:px-6">
                <CardTitle
                  className={`text-xl md:text-2xl font-bold ${plan.popular ? "text-emerald-800" : "text-slate-800"}`}
                >
                  {plan.name}
                </CardTitle>
                <div className="mt-4 md:mt-6">
                  <span
                    className={`text-3xl md:text-4xl lg:text-5xl font-bold ${
                      plan.popular
                        ? "bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
                        : "text-slate-800"
                    }`}
                  >
                    R$ {plan.price}
                  </span>
                  <span className="text-slate-600 ml-2 text-sm md:text-lg block md:inline mt-1 md:mt-0">
                    pagamento único
                  </span>
                </div>
                <p className="text-slate-600 mt-2 md:mt-3 text-base md:text-lg px-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6 md:space-y-8 px-4 md:px-6">
                <ul className="space-y-3 md:space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start md:items-center gap-3 md:gap-4">
                      {feature.included ? (
                        <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-0">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-white" />
                        </div>
                      ) : (
                        <X className="w-5 h-5 md:w-6 md:h-6 text-slate-400 flex-shrink-0 mt-0.5 md:mt-0" />
                      )}
                      <span
                        className={`text-sm md:text-base leading-relaxed ${feature.included ? "text-slate-800 font-medium" : "text-slate-500"}`}
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full text-base md:text-lg py-4 md:py-6 font-bold transition-all duration-300 rounded-xl ${
                    plan.popular
                      ? "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg hover:shadow-xl hover:scale-105"
                      : "border-2 border-slate-300 hover:border-emerald-400 bg-white hover:bg-emerald-50 text-slate-800 hover:text-emerald-700 hover:scale-105"
                  }`}
                  size="lg"
                  onClick={() => window.open(plan.checkoutUrl, "_blank")}
                >
                  Escolher {plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <p className="text-slate-600 text-base md:text-lg px-4">
            Pagamento único • Acesso imediato • Garantia de 30 dias
          </p>
        </div>
      </div>
    </section>
  )
}
