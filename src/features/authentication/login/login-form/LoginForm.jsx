import { Link } from "react-router-dom";

import Form from "../../../../ui/form/Form";
import Input from "../../../../ui/input/Input";

function LoginForm() {
  return (
    <Form heading="customer login" buttonContent="Sign in">
      <Input type="email" placeholder="Your Email" />
      <Input type="password" placeholder="Password" />
      <Link to="/">Forgot your password?</Link>
    </Form>
  );
}

export default LoginForm;
