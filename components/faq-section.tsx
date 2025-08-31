import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Como recebo o material?",
    answer:
      "Após a confirmação do pagamento, você receberá um email com o link para download de todos os materiais. O acesso é imediato e você pode baixar quantas vezes quiser.",
  },
  {
    question: "É físico ou digital?",
    answer:
      "O Kit Bio Premium é 100% digital. Você recebe todos os arquivos em PDF de alta qualidade, prontos para imprimir em casa ou na escola. Isso garante acesso imediato e economia de frete.",
  },
  {
    question: "É adequado para o fundamental?",
    answer:
      "Sim! Todas as atividades foram especialmente desenvolvidas para alunos do ensino fundamental, seguindo a BNCC. Os materiais são adequados para diferentes faixas etárias dentro do fundamental.",
  },
  {
    question: "Qual a forma de pagamento?",
    answer:
      "Aceitamos cartão de crédito, PIX e boleto bancário. O pagamento é processado de forma segura e você recebe o material imediatamente após a confirmação.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">Tire suas dúvidas sobre o Kit Bio Premium</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-xl px-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-100/50 via-indigo-100/50 to-purple-100/50 rounded-2xl backdrop-blur-sm border border-blue-200/50">
          <p className="text-lg text-gray-700 mb-2">Ainda tem dúvidas?</p>
          <p className="text-sm text-muted-foreground">Entre em contato conosco e teremos prazer em ajudar!</p>
        </div>
      </div>
    </section>
  )
}
