import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Check, ChevronDown } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { FilterSheet } from "../filter-sheet";

interface Option<T = string> {
  value: T;
  label: string;
}

interface FilterDropdownProps<T = string> {
  value: T[];
  onChange: (value: T[]) => void;
  options: Option<T>[];
  placeholder?: string;
  className?: string;
  id?: string;
  allLabel?: string;
}

export function FilterDropdown<T = string>({
  value,
  onChange,
  options,
  placeholder = "Select",
  className,
  id,
  allLabel = "All",
}: FilterDropdownProps<T>) {
  const [open, setOpen] = useState(false);
  const [isTabletUp, setIsTabletUp] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => setIsTabletUp(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const selectedValues = useMemo(() => value ?? [], [value]);

  const allSelected =
    options.length > 0 &&
    options.every((option) => selectedValues.includes(option.value));

  const selectAll = () => {
    onChange(options.map((option) => option.value));
  };

  const toggleOption = (optionValue: T) => {
    const isSelected = selectedValues.includes(optionValue);
    if (isSelected) {
      onChange(selectedValues.filter((v) => v !== optionValue));
      return;
    }
    onChange([...selectedValues, optionValue]);
  };

  const trigger = (
    <Button
      id={id}
      type="button"
      onClick={!isTabletUp ? () => setOpen(true) : undefined}
      className={cn(
        "h-11 rounded-full px-5 text-white shadow-none hover:opacity-95",
        "bg-[linear-gradient(89.89deg,var(--color-filter-trigger-from)_-30.01%,var(--color-filter-trigger-to)_125.65%)]",
        "flex items-center gap-2",
        className,
      )}
    >
      <ChevronDown className="size-4" />
      <span className="truncate">{placeholder}</span>
    </Button>
  );

  if (!isTabletUp) {
    return (
      <>
        {trigger}
        <FilterSheet<T>
          open={open}
          onOpenChange={setOpen}
          value={selectedValues}
          onChange={onChange}
          options={options}
          title={placeholder}
          allLabel={allLabel}
        />
      </>
    );
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        sideOffset={10}
        className="w-66 rounded-lg border-0 bg-dropdown-surface p-2 shadow-md"
      >
        <DropdownMenuItem
          onSelect={(e) => {
            e.preventDefault();
            selectAll();
          }}
          className="flex h-10 cursor-pointer items-center gap-3 rounded-none px-2 focus:bg-dropdown-item-hover"
        >
          <span
            className={cn(
              "inline-flex size-5 items-center justify-center rounded-[2px] border",
              allSelected
                ? "border-blue-500 bg-blue-500 text-white"
                : "border-dropdown-checkbox-border bg-transparent text-transparent",
            )}
          >
            <Check
              className={cn(
                "size-4",
                allSelected ? "text-white" : "text-transparent",
              )}
            />
          </span>
          <span className={cn(allSelected && "text-blue-500")}>{allLabel}</span>
        </DropdownMenuItem>

        {options.map((option) => {
          const isSelected = selectedValues.includes(option.value);

          return (
            <DropdownMenuItem
              key={String(option.value)}
              onSelect={(e) => {
                e.preventDefault();
                toggleOption(option.value);
              }}
              className={cn(
                "flex h-10 cursor-pointer items-center gap-3 rounded-none px-2 focus:bg-dropdown-item-hover",
                isSelected && "bg-dropdown-item-hover",
              )}
            >
              <span
                className={cn(
                  "inline-flex size-5 items-center justify-center rounded-[2px] border",
                  isSelected
                    ? "border-blue-500 bg-blue-500 text-white"
                    : "border-dropdown-checkbox-border bg-transparent text-transparent",
                )}
              >
                <Check
                  className={cn(
                    "size-4",
                    isSelected ? "text-white" : "text-transparent",
                  )}
                />
              </span>
              <span className={cn(isSelected && "text-blue-500")}>
                {option.label}
              </span>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
