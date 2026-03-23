"use client"

interface AdSidebarProps {
  position: "left" | "right"
}

export function AdSidebar({ position }: AdSidebarProps) {
  return (
    <aside
      className={`hidden xl:flex flex-col gap-4 w-[160px] shrink-0 ${
        position === "left" ? "pr-4" : "pl-4"
      }`}
    >
      {/* Banner vertical 160x600 */}
      <div className="ad-placeholder flex items-center justify-center rounded-lg h-[600px] sticky top-4">
        <div className="text-center p-4">
          <p className="text-muted-foreground text-xs mb-1">Publicidad</p>
          <p className="text-[10px] text-muted-foreground/70">160x600</p>
          {/* 
            Para integrar Google Ads, reemplaza este div con:
            <ins className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
              data-ad-slot="XXXXXXXXXX"
              data-ad-format="vertical"
            />
          */}
        </div>
      </div>
    </aside>
  )
}
