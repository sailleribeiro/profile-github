import { Sheet, SheetContent } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

interface Option<T = string> {
  value: T;
  label: string;
}

interface FilterSheetProps<T = string> {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  value: T[];
  onChange: (value: T[]) => void;
  options: Option<T>[];
  title: string;
  allLabel?: string;
}

export function FilterSheet<T = string>({
  open,
  onOpenChange,
  value,
  onChange,
  options,
  title,
  allLabel = "All",
}: FilterSheetProps<T>) {
  const allSelected =
    options.length > 0 &&
    options.every((option) => value.includes(option.value));

  const selectAll = () => {
    onChange(options.map((option) => option.value));
  };

  const toggleOption = (optionValue: T) => {
    const isSelected = value.includes(optionValue);
    if (isSelected) {
      onChange(value.filter((v) => v !== optionValue));
      return;
    }
    onChange([...value, optionValue]);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="bottom"
        showCloseButton={false}
        className="h-[85dvh] rounded-t-2xl border-0 p-0"
      >
        <div className="mx-auto mt-2 h-1.5 w-16 rounded-full bg-muted-foreground/30" />
        <div className="flex items-center justify-between px-6">
          <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="inline-flex size-10 items-center justify-center text-red-500"
            aria-label="Close"
          >
            <X />
          </button>
        </div>

        <div className="space-y-1 px-6 pb-6">
          <button
            type="button"
            onClick={selectAll}
            className="flex h-12 w-full items-center gap-4 text-left"
          >
            <span
              className={cn(
                "inline-flex size-6 items-center justify-center rounded-[2px] border",
                allSelected
                  ? "border-blue-500 bg-blue-500 text-white"
                  : "border-dropdown-checkbox-border bg-transparent text-transparent",
              )}
            >
              <Check />
            </span>
            <span className={cn("text-md", allSelected && "text-blue-500")}>
              {allLabel}
            </span>
          </button>

          {options.map((option) => {
            const isSelected = value.includes(option.value);

            return (
              <button
                key={String(option.value)}
                type="button"
                onClick={() => toggleOption(option.value)}
                className="flex h-12 w-full items-center gap-4 text-left"
              >
                <span
                  className={cn(
                    "inline-flex size-6 items-center justify-center rounded-[2px] border",
                    isSelected
                      ? "border-blue-500 bg-blue-500 text-white"
                      : "border-dropdown-checkbox-border bg-transparent text-transparent",
                  )}
                >
                  <Check />
                </span>
                <span className={cn("text-md", isSelected && "text-blue-500")}>
                  {option.label}
                </span>
              </button>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
}
