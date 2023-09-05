import Container from "../../atoms/container/container";
import Input from "../../atoms/input/input";
import Label from "../../atoms/label/label";

export default function Form({
  name,
  setName,
  title,
  setTitle,
  email,
  setEmail,
  phone,
  setPhone,
  linkedin,
  setLinkedin,
}: {
  name: string;
  setName: (name: string) => void;
  title: string;
  setTitle: (title: string) => void;
  email: string;
  setEmail: (email: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
  linkedin: string;
  setLinkedin: (phone: string) => void;
}) {
  return (
    <Container>
      <Container margin={20}>
        <Label text="Name" />
        <Input
          onChange={(e) => setName(e.target.value)}
          value={name}
          name="name"
        />
      </Container>
      <Container margin={20}>
        <Label text="Title" />
        <Input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          name="title"
        />
      </Container>
      <Container margin={20}>
        <Label text="Email" />
        <Input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name="email"
        />
      </Container>
      <Container margin={20}>
        <Label text="Phone" />
        <Input
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          name="phone"
        />
      </Container>
      <Container margin={20}>
        <Label text="LinkedIn" />
        <Input
          onChange={(e) => setLinkedin(e.target.value)}
          value={linkedin}
          name="linkedin"
        />
      </Container>
    </Container>
  );
}
