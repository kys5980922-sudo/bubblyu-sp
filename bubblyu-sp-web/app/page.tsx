"use client";

import { useEffect, useState } from "react";

export default function BubblyuSP() {

  const promotions = [
    "/promotion/price-guide.png",
    "/promotion/trade-guide.png",
    "/promotion/clan-partner.png",
    "/promotion/bubblyu-promotion.png",
    "/promotion/report-guide.png",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === promotions.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [promotions.length]);

  return (
    <main className="min-h-screen bg-[#020617] text-white overflow-hidden">

      {/* 배경 */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,#0f2a5c_0%,#020617_60%)] -z-10" />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">

        {/* 고래 */}
        <img
          src="/whale-main.png"
          alt="Whale"
          className="absolute top-1/2 left-1/2 w-[1100px] max-w-none opacity-70 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        />

        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black/30" />

        {/* 내용 */}
        <div className="relative z-10">

          {/* 원형 로고 */}
          <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.5)]">

            <img
              src="/promotion/bubblyu-promotion.png"
              alt="Logo"
              className="w-full h-full object-cover"
            />

          </div>

          {/* 타이틀 */}
          <h1 className="mt-8 text-6xl md:text-7xl font-black bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Bubblyu SP
          </h1>

          {/* 설명 */}
          <p className="mt-6 text-xl text-white/80">
            24시간 응대 · 안전 거래 · 빠른 거래
          </p>

          <p className="mt-2 text-lg text-white/60">
            서든어택 SP 전문 브랜드
          </p>

          {/* 버튼 */}
          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-5">

            <button className="px-10 py-4 rounded-2xl bg-cyan-400 text-black font-bold text-lg shadow-[0_0_30px_rgba(34,211,238,0.7)] hover:scale-105 transition duration-300">
              카카오톡 문의
            </button>

            <button className="px-10 py-4 rounded-2xl border border-purple-500 text-white font-bold text-lg bg-purple-500/10 hover:bg-purple-500/20 hover:scale-105 transition duration-300">
              디스코드 문의
            </button>

          </div>
        </div>
      </section>

      {/* 거래 안내 */}
      <section className="relative py-28 px-6 border-t border-white/10">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-black">
              거래 안내
            </h2>

            <p className="mt-5 text-white/60 text-lg">
              버블리유SP는 안전하고 신뢰할 수 있는 거래를 약속드립니다.
            </p>

          </div>

          {/* 카드 */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* 카드1 */}
            <div className="rounded-3xl border border-cyan-400/30 bg-white/5 backdrop-blur-xl p-10 shadow-[0_0_40px_rgba(34,211,238,0.15)] hover:-translate-y-2 transition duration-300">

              <div className="text-6xl font-black text-cyan-400">
                01
              </div>

              <h3 className="mt-6 text-3xl font-bold">
                빠른 응대
              </h3>

              <p className="mt-4 text-white/60 leading-8">
                실시간 문의 확인 및<br />
                빠른 거래 진행
              </p>

            </div>

            {/* 카드2 */}
            <div className="rounded-3xl border border-purple-500/30 bg-white/5 backdrop-blur-xl p-10 shadow-[0_0_40px_rgba(168,85,247,0.15)] hover:-translate-y-2 transition duration-300">

              <div className="text-6xl font-black text-purple-400">
                02
              </div>

              <h3 className="mt-6 text-3xl font-bold">
                안전 거래
              </h3>

              <p className="mt-4 text-white/60 leading-8">
                신뢰 기반의 거래<br />
                시스템 운영
              </p>

            </div>

            {/* 카드3 */}
            <div className="rounded-3xl border border-blue-400/30 bg-white/5 backdrop-blur-xl p-10 shadow-[0_0_40px_rgba(96,165,250,0.15)] hover:-translate-y-2 transition duration-300">

              <div className="text-6xl font-black text-blue-400">
                03
              </div>

              <h3 className="mt-6 text-3xl font-bold">
                커뮤니티 운영
              </h3>

              <p className="mt-4 text-white/60 leading-8">
                디스코드 중심의<br />
                안정적인 운영
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* Promotion */}
      <section className="relative py-28 px-6 border-t border-white/10">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-black">
              Promotion
            </h2>

            <p className="mt-5 text-white/60 text-lg">
              버블리유SP의 다양한 프로모션 디자인입니다.
            </p>

          </div>

          {/* 슬라이드 */}
          <div className="flex justify-center">

            <div className="relative w-full max-w-4xl">

              <a
                href={promotions[currentSlide]}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >

                <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_40px_rgba(34,211,238,0.15)]">

                  <img
                    src={promotions[currentSlide]}
                    alt="Promotion"
                    className="w-full object-cover transition duration-700 group-hover:scale-[1.02] cursor-pointer"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                </div>
              </a>

              {/* 인디케이터 */}
              <div className="flex justify-center gap-3 mt-8">

                {promotions.map((_, index) => (

                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? "w-10 bg-cyan-300"
                        : "w-3 bg-white/30"
                    }`}
                  />

                ))}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-10 text-center text-white/40 text-sm">

        <p>Bubblyu SP © 2026</p>

        <p className="mt-2">
          Discord · KakaoTalk · Sudden Attack Trading
        </p>

      </footer>

    </main>
  );
}
