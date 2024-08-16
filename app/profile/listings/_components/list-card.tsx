"use client";
import { TProperty } from "@/types";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function ListCard({
  data,
  key,
}: {
  data: TProperty;
  key: number;
}) {
  return (
    <div
      className="flex items-center justify-between gap-4 rounded-2xl p-4 shadow-lg"
      key={key}
    >
      <div className="flex items-center justify-start gap-4">
        <p>{key + 1}</p>
        <Image
          src={data.images[0]}
          alt="Property image"
          width={100}
          height={100}
          className="rounded-lg"
        />
        <div className="flex w-72 flex-col items-start justify-start">
          <h2 className="text-xl text-secondary">{data.title}</h2>
        </div>
        <p>{data.City}</p>
        <p className="text-blue-800">{data.bedRooms} BedRooms</p>
        <p className="text-green-800">{data.bathRooms} BathRooms</p>
        <p className="text-lg font-semibold">${data.price} night</p>
      </div>
      <Trash2 className="text-destructive" />
    </div>
  );
}
