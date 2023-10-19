"use client";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Stack,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { array, object, TypeOf, z } from "zod";
import FileUpload from "./components/FileUpload";
import theme from "./theme";
import { useUploadImageMutation } from "@/redux/api/uploadAPI";
interface Props {
  userId: string;
}
export default function AddUserInfo({ userId }: Props) {
  const imageUploadSchema = object({
    image: z.instanceof(File),
    // images: array(z.instanceof(File)),
  });

  type IUploadImage = TypeOf<typeof imageUploadSchema>;
  const [uploadImage, {}] = useUploadImageMutation();

  const methods = useForm<IUploadImage>({
    resolver: zodResolver(imageUploadSchema),
  });

  // console.log(methods.formState.errors);

  const onSubmitHandler: SubmitHandler<IUploadImage> = (values) => {
    const formData = new FormData();
    formData.append("image", values.image);
    console.log(formData);
    // if (values.images.length > 0) {
    //   values.images.forEach((el) => formData.append("images", el));
    // }

    uploadImage({ userId, formData });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth={false}>
        <Box
          display="flex"
          sx={{
            justifyContent: "center",
            alignItems: "flex-start",
            height: "100vh",
          }}
        >
          <Box display="flex" flexDirection="column" sx={{ width: "90%" }}>
            <FormProvider {...methods}>
              <Box
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={methods.handleSubmit(onSubmitHandler)}
              >
                <Stack marginBottom={2}>
                  <Typography
                    textAlign="center"
                    variant="h6"
                    component="h2"
                    gutterBottom
                  >
                    Загрузите фото
                  </Typography>
                  <FileUpload limit={1} multiple={false} name="image" />
                </Stack>
                <Typography
                  textAlign="center"
                  variant="h4"
                  component="h1"
                  gutterBottom
                ></Typography>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Загрузить фото
                </Button>
              </Box>
            </FormProvider>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
