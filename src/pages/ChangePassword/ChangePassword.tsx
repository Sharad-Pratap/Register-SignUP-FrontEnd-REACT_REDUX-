import { Flex, Grid, Heading, Stack , Text, useToast} from "@chakra-ui/react";
import { Form, Formik } from "formik"
import { InputControl, SubmitButton } from "formik-chakra-ui";
import { useNavigate, useParams } from "react-router-dom";
import { useResetPasswordMutation, useVerifyUserMutation } from "../../api/authApi";
import { useEffect } from "react";


const ChangePassword = () => {
  const { token } = useParams();
  console.log(token);
  const toast = useToast();
  const navigate = useNavigate();
  const [verifyUser, { data, isLoading, error, isError, isSuccess }] =useResetPasswordMutation();
  if(isError) {
    toast({
      title: (error as any).data.message,
      status: "error",
      duration: 5000,
    });
  }
  if(isSuccess) {
    toast({
      title: "Password Changed Successfully ",
      status: "success",
      duration: 5000,
    });
    navigate("/signin")
  
  }

  return (
    <Formik
    initialValues={{ password: "" }}
    onSubmit={(values) => {
      if(token )
      verifyUser({...values, token: token})
      
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
            name="password"
            label="Password"
            inputProps={{
              placeholder: "Enter Password...",
              type: "password",
            }}
          />
          <SubmitButton >Changed Password</SubmitButton>
        </Stack>
      </Grid>
    </Form>
  </Formik>
  )
}

export default ChangePassword