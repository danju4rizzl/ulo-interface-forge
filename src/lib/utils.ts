import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function smoothScrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    const headerHeight = 120 // Account for fixed header height
    const elementPosition = element.offsetTop - headerHeight

    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  }
}
