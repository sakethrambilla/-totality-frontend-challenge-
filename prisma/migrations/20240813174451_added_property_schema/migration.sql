-- CreateTable
CREATE TABLE "Property" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "propertyType" TEXT NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "flatNumber" TEXT,
    "streetAddress" TEXT NOT NULL,
    "District" TEXT NOT NULL,
    "City" TEXT NOT NULL,
    "State" TEXT NOT NULL,
    "pinCode" INTEGER NOT NULL,
    "maxGuests" INTEGER NOT NULL,
    "bedRooms" INTEGER NOT NULL,
    "bathRooms" INTEGER NOT NULL,
    "wifi" BOOLEAN NOT NULL,
    "tv" BOOLEAN NOT NULL,
    "washingMachine" BOOLEAN NOT NULL,
    "parking" BOOLEAN NOT NULL,
    "airConditioning" BOOLEAN NOT NULL,
    "images" TEXT[],

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
