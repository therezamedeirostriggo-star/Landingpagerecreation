import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ana Silva",
      role: "CEO, TechStart Solutions",
      content: "A consultoria foi fundamental para reestruurar nossos processos. Em 6 meses, aumentamos nossa eficiência em 45% e reduzimos custos significativamente. Recomendo fortemente!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mjk2MzE0NXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Carlos Mendes",
      role: "Diretor de Operações, Logística Express",
      content: "Trabalhar com a Consultor em Movimento transformou completamente nossa abordagem estratégica. Os resultados superaram nossas expectativas e a parceria continua até hoje.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzA0NjM4M3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Mariana Costa",
      role: "Fundadora, Inovare Educação",
      content: "A expertise e dedicação foram impressionantes. Nos ajudaram a escalar o negócio de forma sustentável e estruturada. Nossa receita triplicou em 18 meses!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc2MzA0NjM4M3ww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 lg:py-32 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-emerald-600 uppercase tracking-wider">Depoimentos</span>
          <h2 className="text-4xl lg:text-5xl text-gray-900">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-600">
            Histórias reais de empresas que transformaram seus resultados com nossa consultoria.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg bg-white relative">
              <CardContent className="pt-6 space-y-6">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Quote className="h-6 w-6 text-emerald-600" />
                </div>

                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 italic">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center">
            <div className="text-4xl text-emerald-600">4.9/5</div>
            <div className="text-gray-600 mt-2">Avaliação Média</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-emerald-600">200+</div>
            <div className="text-gray-600 mt-2">Projetos Concluídos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-emerald-600">95%</div>
            <div className="text-gray-600 mt-2">Clientes Satisfeitos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-emerald-600">15+</div>
            <div className="text-gray-600 mt-2">Anos no Mercado</div>
          </div>
        </div>
      </div>
    </section>
  );
}