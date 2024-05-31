import { nicky } from "@/app/fonts";
export const MaskedText = () => {
  return (
    <>
      <div
        data-gradient={true}
        data-animate={true}
        style={{
          "--highlight": 4,
          "--spread": 4,
          "--primary": "#ffffff",
          "--secondary": "#606060",
        }}
      >
        <h1 className={`leading-none bg-no-repeat ${nicky.className}`}>
          L&apos;amore dice Ciao
        </h1>
      </div>
      <style jsx>{`
        h1 {
          background: conic-gradient(
              from var(--angle, 180deg) at 50% 70%,
              hsla(0, 0%, 98%, 1) 0deg,
              #eec32d 72.0000010728836deg,
              #ec4b4b 144.0000021457672deg,
              #709ab9 216.00000858306885deg,
              #4dffbf 288.0000042915344deg,
              hsla(0, 0%, 98%, 1) 1turn
            ),
            linear-gradient(
              var(--secondary) 0 calc(var(--spread, 4) * 1lh),
              transparent
            );
          background-size: 100% calc(var(--highlight) * 1lh),
            100% calc(100% - (var(--highlight) * 1lh));
          background-position: 0 0, 0 calc(var(--highlight) * 1lh);
          background-clip: text;
          color: transparent;
          text-wrap: balance;
          font-size: 40px;
          display: inline-block;
        }

        @media (prefers-reduced-motion: no-preference) {
          @property --angle {
            inherits: true;
            initial-value: 180deg;
            syntax: "<angle>";
          }
          @keyframes rotate {
            to {
              --angle: 540deg;
            }
          }
          [data-gradient="true"][data-animate="true"] {
            animation: rotate 6s infinite linear;
          }
        }
      `}</style>
    </>
  );
};
