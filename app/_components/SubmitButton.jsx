"use client";
import { useFormStatus } from "react-dom";
export default function SubmitButton({ children, pendingLabel}) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="cursor-pointer bg-orange-400 px-8 py-4 text-primary-800 font-semibold hover:bg-orange-500 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
    >
      {pending ? pendingLabel : children}
    </button>
  );
}
