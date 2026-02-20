"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function LeetCodeProgress() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // Replace username below
        const res = await axios.get(
          "https://leetcode-stats-api.vercel.app/Jashan04"
        );
        setData(res.data);
      } catch (e) {
        console.log(e);
      }
    }

    fetchData();
  }, []);

  if (!data) return <p className="text-gray-400">Loading LeetCode stats...</p>;

  const total =
    data.easySolved + data.mediumSolved + data.hardSolved;

  return (
    <section className="bg-[#12121a] border border-white/10 rounded-2xl p-8">
      <h2 className="text-3xl font-bold mb-6 text-indigo-400">
        My LeetCode Progress 🚀
      </h2>

      {/* Total */}
      <div className="mb-8">
        <p className="text-gray-400">Total Problems Solved</p>
        <p className="text-4xl font-bold text-white">{total}</p>
      </div>

      {/* Bars */}
      <div className="space-y-4">

        <ProgressBar
          label="Easy"
          value={data.easySolved}
          total={total}
          color="bg-green-500"
        />

        <ProgressBar
          label="Medium"
          value={data.mediumSolved}
          total={total}
          color="bg-yellow-500"
        />

        <ProgressBar
          label="Hard"
          value={data.hardSolved}
          total={total}
          color="bg-red-500"
        />
      </div>

      {/* Streak */}
      <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
        <div>
          <p className="text-gray-400">Current Streak</p>
          <p className="text-2xl font-bold text-white">
            {data.currentStreak || 0} days 🔥
          </p>
        </div>

        <a
          href={`https://leetcode.com/u/Jashan04/`}
          target="_blank"
          className="px-5 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition font-semibold"
        >
          View My Profile →
        </a>
      </div>
    </section>
  );
}

function ProgressBar({ label, value, total, color }) {
  const percent = ((value / total) * 100).toFixed(1);

  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span>{value}</span>
      </div>

      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
        <div
          className={`${color} h-full transition-all duration-700`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}