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

        <p className="text-sm mb-6 leading-6">
          본 사이트는 청소년보호법에 따라 만 19세 이상 성인만 이용 가능합니다.
          <br />
          청소년의 접근 및 이용을 제한하고 있습니다.
        </p>

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

        <button
          onClick={handleEnter}
          className="w-full bg-black text-white rounded-lg p-3 font-semibold"
        >
          입장하기
        </button>

        <div className="mt-6 text-xs text-gray-500 text-center">
          청소년유해매체물 · 만 19세 미만 청소년 이용 제한
        </div>

        <button
          onClick={() => {
            localStorage.removeItem("adult_verified");
            location.reload();
          }}
          className="mt-3 w-full text-xs text-gray-400"
        >
          (개발용) 인증 초기화
        </button>
      </div>
    </div>
  );
}
