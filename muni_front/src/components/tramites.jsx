import React from 'react';
import logoCarnet from "../assets/tramitesIcons/carnet-de-conducir.png";


const tramites = [
    {
      id: 1,
      name: 'Renovar Carnet de Conducir',
      href: '/tramites/renovar-carnet-de-conducir',
      imageSrc: logoCarnet,
      imageAlt: 'Carnet de conducir',
    },
    // {
    //   id: 2,
    //   name: 'Nuevo Carnet de Conducir',
    //   href: '/tramites/nuevo-carnet-de-conducir',
    //   imageSrc: logoCarnet,
    //   imageAlt: 'Carnet de conducir',
    // },
    // {
    //   id: 3,
    //   name: 'Aumento de Categoria',
    //   href: '/tramites/aumento-carnet-de-conducir',
    //   imageSrc: logoCarnet,
    //   imageAlt: 'Carnet de conducir',
    // },
  ]
  
  export default function Tramites() {
    return (
<div className="bg-gray-100"> 
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    {/* <h3 className='font-bold'>Lista de Tramites</h3> */}

    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {tramites.map((tramite) => (
        <a key={tramite.id} href={tramite.href} className="group">
          <div className="aspect-h-1 aspect-w-1 w-50 overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
            <div className="bg-gray-100">
              <img
                src={tramite.imageSrc}
                alt={tramite.imageAlt}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
          </div>
          <h1 className="font-bold text-xl text-gray-700 text-center">{tramite.name}</h1>
        </a>
      ))}
    </div>
  </div>
</div>
    )
  }
  