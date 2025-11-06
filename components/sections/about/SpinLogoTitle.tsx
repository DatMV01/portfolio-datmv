import { MdOutlineTerminal } from "react-icons/md";

const SpinLogoTitle = () => {
  return (
    <div className="rounded-full bg-background">
      <div className="relative w-min">
        <svg
          viewBox="0 0 200 200"
          className="w-30 aspect-square animate-spin-slow"
        >
          <defs>
            <path
              id="circlePath"
              d="
                M100,100
                m-80,0
                a80,80 0 1,1 160,0
                a80,80 0 1,1 -160,0
              "
            />
          </defs>

          <text className="fill-foreground" letterSpacing="6">
            <textPath href="#circlePath">
              ✨ WEB DEVELOPER ✨ WEB DEVELOPER
            </textPath>
          </text>
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <MdOutlineTerminal className="stroke-foreground" size={30} />
        </div>
      </div>
    </div>
  );
};

export default SpinLogoTitle;
