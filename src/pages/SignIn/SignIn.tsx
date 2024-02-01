import { Flex, Grid, Heading, Stack , Text, useToast} from "@chakra-ui/react";
import { Form, Formik } from "formik"
import { InputControl, SubmitButton } from "formik-chakra-ui";
import { useSigninUserMutation } from "../../api/authApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../slice/authSlice";


const SignIn = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState<string>();
  const toast = useToast();
  const navigate = useNavigate();
  const [signinUser, { data, isLoading, error, isError, isSuccess }] =
    useSigninUserMutation();
  console.log(data);
  if (isError) {
    toast({
      title: (error as any).data.message,
      status: "error",
      duration: 5000,
    });
    if ((error as any).data.message === "User not Verified") {
      navigate("/send-verify-email", {
        state: { email },
      });
    }
  }
 if(isSuccess){
    dispatch(setUser({token : data.token, name : data.name}))
    navigate('/') 
    localStorage.setItem('token', data.token)
  }

  console.log(error);
  return (
    <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values) => {
      setEmail(values.email)
      signinUser({...values})
      
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
            Signin
          </Heading>
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
          <Flex justify="flex-end">
            <Text color="teal" as={Link} to="/forgot-password">
              Forgot Password
            </Text>
          </Flex>
          <SubmitButton isLoading={isLoading}>Signin</SubmitButton>
        </Stack>
      </Grid>
    </Form>
  </Formik>
  )
}

export default SignIn