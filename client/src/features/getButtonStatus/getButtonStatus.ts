// interface Arguments{
//     answerId:number
//     correctAnswersId:number
//     addCorrectAnswers:()=>void
// }

export const getButtonStatus = (answerId:number | null, correctAnswersId:number,) => {
    if(answerId===null) return 'black'
    if (answerId === correctAnswersId) {

      return "green";
    }
    return "red";
  };