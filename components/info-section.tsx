"use client"

import { BookOpen, Scale, AlertCircle, HelpCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function InfoSection() {
  const faqs = [
    {
      question: "¿Qué es el finiquito?",
      answer:
        "El finiquito es la liquidación de las cantidades que la empresa debe al trabajador cuando finaliza la relación laboral, independientemente del motivo (baja voluntaria, despido, fin de contrato, etc.).",
    },
    {
      question: "¿Qué conceptos incluye el finiquito?",
      answer:
        "El finiquito incluye: salario pendiente del mes en curso, vacaciones generadas y no disfrutadas, parte proporcional de pagas extraordinarias (si no están prorrateadas), y cualquier otro concepto pendiente de pago.",
    },
    {
      question: "¿Cuántos días de vacaciones me corresponden?",
      answer:
        "Por ley, todo trabajador tiene derecho a un mínimo de 30 días naturales (o 22 días laborables) de vacaciones al año. Algunos convenios colectivos pueden establecer más días.",
    },
    {
      question: "¿Qué son las pagas extraordinarias?",
      answer:
        "Son dos pagas adicionales al salario mensual que se abonan normalmente en verano (junio/julio) y Navidad (diciembre). Si tu salario está en 12 pagas, ya están prorrateadas mensualmente.",
    },
    {
      question: "¿Es lo mismo finiquito que indemnización?",
      answer:
        "No. El finiquito es lo que te debe la empresa siempre que termina tu contrato. La indemnización solo se aplica en casos específicos como despidos improcedentes o fin de contratos temporales, y su cálculo es diferente.",
    },
    {
      question: "¿Tengo que firmar el finiquito?",
      answer:
        "Puedes firmar el finiquito añadiendo 'No conforme' si no estás de acuerdo con las cantidades. Tienes derecho a solicitar la presencia de un representante de los trabajadores.",
    },
  ]

  return (
    <section className="mt-12 space-y-6">
      {/* Info Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-card/50 border-border/30">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-primary" />
              <CardTitle className="text-base">Base Legal</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Regulado por el Estatuto de los Trabajadores (art. 49) y los convenios colectivos aplicables.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border/30">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <CardTitle className="text-base">Datos 2026</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Cálculos actualizados según la normativa vigente en España para el año 2026.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border/30">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-primary" />
              <CardTitle className="text-base">Importante</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Este cálculo es orientativo. Consulta con un profesional para casos específicos.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* FAQs */}
      <Card className="bg-card/50 border-border/30">
        <CardHeader>
          <div className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-primary" />
            <CardTitle>Preguntas Frecuentes</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/30">
                <AccordionTrigger className="text-left hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </section>
  )
}
