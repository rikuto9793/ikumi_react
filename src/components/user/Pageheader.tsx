"use client";
import { Baby, Heart, Users } from 'lucide-react';

type Props = {
  text1: string
  text2: string
};

export default function PageHeader({ text1, text2 }: Props) {
  return (
    <>
      {/* ヘッダー */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mb-4">
          <Baby className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {text1}
        </h1>
        <p className="text-gray-600 flex items-center justify-center gap-2">
          <Heart className="w-4 h-4 text-pink-500" />
          {text2}
          <Users className="w-4 h-4 text-purple-500" />
        </p>
      </div>
    </>
  );
}