import { ArrowRight } from 'lucide-react'

export const Button1 = ({aboutUs}: {aboutUs:String,}) => {
  return (
    <button className="bg-amber-500 text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-amber-300 transition flex items-center gap-2">
                  {aboutUs} <ArrowRight size={16} />
    </button>
  )
}


export const Button2 = () => {
  return (
    <div>
      
    </div>
  )
}





