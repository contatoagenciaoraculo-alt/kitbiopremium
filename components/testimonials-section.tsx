"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prova%20social%204.jpg-Qjxt0L0BCUKMqLvYHxa3ayXetVGPDu.jpeg",
    name: "Professora Maria",
    role: "Professora de Biologia",
    rating: 5,
  },
  {
    id: 2,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prova%20social%201.jpg-o6wy3pRJ8gDpZENsz6NWJ1urwxGvbR.jpeg",
    name: "Professora Ana",
    role: "Educadora",
    rating: 5,
  },
  {
    id: 3,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prova%20social%203.jpg-cYLY8KDfUdbTAMCItiwqKD54u5RsyG.jpeg",
    name: "Professora Carla",
    role: "Professora de Ciências",
    rating: 5,
  },
  {
    id: 4,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prova%20social%202.jpg-5L4XYxdmviLik3VxN5pBwmBTG6gmXo.jpeg",
    name: "Professora Julia",
    role: "Educadora de Biologia",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing-section")
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50" />

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200/30 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-teal-200/30 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-200/30 rounded-full blur-xl animate-pulse delay-500" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              O que dizem nossos
            </span>
            <br />
            <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
              professores
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Mais de 10.000 professores já transformaram suas aulas com o Kit Bio Premium
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="max-w-4xl mx-auto">
                    <div className="rounded-3xl p-6">
                      {/* Testimonial Image */}
                      <div className="flex justify-center mb-6">
                        <div className="relative">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={`Depoimento de ${testimonial.name}`}
                            className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
                          />
                          <div className="absolute -top-4 -right-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-3 rounded-full shadow-lg">
                            <Star className="w-6 h-6 fill-current" />
                          </div>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      {/* Testimonial Info */}
                      <div className="text-center">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{testimonial.name}</h3>
                        <p className="text-emerald-600 font-medium">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300 shadow-lg"
            onClick={goToPrevious}
          >
            <ChevronLeft className="w-5 h-5 text-emerald-600" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300 shadow-lg"
            onClick={goToNext}
          >
            <ChevronRight className="w-5 h-5 text-emerald-600" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
              10.000+
            </div>
            <p className="text-gray-600">Professores Satisfeitos</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">
              98%
            </div>
            <p className="text-gray-600">Taxa de Aprovação</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent mb-2">
              5★
            </div>
            <p className="text-gray-600">Avaliação Média</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={scrollToPricing}
            size="lg"
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Eu Também Quero Esses Resultados! ✨
          </Button>
          <p className="text-sm text-gray-600 mt-3">Junte-se a mais de 10.000 professores satisfeitos</p>
        </div>
      </div>
    </section>
  )
}
