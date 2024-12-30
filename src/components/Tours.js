import "./Tours.css";
import Card from "./Card";
function Tours({allTours,removeTour}) {

    return (
       <div className="w-[100%] grid grid-cols-2 gap-6 items-stretch md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 ">
         {allTours.map((element)=>(
            <Card key={element.id} {...element} removeTour={removeTour} ></Card>
        ))}
       </div>
 );
} 
export default Tours;