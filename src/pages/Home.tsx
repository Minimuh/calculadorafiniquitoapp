import { FiniquitoCalculator } from "@/components/finiquito-calculator"
import { AdSidebar } from "@/components/ad-sidebar"
import { InfoSection } from "@/components/info-section"

export function Home() {
  return (
    <>
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
    </>
  )
}
