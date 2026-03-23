import { Link } from "react-router-dom"
import { ArrowLeft, Scale, FileText, AlertTriangle, Building2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AvisoLegal() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      {/* Back Navigation */}
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver a la calculadora
      </Link>

      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
            <Scale className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Aviso Legal</h1>
            <p className="text-sm text-muted-foreground">Calculadora de Finiquito España</p>
          </div>
        </div>
        <p className="text-muted-foreground">
          Ultima actualizacion: Enero 2026
        </p>
      </div>

      {/* Content */}
      <div className="space-y-6">
        {/* Identificación */}
        <Card className="card-glow bg-card/50 border-border/50">
          <CardContent className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <Building2 className="h-5 w-5 text-primary mt-0.5" />
              <h2 className="text-lg font-semibold text-foreground">1. Datos Identificativos</h2>
            </div>
            <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
              <p>
                En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad 
                de la Información y de Comercio Electrónico (LSSI-CE), se informa a los usuarios de lo siguiente:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong className="text-foreground">Denominación social:</strong> Calculadora Finiquito España</li>
                <li><strong className="text-foreground">Dominio web:</strong> calculadora-finiquito.es</li>
                <li><strong className="text-foreground">Actividad:</strong> Herramienta gratuita de cálculo orientativo de finiquitos</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Objeto y Ámbito */}
        <Card className="card-glow bg-card/50 border-border/50">
          <CardContent className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <FileText className="h-5 w-5 text-primary mt-0.5" />
              <h2 className="text-lg font-semibold text-foreground">2. Objeto y Ámbito de Aplicación</h2>
            </div>
            <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
              <p>
                El presente Aviso Legal regula el uso del sitio web Calculadora de Finiquito España, 
                incluyendo todos sus contenidos y servicios puestos a disposición de los usuarios.
              </p>
              <p>
                La utilización del sitio web atribuye la condición de usuario e implica la aceptación 
                plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Condiciones de Uso */}
        <Card className="card-glow bg-card/50 border-border/50">
          <CardContent className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <Scale className="h-5 w-5 text-primary mt-0.5" />
              <h2 className="text-lg font-semibold text-foreground">3. Condiciones de Uso</h2>
            </div>
            <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
              <p>
                El usuario se compromete a utilizar el sitio web de conformidad con la ley, el presente 
                Aviso Legal, las buenas costumbres y el orden público.
              </p>
              <p>El usuario se obliga a:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>No utilizar el sitio web con fines ilícitos o contrarios al contenido del presente Aviso Legal</li>
                <li>No dañar, deshabilitar, sobrecargar o deteriorar el sitio web</li>
                <li>No introducir virus informáticos, archivos defectuosos o cualquier otro software malicioso</li>
                <li>No intentar acceder a áreas restringidas del servidor</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Exención de Responsabilidad */}
        <Card className="card-glow bg-card/50 border-border/50 border-l-4 border-l-amber-500/50">
          <CardContent className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
              <h2 className="text-lg font-semibold text-foreground">4. Exención de Responsabilidad</h2>
            </div>
            <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
              <div className="p-4 bg-amber-500/5 rounded-lg border border-amber-500/20">
                <p className="font-medium text-foreground mb-2">Importante:</p>
                <p>
                  La calculadora de finiquito proporcionada en este sitio web tiene carácter meramente 
                  <strong className="text-foreground"> orientativo e informativo</strong>. Los resultados obtenidos 
                  NO constituyen asesoramiento legal, laboral ni fiscal.
                </p>
              </div>
              <p>En particular, no nos responsabilizamos de:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>La exactitud de los cálculos, que dependen de los datos introducidos por el usuario</li>
                <li>Las decisiones tomadas basándose en los resultados de la calculadora</li>
                <li>Las diferencias entre el resultado estimado y el finiquito real</li>
                <li>Posibles cambios legislativos que afecten a los cálculos</li>
                <li>Errores tipográficos o de programación</li>
              </ul>
              <p className="font-medium text-foreground">
                Para obtener un cálculo preciso y vinculante, recomendamos consultar con un profesional 
                cualificado (abogado laboralista, gestor o graduado social).
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Propiedad Intelectual */}
        <Card className="card-glow bg-card/50 border-border/50">
          <CardContent className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <FileText className="h-5 w-5 text-primary mt-0.5" />
              <h2 className="text-lg font-semibold text-foreground">5. Propiedad Intelectual e Industrial</h2>
            </div>
            <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
              <p>
                Todos los contenidos del sitio web, incluyendo textos, imágenes, código fuente, diseño gráfico, 
                logotipos y demás elementos, están protegidos por derechos de propiedad intelectual e industrial.
              </p>
              <p>
                Queda prohibida cualquier forma de reproducción, distribución, comunicación pública, 
                transformación o cualquier otra actividad similar con los contenidos de este sitio web 
                sin autorización expresa.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Legislación Aplicable */}
        <Card className="card-glow bg-card/50 border-border/50">
          <CardContent className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <Scale className="h-5 w-5 text-primary mt-0.5" />
              <h2 className="text-lg font-semibold text-foreground">6. Legislación Aplicable y Jurisdicción</h2>
            </div>
            <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
              <p>
                El presente Aviso Legal se rige por la legislación española vigente. Para la resolución 
                de cualquier controversia que pudiera derivarse del acceso o uso de este sitio web, 
                las partes se someten a los Juzgados y Tribunales competentes.
              </p>
              <p>
                Normativa de referencia aplicable:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información (LSSI-CE)</li>
                <li>Reglamento General de Protección de Datos (RGPD) - UE 2016/679</li>
                <li>Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos (LOPDGDD)</li>
                <li>Real Decreto Legislativo 2/2015, de 23 de octubre, Estatuto de los Trabajadores</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Modificaciones */}
        <Card className="card-glow bg-card/50 border-border/50">
          <CardContent className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <FileText className="h-5 w-5 text-primary mt-0.5" />
              <h2 className="text-lg font-semibold text-foreground">7. Modificaciones</h2>
            </div>
            <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
              <p>
                Nos reservamos el derecho de modificar el presente Aviso Legal en cualquier momento, 
                siendo efectivas dichas modificaciones desde su publicación en el sitio web. 
                El usuario es responsable de revisar periódicamente estos términos.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer Note */}
      <div className="mt-8 p-4 bg-muted/30 rounded-lg text-center">
        <p className="text-sm text-muted-foreground">
          Si tienes alguna pregunta sobre este Aviso Legal, puedes contactarnos a través 
          de los canales indicados en la sección de contacto.
        </p>
      </div>
    </div>
  )
}
