"use client"

import { useState } from "react"
import { Calculator, Calendar, Euro, Briefcase, Info, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { AdModal } from "./content-modal"
import { ResultsCard } from "./results-card"

interface FormData {
  salarioBrutoMensual: string
  fechaInicio: string
  fechaFin: string
  diasVacacionesAnuales: string
  diasVacacionesDisfrutados: string
  tipoPagas: "12" | "14"
  ultimaPagaExtra: string
}

interface Resultado {
  salarioPendiente: number
  vacacionesNoDisfrutadas: number
  pagasExtrasProporcionales: number
  total: number
  detalles: {
    diasTrabajadosUltimoMes: number
    salarioDiario: number
    diasVacacionesPendientes: number
    mesesPagaExtra: number
  }
}

export function FiniquitoCalculator() {
  const [formData, setFormData] = useState<FormData>({
    salarioBrutoMensual: "",
    fechaInicio: "",
    fechaFin: "",
    diasVacacionesAnuales: "30",
    diasVacacionesDisfrutados: "0",
    tipoPagas: "14",
    ultimaPagaExtra: "",
  })
  
  const [showAdModal, setShowAdModal] = useState(false)
  const [resultado, setResultado] = useState<Resultado | null>(null)
  const [showResults, setShowResults] = useState(false)

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setShowResults(false)
    setResultado(null)
  }

  const calcularFiniquito = () => {
    const salarioBruto = parseFloat(formData.salarioBrutoMensual) || 0
    const fechaInicio = new Date(formData.fechaInicio)
    const fechaFin = new Date(formData.fechaFin)
    const diasVacacionesAnuales = parseInt(formData.diasVacacionesAnuales) || 30
    const diasVacacionesDisfrutados = parseInt(formData.diasVacacionesDisfrutados) || 0

    if (!salarioBruto || !formData.fechaInicio || !formData.fechaFin) {
      return null
    }

    // Salario diario (dividido entre 30 días)
    const salarioDiario = salarioBruto / 30

    // Días trabajados en el último mes
    const ultimoDiaMes = new Date(fechaFin.getFullYear(), fechaFin.getMonth() + 1, 0).getDate()
    const diaDelMes = fechaFin.getDate()
    const diasTrabajadosUltimoMes = diaDelMes

    // Salario pendiente del último mes
    const salarioPendiente = salarioDiario * diasTrabajadosUltimoMes

    // Cálculo de vacaciones no disfrutadas
    const inicioAno = new Date(fechaFin.getFullYear(), 0, 1)
    const diasDelAnoTrabajados = Math.floor((fechaFin.getTime() - inicioAno.getTime()) / (1000 * 60 * 60 * 24)) + 1
    const vacacionesGeneradas = (diasDelAnoTrabajados / 365) * diasVacacionesAnuales
    const diasVacacionesPendientes = Math.max(0, vacacionesGeneradas - diasVacacionesDisfrutados)
    const vacacionesNoDisfrutadas = diasVacacionesPendientes * salarioDiario

    // Cálculo de pagas extraordinarias proporcionales
    let pagasExtrasProporcionales = 0
    let mesesPagaExtra = 0

    if (formData.tipoPagas === "14") {
      // Paga de verano (generalmente se cobra en junio, se genera desde enero)
      // Paga de Navidad (generalmente se cobra en diciembre, se genera desde julio)
      const mesActual = fechaFin.getMonth() + 1 // 1-12
      
      // Meses trabajados para la paga de verano (enero a junio)
      let mesesPagaVerano = 0
      if (mesActual <= 6) {
        mesesPagaVerano = mesActual
      }
      
      // Meses trabajados para la paga de Navidad (julio a diciembre)
      let mesesPagaNavidad = 0
      if (mesActual > 6) {
        mesesPagaNavidad = mesActual - 6
      }
      
      // Si la última paga extra fue en cierta fecha, ajustamos
      if (formData.ultimaPagaExtra) {
        const ultimaPaga = new Date(formData.ultimaPagaExtra)
        const mesPaga = ultimaPaga.getMonth() + 1
        
        if (mesPaga <= 6 && mesActual <= 6) {
          // Ya cobró la paga de verano
          mesesPagaVerano = 0
        } else if (mesPaga > 6 && mesActual > 6) {
          // Ya cobró la paga de Navidad
          mesesPagaNavidad = mesActual - mesPaga
        }
      }
      
      mesesPagaExtra = mesesPagaVerano + mesesPagaNavidad
      
      // Cada paga extra es un salario mensual, proporcional a 6 meses
      pagasExtrasProporcionales = (salarioBruto / 6) * mesesPagaExtra
    }

    const total = salarioPendiente + vacacionesNoDisfrutadas + pagasExtrasProporcionales

    return {
      salarioPendiente,
      vacacionesNoDisfrutadas,
      pagasExtrasProporcionales,
      total,
      detalles: {
        diasTrabajadosUltimoMes,
        salarioDiario,
        diasVacacionesPendientes,
        mesesPagaExtra,
      },
    }
  }

  const handleCalcular = () => {
    const result = calcularFiniquito()
    if (result) {
      setResultado(result)
      setShowAdModal(true)
    }
  }

  const handleAdModalClose = () => {
    setShowAdModal(false)
    setShowResults(true)
  }

  const isFormValid = formData.salarioBrutoMensual && formData.fechaInicio && formData.fechaFin

  return (
    <TooltipProvider>
      <div className="space-y-6">
        <Card className="card-glow border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                <Calculator className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl">Datos del Contrato</CardTitle>
                <CardDescription>Introduce los datos de tu relación laboral</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Salario Bruto */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="salario" className="text-sm font-medium">
                  Salario Bruto Mensual
                </Label>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p>El salario bruto mensual antes de impuestos y deducciones. Puedes encontrarlo en tu nómina.</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="relative">
                <Euro className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="salario"
                  type="number"
                  placeholder="2.000"
                  value={formData.salarioBrutoMensual}
                  onChange={(e) => handleInputChange("salarioBrutoMensual", e.target.value)}
                  className="pl-10 bg-input/50 border-border/50 focus:border-primary/50 transition-colors"
                />
              </div>
            </div>

            {/* Fechas */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="fechaInicio" className="text-sm font-medium">
                    Fecha de Inicio
                  </Label>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Fecha en la que comenzaste a trabajar</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="fechaInicio"
                    type="date"
                    value={formData.fechaInicio}
                    onChange={(e) => handleInputChange("fechaInicio", e.target.value)}
                    className="pl-10 bg-input/50 border-border/50 focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="fechaFin" className="text-sm font-medium">
                    Fecha de Fin
                  </Label>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Último día de trabajo en la empresa</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="fechaFin"
                    type="date"
                    value={formData.fechaFin}
                    onChange={(e) => handleInputChange("fechaFin", e.target.value)}
                    className="pl-10 bg-input/50 border-border/50 focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Vacaciones */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="diasVacaciones" className="text-sm font-medium">
                    Días de Vacaciones Anuales
                  </Label>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Por ley son mínimo 30 días naturales (22 laborables)</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <Input
                  id="diasVacaciones"
                  type="number"
                  placeholder="30"
                  value={formData.diasVacacionesAnuales}
                  onChange={(e) => handleInputChange("diasVacacionesAnuales", e.target.value)}
                  className="bg-input/50 border-border/50 focus:border-primary/50 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="diasDisfrutados" className="text-sm font-medium">
                    Días ya Disfrutados
                  </Label>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Días de vacaciones que ya has tomado este año</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <Input
                  id="diasDisfrutados"
                  type="number"
                  placeholder="0"
                  value={formData.diasVacacionesDisfrutados}
                  onChange={(e) => handleInputChange("diasVacacionesDisfrutados", e.target.value)}
                  className="bg-input/50 border-border/50 focus:border-primary/50 transition-colors"
                />
              </div>
            </div>

            {/* Pagas Extra */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="tipoPagas" className="text-sm font-medium">
                    Tipo de Pagas
                  </Label>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p>12 pagas = pagas prorrateadas. 14 pagas = 2 pagas extras (verano y Navidad)</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <Select
                  value={formData.tipoPagas}
                  onValueChange={(value) => handleInputChange("tipoPagas", value as "12" | "14")}
                >
                  <SelectTrigger className="bg-input/50 border-border/50 focus:border-primary/50 transition-colors">
                    <SelectValue placeholder="Selecciona tipo de pagas" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="14">14 pagas (con extras)</SelectItem>
                    <SelectItem value="12">12 pagas (prorrateadas)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {formData.tipoPagas === "14" && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="ultimaPaga" className="text-sm font-medium">
                      Última Paga Extra
                    </Label>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Fecha de la última paga extraordinaria recibida</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="ultimaPaga"
                      type="date"
                      value={formData.ultimaPagaExtra}
                      onChange={(e) => handleInputChange("ultimaPagaExtra", e.target.value)}
                      className="pl-10 bg-input/50 border-border/50 focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Botón Calcular */}
            <button
              onClick={handleCalcular}
              disabled={!isFormValid}
              className="gradient-btn w-full rounded-lg px-6 py-3 font-semibold text-primary-foreground transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none flex items-center justify-center gap-2"
            >
              <Sparkles className="h-5 w-5" />
              Calcular Finiquito
            </button>
          </CardContent>
        </Card>

        {/* Resultados */}
        {showResults && resultado && <ResultsCard resultado={resultado} />}

        {/* Modal de Anuncio */}
        <AdModal isOpen={showAdModal} onClose={handleAdModalClose} />
      </div>
    </TooltipProvider>
  )
}
