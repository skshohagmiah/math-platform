import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { mathChapters } from '@/data/MathChapters'
import { CheckCircle, Circle } from 'lucide-react'
import React from 'react'

const ChaptersPage = () => {
  return (
    <div>
         <section className="min-h-screen  bg-gray-50 py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <h1 className="text-2xl lg:text-4xl font-bold text-center mb-12 ">
        <span className="text-green-500 font-extrabold">Interactive</span>  Math Curriculum
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mathChapters.map((chapter) => (
            <Card
              key={chapter.id}
              className={`relative ${chapter.className} shadow-lg hover:shadow-xl transition-shadow duration-200`}
            >
              <CardHeader className="flex items-center">
                {chapter.icon}
                <CardTitle className="ml-4 text-lg">{chapter.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{chapter.description}</p>
              </CardContent>
              <div className="absolute top-4 right-4">
                {chapter.completed ? (
                  <CheckCircle className="text-green-500 w-6 h-6" />
                ) : (
                  <Circle className="text-gray-400 w-6 h-6" />
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default ChaptersPage