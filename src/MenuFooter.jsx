export default function MenuFooter(props){
    return(
        <div className= " ml-14 w-[150px] text-white">
        <p className="text xl font-semibold mb-4 cursor-pointer">{props.title}</p>
        <p className="text sm font-normal mb-2 cursor-pointer">{props.point1}</p>  
        <p className="text sm font-normal mb-2 cursor-pointer">{props.point2}</p> 
        <p className="text sm font-normal cursor-pointer">{props.point3}</p> 
        </div>
    )
}