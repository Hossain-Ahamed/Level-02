import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TcontainerProps = {children : ReactNode,className ?: string}

const Container = ({children,className} : TcontainerProps) => {
    return (
        <div className={cn("h-full mx-auto max-w-[1300px] px-5",className)}>
            {children}
        </div>
    );
};

export default Container;