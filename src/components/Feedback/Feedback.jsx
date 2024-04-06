export default function Feedback({
    value:{
good,
neutral,
bad}
}) {


    
    return (
   <>
   <p>good:{good}</p>
   <p>neutral:{neutral} </p>
   <p>bad:{bad} </p>
   </>
    )
  }