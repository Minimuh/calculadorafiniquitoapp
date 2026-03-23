"use client"

import { Euro, Calendar, Gift, TrendingUp, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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

interface ResultsCardProps {
  resultado: Resultado
}

export function ResultsCard({ resultado }: ResultsCardProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
    }).format(value)
  }

  const items = [
    {
      icon: Euro,
      label: "Salario Pendiente",
      value: resultado.salarioPendiente,
      detail: `${resultado.detalles.diasTrabajadosUltimoMes} días trabajados`,
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400",
    },
    {
      icon: Calendar,
      label: "Vacaciones No Disfrutadas",
      value: resultado.vacacionesNoDisfrutadas,
      detail: `${resultado.detalles.diasVacacionesPendientes.toFixed(1)} días pendientes`,
      color: "from-teal-500/20 to-emerald-500/20",
      iconColor: "text-teal-400",
    },
    {
      icon: Gift,
      label: "Pagas Extras Proporcionales",
      value: resultado.pagasExtrasProporcionales,
      detail: `${resultado.detalles.mesesPagaExtra} meses generados`,
      color: "from-cyan-500/20 to-blue-500/20",
      iconColor: "text-cyan-400",
    },
  ]

  return (
    <Card className="card-glow border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden">
      <CardHeader className="pb-4 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
            <CheckCircle className="h-5 w-5 text-primary" />
          </div>
          <div>
            <CardTitle className="text-xl">Resultado del Finiquito</CardTitle>
            <p className="text-sm text-muted-foreground">Desglose detallado de tu finiquito</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        {/* Items individuales */}
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-between rounded-lg bg-gradient-to-r ${item.color} p-4 border border-border/30`}
          >
            <div className="flex items-center gap-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-background/50 ${item.iconColor}`}>
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.detail}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-foreground">{formatCurrency(item.value)}</p>
            </div>
          </div>
        ))}

        {/* Total */}
        <div className="mt-6 rounded-xl bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 p-5 border border-primary/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-lg font-semibold text-foreground">Total Finiquito Bruto</p>
                <p className="text-sm text-muted-foreground">Antes de impuestos y retenciones</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-primary">{formatCurrency(resultado.total)}</p>
            </div>
          </div>
        </div>

        {/* Información adicional */}
        <div className="mt-4 rounded-lg bg-muted/30 p-4 border border-border/30">
          <h4 className="text-sm font-semibold text-foreground mb-2">Datos utilizados:</h4>
          <div className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            <p>Salario diario: {formatCurrency(resultado.detalles.salarioDiario)}</p>
            <p>Días último mes: {resultado.detalles.diasTrabajadosUltimoMes}</p>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-muted-foreground text-center mt-4 px-4">
          Este cálculo es orientativo. El finiquito final puede variar según convenio colectivo, 
          acuerdos individuales y retenciones aplicables. Datos actualizados para 2026.
        </p>
      </CardContent>
    </Card>
  )
}
