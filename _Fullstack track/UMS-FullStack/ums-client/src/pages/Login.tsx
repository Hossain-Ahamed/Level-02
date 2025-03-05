import { FieldValues, useForm, useFormContext } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import ReactForm from "../components/form/ReactForm";
import ReactFormInput from "../components/form/ReactFormInput";
import { Button, Row } from "antd";
const Login = () => {
  const navigate = useNavigate();
  const [login, { error }] = useLoginMutation();
  const dispatch = useAppDispatch();
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useFormContext();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastID = toast.loading("logging in");
    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged In", { id: toastID, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
    } catch (e) {
      console.log(e);
      toast.error("something went wrong", { id: toastID, duration: 2000 });
    }
  };

  if (error) {
    console.log(error);
  }

  return (
    <Row justify='center' align='middle' style={{height:'100vh'}}>
      <ReactForm onSubmit={onSubmit}>
        <div className="relative">
          <ReactFormInput name="id" type="text" label="ID" />
        </div>
        <div className="relative">
          <ReactFormInput name="password" type="password" label="Password" />
        </div>

        <Button
          htmlType="submit"
          
        >
          Sign in
        </Button>
      </ReactForm>
    </Row>
  );
};

export default Login;
