import "./Tours.css";
import Card from "./Card";
function Tours({allTours,removeTour}) {

    return (
       <div className="w-[100%] grid grid-cols-3 gap-6 items-center ">
         {allTours.map((element)=>(
            <Card {...element} removeTour={removeTour} ></Card>
        ))}
       </div>
 );
}
export default Tours;