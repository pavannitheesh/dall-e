import { surpriseMePrompts  } from "../constants";
function supriseFun(prompt){
    const index= Math.floor(Math.random() * surpriseMePrompts.length);
    if(surpriseMePrompts[index]==prompt) return supriseFun(prompt);
        const randomprompt=surpriseMePrompts[index];
    
    return randomprompt;
    


}
export default supriseFun;