import { Plus } from 'lucide-react'

const Description = () => {
  return (
    <div className="mt-5 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="mb-4 text-lg font-medium">
        Description produit
      </div>
      <div className="flex flex-col lg:flex-row justify-between mb-10">
        {/* Left half: Text */}
        <div className="w-full lg:w-1/2 pr-0 lg:pr-8 mb-6 lg:mb-0">
          <p className="text-sm text-slate-400 leading-relaxed">
            Festi vous propose à la location un/une "Jewel – grand couteau/10pc"
            pour votre événement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour
            votre mariage, une fête d'anniversaire ou du personnel, ce produit a
            fait l'objet d'une sélection rigoureuse par notre équipe. Il est en
            location chez nous sous la référence "VAJGC". Nous sommes à votre
            disposition pour que les événements de nos clients, même en
            last-minute, soient toujours une réussite. Vous pourrez trouver tout
            une série d'autre produit à louer de ce type dans la catégorie "Art de
            la Table".
          </p>
        </div>

        {/* Right half: LIVRASONS and QUESTIONS */}
        <div className="w-full lg:w-1/2 flex flex-col gap-1">
          <div
            className="flex justify-between items-center border p-4 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-gray-50"
            style={{ backgroundColor: '#FBF9F899' }}
          >
            <span className="font-medium">LIVRAISONS</span>
            <Plus className="h-5 w-5 text-gray-500" />
          </div>

          <div 
            className="flex justify-between items-center border p-4 rounded-lg cursor-pointer transition-colors duration-200 hover:bg-gray-50"
            style={{ backgroundColor: '#FBF9F899' }}
          >
            <span className="font-medium">QUESTIONS</span>
            <Plus className="h-5 w-5 text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description

