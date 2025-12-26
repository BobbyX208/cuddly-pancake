import { useState } from 'react'

export const useCollapsible = (initialState = false) => {
  const [isExpanded, setIsExpanded] = useState(initialState)

  const toggle = () => {
    setIsExpanded(prev => !prev)
  }

  const expand = () => {
    setIsExpanded(true)
  }

  const collapse = () => {
    setIsExpanded(false)
  }

  return {
    isExpanded,
    toggle,
    expand,
    collapse
  }
}