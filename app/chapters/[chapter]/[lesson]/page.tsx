import IntroductionToNumbers from '@/components/Math/IntroductionToNumber';
import React from 'react'

const LessonPage = ({params}:{params:{chapter:string, lesson:string}}) => {


    switch(params.lesson){
        case 'Introduction%20to%20Numbers' : 
         return <IntroductionToNumbers />

         default : 
            return (
                <div className='text-lg text-rose-500 min-h-screen w-full flex items-center justify-center font-bold'>
                    Working on other lessons
                </div>
            )
    }

}

export default LessonPage