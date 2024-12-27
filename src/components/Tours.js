import "./Tours.css";
import Card from "./Card";
function Tours({allTours,removeTour}) {

    return (
       <div className="w-[100%] grid grid-cols-2 gap-6 items-stretch md:grid-cols-3 ">
         {allTours.map((element)=>(
            <Card {...element} removeTour={removeTour} ></Card>
        ))}
       </div>
 );
}
export default Tours;