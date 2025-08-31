import { Card, CardContent } from "@/components/ui/card"
import { Target, Clock, Lightbulb, Heart } from "lucide-react"

const idealFor = [
  {
    icon: Clock,
    title: "Quer mais tempo livre sem sacrificar a qualidade das aulas",
    description: "Mantenha a excelência com menos esforço",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: Target,
    title: "Está cansado de planejar tudo do zero",
    description: "Aproveite materiais já testados e aprovados",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: Lightbulb,
    title: "Quer dar aulas mais envolventes e modernas",
    description: "Metodologias ativas que realmente funcionam",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: Heart,
    title: "Gosta de material visualmente bonito e organizado",
    description: "Design profissional que impressiona",
    gradient: "from-pink-500 to-rose-600",
  },
]

export function IdealForSection() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-indigo-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-cyan-200/30 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance bg-gradient-to-r from-slate-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Ideal para você que...
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 text-pretty max-w-3xl mx-auto leading-relaxed">
            Se identifica com alguma dessas situações? Este kit é perfeito para você!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {idealFor.map((item, index) => (
            <Card
              key={index}
              className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>
              <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${item.gradient}`}></div>

              <CardContent className="p-8 relative z-10">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 relative">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div
                      className={`absolute inset-0 w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}
                    ></div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-bold text-xl leading-tight text-balance text-slate-800 group-hover:text-blue-700 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-base">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
