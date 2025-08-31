"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Gift, CheckSquare, Users, GamepadIcon, Percent } from "lucide-react"

const bonuses = [
  {
    icon: CheckSquare,
    title: "Checklist de Aula Pronta",
    description: "Nunca mais esqueça nenhum detalhe importante",
    value: "R$ 15,00",
  },
  {
    icon: Users,
    title: "Guia de Engajamento em Sala",
    description: "Técnicas para manter os alunos interessados",
    value: "R$ 25,00",
  },
  {
    icon: GamepadIcon,
    title: "Modelos de Prova com Gabarito",
    description: "Avaliações extras para diferentes níveis",
    value: "R$ 20,00",
  },
  {
    icon: Gift,
    title: "Atividade Extra de Revisão em Jogo",
    description: "Revisão divertida e eficaz para suas turmas",
    value: "R$ 18,00",
  },
  {
    icon: Percent,
    title: "Desconto em futuros kits de outras disciplinas",
    description: "20% OFF em próximas compras",
    value: "R$ 30,00",
  },
]

export function BonusSection() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing-section")
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-200/20 to-emerald-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="text-sm font-medium mb-4 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 border-emerald-200"
          >
            Bônus Exclusivos
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
            Mas espera, tem mais!
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Além do kit completo, você também recebe estes bônus incríveis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bonuses.map((bonus, index) => (
            <Card
              key={index}
              className="relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/50 via-teal-200/50 to-cyan-200/50 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-lg m-0.5">
                <div className="absolute top-4 right-4">
                  <Badge
                    variant="outline"
                    className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 border-emerald-200 font-semibold"
                  >
                    {bonus.value}
                  </Badge>
                </div>
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <bonus.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-lg text-balance pr-16 text-gray-800">{bonus.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{bonus.description}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 p-8 bg-gradient-to-r from-emerald-100/50 via-teal-100/50 to-cyan-100/50 rounded-2xl backdrop-blur-sm border border-emerald-200/50">
          <p className="text-lg text-muted-foreground mb-2">Valor total dos bônus:</p>
          <p className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            R$ 108,00
          </p>
          <p className="text-sm text-muted-foreground font-medium mb-6">Mas você recebe tudo isso gratuitamente!</p>

          <Button
            onClick={scrollToPricing}
            size="lg"
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Quero Todos os Bônus Agora! 🎁
          </Button>
          <p className="text-sm text-muted-foreground mt-3">Oferta limitada • Bônus no valor de R$ 108,00 grátis</p>
        </div>
      </div>
    </section>
  )
}
