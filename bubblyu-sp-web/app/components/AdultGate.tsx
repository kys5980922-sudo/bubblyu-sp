"use client";

import { useEffect, useState } from "react";

export default function AdultGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [verified, setVerified] = useState(false);
  const [birth, setBirth] = useState("");
  const [agree, setAgree] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("adult_verified");

    if (saved === "true") {
      setVerified(true);
    }
  }, []);

  const handleEnter = () => {
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
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center p-6">
      <div className="max-w-md w-full border rounded-xl p-6 shadow-lg">
        <h1 className="text-2xl font-bold mb-4">
          청소년유해매체물
        </h1>

        <p className="text-sm text-gray-600 mb-6">
          본 사이트는 만 19세 이상만 이용 가능합니다.
        </p>

        <input
          type="text"
          placeholder="생년월일 (예: 19900101)"
          value={birth}
          onChange={(e) => setBirth(e.target.value)}
          className="w-full border rounded-lg p-3 mb-4"
        />

        <label className="flex items-start gap-2 mb-6 text-sm">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <span>
            본인은 만 19세 이상이며 허위 정보 입력 시 책임은 본인에게 있습니다.
          </span>
        </label>

        <button
          onClick={handleEnter}
          className="w-full bg-black text-white rounded-lg p-3"
        >
          입장하기
        </button>
      </div>
    </div>
  );
}
