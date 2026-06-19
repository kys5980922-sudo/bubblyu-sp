"use client";

import { useState } from "react";

export default function AdultGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {/* 로그인 팝업 */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/40 z-[10000] flex items-center justify-center">
          <div className="bg-white w-[420px] rounded shadow-lg p-6 relative">
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-3 right-4 text-2xl text-gray-400"
            >
              ×
            </button>

            <h2 className="text-3xl font-bold text-center mb-6 text-black">
              로그인
            </h2>

            <input
              type="text"
              placeholder="이메일"
              className="w-full border p-3 mb-3 text-black"
            />

            <input
              type="password"
              placeholder="비밀번호"
              className="w-full border p-3 mb-3 text-black"
            />

            <label className="flex items-center gap-2 mb-4 text-black">
              <input type="checkbox" />
              로그인상태유지
            </label>

            <button className="w-full bg-blue-700 text-white py-3 font-semibold">
              로그인
            </button>

            <div className="flex justify-between mt-4 text-black text-sm">
              <button>회원가입</button>
              <button>아이디 · 비밀번호 찾기</button>
            </div>
          </div>
        </div>
      )}

      {/* 성인인증 화면 */}
      <div className="fixed inset-0 bg-[#f3f3f3] z-[9999] flex items-center justify-center p-6">
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12">

          {/* 19 로고 */}
          <div className="flex-shrink-0">
            <div className="w-[240px] h-[240px] rounded-full border-[12px] border-red-500 bg-white flex items-center justify-center">
              <span className="text-[120px] font-bold text-black">
                19
              </span>
            </div>
          </div>

          {/* 우측 내용 */}
          <div className="flex-1">
            <p className="text-4xl leading-relaxed text-[#243b79] font-medium">
              이 정보 내용은 청소년 유해매체물로서 정보통신망
              이용촉진 및 정보보호등에 관한 법률 및 청소년 보호법
              규정에 의해{" "}
              <span className="text-red-500 font-bold">
                19세 미만 청소년
              </span>
              이 이용할 수 없습니다.
            </p>

            <div className="mt-12 flex flex-wrap gap-3">

              {/* 로그인 */}
              <button
                onClick={() => setShowLogin(true)}
                className="bg-[#556699] text-white px-8 py-4 rounded font-semibold"
              >
                회원 로그인
              </button>

              {/* PASS 예정 */}
              <button
                onClick={() => {
                  alert(
                    "PASS 본인인증 연동 예정입니다."
                  );
                }}
                className="bg-red-500 text-white px-8 py-4 rounded font-semibold"
              >
                간편 인증
              </button>

              {/* 나가기 */}
              <button
                onClick={() => {
                  window.location.href =
                    "https://www.naver.com";
                }}
                className="border border-gray-400 bg-white px-8 py-4 rounded font-semibold text-black"
              >
                19세 미만 나가기
              </button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
