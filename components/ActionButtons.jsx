"use client";

import { addInterestedEvent } from "@/app/actions";
import useAuth from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

const ActionButtons = ({ eventId, interestedUserIds = [], fromDetails }) => {
  const { auth } = useAuth();
  const router = useRouter();

  const isInterested = interestedUserIds.includes(auth?.id);
  const [interested, setInterested] = useState(isInterested);
  const [isPending, startTransition] = useTransition();

  async function toggleInterest() {
    if (!auth) {
      router.push("/login");
      return;
    }

    await addInterestedEvent(eventId, auth.id);
    setInterested((prev) => !prev);
    router.refresh(); // ✅ sync server + UI
  }

  function markGoing() {
    router.push(auth ? "/payment" : "/login");
  }

  return (
    <div className={`w-full flex gap-4 mt-4 ${fromDetails ? "flex-1" : ""}`}>
      <button
        disabled={isPending}
        onClick={() => startTransition(toggleInterest)}
        className={`w-full py-2 rounded-md ${
          interested
            ? "bg-indigo-600 hover:bg-indigo-800"
            : "bg-gray-700 hover:bg-gray-800"
        }`}
      >
        {interested ? "Interested" : "Mark Interested"}
      </button>

      <button
        onClick={markGoing}
        className="w-full bg-[#464849] py-2 rounded-md border border-[#5F5F5F]/50 hover:bg-[#3C3D3D]"
      >
        Going
      </button>
    </div>
  );
};

export default ActionButtons;
