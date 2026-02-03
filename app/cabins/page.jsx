import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Loading from "./loading";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

export const revalidate = 0;

export const metadata = {
  title: "Cabins",
};

export default async function Page({ searchParams }) {
  const params = await searchParams;
  const filter = params.capacity ?? "all";
  return (
    <div>
      <h1 className="text-4xl mb-5 text-orange-200 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-white text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      <div className="flex justify-end mb-8">
        <Filter />
      </div>
      <Suspense fallback={<Loading />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
