
import '../styles/global.css';


export default function Greeting({title='Writing has never been so easy'}){

return (<> 


  <div id="features" className="mx-auto max-w-6xl">
    
    <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
     {title}
    </h2>
    
  </div>

</>

)
}