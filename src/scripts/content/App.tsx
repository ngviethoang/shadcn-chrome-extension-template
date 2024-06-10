import { Button } from '@/components/ui/button'
import { RocketIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import MainPopup from './components/MainPopup'

const App = () => {
  const [isShowButton, setIsShowButton] = useState(false)
  const [isShowMainPopup, setIsShowMainPopup] = useState(false)

  const toggleIsOpen = () => {
    setIsShowMainPopup(!isShowMainPopup)
  }

  useEffect(() => {
    console.log('Gimme: App.tsx')
    setIsShowButton(true)
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      console.log('Gimme: Message Received', request, sender, sendResponse)
    })
  }, [])

  return (
    <>
      {isShowButton && (
        <div className="fixed bottom-2 right-2">
          <Button onClick={toggleIsOpen} size="icon" className="rounded-full">
            <RocketIcon />
          </Button>
        </div>
      )}
      {isShowMainPopup && <MainPopup />}
    </>
  )
}

export default App
