import { Grid, Heading, Spinner, Text, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useVerifyUserMutation } from "../../api/authApi";
import { useNavigate, useParams } from "react-router-dom";

const EmailVerify = () => {
  const { token } = useParams();
  console.log(token);
  const toast = useToast();
  const navigate = useNavigate();
  const [verifyUser, { data, isLoading, error, isError, isSuccess }] =
    useVerifyUserMutation();
  if (isError) {
    toast({
      title: (error as any).data.message,
      status: "error",
      duration: 5000,
    });
  }
  useEffect(() => {
    if (token) {
      verifyUser({ token: token });
    } 
  }, [verifyUser, token]);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {isError && (
            <Grid placeItems="center" h="100vh">
              <Text>Email Verification Failed! Try Again</Text>{" "}
            </Grid>
          )}
          {isSuccess && (
            <Grid placeItems="center" h="100vh">
              <Heading>User Verified</Heading>
            </Grid>
          )}
        </>
      )}
    </>
  );
};

export default EmailVerify;
