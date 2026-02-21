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
            "flex h-12 w-full rounded-md bg-muted md:bg-transparent md:rounded-none md:border-b md:border-b-muted-foreground/50 px-4 py-2 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            icon && "pr-12",
            className,
          )}
          {...props}
        />
        {icon && (
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground [&_svg]:size-5">
            {icon}
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
