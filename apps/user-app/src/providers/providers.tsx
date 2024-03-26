"use client"
import type { ReactElement, ReactNode } from "react";
import { RecoilRoot } from "recoil";

export function Providers({children}: {children: ReactNode}): ReactElement {
    return <RecoilRoot>
        {children}
    </RecoilRoot>
}