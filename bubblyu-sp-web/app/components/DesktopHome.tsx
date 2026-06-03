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

const [calculatorMode, setCalculatorMode] = useState("need");
const [needValue, setNeedValue] = useState("");
const [haveValue, setHaveValue] = useState("");
  
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

      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,#12356f_0%,#020617_60%)]" />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">

        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] md:w-[900px] md:h-[900px] bg-cyan-500/10 blur-[140px] md:blur-[180px] rounded-full -translate-x-1/2 -translate-y-1/2" />

        {/* Whale */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

          <img
            src="/whale-main.png"
            alt="Whale"
            className="
              w-[145%]
              sm:w-[115%]
              md:w-[78%]
              max-w-[1500px]
              opacity-70
              md:opacity-80
              object-contain
              select-none
              translate-y-4
              md:translate-y-0
            "
          />

        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center w-full pt-20 sm:pt-28 md:pt-0">

          {/* Title */}
          <h1 className="
            text-4xl
            sm:text-6xl
            md:text-8xl
            font-black
            tracking-tight
            leading-tight
            bg-gradient-to-r
            from-cyan-300
            via-blue-400
            to-purple-500
            bg-clip-text
            text-transparent
            drop-shadow-[0_0_30px_rgba(34,211,238,0.25)]
          ">
            버블리유 SP
          </h1>

          {/* Desc */}
          <p className="
            mt-5
            text-base
            sm:text-lg
            md:text-2xl
            text-white/80
            font-medium
          ">
            24시간 응대 · 안전 거래 · 빠른 거래
          </p>

          <p className="
            mt-2
            text-sm
            sm:text-base
            md:text-lg
            text-white/50
          ">
            서든어택 SP 전문 브랜드
          </p>

          {/* Buttons */}
          <div className="
            mt-10
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            gap-4
            w-full
            max-w-md
            sm:max-w-none
          ">

            <a
              href="https://open.kakao.com/me/bubblyusp24"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full
                sm:w-auto
                px-8
                py-4
                rounded-2xl
                bg-cyan-400
                text-black
                font-bold
                text-base
                sm:text-lg
                shadow-[0_0_35px_rgba(34,211,238,0.55)]
                hover:scale-[1.02]
                hover:shadow-[0_0_55px_rgba(34,211,238,0.8)]
                transition-all
                duration-300
              "
            >
              카카오톡 문의
            </a>

            <a
              href="https://discord.gg/3sHzwq6NmR"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full
                sm:w-auto
                px-8
                py-4
                rounded-2xl
                border
                border-purple-500
                text-white
                font-bold
                text-base
                sm:text-lg
                bg-purple-500/10
                hover:bg-purple-500/20
                hover:scale-[1.02]
                transition-all
                duration-300
              "
            >
              디스코드 문의
            </a>

          </div>

        </div>

      </section>

      {/* 거래 안내 */}
      <section className="relative py-16 sm:py-24 md:py-28 px-4 sm:px-6 border-t border-white/10">

        <div className="max-w-7xl mx-auto">

          {/* Title */}
          <div className="text-center mb-14 sm:mb-20">

            <h2 className="
              text-3xl
              sm:text-5xl
              md:text-6xl
              font-black
            ">
              거래 안내
            </h2>

            <p className="
              mt-4
              sm:mt-6
              text-white/60
              text-sm
              sm:text-base
              md:text-lg
            ">
              버블리유SP는 안전하고 신뢰할 수 있는 거래를 약속드립니다.
            </p>

          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">

            {/* Card 1 */}
            <div className="
              group
              rounded-3xl
              border
              border-cyan-400/20
              bg-gradient-to-b
              from-white/[0.07]
              to-white/[0.03]
              backdrop-blur-xl
              px-7
              sm:px-10
              py-10
              sm:py-14
              min-h-[240px]
              sm:min-h-[320px]
              shadow-[0_0_40px_rgba(34,211,238,0.08)]
              hover:-translate-y-2
              hover:border-cyan-300/40
              hover:shadow-[0_0_70px_rgba(34,211,238,0.22)]
              transition-all
              duration-500
            ">

              <div className="flex flex-col items-center justify-center h-full text-center">

                <div className="
                  text-5xl
                  sm:text-7xl
                  font-black
                  text-cyan-300
                ">
                  01
                </div>

                <h3 className="
                  mt-5
                  text-2xl
                  sm:text-3xl
                  font-bold
                ">
                  빠른 응대
                </h3>

                <p className="
                  mt-4
                  text-white/70
                  leading-7
                  sm:leading-8
                  text-base
                  sm:text-lg
                ">
                  실시간 문의 확인 및<br />
                  평균 3분 이내 빠른 거래 진행
                </p>

              </div>

            </div>

            {/* Card 2 */}
            <div className="
              group
              rounded-3xl
              border
              border-purple-400/20
              bg-gradient-to-b
              from-white/[0.07]
              to-white/[0.03]
              backdrop-blur-xl
              px-7
              sm:px-10
              py-10
              sm:py-14
              min-h-[240px]
              sm:min-h-[320px]
              shadow-[0_0_40px_rgba(168,85,247,0.08)]
              hover:-translate-y-2
              hover:border-purple-300/40
              hover:shadow-[0_0_70px_rgba(168,85,247,0.22)]
              transition-all
              duration-500
            ">

              <div className="flex flex-col items-center justify-center h-full text-center">

                <div className="
                  text-5xl
                  sm:text-7xl
                  font-black
                  text-purple-300
                ">
                  02
                </div>

                <h3 className="
                  mt-5
                  text-2xl
                  sm:text-3xl
                  font-bold
                ">
                  안전 거래
                </h3>

                <p className="
                  mt-4
                  text-white/70
                  leading-7
                  sm:leading-8
                  text-base
                  sm:text-lg
                ">
                  신뢰 기반의 거래<br />
                  체계적 시스템 운영
                </p>

              </div>

            </div>

            {/* Card 3 */}
            <div className="
              group
              rounded-3xl
              border
              border-blue-400/20
              bg-gradient-to-b
              from-white/[0.07]
              to-white/[0.03]
              backdrop-blur-xl
              px-7
              sm:px-10
              py-10
              sm:py-14
              min-h-[240px]
              sm:min-h-[320px]
              shadow-[0_0_40px_rgba(96,165,250,0.08)]
              hover:-translate-y-2
              hover:border-blue-300/40
              hover:shadow-[0_0_70px_rgba(96,165,250,0.22)]
              transition-all
              duration-500
            ">

              <div className="flex flex-col items-center justify-center h-full text-center">

                <div className="
                  text-5xl
                  sm:text-7xl
                  font-black
                  text-blue-300
                ">
                  03
                </div>

                <h3 className="
                  mt-5
                  text-2xl
                  sm:text-3xl
                  font-bold
                ">
                  커뮤니티 운영
                </h3>

                <p className="
                  mt-4
                  text-white/70
                  leading-7
                  sm:leading-8
                  text-base
                  sm:text-lg
                ">
                  디스코드 · 페이스북 기반<br />
                  안정적인 커뮤니티 운영
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* 가격 안내 */}
      <section className="relative py-16 sm:py-24 md:py-28 px-4 sm:px-6 border-t border-white/10">

        <div className="max-w-6xl mx-auto">

          {/* Title */}
          <div className="text-center mb-14 sm:mb-20">

            <h2 className="
              text-3xl
              sm:text-5xl
              md:text-6xl
              font-black
            ">
              가격 안내
            </h2>

            <p className="
              mt-4
              sm:mt-6
              text-white/60
              text-sm
              sm:text-base
              md:text-lg
            ">
              버블리유SP는 가장 정직하게 판매합니다.
            </p>

            <p className="mt-2 text-xs sm:text-sm text-white/40">
              마지막 수정 : 2026.06.03
            </p>

          </div>

          {/* Price Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">

            {/* Buy */}
            <div className="
              rounded-3xl
              border
              border-cyan-400/20
              bg-gradient-to-b
              from-white/[0.07]
              to-white/[0.03]
              backdrop-blur-xl
              px-7
              sm:px-12
              py-10
              sm:py-14
              text-center
              shadow-[0_0_40px_rgba(34,211,238,0.08)]
            ">

<h3 className="
  text-4xl
  sm:text-6xl
  font-black
  text-cyan-300
">
  구매
</h3>

<p className="
  mt-4
  text-sm
  sm:text-base
  text-white/50
">
  고객님이 SP를 판매하는 경우
</p>

              <div className="mt-10 space-y-8">

                <div>
                  <p className="text-white/40 text-sm">
                    10만 이상
                  </p>

                  <p className="
                    text-3xl
                    sm:text-4xl
                    font-bold
                    mt-2
                  ">
                    1650 비율
                  </p>
                </div>

                <div>
                  <p className="text-white/40 text-sm">
                    10만 이하
                  </p>

                  <p className="
                    text-3xl
                    sm:text-4xl
                    font-bold
                    mt-2
                  ">
                    1550 비율
                  </p>
                </div>

              </div>

            </div>

            {/* Sell */}
            <div className="
              rounded-3xl
              border
              border-purple-400/20
              bg-gradient-to-b
              from-white/[0.07]
              to-white/[0.03]
              backdrop-blur-xl
              px-7
              sm:px-12
              py-10
              sm:py-14
              text-center
              shadow-[0_0_40px_rgba(168,85,247,0.08)]
            ">

<h3 className="
  text-4xl
  sm:text-6xl
  font-black
  text-purple-300
">
  판매
</h3>

<p className="
  mt-4
  text-sm
  sm:text-base
  text-white/50
">
  고객님이 SP를 구매하는 경우
</p>
              
              <div className="mt-10 space-y-8">

                <div>
                  <p className="text-white/40 text-sm">
                    10만 이상
                  </p>

                  <p className="
                    text-3xl
                    sm:text-4xl
                    font-bold
                    mt-2
                  ">
                    2000 비율
                  </p>
                </div>

                <div>
                  <p className="text-white/40 text-sm">
                    10만 이하
                  </p>

                  <p className="
                    text-3xl
                    sm:text-4xl
                    font-bold
                    mt-2
                  ">
                    2100 비율
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

{/* SP 계산기 */}
<section className="relative py-16 sm:py-24 px-4 sm:px-6 border-t border-white/10">

  <div className="max-w-5xl mx-auto">

    {/* Title */}
    <div className="text-center mb-12 sm:mb-16">

      <p className="text-cyan-300 text-sm font-semibold tracking-[0.2em] uppercase">
        SP Calculator
      </p>

      <h2 className="mt-3 text-3xl sm:text-5xl md:text-6xl font-black">
        필요 금액 계산기
      </h2>

      <p className="mt-4 text-white/55 text-sm sm:text-base leading-7">
        플리마켓 수수료 10% 기준 자동 계산
      </p>

    </div>

    {/* Calculator */}
    <div className="
      rounded-[32px]
      border
      border-white/10
      bg-white/[0.04]
      backdrop-blur-2xl
      p-5
      sm:p-8
      shadow-[0_0_60px_rgba(34,211,238,0.08)]
    ">

      {/* Tabs */}
      <div className="
        flex
        items-center
        gap-3
        mb-8
      ">

        <button
          onClick={() => setCalculatorMode("need")}
          className={`
            flex-1
            h-[52px]
            rounded-2xl
            text-sm
            sm:text-base
            font-semibold
            transition-all
            duration-300
            ${
              calculatorMode === "need"
                ? "bg-cyan-400 text-black shadow-[0_0_30px_rgba(34,211,238,0.4)]"
                : "bg-white/[0.04] text-white/60 border border-white/10"
            }
          `}
        >
          필요한 SP 계산
        </button>

        <button
          onClick={() => setCalculatorMode("have")}
          className={`
            flex-1
            h-[52px]
            rounded-2xl
            text-sm
            sm:text-base
            font-semibold
            transition-all
            duration-300
            ${
              calculatorMode === "have"
                ? "bg-purple-400 text-white shadow-[0_0_30px_rgba(168,85,247,0.35)]"
                : "bg-white/[0.04] text-white/60 border border-white/10"
            }
          `}
        >
          구매 가능 SP 계산
        </button>

      </div>

      {/* Need Mode */}
      {calculatorMode === "need" && (

        <div>

          <div>

            <p className="text-white/45 text-sm mb-3">
              최종적으로 받고 싶은 SP
            </p>

            <input
              type="number"
              placeholder="예: 90000(SP)"
              value={needValue}
              onChange={(e) => setNeedValue(e.target.value)}
              className="
                w-full
                h-[64px]
                rounded-2xl
                border
                border-cyan-400/15
                bg-[#0b1220]
                px-5
                text-lg
                font-semibold
                outline-none
                focus:border-cyan-300/40
                transition-all
              "
            />

          </div>

          {/* Result */}
          <div className="
            mt-8
            rounded-[28px]
            border
            border-cyan-400/15
            bg-gradient-to-br
            from-cyan-400/10
            to-transparent
            p-6
          ">

            <p className="text-cyan-300 text-sm font-semibold">
              실제 구매 필요량
            </p>

            <h3 className="
              mt-3
              text-4xl
              sm:text-5xl
              font-black
              tracking-tight
            ">
              {needValue
                ? `${Math.round(Number(needValue) / 0.9).toLocaleString()} SP`
                : "0 SP"}
            </h3>

            <p className="mt-4 text-white/45 text-sm leading-6">
              플리마켓 수수료 10%가 포함된 예상 구매 수량입니다.
            </p>

          </div>

        </div>

      )}

      {/* Have Mode */}
      {calculatorMode === "have" && (

        <div>

          <div>

            <p className="text-white/45 text-sm mb-3">
              현재 보유 중인 금액
            </p>

            <input
              type="number"
              placeholder="예: 100000(원)"
              value={haveValue}
              onChange={(e) => setHaveValue(e.target.value)}
              className="
                w-full
                h-[64px]
                rounded-2xl
                border
                border-purple-400/15
                bg-[#0b1220]
                px-5
                text-lg
                font-semibold
                outline-none
                focus:border-purple-300/40
                transition-all
              "
            />

          </div>

          {/* Result */}
          <div className="
            mt-8
            rounded-[28px]
            border
            border-purple-400/15
            bg-gradient-to-br
            from-purple-400/10
            to-transparent
            p-6
          ">

            <p className="text-purple-300 text-sm font-semibold">
              실제 수령 SP
            </p>

            <h3 className="
              mt-3
              text-4xl
              sm:text-5xl
              font-black
              tracking-tight
            ">
              {haveValue
                ? `${Math.floor((Number(haveValue) / 2.0) * 0.9).toLocaleString()} SP`
  : "0 SP"}
            </h3>

            <p className="mt-4 text-white/45 text-sm leading-6">
              플리마켓 수수료 10% 차감 기준 예상 수령량입니다.
            </p>

          </div>

        </div>

      )}

    </div>

  </div>

</section>
      
      {/* 홍보 */}
      <section className="relative py-16 sm:py-24 md:py-28 px-4 sm:px-6 border-t border-white/10">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14 sm:mb-20">

            <h2 className="
              text-3xl
              sm:text-5xl
              md:text-6xl
              font-black
            ">
              홍보
            </h2>

            <p className="
              mt-4
              sm:mt-6
              text-white/60
              text-sm
              sm:text-base
              md:text-lg
            ">
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

                <div className="
                  overflow-hidden
                  rounded-[24px]
                  sm:rounded-[32px]
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  shadow-[0_0_60px_rgba(34,211,238,0.08)]
                ">

                  <img
                    src={promotions[currentSlide]}
                    alt="Promotion"
                    className="
                      w-full
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-[1.02]
                    "
                  />

                </div>

              </a>

              {/* Dots */}
              <div className="flex justify-center gap-3 mt-6 sm:mt-8">

                {promotions.map((_, index) => (

                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? "w-10 sm:w-12 bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
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
      <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 border-t border-white/10">

        <div className="max-w-6xl mx-auto">

          {/* Title */}
          <div className="text-center mb-14 sm:mb-16">

            <h2 className="
              text-3xl
              sm:text-5xl
              md:text-6xl
              font-black
            ">
              리뷰
            </h2>

            <p className="
              mt-4
              sm:mt-6
              text-white/60
              text-sm
              sm:text-base
              md:text-lg
            ">
              실제 이용자들의 거래 후기입니다.
            </p>

          </div>

          {/* Review */}
          <div className="group relative">

            <img
              src="/reviews/main-review2.png"
              alt="Review"
              className="
                w-full
                rounded-[24px]
                sm:rounded-[36px]
                border
                border-cyan-400/20
                shadow-[0_0_60px_rgba(34,211,238,0.08)]
                transition-all
                duration-500
                group-hover:scale-[1.01]
                group-hover:brightness-110
              "
            />

          </div>

          {/* Button */}
          <div className="flex justify-center mt-10 sm:mt-14">

            <a
              href="https://bubblyu24.creatorlink.net/%EA%B3%A0%EA%B0%9D%ED%9B%84%EA%B8%B0"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full
                sm:w-auto
                max-w-sm
                text-center
                px-8
                py-4
                rounded-2xl
                border
                border-cyan-400/30
                bg-white/[0.03]
                backdrop-blur-xl
                text-cyan-300
                font-semibold
                transition-all
                duration-300
                hover:bg-cyan-400/10
                hover:border-cyan-300/60
                hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]
              "
            >
              실제 거래 후기 더 보기 →
            </a>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="
        relative
        border-t
        border-white/10
        py-10
        sm:py-12
        text-center
        text-white/40
        text-xs
        sm:text-sm
        px-4
      ">

        <p>Bubblyu SP © 2026</p>

        <p className="mt-3">
          Discord · KakaoTalk · Sudden Attack Trading
        </p>

  <p>Bubblyu SP © 2026</p>

  <div className="mt-8 text-[11px] sm:text-xs text-white/25 leading-6">

    <p>
      상호명 : 버블리유 · 대표자 : 윤민영
    </p>

    <p>
      사업자등록번호 : 684-48-00867
    </p>

    <p>
      통신판매업신고번호 : 2024-충남아산-0456
    </p>

    <p>
      문의 : 카카오톡 BUBB24
    </p>

  </div>

</footer>

    </main>
  );
}
