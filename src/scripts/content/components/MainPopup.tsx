import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import React, { useEffect } from 'react'

export default function MainPopup() {
  useEffect(() => {
    console.log('Gimme: MainPopup.tsx')
  }, [])

  return (
    <div className="fixed top-0 right-0 w-[30vw] h-[calc(100vh_-_3.5rem)] p-5 pr-0 rounded-xl border bg-card text-card-foreground shadow z-[2147483666] overflow-auto">
      <ScrollArea className="h-full pr-5">
        <h3 className="font-semibold leading-none tracking-tight">Welcome</h3>
        <div className="mt-3">Content</div>
      </ScrollArea>
    </div>
  )
}
