import { Calculator, FileText, Shield } from "lucide-react"
import { FiniquitoCalculator } from "@/components/finiquito-calculator"
import { AdSidebar } from "@/components/ad-sidebar"
import { InfoSection } from "@/components/info-section"

function App() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/30 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                <Calculator className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">Calculadora Finiquito</h1>
                <p className="text-xs text-muted-foreground">{"España 2026"}</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Shield className="h-4 w-4 text-primary" />
                <span>100% Gratuito</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FileText className="h-4 w-4 text-primary" />
                <span>Actualizado 2026</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content with Sidebars */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center">
          {/* Left Ad Sidebar */}
          <AdSidebar position="left" />

          {/* Main Content */}
          <main className="w-full max-w-2xl">
            {/* Hero Section */}
            <section className="text-center mb-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Actualizado para 2026
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 text-balance">
                Calcula tu Finiquito en España
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto text-pretty">
                Calcula de forma gratuita y precisa el finiquito que te corresponde. 
                Incluye salario pendiente, vacaciones y pagas extras.
              </p>
            </section>

            {/* Calculator */}
            <FiniquitoCalculator />

            {/* Bottom Ad Banner - Mobile */}
            <div className="mt-8 xl:hidden">
              <div className="ad-placeholder flex items-center justify-center rounded-lg min-h-[100px]">
                <div className="text-center p-4">
                  <p className="text-muted-foreground text-xs mb-1">Publicidad</p>
                  <p className="text-[10px] text-muted-foreground/70">{"Banner 320x100"}</p>
                </div>
              </div>
            </div>

            {/* Info Section */}
            <InfoSection />

            {/* Bottom Ad Banner - Mobile */}
            <div className="mt-8 xl:hidden">
              <div className="ad-placeholder flex items-center justify-center rounded-lg min-h-[100px]">
                <div className="text-center p-4">
                  <p className="text-muted-foreground text-xs mb-1">Publicidad</p>
                  <p className="text-[10px] text-muted-foreground/70">{"Banner 320x100"}</p>
                </div>
              </div>
            </div>
          </main>

          {/* Right Ad Sidebar */}
          <AdSidebar position="right" />
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>{"Calculadora de Finiquito 2026 - Herramienta gratuita para trabajadores en España"}</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-primary transition-colors">Aviso Legal</a>
              <a href="#" className="hover:text-primary transition-colors">Privacidad</a>
              <a href="#" className="hover:text-primary transition-colors">Contacto</a>
            </div>
          </div>
          <p className="text-xs text-muted-foreground/70 text-center mt-4">
            Esta calculadora es orientativa y no constituye asesoramiento legal. 
            Para casos específicos, consulta con un profesional.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
