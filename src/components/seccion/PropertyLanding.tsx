import { MapPin, Bed, Bath, Maximize, ArrowRight} from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';

function PropertyLanding() {

    const properties = [
        {
            id: 1,
            title: 'Casa Moderna de Lujo',
            price: '€850,000',
            location: 'Madrid, España',
            bedrooms: 4,
            bathrooms: 3,
            sqm: 250,
            image: 'https://images.unsplash.com/photo-1756435292384-1bf32eff7baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
        },
        {
            id: 2,
            title: 'Apartamento Elegante',
            price: '€425,000',
            location: 'Barcelona, España',
            bedrooms: 3,
            bathrooms: 2,
            sqm: 150,
            image: 'https://images.unsplash.com/photo-1639405091806-01e8ab3cd13a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
        },
        {
            id: 3,
            title: 'Residencia Premium',
            price: '€1,200,000',
            location: 'Valencia, España',
            bedrooms: 5,
            bathrooms: 4,
            sqm: 350,
            image: 'https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
        }
    ];

    return (
        <section id="propiedades" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="inline-block px-4 py-1 bg-amber-100 text-amber-800 rounded-full mb-4 text-sm">
                        Catálogo de Propiedades
                    </div>
                    <h2 className="text-5xl mb-6 bg-gradient-to-r from-amber-900 to-amber-700 bg-clip-text text-transparent">Propiedades Destacadas</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">Descubre nuestra selección exclusiva de inmuebles premium</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map((property, index) => (
                        <Card
                            key={property.id}
                            className="overflow-hidden border-2 border-gray-100 hover:border-amber-200 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover:-translate-y-3 group bg-white animate-in fade-in slide-in-from-bottom-4 duration-700"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="relative h-72 overflow-hidden">
                                <ImageWithFallback
                                    src={property.image}
                                    alt={property.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-5 py-2 rounded-full shadow-lg backdrop-blur-sm">
                                    {property.price}
                                </div>
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-amber-800 px-4 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    Disponible
                                </div>
                            </div>
                            <CardHeader>
                                <CardTitle className="group-hover:text-amber-800 transition-colors duration-300">{property.title}</CardTitle>
                                <CardDescription className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4 text-amber-600" />
                                    {property.location}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-gray-100">
                                    <div className="text-center">
                                        <div className="flex justify-center mb-1">
                                            <Bed className="w-5 h-5 text-amber-600" />
                                        </div>
                                        <div className="text-sm">{property.bedrooms}</div>
                                        <div className="text-xs text-gray-500">Hab.</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="flex justify-center mb-1">
                                            <Bath className="w-5 h-5 text-amber-600" />
                                        </div>
                                        <div className="text-sm">{property.bathrooms}</div>
                                        <div className="text-xs text-gray-500">Baños</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="flex justify-center mb-1">
                                            <Maximize className="w-5 h-5 text-amber-600" />
                                        </div>
                                        <div className="text-sm">{property.sqm}</div>
                                        <div className="text-xs text-gray-500">m²</div>
                                    </div>
                                </div>
                                <Button className="w-full bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 transition-all duration-300 group/btn">
                                    Ver Detalles
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12 animate-in fade-in duration-700 delay-700">
                    <Button size="lg" variant="outline" className="border-2 border-amber-700 text-amber-800 hover:bg-amber-700 hover:text-white transition-all duration-300 hover:scale-105">
                        Ver Todas las Propiedades
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default PropertyLanding