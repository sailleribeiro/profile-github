import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Check, ChevronDown, X } from "lucide-react";
import { useMemo, useState } from "react";

interface Option<T = string> {
  value: T;
  label: string;
}

interface MultiSelectProps<T = string> {
  value: T[];
  onChange: (value: T[]) => void;
  options: Option<T>[];
  placeholder?: string;
  className?: string;
  id?: string;
  title?: string;
  allLabel?: string;
}

export function MultiSelect<T = string>({
  value,
  onChange,
  options,
  placeholder = "Select language",
  className,
  id,
  title = "Select language",
  allLabel = "All",
}: MultiSelectProps<T>) {
  const [open, setOpen] = useState(false);

  const selectedValue = value?.[0];
  const selectedLabel = useMemo(() => {
    if (!selectedValue) return allLabel;
    return (
      options.find((option) => option.value === selectedValue)?.label ??
      allLabel
    );
  }, [allLabel, options, selectedValue]);

  const selectAll = () => {
    onChange([]);
    setOpen(false);
  };

  const selectOne = (optionValue: T) => {
    onChange([optionValue]);
    setOpen(false);
  };

  const isAllSelected = !selectedValue;

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          id={id}
          type="button"
          variant="outline"
          className={cn(
            "h-11  justify-between rounded-md border border-border bg-background px-4  font-medium text-foreground hover:bg-accent/40",
            className,
          )}
        >
          <span className="truncate">{selectedLabel || placeholder}</span>
          <ChevronDown className="size-4 opacity-70" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        sideOffset={8}
        className="w-[500px] max-w-[calc(100vw-2rem)] rounded-md border border-border bg-background p-0 shadow-md"
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <span className=" font-normal leading-none text-foreground">
            {title}
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex size-7 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            aria-label="Fechar"
          >
            <X className="size-5" />
          </button>
        </div>

        <DropdownMenuItem
          onSelect={(e) => {
            e.preventDefault();
            selectAll();
          }}
          className="flex h-13 cursor-pointer items-center gap-3 rounded-none border-b border-border px-4  font-normal text-foreground focus:bg-accent/40"
        >
          <span className="inline-flex w-6 items-center justify-center">
            {isAllSelected ? <Check className="size-5" /> : null}
          </span>
          <span>{allLabel}</span>
        </DropdownMenuItem>

        {options.map((option) => {
          const isSelected = selectedValue === option.value;

          return (
            <DropdownMenuItem
              key={String(option.value)}
              onSelect={(e) => {
                e.preventDefault();
                selectOne(option.value);
              }}
              className="flex h-13 cursor-pointer items-center gap-3 rounded-none border-b border-border px-4  font-normal text-foreground last:border-b-0 focus:bg-accent/40"
            >
              <span className="inline-flex w-6 items-center justify-center">
                {isSelected ? <Check className="size-5" /> : null}
              </span>
              <span>{option.label}</span>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
