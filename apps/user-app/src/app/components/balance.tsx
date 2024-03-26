"use client";

import { useBalance } from "@repo/store/useBalance";
import type { ReactElement } from "react";

export function Balance():ReactElement {
  const balance = useBalance();
  return <div>
    hi there {balance}
  </div>
}