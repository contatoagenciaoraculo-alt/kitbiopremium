import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Zap, Timer } from "lucide-react"

export function UrgencySection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 right-1/4 w-60 h-60 bg-gradient-to-br from-yellow-500/15 to-red-500/15 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <Card className="bg-gradient-to-br from-red-600/10 via-orange-600/10 to-yellow-600/10 border-red-500/30 shadow-2xl backdrop-blur-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-orange-500/5 to-yellow-500/5 rounded-lg"></div>

          <CardContent className="p-12 text-center relative z-10">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 to-orange-500/30 rounded-full animate-ping"></div>
                <Clock className="w-10 h-10 text-red-400 animate-pulse relative z-10" />
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Oferta por tempo limitado!
            </h2>

            <p className="text-xl text-gray-300 mb-8 text-pretty">
              Esta promoção especial termina em breve. Não perca a oportunidade de transformar suas aulas com desconto
              exclusivo.
            </p>

            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-4 bg-gradient-to-r from-red-900/50 to-orange-900/50 px-6 py-3 rounded-full border border-red-500/30">
                <Timer className="w-5 h-5 text-red-400 animate-spin" />
                <span className="text-red-300 font-bold">Restam poucas horas!</span>
                <Timer className="w-5 h-5 text-red-400 animate-spin" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold bg-emerald-900/20 px-4 py-2 rounded-full border border-emerald-500/30">
                <Zap className="w-5 h-5" />
                <span>Acesso Imediato</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full"></div>
              <div className="flex items-center gap-2 text-blue-400 font-semibold bg-blue-900/20 px-4 py-2 rounded-full border border-blue-500/30">
                <Zap className="w-5 h-5" />
                <span>Garantia de 7 dias</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full"></div>
              <div className="flex items-center gap-2 text-purple-400 font-semibold bg-purple-900/20 px-4 py-2 rounded-full border border-purple-500/30">
                <Zap className="w-5 h-5" />
                <span>Suporte incluído</span>
              </div>
            </div>

            <Button
              size="lg"
              className="text-lg px-12 py-6 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 hover:from-red-500 hover:via-orange-500 hover:to-yellow-500 text-white font-bold shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-105 border-0"
            >
              Garantir Meu Kit Agora
            </Button>

            <p className="text-sm text-gray-400 mt-4">Mais de 500 professores já transformaram suas aulas</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
