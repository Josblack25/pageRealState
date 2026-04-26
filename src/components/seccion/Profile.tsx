import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

function Profile() {
    return (

        <section id="sobre-mi" className="py-24 bg-gradient-to-b from-amber-50/50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="animate-in fade-in slide-in-from-left duration-700">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1770199105692-9e52ff137cad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                                alt="Real estate professional"
                                className="relative rounded-3xl shadow-2xl w-full transform -rotate-3 group-hover:-rotate-0 transition-transform duration-500"
                            />
                        </div>
                    </div>
                    <div className="animate-in fade-in slide-in-from-right duration-700">
                        <div className="inline-block px-4 py-1 bg-amber-100 text-amber-800 rounded-full mb-4 text-sm">
                            Conoce a 4 Real Barinas
                        </div>
                        <h2 className="text-5xl mb-6 bg-gradient-to-r from-amber-900 to-amber-700 bg-clip-text text-transparent">Tu Aliado en el Mundo Inmobiliario</h2>
                        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                            Con más de 15 años de experiencia en el sector inmobiliario, me especializo en conectar a las personas con sus hogares ideales. Mi compromiso es brindar un servicio personalizado y profesional que supere tus expectativas.
                        </p>
                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                            Cuento con certificaciones profesionales y un profundo conocimiento del mercado local. Mi objetivo es hacer que tu experiencia de compra o venta sea transparente, eficiente y exitosa.
                        </p>
                        <div className="grid grid-cols-3 gap-6 mb-8">
                            <div className="text-center group">
                                <div className="bg-gradient-to-br from-amber-100 to-amber-50 p-6 rounded-2xl group-hover:from-amber-700 group-hover:to-amber-800 transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl">
                                    <div className="text-4xl mb-2 bg-gradient-to-r from-amber-700 to-amber-600 bg-clip-text text-transparent group-hover:from-white group-hover:to-white">500+</div>
                                    <div className="text-sm text-gray-700 group-hover:text-white transition-colors">Propiedades Vendidas</div>
                                </div>
                            </div>
                            <div className="text-center group">
                                <div className="bg-gradient-to-br from-amber-100 to-amber-50 p-6 rounded-2xl group-hover:from-amber-700 group-hover:to-amber-800 transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl">
                                    <div className="text-4xl mb-2 bg-gradient-to-r from-amber-700 to-amber-600 bg-clip-text text-transparent group-hover:from-white group-hover:to-white">15+</div>
                                    <div className="text-sm text-gray-700 group-hover:text-white transition-colors">Años de Experiencia</div>
                                </div>
                            </div>
                            <div className="text-center group">
                                <div className="bg-gradient-to-br from-amber-100 to-amber-50 p-6 rounded-2xl group-hover:from-amber-700 group-hover:to-amber-800 transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl">
                                    <div className="text-4xl mb-2 bg-gradient-to-r from-amber-700 to-amber-600 bg-clip-text text-transparent group-hover:from-white group-hover:to-white">98%</div>
                                    <div className="text-sm text-gray-700 group-hover:text-white transition-colors">Clientes Satisfechos</div>
                                </div>
                            </div>
                        </div>
                        <Button size="lg" className="bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            Conoce Más Sobre Mí
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile