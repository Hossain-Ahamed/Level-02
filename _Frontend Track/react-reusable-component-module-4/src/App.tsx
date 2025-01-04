import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import "./App.css";
import Container from "./components/UI/Container";
import { FromSection } from "./components/ResuableForm/FromSection";
import { Form, FormSubmit, Input } from "./components/ResuableForm";
import { z } from "zod";

function App() {
  return (
    <Container>
      {/* <MainLayout/> */}
      {/* <NormalForm/> */}
      {/* 5-9  */}
      <ResuableFormPractice />
    </Container>
  );
}

export default App;



const TestSchema = z.object({
  name : z.string(),
  email : z.string().email(),
})

type Ttest = z.infer<typeof TestSchema>;
const ResuableFormPractice = () => {
  const { handleSubmit, register, formState:{errors} } = useForm<Ttest>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>} >
      <FromSection>
      <Input type="email"  register={register('email')} errors={errors} label="email"/>
      <Input type="radio"  register={register('email')} errors={errors} label="email"/>
      </FromSection>
      <FormSubmit/>
    </Form>
  );
};
