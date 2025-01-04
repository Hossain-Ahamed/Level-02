import { FieldValues, useForm } from "react-hook-form";
import cn from "../../utils/cn";
import { Button } from "../UI/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema, TNormalForm } from "./NormalForm.validation";

const NormalForm = () => {
  const double = true;
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<TNormalForm>({
    resolver: zodResolver(SignUpSchema),
  });
  const onSubmit = (data : FieldValues ) => {
    console.log(data);
  };

  
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn("border border-red-400 p-5 mx-auto", {
          "max-w-5xl": double,
          "max-w-md": !double,
        })}
      >
        <div
          className={cn("grid gap-5 justify-items-center ", {
            "md:grid-cols-2": double,
          })}
        >
          <div className="w-full max-w-md">
            <label htmlFor="name" className="block ">
              Name
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              id="name"
              className=""
            />
            {errors.name && (
              <span className="text-xs text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="w-full max-w-md">
            <label htmlFor="email" className="block ">
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              id="email"
              className=""
            />
            {errors.email && (
              <span className="text-xs text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="w-full max-w-md">
            <label htmlFor="password" className="block ">
              Password
            </label>
            <input
              type="password"
              {...register("password", { minLength: 8 })}
              id="password"
              className=""
            />
            {errors.password && (
              <span className="text-xs text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>
        </div>
        <div
          className={cn("grid grid-cols-1 justify-items-center gap-5 my-8", {
            "md:grid-cols-2": double,
          })}
        >
          <div className="w-full max-w-md col-start-1 md:col-start-2 flex justify-end">
            <Button type="submit" className="w-full md:w-fit">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NormalForm;
