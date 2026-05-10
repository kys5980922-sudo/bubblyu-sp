"use client";

import { useEffect, useState } from "react";

export default function MobileHome() {
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
    }, 4500);

    return () => clearInterval(interval);
  }, [promotions.length]);

  return (
    <main className="min-h-screen bg-[#020617] text-white overflow-hidden">

      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,#153b78_0%,#020617_60%)]" />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-5 overflow-hidden">

        {/* Glow */}
        <div className="absolute top-[20%] left-1/2 w-[380px] h-[380px] bg-cyan-400/20 blur-[120px] rounded-full -translate-x-1/2" />

        {/* Whale */}
        <img
          src="/whale-main.png"
          alt="Whale"
          className="
            absolute
            top-[14%]
            left-1/2
            -translate-x-1/2
            w-[165%]
            max-w-none
            opacity-75
            pointer-events-none
            select-none
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center w-full">

          {/* Mini Badge */}
          <div className="
            px-4
            py-2
            rounded-full
            border
            border-cyan-400/20
            bg-white/[0.04]
            backdrop-blur-xl
            text-cyan-300
            text-xs
            tracking-[0.2em]
            uppercase
          ">
            Sudden Attack Trading
          </div>

          {/* Title */}
          <h1 className="
            mt-8
            text-[52px]
            leading-[0.95]
            font-black
            tracking-tight
            bg-gradient-to-r
            from-cyan-200
            via-blue-300
            to-purple-400
            bg-clip-text
            text-transparent
            drop-shadow-[0_0_35px_rgba(34,211,238,0.25)]
          ">
            Bubblyu<br />SP
          </h1>

          {/* Desc */}
          <p className="
            mt-6
            text-white/75
            text-[15px]
            leading-7
          ">
            24시간 응대 · 안전 거래 · 빠른 진행<br />
            프리미엄 SP 전문 브랜드
          </p>

          {/* CTA */}
          <div className="mt-10 w-full space-y-4">

            {/* Kakao */}
            <a
              href="https://open.kakao.com/me/bubblyusp24"
              target="_blank"
              rel="noopener noreferrer"
              className="
                relative
                block
                overflow-hidden
                rounded-[28px]
                border
                border-cyan-400/20
                bg-gradient-to-br
                from-cyan-400/20
                to-cyan-500/5
                backdrop-blur-xl
                p-5
                shadow-[0_0_40px_rgba(34,211,238,0.12)]
              "
            >

              <div className="flex items-center justify-between">

                <div className="text-left">

                  <p className="text-white/50 text-xs">
                    빠른 문의
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-cyan-300">
                    카카오톡 상담
                  </h3>

                </div>

                <div className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-cyan-400/20
                  flex
                  items-center
                  justify-center
                  text-cyan-300
                  text-xl
                ">
                  ↗
                </div>

              </div>

            </a>

            {/* Discord */}
            <a
              href="https://discord.gg/3sHzwq6NmR"
              target="_blank"
              rel="noopener noreferrer"
              className="
                relative
                block
                overflow-hidden
                rounded-[28px]
                border
                border-purple-400/20
                bg-gradient-to-br
                from-purple-400/20
                to-purple-500/5
                backdrop-blur-xl
                p-5
                shadow-[0_0_40px_rgba(168,85,247,0.12)]
              "
            >

              <div className="flex items-center justify-between">

                <div className="text-left">

                  <p className="text-white/50 text-xs">
                    커뮤니티
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-purple-300">
                    디스코드 입장
                  </h3>

                </div>

                <div className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-purple-400/20
                  flex
                  items-center
                  justify-center
                  text-purple-300
                  text-xl
                ">
                  ↗
                </div>

              </div>

            </a>

          </div>

        </div>

      </section>

      {/* 거래 안내 */}
      <section className="relative px-5 py-20">

        <div className="flex items-center justify-between mb-8">

          <div>
            <p className="text-cyan-300 text-sm font-semibold">
              TRUST SYSTEM
            </p>

            <h2 className="mt-2 text-3xl font-black">
              거래 안내
            </h2>
          </div>

          <div className="w-16 h-[1px] bg-white/10" />

        </div>

        <div className="space-y-5">

          {/* Card */}
          <div className="
            rounded-[30px]
            border
            border-cyan-400/15
            bg-white/[0.03]
            backdrop-blur-xl
            p-6
          ">

            <div className="text-cyan-300 text-5xl font-black">
              01
            </div>

            <h3 className="mt-5 text-2xl font-bold">
              빠른 응대
            </h3>

            <p className="mt-4 text-white/65 leading-7 text-[15px]">
              실시간 문의 확인 및 평균 3분 이내 빠른 거래 진행
            </p>

          </div>

          {/* Card */}
          <div className="
            rounded-[30px]
            border
            border-purple-400/15
            bg-white/[0.03]
            backdrop-blur-xl
            p-6
          ">

            <div className="text-purple-300 text-5xl font-black">
              02
            </div>

            <h3 className="mt-5 text-2xl font-bold">
              안전 거래
            </h3>

            <p className="mt-4 text-white/65 leading-7 text-[15px]">
              신뢰 기반의 거래 시스템 및 체계적인 운영
            </p>

          </div>

          {/* Card */}
          <div className="
            rounded-[30px]
            border
            border-blue-400/15
            bg-white/[0.03]
            backdrop-blur-xl
            p-6
          ">

            <div className="text-blue-300 text-5xl font-black">
              03
            </div>

            <h3 className="mt-5 text-2xl font-bold">
              커뮤니티 운영
            </h3>

            <p className="mt-4 text-white/65 leading-7 text-[15px]">
              디스코드 · SNS 기반 안정적인 커뮤니티 운영
            </p>

          </div>

        </div>

      </section>

      {/* 가격 */}
      <section className="relative px-5 py-20">

        <div className="mb-10">

          <p className="text-purple-300 text-sm font-semibold">
            PRICE INFO
          </p>

          <h2 className="mt-2 text-3xl font-black">
            가격 안내
          </h2>

          <p className="mt-3 text-white/45 text-sm">
            마지막 수정 : 2026.05.11
          </p>

        </div>

        <div className="space-y-5">

          {/* 구매 */}
          <div className="
            rounded-[32px]
            border
            border-cyan-400/20
            bg-gradient-to-br
            from-cyan-400/10
            to-transparent
            p-7
            backdrop-blur-xl
          ">

            <div className="flex items-center justify-between">

              <h3 className="text-3xl font-black text-cyan-300">
                구매
              </h3>

              <div className="
                px-4
                py-2
                rounded-full
                bg-cyan-400/10
                text-cyan-300
                text-sm
              ">
                BUY
              </div>

            </div>

            <div className="mt-8 space-y-6">

              <div className="flex items-end justify-between">

                <div>
                  <p className="text-white/45 text-sm">
                    5만 이상
                  </p>

                  <p className="mt-2 text-3xl font-bold">
                    1750
                  </p>
                </div>

                <p className="text-cyan-300 text-sm">
                  최고가 매입
                </p>

              </div>

              <div className="h-[1px] bg-white/10" />

              <div className="flex items-end justify-between">

                <div>
                  <p className="text-white/45 text-sm">
                    5만 이하
                  </p>

                  <p className="mt-2 text-3xl font-bold">
                    1650
                  </p>
                </div>

                <p className="text-cyan-300 text-sm">
                  일반 매입
                </p>

              </div>

            </div>

          </div>

          {/* 판매 */}
          <div className="
            rounded-[32px]
            border
            border-purple-400/20
            bg-gradient-to-br
            from-purple-400/10
            to-transparent
            p-7
            backdrop-blur-xl
          ">

            <div className="flex items-center justify-between">

              <h3 className="text-3xl font-black text-purple-300">
                판매
              </h3>

              <div className="
                px-4
                py-2
                rounded-full
                bg-purple-400/10
                text-purple-300
                text-sm
              ">
                SELL
              </div>

            </div>

            <div className="mt-8 space-y-6">

              <div className="flex items-end justify-between">

                <div>
                  <p className="text-white/45 text-sm">
                    10만 이상
                  </p>

                  <p className="mt-2 text-3xl font-bold">
                    2100
                  </p>
                </div>

                <p className="text-purple-300 text-sm">
                  최고가 판매
                </p>

              </div>

              <div className="h-[1px] bg-white/10" />

              <div className="flex items-end justify-between">

                <div>
                  <p className="text-white/45 text-sm">
                    10만 이하
                  </p>

                  <p className="mt-2 text-3xl font-bold">
                    2150
                  </p>
                </div>

                <p className="text-purple-300 text-sm">
                  일반 판매
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Promotion */}
      <section className="relative px-5 py-20">

        <div className="mb-10">

          <p className="text-blue-300 text-sm font-semibold">
            PROMOTION
          </p>

          <h2 className="mt-2 text-3xl font-black">
            홍보 디자인
          </h2>

        </div>

        <div className="relative">

          <div className="
            overflow-hidden
            rounded-[34px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
          ">

            <img
              src={promotions[currentSlide]}
              alt="Promotion"
              className="w-full object-cover"
            />

          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-6">

            {promotions.map((_, index) => (

              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-10 bg-cyan-300"
                    : "w-3 bg-white/20"
                }`}
              />

            ))}

          </div>

        </div>

      </section>

      {/* Review */}
      <section className="relative px-5 py-20">

        <div className="mb-10">

          <p className="text-cyan-300 text-sm font-semibold">
            REVIEW
          </p>

          <h2 className="mt-2 text-3xl font-black">
            실제 거래 후기
          </h2>

        </div>

        <div className="
          overflow-hidden
          rounded-[34px]
          border
          border-cyan-400/15
          bg-white/[0.03]
          backdrop-blur-xl
        ">

          <img
            src="/reviews/main-review2.png"
            alt="Review"
            className="w-full object-cover"
          />

        </div>

        <a
          href="https://bubblyu24.creatorlink.net/%EA%B3%A0%EA%B0%9D%ED%9B%84%EA%B8%B0"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-6
            flex
            items-center
            justify-center
            h-[60px]
            rounded-2xl
            border
            border-cyan-400/20
            bg-cyan-400/10
            text-cyan-300
            font-semibold
          "
        >
          거래 후기 더 보기 →
        </a>

      </section>

      {/* Footer */}
      <footer className="
        relative
        px-5
        py-12
        border-t
        border-white/10
        text-center
      ">

        <h3 className="
          text-2xl
          font-black
          bg-gradient-to-r
          from-cyan-300
          to-purple-400
          bg-clip-text
          text-transparent
        ">
          Bubblyu SP
        </h3>

        <p className="mt-4 text-white/40 text-sm leading-7">
          Discord · KakaoTalk<br />
          Sudden Attack Trading
        </p>

      </footer>

    </main>
  );
}
