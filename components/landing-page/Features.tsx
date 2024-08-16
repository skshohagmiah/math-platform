// components/Features.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Brain, Zap, BarChart, Gamepad2 } from 'lucide-react'

export default function Features() {
  const features = [
    { 
      title: 'Adaptive Learning', 
      description: 'Our AI-powered system adjusts to your skill level, providing personalized challenges.',
      icon: <Brain className="w-10 h-10 text-blue-500" />,
      badge: 'AI-Powered'
    },
    { 
      title: 'Instant Feedback', 
      description: 'Get immediate explanations and see where you went wrong or right.',
      icon: <Zap className="w-10 h-10 text-yellow-500" />,
      badge: 'Real-time'
    },
    { 
      title: 'Progress Tracking', 
      description: 'Visualize your improvement with detailed analytics and progress charts.',
      icon: <BarChart className="w-10 h-10 text-green-500" />,
      badge: 'Analytics'
    },
    { 
      title: 'Gamified Challenges', 
      description: 'Compete in daily challenges and climb the global leaderboard.',
      icon: <Gamepad2 className="w-10 h-10 text-purple-500" />,
      badge: 'Competitive'
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-4xl font-bold text-center mb-12">Unlock Your <span className='text-green-500 font-extrabold'>Math Potential</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="transition-transform hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  {feature.icon}
                  <Badge variant="secondary">{feature.badge}</Badge>
                </div>
                <CardTitle className="mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}