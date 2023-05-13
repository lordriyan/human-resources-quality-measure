import { Avatar, Button } from "antd";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

import { MdAdd, MdLogout } from "react-icons/md";

export default function Admin() {
  const { data: session } = useSession();

  return (
    <div className="container mx-auto px-3 py-20">
      <div className="!mt-16">
        <h1 className="text-5xl font-semibold">
          Welcome, {session?.user?.name}
        </h1>
        <div className="mt-5 flex gap-2">
          <Button type="primary" size="large" icon={<MdAdd />}>
            Create New Test
          </Button>
          <Button
            danger
            type="primary"
            size="large"
            icon={<MdLogout />}
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Log out
          </Button>
        </div>
      </div>
      <h1 className="text-2xl font-bold !mt-10">Recently Tests</h1>
      <div className="flex flex-col gap-2 my-5">
        {[0, 1, 2, 3].map((item, index) => (
          <Link
            key={index}
            href="/admin/test/1"
            className="no-underline text-black"
          >
            <div className="rounded border flex items-center gap-2 p-3 hover:bg-neutral-100 cursor-pointer">
              <div className="flex-1">
                <div className="text-xs">12/05/2023</div>
                <h1 className="text-lg font-semibold mb-0">
                  Judul Testnya Disini
                </h1>
                <p className="">Sedikit deskripsi tentang test nya disini</p>
              </div>
              <div className="text-right">
                <div className="font-semibold">The Winner</div>
                <div>Riyan Saputra</div>
                <div className="text-xs">
                  Score: <span className="font-semibold">100</span>
                </div>
              </div>
              <div>
                <Avatar size={64} shape="circle">
                  RS
                </Avatar>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <h1 className="text-2xl font-bold !mt-10">All Tests</h1>
      <div className="flex flex-col gap-2 my-5">
        {[4, 5, 6, 7, 8].map((item, index) => (
          <Link
            key={index}
            href="/admin/test/1"
            className="no-underline text-black"
          >
            <div className="rounded border flex items-center gap-2 p-3 hover:bg-neutral-100 cursor-pointer">
              <div className="flex-1">
                <div className="text-xs">12/05/2023</div>
                <h1 className="text-lg font-semibold mb-0">
                  Judul Testnya Disini
                </h1>
                <p className="">Sedikit deskripsi tentang test nya disini</p>
              </div>
              <div className="text-right">
                <div className="font-semibold">The Winner</div>
                <div>Riyan Saputra</div>
                <div className="text-xs">
                  Score: <span className="font-semibold">100</span>
                </div>
              </div>
              <div>
                <Avatar size={64} shape="circle">
                  RS
                </Avatar>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
