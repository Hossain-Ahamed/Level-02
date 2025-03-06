import ReactForm from "../../../components/form/ReactForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Flex } from "antd";
import ReactFormSelect from "../../../components/form/ReactFormSelect";
import {
  monthOptions,
  nameOptions,
  yearOptions,
} from "../../../constants/semester";
import { zodResolver } from "@hookform/resolvers/zod";
import { acadmeicSemesterSchema } from "../../../schema/academicManagement.schema";
import { useAddAcadmeicSemesterMutation } from "../../../redux/features/admin/academicManagement";
import { toast } from "sonner";
import { TResponse } from "../../../types/global.type";

const CreateAcademicSemester = () => {
  const [addAcadmeicSemester] = useAddAcadmeicSemesterMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const uploadToast = toast.loading("Uploading");
    const name = nameOptions[Number(data.name) - 1].label;
    const AcademicSemesterData = { ...data, name, code: data.name };
    try {
      const res = (await addAcadmeicSemester(AcademicSemesterData)) as TResponse<any>;

      if (res.error) {
        console.log(res.error.data);
        toast.error(res.error.data.message, {
          id: uploadToast,
          duration: 3000,
        });
      } else {
        toast.success("Successfully Added", {
          id: uploadToast,
          duration: 3000,
        });
      }
    } catch (e) {
      toast.error("Something went wrong", { id: uploadToast, duration: 3000 });
    }
  };

  return (
    <Flex justify="center" align="middle">
      <ReactForm
        onSubmit={onSubmit}
        resolver={zodResolver(acadmeicSemesterSchema)}
      >
        {/* <ReactFormInput name="text" type="text" label="Name" /> */}
        <ReactFormSelect label="Semester" name="name" options={nameOptions} />
        <ReactFormSelect label="Year" name="year" options={yearOptions} />
        <ReactFormSelect
          label="Course Starting Month"
          name="startMonth"
          options={monthOptions}
        />
        <ReactFormSelect
          label="Course Ending Month"
          name="endMonth"
          options={monthOptions}
        />

        <Button htmlType="submit">Submit</Button>
      </ReactForm>
    </Flex>
  );
};

export default CreateAcademicSemester;
