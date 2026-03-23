import { Link } from "react-router-dom"
import { ArrowLeft, Shield, Cookie, Eye, Lock, UserCheck, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Privacidad() {
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
            <Shield className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Política de Privacidad</h1>
            <p className="text-sm text-muted-foreground">Calculadora de Finiquito España</p>
          </div>
        </div>
        <p className="text-muted-foreground">
          Ultima actualizacion: Enero 2026
        </p>
      </div>

      {/* Content */}
      <div className="space-y-6">
        {/* Introducción */}
        <Card className="card-glow bg-card/50 border-border/50">
          <CardContent className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <Lock className="h-5 w-5 text-primary mt-0.5" />
              <h2 className="text-lg font-semibold text-foreground">1. Información General</h2>
            </div>
            <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
              <p>
                En Calculadora de Finiquito España nos tomamos muy en serio la protección de tus datos 
                personales. Esta Política de Privacidad explica cómo recopilamos, utilizamos y protegemos 
                la información que nos proporcionas.
              </p>
              <p>
                Esta política ha sido redactada de conformidad con el Reglamento General de Protección 
                de Datos (RGPD) - Reglamento (UE) 2016/679 y la Ley Orgánica 3/2018, de 5 de diciembre, 
                de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Datos que Recopilamos */}
        <Card className="card-glow bg-card/50 border-border/50">
          <CardContent className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <Eye className="h-5 w-5 text-primary mt-0.5" />
              <h2 className="text-lg font-semibold text-foreground">2. Datos que Recopilamos</h2>
            </div>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="font-medium text-foreground mb-2">Nuestra calculadora no almacena datos personales</p>
                <p>
                  Los datos que introduces en la calculadora (salario, fechas, etc.) se procesan 
                  exclusivamente en tu navegador y NO se envían ni almacenan en nuestros servidores.
                </p>
              </div>

              <p><strong className="text-foreground">Sin embargo, podemos recopilar:</strong></p>
              
              <div className="space-y-3">
                <div className="p-3 bg-muted/30 rounded-lg">
                  <p className="font-medium text-foreground mb-1">Datos de navegación</p>
                  <ul className="list-disc list-inside space-y-1 ml-2 text-xs">
                    <li>Dirección IP (anonimizada)</li>
                    <li>Tipo de navegador y dispositivo</li>
                    <li>Páginas visitadas y tiempo de permanencia</li>
                    <li>Fuente de tráfico (cómo llegaste a la web)</li>
                  </ul>
                </div>
                
                <div className="p-3 bg-muted/30 rounded-lg">
                  <p className="font-medium text-foreground mb-1">Datos de contacto (si nos escribes)</p>
                  <ul className="list-disc list-inside space-y-1 ml-2 text-xs">
                    <li>Nombre y correo electrónico</li>
                    <li>Contenido del mensaje</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Finalidad */}
        <Card className="card-glow bg-card/50 border-border/50">
          <CardContent className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <UserCheck className="h-5 w-5 text-primary mt-0.5" />
              <h2 className="text-lg font-semibold text-foreground">3. Finalidad del Tratamiento</h2>
            </div>
            <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
              <p>Los datos recopilados se utilizan para:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong className="text-foreground">Mejorar el servicio:</strong> Analizar el uso de la web para optimizar la experiencia del usuario</li>
                <li><strong className="text-foreground">Análisis estadístico:</strong> Comprender cómo los usuarios interactúan con nuestra calculadora</li>
                <li><strong className="text-foreground">Responder consultas:</strong> Atender las comunicaciones que nos envíes</li>
                <li><strong className="text-foreground">Cumplimiento legal:</strong> Cumplir con obligaciones legales cuando sea necesario</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Cookies */}
        <Card className="card-glow bg-card/50 border-border/50">
          <CardContent className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <Cookie className="h-5 w-5 text-primary mt-0.5" />
              <h2 className="text-lg font-semibold text-foreground">4. Política de Cookies</h2>
            </div>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                Nuestro sitio web utiliza cookies para mejorar tu experiencia de navegación. 
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo.
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-2 font-medium text-foreground">Tipo</th>
                      <th className="text-left p-2 font-medium text-foreground">Finalidad</th>
                      <th className="text-left p-2 font-medium text-foreground">Duración</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/50">
                    <tr>
                      <td className="p-2">Técnicas</td>
                      <td className="p-2">Funcionamiento básico de la web</td>
                      <td className="p-2">Sesión</td>
                    </tr>
                    <tr>
                      <td className="p-2">Analíticas</td>
                      <td className="p-2">Estadísticas de uso (Google Analytics)</td>
                      <td className="p-2">2 años</td>
                    </tr>
                    <tr>
                      <td className="p-2">Publicitarias</td>
                      <td className="p-2">Mostrar anuncios relevantes (Google Ads)</td>
                      <td className="p-2">Variable</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                Puedes configurar tu navegador para rechazar cookies o para que te avise cuando 
                se envíen. Sin embargo, algunas funcionalidades pueden verse afectadas.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Terceros */}
        <Card className="card-glow bg-card/50 border-border/50">
          <CardContent className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <Shield className="h-5 w-5 text-primary mt-0.5" />
              <h2 className="text-lg font-semibold text-foreground">5. Servicios de Terceros</h2>
            </div>
            <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
              <p>Utilizamos los siguientes servicios de terceros:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  <strong className="text-foreground">Google Analytics:</strong> Para analíticas web. 
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                    Política de privacidad de Google
                  </a>
                </li>
                <li>
                  <strong className="text-foreground">Google AdSense:</strong> Para mostrar anuncios. 
                  <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                    Cómo usa Google los datos
                  </a>
                </li>
              </ul>
              <p>
                Estos servicios pueden recopilar información de forma independiente. Te recomendamos 
                revisar sus políticas de privacidad.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Derechos ARCO */}
        <Card className="card-glow bg-card/50 border-border/50 border-l-4 border-l-primary">
          <CardContent className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <UserCheck className="h-5 w-5 text-primary mt-0.5" />
              <h2 className="text-lg font-semibold text-foreground">6. Tus Derechos (ARCO-POL)</h2>
            </div>
            <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
              <p>
                De acuerdo con el RGPD y la LOPDGDD, tienes derecho a:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="p-3 bg-primary/5 rounded-lg">
                  <p className="font-medium text-foreground text-xs">Acceso</p>
                  <p className="text-xs">Saber qué datos tenemos sobre ti</p>
                </div>
                <div className="p-3 bg-primary/5 rounded-lg">
                  <p className="font-medium text-foreground text-xs">Rectificación</p>
                  <p className="text-xs">Corregir datos incorrectos</p>
                </div>
                <div className="p-3 bg-primary/5 rounded-lg">
                  <p className="font-medium text-foreground text-xs">Cancelación</p>
                  <p className="text-xs">Eliminar tus datos</p>
                </div>
                <div className="p-3 bg-primary/5 rounded-lg">
                  <p className="font-medium text-foreground text-xs">Oposición</p>
                  <p className="text-xs">Oponerte al tratamiento</p>
                </div>
                <div className="p-3 bg-primary/5 rounded-lg">
                  <p className="font-medium text-foreground text-xs">Portabilidad</p>
                  <p className="text-xs">Recibir tus datos en formato electrónico</p>
                </div>
                <div className="p-3 bg-primary/5 rounded-lg">
                  <p className="font-medium text-foreground text-xs">Limitación</p>
                  <p className="text-xs">Restringir el uso de tus datos</p>
                </div>
              </div>
              <p>
                Para ejercer estos derechos, contacta con nosotros indicando tu solicitud. 
                También puedes presentar una reclamación ante la 
                <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                  Agencia Española de Protección de Datos (AEPD)
                </a>.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Seguridad */}
        <Card className="card-glow bg-card/50 border-border/50">
          <CardContent className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <Lock className="h-5 w-5 text-primary mt-0.5" />
              <h2 className="text-lg font-semibold text-foreground">7. Medidas de Seguridad</h2>
            </div>
            <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
              <p>
                Implementamos medidas técnicas y organizativas para proteger tus datos:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Conexión segura mediante HTTPS (certificado SSL)</li>
                <li>Procesamiento local de datos en la calculadora (sin envío a servidores)</li>
                <li>Servidores protegidos y actualizados</li>
                <li>Acceso restringido a la información</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Contacto */}
        <Card className="card-glow bg-card/50 border-border/50">
          <CardContent className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <Mail className="h-5 w-5 text-primary mt-0.5" />
              <h2 className="text-lg font-semibold text-foreground">8. Contacto</h2>
            </div>
            <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
              <p>
                Si tienes preguntas sobre esta Política de Privacidad o deseas ejercer tus derechos, 
                puedes contactarnos a través de:
              </p>
              <div className="p-4 bg-muted/30 rounded-lg">
                <p><strong className="text-foreground">Email:</strong> privacidad@calculadora-finiquito.es</p>
              </div>
              <p>
                Responderemos a tu solicitud en un plazo máximo de 30 días.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Modificaciones */}
        <Card className="card-glow bg-card/50 border-border/50">
          <CardContent className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <Shield className="h-5 w-5 text-primary mt-0.5" />
              <h2 className="text-lg font-semibold text-foreground">9. Modificaciones</h2>
            </div>
            <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
              <p>
                Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. 
                Los cambios serán efectivos desde su publicación en esta página. Te recomendamos 
                revisar periódicamente esta política.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer Note */}
      <div className="mt-8 p-4 bg-muted/30 rounded-lg text-center">
        <p className="text-sm text-muted-foreground">
          Tu privacidad es importante para nosotros. Si tienes alguna duda, no dudes en contactarnos.
        </p>
      </div>
    </div>
  )
}
