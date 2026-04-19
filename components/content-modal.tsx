"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface AdModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdModal({ isOpen, onClose }: AdModalProps) {
  const [countdown, setCountdown] = useState(5)
  const [canClose, setCanClose] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setCountdown(5)
      setCanClose(false)

      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer)
            setCanClose(true)
            return 0
          }
          return prev - 1
        })
      }, 1000)

      return () => clearInterval(timer)
    }
  }, [isOpen])

  return (
    <Dialog open={isOpen} onOpenChange={() => canClose && onClose()}>
      <DialogContent showCloseButton={false} className="sm:max-w-lg bg-card border-border/50 p-0 overflow-hidden">
        <DialogHeader className="p-4 pb-2 border-b border-border/30">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-sm text-muted-foreground">Publicidad</DialogTitle>
            <button
              onClick={onClose}
              disabled={!canClose}
              className="flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-muted/50 hover:bg-muted text-foreground"
            >
              {canClose ? (
                <>
                  <X className="h-4 w-4" />
                  Cerrar
                </>
              ) : (
                <>Cerrar en {countdown}s</>
              )}
            </button>
          </div>
        </DialogHeader>
        <div className="p-4">
          {/* Espacio para Google Ads - Banner 300x250 */}
          <div className="content-placeholder flex items-center justify-center rounded-lg min-h-[250px]">
            <div className="text-center p-6">
              <p className="text-muted-foreground text-sm mb-2">Espacio publicitario</p>
              <p className="text-xs text-muted-foreground/70">Google Ads 300x250</p>
              {/* 
                Para integrar Google Ads, reemplaza este div con:
                <ins className="adsbygoogle"
                  style={{ display: 'block' }}
                  data-content-client="ca-pub-XXXXXXXXXXXXXXXX"
                  data-content-slot="XXXXXXXXXX"
                  data-content-format="rectangle"
                />
              */}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
