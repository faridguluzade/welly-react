import Form from "../../../../ui/form/Form";
import Input from "../../../../ui/input/Input";

function SignupForm() {
  return (
    <Form heading="create account" buttonContent="sign up">
      <Input type="text" placeholder="First Name" />
      <Input type="text" placeholder="Last Name" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
    </Form>
  );
}

export default SignupForm;
