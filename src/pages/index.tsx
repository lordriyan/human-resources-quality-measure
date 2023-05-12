import { usePostsQuery } from "@/apis/example";
import { Button, DatePicker } from "antd";

export default function Home() {
  const { data, isLoading, error } = usePostsQuery();

  console.log(data, isLoading, error);

  return (
    <>
      <Button type="primary">Primary Button</Button>
      <DatePicker />
    </>
  );
}
