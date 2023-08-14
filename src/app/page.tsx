"use client"

import Questions from "@/components/Questions";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-blue-600">
      <div className="px-5 flex justify-center bg-white rounded min-w-[500px]">
        <div className="py-5 w-full">
          <Questions />
        </div>
      </div>
    </div>
  );
}
