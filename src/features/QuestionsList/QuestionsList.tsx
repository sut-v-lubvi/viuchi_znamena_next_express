import { useAppSelector } from "@/redux/hooks/hooks";
import { useActions } from "@/redux/hooks/useActions";
import { Kruk } from "@/widgets/NavMenu/style";
import { Container, Text, FlexContainer } from "./QuestionsListStyle";
import { Button } from "@mui/material";

interface Props {
  reset: any;
}

export const QuestionList = ({ reset }: Props) => {
  const { questions } = useAppSelector((state) => state.addTestSlice);
  const { deleteQuestions } = useActions();

  return (
    <Container>
      {questions.map((question) => {
        return (
          <FlexContainer key={question.id}>
            <Kruk dangerouslySetInnerHTML={{ __html: question.znamya }}></Kruk>
            <Text
              onClick={() =>
                reset({
                  img: question.znamya,
                  correctAnswer: question.correctAnswersIds[0],
                  option1: question.answers[0].label,
                  option2: question.answers[1].label,
                  option3: question.answers[2].label,
                  option4: question.answers[3].label,
                  questions: question.question,
                })
              }
            >
              {question.question}
            </Text>
            <Button
              variant="outlined"
              color="error"
              onClick={() => deleteQuestions(question.id)}
            >
              delete
            </Button>
          </FlexContainer>
        );
      })}
    </Container>
  );
};
