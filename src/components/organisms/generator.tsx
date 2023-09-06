import { useState } from "react";
import Container from "../atoms/container/container";
import Form from "../molecules/form/form";
import SignatureResult from "../molecules/signature-result/signature-result";
import Button from "../atoms/button/button";

export default function Generator() {
  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <Container>
      {step === 1 && (
        <>
          <Form
            name={name}
            setName={setName}
            title={title}
            setTitle={setTitle}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
          />
          <Container margin={20}>
            <Button onClick={() => setStep(2)}>Generate email signature</Button>
          </Container>
        </>
      )}
      {step === 2 && (
        <>
          <SignatureResult
            email={email}
            name={name}
            title={title}
            phone={phone}
          />
          <Container margin={20}>
            <Button onClick={() => setStep(1)}>Update info</Button>
          </Container>
        </>
      )}
    </Container>
  );
}
