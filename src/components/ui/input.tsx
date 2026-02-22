import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.ComponentProps<"input"> {
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          ref={ref}
          type={type}
          className={cn(
            "flex h-12 w-full rounded-md bg-gray-50 px-4 py-2 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-normal file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "md:bg-transparent md:rounded-none md:border-0 md:border-b md:border-b-muted-foreground/50",
            "md:focus-visible:ring-0 md:focus-visible:border-b-muted-foreground",
            icon && "pr-12 md:pr-4 md:pl-8",
            className,
          )}
          {...props}
        />
        {icon && (
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground md:right-auto md:left-0 [&_svg]:size-5">
            {icon}
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
