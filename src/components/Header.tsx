import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { businessConfig } from '../config/business'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <header className="fixed w-full bg-white bg-opacity-95 backdrop-blur-md shadow-md z-50 border-b border-gray-100">
      <div className="container-custom flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">
              {businessConfig.business.name.charAt(0)}
            </span>
          </div>
          <div className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {businessConfig.business.name}
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="text-gray-700 hover:text-primary transition font-medium"
          >
            Inicio
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-gray-700 hover:text-primary transition font-medium"
          >
            Acerca de
          </button>
          <button 
            onClick={() => scrollToSection('gallery')} 
            className="text-gray-700 hover:text-primary transition font-medium"
          >
            Galería
          </button>
          <button 
            onClick={() => scrollToSection('location')} 
            className="text-gray-700 hover:text-primary transition font-medium"
          >
            Ubicación
          </button>
          <button 
            onClick={() => scrollToSection('social')} 
            className="btn-secondary"
          >
            Contacto
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl p-2 hover:bg-gray-100 rounded-lg transition" 
          onClick={toggleMenu}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="container-custom py-4 flex flex-col gap-4">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="text-left text-gray-700 hover:text-primary transition font-medium"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-left text-gray-700 hover:text-primary transition font-medium"
            >
              Acerca de
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="text-left text-gray-700 hover:text-primary transition font-medium"
            >
              Galería
            </button>
            <button 
              onClick={() => scrollToSection('location')} 
              className="text-left text-gray-700 hover:text-primary transition font-medium"
            >
              Ubicación
            </button>
            <button 
              onClick={() => scrollToSection('social')} 
              className="btn-secondary w-full text-center"
            >
              Contacto
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
