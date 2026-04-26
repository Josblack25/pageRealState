import { ArrowRight, Award, Shield, Clock } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';



function Hero() {


    const benefits = [
        {
            icon: <Award className="w-6 h-6" />,
            title: 'Experiencia Comprobada',
            description: '15+ años en el sector inmobiliario'
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: 'Transparencia Total',
            description: 'Procesos claros y sin sorpresas'
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: 'Respuesta Rápida',
            description: 'Atención personalizada 24/7'
        }
    ];

    return (
        <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20">
            <div className="absolute inset-0 z-0">
                <ImageWithFallback
                    src="https://images.unsplash.com/photo-1756435292384-1bf32eff7baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
                    alt="Luxury modern house"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-amber-900/40"></div>
            </div>

            <div className="relative z-10 text-center text-white px-4 max-w-5xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 animate-in fade-in slide-in-from-top duration-700">
                    <span className="text-amber-300">✨ Experiencia Premium en Bienes Raíces</span>
                </div>
                <h1 className="text-5xl md:text-7xl mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                    Tu Próximo Hogar en <span className="bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">Banquecimeto</span> Empieza Aquí
                </h1>
                <p className="text-xl md:text-2xl mb-10 text-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                    Encuentra la propiedad de tus sueños con asesoramiento experto y personalizado
                </p>
                <div className="flex gap-4 justify-center flex-wrap animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                    <Button size="lg" className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105 group">
                        Ver Propiedades
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/50 hover:bg-white hover:text-amber-900 transition-all duration-300 hover:scale-105">
                        Agendar Consulta
                    </Button>
                </div>

                <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="text-center group">
                            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl mb-3 inline-block group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                                <div className="text-amber-300">{benefit.icon}</div>
                            </div>
                            <div className="text-sm font-semibold mb-1">{benefit.title}</div>
                            <div className="text-xs text-gray-300">{benefit.description}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-3 bg-white/70 rounded-full"></div>
                </div>
            </div>
        </section>
    )
}

export default Hero