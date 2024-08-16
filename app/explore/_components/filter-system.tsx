"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function FilterSystem() {
  const searchParams = useSearchParams();
  const [bedroom, setBedroom] = useState([0]);
  const [bathroom, setBathroom] = useState([0]);
  const params = new URLSearchParams(searchParams);
  const pathName = usePathname();
  const { replace } = useRouter();
  function handleFilters() {
    replace(`${pathName}?${params.toString()}`);
  }
  return (
    <div className="flex min-h-60 w-40 flex-col gap-4">
      <div className="flex w-full flex-col items-center justify-center gap-1">
        Price Range
        <div className="flex w-full items-center justify-between">
          <input
            placeholder="Min"
            type="number"
            className="w-12 text-sm focus:outline-none dark:bg-transparent"
            onChange={(e) => params.set("min", e.target.value)}
          />
          <input
            placeholder="Max"
            type="number"
            className="w-12 text-sm focus:outline-none dark:bg-transparent"
            onChange={(e) => params.set("max", e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-1">
        <p className="text-sm">
          Bedrooms: <span>{bedroom}</span>
        </p>
        <Slider
          defaultValue={[0]}
          max={10}
          step={1}
          onValueChange={(e: any) => {
            setBedroom(e[0]);
            params.set("bedroom", e[0]);
          }}
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-1">
        <p className="text-sm">
          Bathrooms: <span>{bathroom}</span>
        </p>
        <Slider
          defaultValue={[0]}
          max={10}
          step={1}
          onValueChange={(e: any) => {
            setBathroom(e[0]);
            params.set("bathroom", e[0]);
          }}
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-1">
        <p className="text-sm">Amenities</p>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center justify-center gap-2">
            <Checkbox
              onCheckedChange={(e: any) => {
                params.set("wifi", e);
              }}
            />
            <Label>Wifi</Label>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Checkbox
              checked={Boolean(params.get("tv")) || false}
              onCheckedChange={(e: any) => {
                params.set("tv", e);
              }}
            />
            <Label>TV</Label>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Checkbox
              checked={Boolean(params.get("washingMachine"))}
              onCheckedChange={(e: any) => {
                params.set("washingMachine", e);
              }}
            />
            <Label>Washing Machine</Label>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Checkbox
              checked={Boolean(params.get("parking"))}
              onCheckedChange={(e: any) => {
                params.set("parking", e);
              }}
            />
            <Label>Parking</Label>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Checkbox
              checked={Boolean(params.get("airConditioning"))}
              onCheckedChange={(e: any) => {
                params.set("airConditioning", e);
              }}
            />
            <Label>Air Conditioning</Label>
          </div>
        </div>
      </div>
      <Button onClick={handleFilters}>Apply Filters</Button>
    </div>
  );
}
