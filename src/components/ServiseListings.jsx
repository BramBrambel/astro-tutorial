
import servises from '../servises.json';

export default function ServiseListings (){
    return( <>
      <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
          {servises.map((serv)=>(
              <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
              <h3 className="my-3 font-display font-medium">{serv.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                  {serv.description}
                </p>
               

        </li>
          ))}
        
       
      </ul>
      </>)
}


