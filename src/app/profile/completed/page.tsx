"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  CheckCircle,
  Sparkles,
  Heart,
  Users,
  MessageCircle,
  Video,
  ArrowRight,
  Star,
  Gift,
  Baby
} from 'lucide-react';

const ProfileSetupComplete = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // アニメーション効果
  useEffect(() => {
    setTimeout(() => setIsAnimating(true), 500);
    setTimeout(() => setShowContent(true), 1000);
  }, []);

  const handleGoToHome = () => {
    // ホーム画面への遷移処理
    console.log('ホーム画面へ遷移');
  };

  const features = [
    {
      icon: MessageCircle,
      title: '悩み相談',
      description: 'ベテランママからのアドバイス',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'ママ友作り',
      description: '同じ境遇のママ同士でつながり',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Video,
      title: 'ライブ配信',
      description: 'リアルタイムで学べる配信',
      color: 'from-purple-500 to-violet-500'
    }
  ];

  const tips = [
    '💡 まずはホーム画面で最新の投稿をチェックしてみましょう',
    '🔍 悩みに関連するトピックを検索してみてください',
    '👋 自己紹介投稿で他のママに挨拶してみましょう',
    '📱 プロフィールはいつでも編集できます'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-2xl w-full relative z-10">
        {/* メイン完了カード */}
        <Card className={`border-0 shadow-2xl mb-8 transition-all duration-1000 ${isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          <CardContent className="pt-12 pb-12 text-center">
            {/* 成功アイコン */}
            <div className="relative inline-flex items-center justify-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2">
                <Sparkles className={`w-8 h-8 text-yellow-400 transition-transform duration-1000 ${isAnimating ? 'rotate-12 scale-110' : 'rotate-0 scale-100'}`} />
              </div>
            </div>

            {/* メインメッセージ */}
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              プロフィール設定完了！
            </h1>
            <div className="text-2xl mb-6">🎉✨</div>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              <strong>ママコミュニティへようこそ！</strong><br />
              あなたの育児の旅をサポートする<br />
              素敵なコミュニティの一員になりました
            </p>

            {/* 取得バッジ */}
            <div className="flex justify-center gap-3 mb-8">
              <Badge className="bg-pink-100 text-pink-800 px-4 py-2">
                <Baby className="w-4 h-4 mr-2" />
                新メンバー
              </Badge>
              <Badge className="bg-purple-100 text-purple-800 px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                プロフィール完成
              </Badge>
              <Badge className="bg-green-100 text-green-800 px-4 py-2">
                <Gift className="w-4 h-4 mr-2" />
                準備完了
              </Badge>
            </div>

            {/* 利用可能機能の紹介 */}
            {showContent && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center justify-center gap-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  これからご利用いただける機能
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div
                        key={index}
                        className="p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-all duration-200"
                        style={{ animationDelay: `${index * 200}ms` }}
                      >
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} text-white mb-3`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ホームへのボタン */}
            <Button
              onClick={handleGoToHome}
              size="lg"
              className="w-full max-w-md mx-auto bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-lg py-6 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Sparkles className="w-5 h-5 mr-3" />
              ホーム画面へ進む
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
          </CardContent>
        </Card>

        {/* 使い方のヒント */}
        {showContent && (
          <Card className="border-0 shadow-lg animate-fade-in animation-delay-1000">
            <CardContent className="pt-6 pb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                💫 まずはここから始めてみませんか？
              </h3>
              <div className="space-y-3">
                {tips.map((tip, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg"
                    style={{ animationDelay: `${index * 150 + 1000}ms` }}
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">{tip}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* フッター */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>素敵な育児ライフをサポートします ❤️</p>
        </div>
      </div>

      <style jsx>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default ProfileSetupComplete;