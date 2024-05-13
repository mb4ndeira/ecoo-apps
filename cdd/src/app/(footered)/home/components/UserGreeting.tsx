"use client";

import { getProfile } from "@cdd/app/_actions/get-profile";
import { useEffect, useState } from "react";

interface Profile {
  name: string;
  email: string;
}

export function UserGreeting() {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    getProfile().then((profile) => setProfile(profile as Profile));
  }, []);

  return (
    <span className="text-lg text-slate-gray">
      Olá, <strong className="font-semibold">{profile?.name}</strong>
    </span>
  );
}
