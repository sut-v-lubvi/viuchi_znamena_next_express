export const checkingResponse = (answerId:number | null,
     correctAnswersId:number,
    addCorrectAnswers:()=>void
    )=>{
    if (answerId === correctAnswersId) {
        addCorrectAnswers()

      }
}