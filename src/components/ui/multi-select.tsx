import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
  maxVisibleItems?: number;
}

export function MultiSelect<T = string>({
  value,
  onChange,
  options,
  placeholder = "Selecione...",
  className,
  id,
  maxVisibleItems,
}: MultiSelectProps<T>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={`w-full justify-start text-left h-auto px-3 py-2 ${className}`}
          type="button"
          id={id}
        >
          {value?.length > 0 ? (
            <div className="flex flex-wrap gap-1 w-full">
              {options
                .filter((option) => value.includes(option.value))
                .slice(0, maxVisibleItems)
                .map((option) => (
                  <span
                    key={String(option.value)}
                    className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-primary/10 text-primary rounded-full border dark:border-gray-700 dark:bg-primary/20 dark:text-primary-foreground"
                  >
                    {option.label}
                  </span>
                ))}
              {maxVisibleItems && value.length > maxVisibleItems && (
                <span className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-primary/10 text-primary rounded-full border dark:border-gray-700 dark:bg-primary/20 dark:text-primary-foreground">
                  +{value.length - maxVisibleItems}
                </span>
              )}
            </div>
          ) : (
            <span className="text-muted-foreground font-normal">
              {placeholder}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)]">
        <DropdownMenuCheckboxItem
          checked={value?.length === options.length}
          onCheckedChange={(checked) => {
            if (checked) {
              onChange(options.map((option) => option.value));
            } else {
              onChange([]);
            }
          }}
          className="font-medium"
        >
          Selecionar todos
        </DropdownMenuCheckboxItem>

        <div className="border-t my-1" />

        {options.map((option) => (
          <DropdownMenuCheckboxItem
            key={String(option.value)}
            checked={value?.includes(option.value)}
            onCheckedChange={(checked) => {
              const newValue = checked
                ? [...value, option.value]
                : value.filter((v) => v !== option.value);
              onChange(newValue);
            }}
          >
            {option.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
