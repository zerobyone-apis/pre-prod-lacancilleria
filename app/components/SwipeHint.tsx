import { useEffect, useState } from "react";

export const SwipeHint = () => {
  // const [visible, setVisible] = useState(true);

  // useEffect(() => {
  //   function hideHint() {
  //     setVisible(false);
  //     window.removeEventListener("scroll", hideHint);
  //   }
  //   window.addEventListener("scroll", hideHint);
  // }, []);

  // if (!visible) return null;

  return (
    <div className="text-center text-mar/60 font-serif text-[14px] animate-pulse mt-2">
      <span className="inline-block mr-1">Swipe</span>
      <span className="inline-block animate-slide">
        ➜
      </span>

      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); opacity: .4; }
          50% { transform: translateX(6px); opacity: 1; }
          100% { transform: translateX(0); opacity: .4; }
        }
        .animate-slide {
          animation: slide 1.6s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};
