import { Flex, Grid, Heading, Stack } from "@chakra-ui/react";
import { Form, Formik } from "formik"
import { InputControl, SubmitButton } from "formik-chakra-ui";
import { useSignupUserMutation } from "../../api/authApi";


const SignUp = () => {
  const [signupUser, {data, isLoading}] = useSignupUserMutation();  
  console.log(data);     
  return (
    <Formik
    initialValues={{ name : "",email: "", password: "" }}
    onSubmit={(values) => {
      signupUser({...values})
    }}
  >
    <Form>
      <Grid h="100vh" placeItems="center">
        <Stack p="4" boxShadow="xl" borderRadius="md">
          <Heading
            color="teal"
            textAlign="center"
            fontSize="lg"
            fontWeight="semibold"
          >
            SignUp
          </Heading>
          <InputControl
            name="name"
            label="Name"
            inputProps={{
              type: "name",
              placeholder: "Enter Name...",
            }}
          />
          <InputControl
            name="email"
            label="Email"
            inputProps={{
              type: "email",
              placeholder: "Enter Email...",
            }}
          />
          <InputControl
            name="password"
            label="Password"
            inputProps={{
              placeholder: "Enter Password...",
              type: "password",
            }}
          />
          {/* <Flex justify="flex-end">
            <Text as={Link} to="/forgot-password" color="teal">
              Forgot Password
            </Text>
          </Flex> */}
          <SubmitButton isLoading={isLoading} >SignUp</SubmitButton>
        </Stack>
      </Grid>
    </Form>
  </Formik>
  )
}

export default SignUp