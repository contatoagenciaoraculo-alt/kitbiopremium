import { HeroSection } from "@/components/hero-section"
import { BenefitsSection } from "@/components/benefits-section"
import { IdealForSection } from "@/components/ideal-for-section"
import { ProductContentsSection } from "@/components/product-contents-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BonusSection } from "@/components/bonus-section"
import { PricingSection } from "@/components/pricing-section"
import { GuaranteeSection } from "@/components/guarantee-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <BenefitsSection />
      <IdealForSection />
      <ProductContentsSection />
      <TestimonialsSection />
      <BonusSection />
      <PricingSection />
      <GuaranteeSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
