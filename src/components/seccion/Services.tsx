import React from 'react'
import { Home, Building2, TrendingUp, Users} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';



function Services() {


    const services = [
        {
            icon: <Home className="w-10 h-10" />,
            title: 'Compra de Inmuebles',
            description: 'Te ayudo a encontrar la propiedad perfecta que se ajuste a tus necesidades y presupuesto.'
        },
        {
            icon: <Building2 className="w-10 h-10" />,
            title: 'Venta de Propiedades',
            description: 'Maximizo el valor de tu propiedad con estrategias de marketing efectivas y negociación experta.'
        },
        {
            icon: <TrendingUp className="w-10 h-10" />,
            title: 'Inversión Inmobiliaria',
            description: 'Asesoramiento profesional para inversiones rentables en el mercado inmobiliario.'
        },
        {
            icon: <Users className="w-10 h-10" />,
            title: 'Consultoría Personalizada',
            description: 'Servicio personalizado adaptado a tus objetivos y situación específica.'
        }
    ];


    return (
        <section id="servicios" className="py-24 bg-gradient-to-b from-white to-amber-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="inline-block px-4 py-1 bg-amber-100 text-amber-800 rounded-full mb-4 text-sm">
                        Por qué elegir 4 Real Barinas
                    </div>
                    <h2 className="text-5xl mb-6 bg-gradient-to-r from-amber-900 to-amber-700 bg-clip-text text-transparent">Servicios Integrales</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">Soluciones completas para todas tus necesidades inmobiliarias</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className="text-center border-2 border-amber-100 hover:border-amber-300 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-2 group bg-white/80 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <CardHeader>
                                <div className="flex justify-center mb-4">
                                    <div className="bg-gradient-to-br from-amber-100 to-amber-50 p-5 rounded-2xl text-amber-700 group-hover:from-amber-700 group-hover:to-amber-800 group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                                        {service.icon}
                                    </div>
                                </div>
                                <CardTitle className="group-hover:text-amber-800 transition-colors duration-300">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="leading-relaxed">{service.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services