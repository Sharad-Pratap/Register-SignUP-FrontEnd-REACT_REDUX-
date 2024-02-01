import { Grid, Heading, Spinner, Text, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSendMailForVerificationMutation } from "../../api/authApi";
import { useLocation } from "react-router-dom";

const SendEmail = () => {
  const toast = useToast();
  const { state } = useLocation();

  const [sendMail, { isLoading, data, isError, error }] =
    useSendMailForVerificationMutation();
  if (isError) {
    toast({
      title: (error as any).data.message,
      status: "error",
      duration: 5000,
    });
  }
  console.log("hiii",data);

  useEffect(() => {
    sendMail({ email: state.email });
  }, [sendMail, state]);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {" "}
          <Grid placeItems="center" h="100vh">
            <Heading>Email Sended</Heading>
          </Grid>
        </>
      )}
    </>
  );
};

export default SendEmail;