import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { Calculator, FileText, Shield } from "lucide-react"
import { Home } from "./pages/Home"
import { AvisoLegal } from "./pages/AvisoLegal"
import { Privacidad } from "./pages/Privacidad"

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background font-sans flex flex-col">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/30 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                <Calculator className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">Calculadora Finiquito</h1>
                <p className="text-xs text-muted-foreground">{"España 2026"}</p>
              </div>
            </Link>
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

      {/* Main Content */}
      <div className="flex-1">
        {children}
      </div>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>{"Calculadora de Finiquito 2026 - Herramienta gratuita para trabajadores en España"}</p>
            <nav className="flex items-center gap-4">
              <Link to="/aviso-legal" className="hover:text-primary transition-colors">
                Aviso Legal
              </Link>
              <Link to="/privacidad" className="hover:text-primary transition-colors">
                Privacidad
              </Link>
            </nav>
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

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/privacidad" element={<Privacidad />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
