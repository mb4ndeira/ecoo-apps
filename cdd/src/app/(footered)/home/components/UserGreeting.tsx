"use client";

import { getProfile } from "@cdd/app/_actions/get-profile";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Profile {
  name: string;
  email: string;
}

// TODO - Pegar nome do usuario nao esta funcionando

export function UserGreeting() {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    getProfile().then((profile) => setProfile(profile as Profile));
  }, []);

  return (
    <span className="text-lg text-slate-gray">
      Olá, <Link href={"/alterar-cadastro"}><strong className="font-semibold underline cursor-pointer">{profile?.name}!</strong></Link>
    </span>
  );
}
