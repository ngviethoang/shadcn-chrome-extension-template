import { Button } from '@/components/ui/button'
import { RocketIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    console.log('Gimme: App.tsx')
    setIsOpen(true)
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      console.log('Gimme: Message Received', request, sender, sendResponse)
    })
  }, [])

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-4 right-4">
          <Button onClick={toggleIsOpen} size="icon" className="rounded-full">
            <RocketIcon />
          </Button>
        </div>
      )}
    </>
  )
}

export default App
