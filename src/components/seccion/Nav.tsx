import React from 'react';
import { useState, useEffect } from 'react';
import { Home, Menu, X } from 'lucide-react';
import { Button } from '../ui/button';


export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <div className="bg-gradient-to-br from-amber-600 to-amber-800 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                            <Home className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-xl bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent">Premium Estates</span>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        <a href="#inicio" className="text-gray-700 hover:text-amber-700 transition-all duration-300 relative group">
                            Inicio
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 group-hover:w-full transition-all duration-300"></span>
                        </a>
                        <a href="#servicios" className="text-gray-700 hover:text-amber-700 transition-all duration-300 relative group">
                            Servicios
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 group-hover:w-full transition-all duration-300"></span>
                        </a>
                        <a href="#propiedades" className="text-gray-700 hover:text-amber-700 transition-all duration-300 relative group">
                            Propiedades
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 group-hover:w-full transition-all duration-300"></span>
                        </a>
                        <a href="#sobre-mi" className="text-gray-700 hover:text-amber-700 transition-all duration-300 relative group">
                            Sobre Mí
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 group-hover:w-full transition-all duration-300"></span>
                        </a>
                        <a href="#contacto">
                            <Button className="bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                Contactar
                            </Button>
                        </a>
                    </div>

                    <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-md border-t animate-in slide-in-from-top duration-300">
                    <div className="px-4 py-4 space-y-3">
                        <a href="#inicio" className="block py-2 text-gray-700 hover:text-amber-700 transition-colors" onClick={() => setMenuOpen(false)}>Inicio</a>
                        <a href="#servicios" className="block py-2 text-gray-700 hover:text-amber-700 transition-colors" onClick={() => setMenuOpen(false)}>Servicios</a>
                        <a href="#propiedades" className="block py-2 text-gray-700 hover:text-amber-700 transition-colors" onClick={() => setMenuOpen(false)}>Propiedades</a>
                        <a href="#sobre-mi" className="block py-2 text-gray-700 hover:text-amber-700 transition-colors" onClick={() => setMenuOpen(false)}>Sobre Mí</a>
                        <a href="#contacto" className="block py-2" onClick={() => setMenuOpen(false)}>
                            <Button className="w-full bg-gradient-to-r from-amber-700 to-amber-800">Contactar</Button>
                        </a>
                    </div>
                </div>
            )}
        </nav>

    )
}