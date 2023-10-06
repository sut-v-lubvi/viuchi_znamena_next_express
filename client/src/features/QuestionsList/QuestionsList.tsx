import { useAppSelector } from "@/redux/hooks/hooks";
import { useActions } from "@/redux/hooks/useActions";
import { AnswerType } from "@/shared/ui/BurgerButton/api/testsData/fakeApi/testsData";
import { Kruk } from "@/widgets/NavMenu/style";
import { Container, FlexItem, FlexContainer } from "./QuestionsListStyle";
import { Button } from "@mui/material";

export const QuestionList = () => {
  const { questions } = useAppSelector((state) => state.addTestSlice);
  const { deleteQuestions } = useActions();
  console.log(questions);

  return (
    <Container>
      {questions.map((question) => {
        return (
          <FlexContainer key={question.id}>
            <Kruk dangerouslySetInnerHTML={{ __html: question.znamya }}></Kruk>
            <div>{question.question}</div>
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
