import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, BookOpen, ClipboardCheck, Lightbulb, Palette } from "lucide-react"

const contents = [
  {
    icon: FileText,
    title: "40+ atividades prontas em PDF",
    description:
      "Atividades lúdicas e criativas de Genética, Citologia, Ecologia, Corpo Humano, Sistema Digestório e muito mais!",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: BookOpen,
    title: "Plano de aula para cada uma",
    description: "Orientações detalhadas para aplicação",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: ClipboardCheck,
    title: "Modelos de prova com gabarito",
    description: "Avaliações prontas e organizadas",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    icon: Lightbulb,
    title: "Sugestões de aplicação em sala",
    description: "Dicas práticas de como usar cada atividade",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: Palette,
    title: "Recursos visuais e gamificados",
    description: "Elementos que tornam o aprendizado divertido",
    gradient: "from-pink-500 to-rose-600",
  },
]

export function ProductContentsSection() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-cyan-200/30 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
            O que você vai receber
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 text-pretty max-w-3xl mx-auto leading-relaxed">
            Um kit completo para transformar suas aulas de biologia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contents.map((content, index) => (
            <Card
              key={index}
              className="group text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0"
            >
              <CardHeader className="pb-4">
                <div className="mx-auto relative mb-6">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${content.gradient} rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <content.icon className="w-10 h-10 text-white" />
                  </div>
                  <div
                    className={`absolute inset-0 w-20 h-20 bg-gradient-to-br ${content.gradient} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}
                  ></div>
                </div>
                <CardTitle className="text-xl font-bold text-balance text-slate-800 group-hover:text-emerald-700 transition-colors duration-300">
                  {content.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed text-base">{content.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
