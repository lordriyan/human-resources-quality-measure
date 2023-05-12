import { usePostsQuery } from "@/apis/example";
import { Button, Input } from "antd";

import { BsKey } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { HiUser, HiUserGroup } from "react-icons/hi";
import { MdStart } from "react-icons/md";

export default function Home() {
  const { data, isLoading, error } = usePostsQuery();

  console.log(data, isLoading, error);

  return (
    <div className="container py-96 mx-auto h-screen flex items-center px-3">
      <div className="w-full">
        <div className="px-10">
          <h1 className="text-7xl font-semibold !mb-2">
            Human Resources Quality Measure
          </h1>
          <h4 className="text-2xl">
            <a
              href="https://founder.avixy.group/"
              target="_blank"
              className="no-underline"
            >
              — Riyan Saputra
            </a>
          </h4>
        </div>
        <div className="flex mt-20">
          <div className="flex flex-col items-end flex-1 py-5">
            <HiUser className="text-6xl" />
            <div className="text-3xl font-semibold">Admin</div>
            <p className="text-lg">
              The person responsible for the human resources in the company.
            </p>
            <div className="flex gap-1">
              <Button
                size="large"
                icon={<FcGoogle />}
                className="flex-shrink-0"
              >
                Sign in with Google
              </Button>
            </div>
            <div className="text-xs pt-2">
              Please use your Google account to sign in.
            </div>
          </div>
          <div className="w-0.5 h-64 bg-neutral-300 mx-5" />
          <div className="flex-1 py-5">
            <HiUserGroup className="text-6xl" />
            <div className="text-3xl font-semibold">Employee</div>
            <p className="text-lg">People who work for the company</p>
            <div className="flex gap-1">
              <Input
                size="large"
                className="w-1/2"
                placeholder="Input your token"
                prefix={<BsKey className="pr-0.5" />}
              />
              <Button
                size="large"
                icon={<MdStart />}
                className="flex-shrink-0"
              />
            </div>
            <div className="text-xs pt-2">
              Contact your admin to get the token.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
