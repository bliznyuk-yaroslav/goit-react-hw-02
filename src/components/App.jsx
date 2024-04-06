import { useState } from "react";
import Description from ".//Description/Description"
import Options from "./Options/Options"
import Feedback from "./Feedback/Feedback"

export default function App() {
  const [clicks, setObj] = useState({
    good: 0,
    neutral: 0,
    bad: 0
});

const updateFeedback = (feedbackType) => {
    setObj({
        ...clicks,
        [feedbackType]: clicks[feedbackType] + 1
    });

};
  return (
    <>
  <Description></Description>
  <Options onUpdate = {updateFeedback}/>
  <Feedback value={clicks}/>
    </>
  )
}
