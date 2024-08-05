// components/CallToAction.tsx
import { Button } from '@/components/ui/button'
import { ArrowRight, Award, Users } from 'lucide-react'

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Ready to Excel in Math?</h2>
            <p className="text-xl mb-8">Join thousands of students who are mastering math with MathMaster.</p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Create Free Account
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center">
              <div className="flex justify-around mb-6">
                <div>
                  <Users className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-2xl font-bold">50,000+</p>
                  <p className="text-sm">Active Learners</p>
                </div>
                <div>
                  <Award className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-2xl font-bold">1,000,000+</p>
                  <p className="text-sm">Problems Solved</p>
                </div>
              </div>
              <p className="text-lg">Join our growing community today!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}