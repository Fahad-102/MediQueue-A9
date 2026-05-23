import { Spinner } from "@heroui/react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-[60vh] w-full">
      <Spinner size="lg" color="teal" label="Loading content..." fontStyle="semibold" />
    </div>
  );
}