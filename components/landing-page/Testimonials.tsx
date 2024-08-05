// components/Testimonials.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    { 
      name: 'Alex Johnson', 
      role: 'High School Student', 
      avatar: '/alex.jpg',
      quote: 'MathMaster turned my math struggles into triumphs. The gamified approach makes learning fun and addictive!' 
    },
    { 
      name: 'Sarah Lee', 
      role: 'Parent', 
      avatar: '/sarah.jpg',
      quote: 'As a parent, I\'ve seen my daughter\'s confidence in math soar. The progress tracking is incredibly helpful.' 
    },
    { 
      name: 'Dr. Michael Chen', 
      role: 'Math Professor', 
      avatar: '/michael.jpg',
      quote: 'I\'m impressed by the depth and rigor of MathMaster\'s curriculum. It\'s an excellent supplement to classroom learning.' 
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Quote className="w-8 h-8 text-blue-500 mb-2" />
                <p className="text-gray-600 italic">{testimonial.quote}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}