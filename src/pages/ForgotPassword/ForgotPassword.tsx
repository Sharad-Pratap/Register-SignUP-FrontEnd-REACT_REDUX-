import { Flex, Grid, Heading, Stack , Text, useToast} from "@chakra-ui/react";
import { Form, Formik } from "formik"
import { InputControl, SubmitButton } from "formik-chakra-ui";
import { useSendMailForgotPasswordMutation } from "../../api/authApi";


const ForgotPassword = () => {
  const [sendMail, {data, isError, isLoading, error}] = useSendMailForgotPasswordMutation();
  const toast = useToast();
  console.log(data)
  if (isError) {
    toast({
      title: (error as any).data.message,
      status: "error",
      duration: 5000,
    });
  }  
  return (
    <Formik
    initialValues={{ email: "" }}
    onSubmit={(values) => {
     sendMail({...values})
      
    }}
  >
    <Form>
      <Grid h="100vh" placeItems="center" >
        <Stack p="7" boxShadow="xl" borderRadius="md">
          <Heading
            color="teal"
            textAlign="center"
            fontSize="lg"
            fontWeight="semibold"
          >
            Forgot Password
          </Heading>
          <InputControl
            name="email"
            label="Email"
            inputProps={{
              type: "email",
              placeholder: "Enter Email...",
            }}
          /> 
          <SubmitButton isLoading={isLoading} >Send Mail</SubmitButton>
        </Stack>
      </Grid>
    </Form>
  </Formik>
  )
}

export default ForgotPassword