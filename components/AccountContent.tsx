"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Header from "@/components/Header";
import { useUser } from "@/hooks/useUser";
import Button from "@/components/Button";
import { postData } from "@/libs/helpers";

const AccountContent 
= () => {
  const router = useRouter();
  const { isLoading, user } = useUser();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/');
    }
  }, [isLoading, user, router]);

  return ( 
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">
            Аккаунт
          </h1>
        </div>
      </Header>
    </div>
   );
}

export default AccountContent;
