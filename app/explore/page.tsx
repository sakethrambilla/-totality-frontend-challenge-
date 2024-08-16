import prisma from "@/lib/db";
import PropertyCard from "./_components/property-card";
import { TProperty, TSearchParams } from "@/types";
import FilterSystem from "./_components/filter-system";
import SearchBar from "./_components/search-bar";
import { getPropertyData } from "@/actions/property-data";

export default async function page({
  searchParams,
}: {
  searchParams?: TSearchParams;
}) {
  const propertyData = (await getPropertyData(
    searchParams as TSearchParams,
  )) as TProperty[];
  if (propertyData)
    return (
      <div className="flex min-h-screen flex-col items-center justify-start gap-12 py-24">
        <h1 className="text-3xl font-semibold text-secondary dark:text-primary">
          Explore Properties
        </h1>
        <SearchBar />
        <div className="flex w-full items-start justify-center gap-12 px-16">
          <FilterSystem />
          <div className="flex w-4/5 flex-wrap items-center justify-start gap-6">
            {propertyData.length == 0 || propertyData == null ? (
              <div className="flex w-full items-center justify-center text-4xl text-primary">
                No property is listed at this location
              </div>
            ) : (
              propertyData.map((property, index) => (
                <PropertyCard data={property} key={index} />
              ))
            )}
          </div>
        </div>
      </div>
    );
}
