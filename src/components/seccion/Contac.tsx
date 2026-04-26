import { Phone, Mail, MapPin,  ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

function Contac() {
    return (
        <section id="contacto" className="py-24 bg-gradient-to-b from-white to-amber-50/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="inline-block px-4 py-1 bg-amber-100 text-amber-800 rounded-full mb-4 text-sm">
                        Preguntas Frecuentes
                    </div>
                    <h2 className="text-5xl mb-6 bg-gradient-to-r from-amber-900 to-amber-700 bg-clip-text text-transparent">Hablemos de tu Futuro</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">Estoy aquí para ayudarte a encontrar tu propiedad ideal</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="animate-in fade-in slide-in-from-left duration-700">
                        <h3 className="text-3xl mb-8 bg-gradient-to-r from-amber-900 to-amber-700 bg-clip-text text-transparent">Información de Contacto</h3>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                                <div className="bg-gradient-to-br from-amber-100 to-amber-50 p-4 rounded-2xl group-hover:from-amber-700 group-hover:to-amber-800 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                                    <Phone className="w-6 h-6 text-amber-700 group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-600 mb-1">Teléfono</div>
                                    <div className="text-lg">+34 600 123 456</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                                <div className="bg-gradient-to-br from-amber-100 to-amber-50 p-4 rounded-2xl group-hover:from-amber-700 group-hover:to-amber-800 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                                    <Mail className="w-6 h-6 text-amber-700 group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-600 mb-1">Email</div>
                                    <div className="text-lg">contacto@premiumestates.com</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                                <div className="bg-gradient-to-br from-amber-100 to-amber-50 p-4 rounded-2xl group-hover:from-amber-700 group-hover:to-amber-800 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                                    <MapPin className="w-6 h-6 text-amber-700 group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-600 mb-1">Dirección</div>
                                    <div className="text-lg">Calle Principal 123, Madrid, España</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 p-6 bg-gradient-to-br from-amber-700 to-amber-800 rounded-3xl text-white">
                            <h4 className="text-xl mb-4">Horario de Atención</h4>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span>Lunes - Viernes</span>
                                    <span>9:00 AM - 7:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sábados</span>
                                    <span>10:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Domingos</span>
                                    <span>Cita previa</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Card className="border-2 border-amber-100 shadow-2xl shadow-amber-500/10 animate-in fade-in slide-in-from-right duration-700">
                        <CardHeader>
                            <CardTitle className="text-3xl bg-gradient-to-r from-amber-900 to-amber-700 bg-clip-text text-transparent">Envíame un Mensaje</CardTitle>
                            <CardDescription className="text-base">Te responderé en menos de 24 horas</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-5">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="group">
                                        <Input placeholder="Nombre" className="border-2 border-gray-200 focus:border-amber-500 transition-colors duration-300" />
                                    </div>
                                    <div className="group">
                                        <Input placeholder="Apellido" className="border-2 border-gray-200 focus:border-amber-500 transition-colors duration-300" />
                                    </div>
                                </div>
                                <Input type="email" placeholder="Email" className="border-2 border-gray-200 focus:border-amber-500 transition-colors duration-300" />
                                <Input type="tel" placeholder="Teléfono" className="border-2 border-gray-200 focus:border-amber-500 transition-colors duration-300" />
                                <Textarea placeholder="¿En qué puedo ayudarte?" className="min-h-36 border-2 border-gray-200 focus:border-amber-500 transition-colors duration-300" />
                                <Button className="w-full bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" size="lg">
                                    Enviar Mensaje
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default Contac