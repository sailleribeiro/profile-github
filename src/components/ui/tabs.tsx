import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Tabs as TabsPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      orientation={orientation}
      className={cn("flex w-full flex-col", className)}
      {...props}
    />
  );
}

const tabsListVariants = cva("inline-flex items-center text-muted-foreground", {
  variants: {
    variant: {
      default: "justify-between",
      line: "w-full justify-start gap-2 border-b border-border bg-transparent p-0",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function TabsList({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> &
  VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap px-4 py-2 transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        "text-muted-foreground hover:text-foreground data-[state=active]:text-foreground",
        "relative after:absolute after:bottom-px after:left-0 after:right-0 after:h-0.5 after:bg-transparent",
        "data-[state=active]:after:bg-[#fd8c73]",
        "[&_svg]:size-4 [&_svg]:shrink-0",
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("mt-4 flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants };
