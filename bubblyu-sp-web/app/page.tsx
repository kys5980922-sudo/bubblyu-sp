// 프로젝트 파일 구조
// app/page.tsx ← 현재 코드 붙여넣기
//
// package.json
// {
//   "name": "bubblyu-sp",
//   "private": true,
//   "scripts": {
//     "dev": "next dev",
//     "build": "next build",
//     "start": "next start"
//   },
//   "dependencies": {
//     "next": "latest",
//     "react": "latest",
//     "react-dom": "latest"
//   }
// }
//
// tailwind.config.js
// module.exports = {
//   content: ["./app/**/*.{js,ts,jsx,tsx}"],
//   theme: { extend: {} },
//   plugins: [],
// }
//
// 배포 방법
// 1. 이 파일 내용을 복사
// 2. Vercel → Add New → Project
// 3. GitHub 저장소 연결
// 4. Next.js 프로젝트 생성 후 app/page.tsx 파일에 붙여넣기
// 5. Deploy 클릭

export default function BubblyuSP() {
  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(80,140,255,0.25),transparent_40%),radial-gradient(circle_at_bottom,rgba(180,120,255,0.2),transparent_35%)]" />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-300 to-violet-400 blur-[1px]" />
          <div>
            <h1 className="text-2xl font-bold tracking-wide">Bubblyu SP</h1>
            <p className="text-xs text-white/50">Sudden Attack Trading</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-8 text-sm text-white/70">
          <a href="#home" className="hover:text-cyan-300 transition">Home</a>
          <a href="#promotion" className="hover:text-cyan-300 transition">Promotion</a>
          <a href="#reviews" className="hover:text-cyan-300 transition">Reviews</a>
          <a href="#contact" className="hover:text-cyan-300 transition">Contact</a>

          
          <a href="#guide" className="hover:text-cyan-300 transition">거래 안내</a>
          <a href="#review" className="hover:text-cyan-300 transition">거래 후기</a>
          <a href="#warning" className="hover:text-cyan-300 transition">사칭 주의</a>
          <a href="#contact" className="hover:text-cyan-300 transition">문의하기</a>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-28">
        <div className="relative mb-10">
          <div className="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-full" />

          <img
            src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1200&auto=format&fit=crop"
            alt="Whale"
            className="relative w-64 h-64 object-cover rounded-full border border-white/10 shadow-2xl"
          />
        </div>

        <h2 className="text-6xl md:text-7xl font-black tracking-tight bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-400 bg-clip-text text-transparent">
          Bubblyu SP
        </h2>

        <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
          24시간 응대 · 안전 거래 · 빠른 거래
          <br />
          서든어택 SP 전문 브랜드
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4">
          <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold shadow-lg shadow-cyan-500/20 hover:scale-105 transition">
            카카오톡 문의
          </button>

          <button className="px-8 py-4 rounded-2xl border border-violet-400/40 bg-violet-500/10 text-violet-200 font-bold hover:bg-violet-500/20 hover:scale-105 transition">
            디스코드 문의
          </button>
        </div>
      </section>

      {/* Guide */}
      <section id="guide" className="relative z-10 px-6 md:px-16 py-24">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-14 text-center">거래 안내</h3>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: "빠른 응대",
                desc: "실시간 문의 확인 및 빠른 거래 진행"
              },
              {
                title: "안전 거래",
                desc: "신뢰 기반 거래 시스템 운영"
              },
              {
                title: "커뮤니티 운영",
                desc: "디스코드 중심의 안정적인 운영"
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-300/30 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-300/20 to-violet-400/20 mb-6" />
                <h4 className="text-2xl font-bold mb-3">{item.title}</h4>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <a
            href="https://bubblyu24.creatorlink.net/%EA%B3%A0%EA%B0%9D%ED%9B%84%EA%B8%B0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl border border-cyan-300/30 bg-cyan-400/10 text-cyan-200 font-semibold hover:bg-cyan-400/20 transition"
          >
            전체 후기 보러가기
          </a>
        </div>
      </section>

      {/* Review */}
      <section id="promotion" className="relative z-10 px-6 md:px-16 py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h3 className="text-4xl font-bold mb-4">Promotion</h3>
            <p className="text-white/60">
              버블리유SP의 다양한 프로모션 디자인입니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
[
  "/promotion/price-guide.png",
  "/promotion/trade-guide.png",
  "/promotion/clan-partner.png",
  "/promotion/bubblyu-promotion.png",
  "/promotion/report-guide.png",
]
].map((src, index) => (
  <div
    key={index}
    className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
  >
    <div className="relative overflow-hidden">
      <img
        src={src}
        alt="Promotion"
        className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
    </div>
  </div>
))}
          </div>
        </div>
      </section>

      <section id="reviews" className="relative z-10 px-6 md:px-16 py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Reviews</h3>
          <p className="text-white/60 mb-14">
            실제 고객 후기 및 거래 인증을 확인해보세요.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="rounded-3xl overflow-hidden border border-white/10 bg-white/5"
              >
                <div className="h-48 bg-gradient-to-br from-cyan-300/20 to-violet-500/20" />
                <div className="p-6 text-left">
                  <h4 className="font-bold text-xl mb-2">거래 인증 #{n}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    빠르고 안전하게 거래 진행했습니다.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning */}
      <section id="warning" className="relative z-10 px-6 md:px-16 py-24">
        <div className="max-w-4xl mx-auto rounded-3xl border border-red-400/20 bg-red-500/5 p-10 text-center">
          <h3 className="text-3xl font-bold mb-4 text-red-300">사칭 주의</h3>
          <p className="text-white/70 leading-relaxed">
            반드시 공식 디스코드 및 카카오톡 계정을 통해 문의해주세요.
            <br />
            공식 계정 외 거래로 인한 피해는 책임지지 않습니다.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="relative z-10 border-t border-white/10 py-10 text-center text-white/40 text-sm"
      >
        <p>Bubblyu SP © 2026</p>
        <p className="mt-2">Discord · KakaoTalk · Sudden Attack Trading</p>
      </footer>
    </main>
  )
}
