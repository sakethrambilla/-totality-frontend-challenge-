"use client";
import { DatePickerWithRange } from "@/components/date-picker";
import { addDays, differenceInDays } from "date-fns";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { DateRange } from "react-day-picker";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const [date, setDate] = React.useState<DateRange>({
    from: new Date(2024, 7, 16),
    to: addDays(new Date(2024, 7, 16), 10),
  });

  const numberOfDays = differenceInDays(date.to as Date, date.from as Date);

  const handleSearch = useDebouncedCallback((place: string) => {
    const params = new URLSearchParams(searchParams);
    if (place) {
      params.set("city", place);
    } else {
      params.delete("city");
    }
    replace(`${pathName}?${params.toString()}`);
  }, 300);

  return (
    <div className="flex w-[90%] items-center justify-between rounded-full px-4 py-4 shadow-xl lg:w-2/3 lg:px-8">
      <div className="flex w-full flex-col items-start justify-center gap-0 px-4">
        <p className="text-sm font-semibold">Where</p>
        <input
          placeholder="Search destinations by City"
          type="text"
          className="w-full text-gray-600 focus:outline-0 dark:bg-transparent"
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get("district")?.toString()}
        />
      </div>

      <div className="w-10 rounded-full bg-primary p-2">
        <Search className="h-full w-full text-primary-foreground" />
      </div>
    </div>
  );
}
