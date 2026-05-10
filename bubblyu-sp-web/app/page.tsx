"use client";

import { useEffect, useState } from "react";

export default function BubblyuSP() {
  const promotions = [
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
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,#12356f_0%,#020617_60%)]" />

      {/* HERO */}
      <section className="relative min-h-[720px] md:min-h-[850px] flex items-center justify-center overflow-hidden px-6">

        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] bg-cyan-500/10 blur-[180px] rounded-full -translate-x-1/2 -translate-y-1/2" />

        {/* Whale */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

          <img
            src="/whale-main.png"
            alt="Whale"
            className="
              w-[110%]
              md:w-[78%]
              max-w-[1500px]
              opacity-80
              object-contain
              select-none
            "
          />

        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center pt-28 md:pt-0">

          {/* Title */}
          <h1 className="mt-10 text-6xl md:text-8xl font-black tracking-tight bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Bubblyu SP
          </h1>

          {/* Desc */}
          <p className="mt-7 text-xl md:text-2xl text-white/80 font-medium">
            24시간 응대 · 안전 거래 · 빠른 거래
          </p>

          <p className="mt-3 text-lg text-white/60">
            서든어택 SP 전문 브랜드
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col md:flex-row items-center gap-5">

            <button className="px-10 py-4 rounded-2xl bg-cyan-400 text-black font-bold text-lg shadow-[0_0_35px_rgba(34,211,238,0.7)] hover:scale-105 hover:shadow-[0_0_55px_rgba(34,211,238,0.9)] transition duration-300">
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

          <div className="text-center mb-20">

            <h2 className="text-5xl md:text-6xl font-black">
              거래 안내
            </h2>

            <p className="mt-6 text-white/60 text-lg">
              버블리유SP는 안전하고 신뢰할 수 있는 거래를 약속드립니다.
            </p>

          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="group rounded-3xl border border-cyan-400/20 bg-gradient-to-b from-white/[0.07] to-white/[0.03] backdrop-blur-xl p-12 min-h-[320px] shadow-[0_0_40px_rgba(34,211,238,0.08)] hover:-translate-y-3 hover:scale-[1.02] hover:border-cyan-300/40 hover:shadow-[0_0_70px_rgba(34,211,238,0.22)] transition-all duration-500">

              <div className="text-8xl font-black text-cyan-400/80 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)] group-hover:text-cyan-300 transition">
                01
              </div>

              <h3 className="mt-8 text-3xl font-bold">
                빠른 응대
              </h3>

              <p className="mt-5 text-white/60 leading-8 text-lg">
                실시간 문의 확인 및<br />
                평균 3분 이내 빠른 거래 진행
              </p>

            </div>

            {/* Card 2 */}
            <div className="group rounded-3xl border border-purple-500/20 bg-gradient-to-b from-white/[0.07] to-white/[0.03] backdrop-blur-xl p-12 min-h-[320px] shadow-[0_0_40px_rgba(168,85,247,0.08)] hover:-translate-y-3 hover:scale-[1.02] hover:border-purple-400/40 hover:shadow-[0_0_70px_rgba(168,85,247,0.22)] transition-all duration-500">

              <div className="text-8xl font-black text-purple-400/80 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)] group-hover:text-purple-300 transition">
                02
              </div>

              <h3 className="mt-8 text-3xl font-bold">
                안전 거래
              </h3>

              <p className="mt-5 text-white/60 leading-8 text-lg">
                신뢰 기반의 거래<br />
                체계적 시스템 운영
              </p>

            </div>

            {/* Card 3 */}
            <div className="group rounded-3xl border border-blue-400/20 bg-gradient-to-b from-white/[0.07] to-white/[0.03] backdrop-blur-xl p-12 min-h-[320px] shadow-[0_0_40px_rgba(96,165,250,0.08)] hover:-translate-y-3 hover:scale-[1.02] hover:border-blue-300/40 hover:shadow-[0_0_70px_rgba(96,165,250,0.22)] transition-all duration-500">

              <div className="text-8xl font-black text-blue-400/80 drop-shadow-[0_0_20px_rgba(96,165,250,0.5)] group-hover:text-blue-300 transition">
                03
              </div>

              <h3 className="mt-8 text-3xl font-bold">
                커뮤니티 운영
              </h3>

              <p className="mt-5 text-white/60 leading-8 text-lg">
                디스코드, 페이스북 관리자<br />
                안정적인 운영
              </p>

            </div>

          </div>

        </div>

      </section>
{/* 가격 안내 */}
<section className="relative py-28 px-6 border-t border-white/10">

  <div className="max-w-6xl mx-auto">

    {/* Title */}
    <div className="text-center mb-20">

      <h2 className="text-5xl md:text-6xl font-black">
        가격 안내
      </h2>

      <p className="mt-6 text-white/60 text-lg">
        버블리유SP는 가장 정직하게 판매합니다.
      </p>

      <p className="mt-2 text-sm text-white/40">
        마지막 수정 : 2026.05.11
      </p>

    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 gap-8">

      {/* 구매 */}
      <div className="group rounded-3xl border border-cyan-400/20 bg-gradient-to-b from-white/[0.07] to-white/[0.03] backdrop-blur-xl p-14 min-h-[320px] shadow-[0_0_40px_rgba(34,211,238,0.08)] hover:-translate-y-2 hover:border-cyan-300/40 hover:shadow-[0_0_70px_rgba(34,211,238,0.22)] transition-all duration-500">

        <h3 className="text-6xl font-black text-cyan-300">
          구매
        </h3>

        <div className="mt-12 space-y-6">

          <div>
            <p className="text-white/50 text-sm">
              5만 이상
            </p>

            <p className="text-4xl font-bold mt-2">
              1750 비율
            </p>
          </div>

          <div>
            <p className="text-white/50 text-sm">
              5만 이하
            </p>

            <p className="text-4xl font-bold mt-2">
              1650 비율
            </p>
          </div>

        </div>

      </div>

      {/* 판매 */}
      <div className="group rounded-3xl border border-purple-500/20 bg-gradient-to-b from-white/[0.07] to-white/[0.03] backdrop-blur-xl p-14 min-h-[320px] shadow-[0_0_40px_rgba(168,85,247,0.08)] hover:-translate-y-2 hover:border-purple-400/40 hover:shadow-[0_0_70px_rgba(168,85,247,0.22)] transition-all duration-500">

        <h3 className="text-6xl font-black text-purple-300">
          판매
        </h3>

        <div className="mt-12 space-y-6">

          <div>
            <p className="text-white/50 text-sm">
              10만 이상
            </p>

            <p className="text-4xl font-bold mt-2">
              2100 비율
            </p>
          </div>

          <div>
            <p className="text-white/50 text-sm">
              10만 이하
            </p>

            <p className="text-4xl font-bold mt-2">
              2150 비율
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>
      {/* 홍보 */}
      <section className="relative py-28 px-6 border-t border-white/10">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-5xl md:text-6xl font-black">
              홍보
            </h2>

            <p className="mt-6 text-white/60 text-lg">
              버블리유SP의 다양한 프로모션 디자인입니다.
            </p>

          </div>

          {/* Slider */}
          <div className="flex justify-center">

            <div className="relative w-full max-w-5xl">

              <a
                href={promotions[currentSlide]}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >

                <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_60px_rgba(34,211,238,0.08)]">

                  <img
                    src={promotions[currentSlide]}
                    alt="Promotion"
                    className="w-full object-cover transition duration-700 group-hover:scale-[1.02] cursor-pointer"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                </div>

              </a>

              {/* Dots */}
              <div className="flex justify-center gap-3 mt-8">

                {promotions.map((_, index) => (

                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? "w-12 bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
                        : "w-3 bg-white/30"
                    }`}
                  />

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

{/* 리뷰 */}
<section className="relative py-32 px-6 border-t border-white/10">

  <div className="max-w-6xl mx-auto">

    {/* Title */}
    <div className="text-center mb-16">

      <h2 className="text-5xl md:text-6xl font-black">
        리뷰
      </h2>

      <p className="mt-6 text-white/60 text-lg">
        실제 이용자들의 거래 후기입니다.
      </p>

    </div>

    {/* Review Image */}
    <div className="group relative">

      <img
        src="/reviews/main-review2.png"
        alt="Review"
        className="
          w-full
          rounded-[36px]
          border border-cyan-400/20
          shadow-[0_0_60px_rgba(34,211,238,0.08)]
          transition-all
          duration-500
          group-hover:scale-[1.01]
          group-hover:brightness-110
          group-hover:shadow-[0_0_90px_rgba(34,211,238,0.18)]
        "
      />

    </div>

    {/* Button */}
    <div className="flex justify-center mt-14">

      <a
        href="https://bubblyu24.creatorlink.net/%EA%B3%A0%EA%B0%9D%ED%9B%84%EA%B8%B0"
        target="_blank"
        rel="noopener noreferrer"
        className="
          px-10 py-4
          rounded-2xl
          border border-cyan-400/30
          bg-white/[0.03]
          backdrop-blur-xl
          text-cyan-300
          font-semibold
          transition-all
          duration-300
          hover:bg-cyan-400/10
          hover:border-cyan-300/60
          hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]
          hover:-translate-y-1
        "
      >
        실제 거래 후기 더 보기 →
      </a>

    </div>

  </div>

</section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-12 text-center text-white/40 text-sm">

        <p>Bubblyu SP © 2026</p>

        <p className="mt-3">
          Discord · KakaoTalk · Sudden Attack Trading
        </p>

      </footer>

    </main>
  );
}
