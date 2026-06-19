"use client";

import { useEffect, useState } from "react";

export default function AdultGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [verified, setVerified] = useState(false);
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [agree, setAgree] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("adult_verified");

    if (saved === "true") {
      setVerified(true);
    }
  }, []);

  const handleEnter = () => {
    if (!name.trim()) {
      alert("성명을 입력해주세요.");
      return;
    }

    if (!birth || birth.length !== 8) {
      alert("생년월일을 입력해주세요. (예: 19900101)");
      return;
    }

    if (!agree) {
      alert("성인 확인에 동의해주세요.");
      return;
    }

    const year = parseInt(birth.substring(0, 4));
    const currentYear = new Date().getFullYear();

    if (currentYear - year < 19) {
      alert("만 19세 미만은 이용할 수 없습니다.");
      return;
    }

    localStorage.setItem("adult_verified", "true");
    setVerified(true);
  };

  if (verified) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 bg-white text-black z-[9999] flex items-center justify-center p-6">
      <div className="max-w-lg w-full border rounded-2xl p-8 shadow-lg bg-white">
<h1 className="text-3xl font-bold mb-4">
  청소년유해매체물
</h1>

<div className="flex items-center gap-3 mb-4">
  <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xl">
    19
  </div>

  <div>
    <div className="font-bold text-red-600">
      청소년유해매체물
    </div>
    <div className="text-sm text-gray-600">
      19세 미만 이용불가
    </div>
  </div>
</div>

<div className="bg-red-50 border border-red-400 rounded-lg p-3 mb-5">
  <p className="text-sm text-red-700">
    본 정보는 청소년유해매체물로서 청소년보호법에 따라
    만 19세 미만 청소년은 이용할 수 없습니다.
  </p>
</div>
        <input
          type="text"
          placeholder="성명"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded-lg p-3 mb-4 text-black"
        />

        <input
          type="text"
          placeholder="생년월일 (예: 19900101)"
          value={birth}
          onChange={(e) => setBirth(e.target.value)}
          className="w-full border rounded-lg p-3 mb-4 text-black"
        />

        <label className="flex items-start gap-2 mb-6 text-sm">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="mt-1"
          />
          <span>
            본인은 만 19세 이상이며 허위 정보 입력 시 발생하는 책임은 본인에게 있습니다.
          </span>
        </label>

<div className="grid grid-cols-2 gap-3">
  <button
    onClick={handleEnter}
    className="bg-black text-white rounded-lg p-3 font-semibold"
  >
    입장하기
  </button>

  <button
    onClick={() => {
      window.location.href = "https://www.naver.com";
    }}
    className="border border-gray-300 rounded-lg p-3 font-semibold"
  >
    19세 미만 나가기
  </button>
</div>

<div className="mt-6 text-xs text-gray-500 text-center">
  청소년유해매체물 · 만 19세 미만 청소년 이용 제한
</div>
      </div>
    </div>
  );
}
