"use client";

import { useScrollAnimation } from "@/hooks";

const TestScrollAnimation = () => {
  const bounceRef = useScrollAnimation<HTMLParagraphElement>();
  const fadeUpRef = useScrollAnimation<HTMLParagraphElement>({
    animationClass: "animate-fadeInUp",
  });
  const fadeLeftRef = useScrollAnimation<HTMLParagraphElement>({
    animationClass: "animate-fadeInLeft",
    once: false,
  });

  return (
    <div className="min-h-screen flex flex-col  items-center  justify-center gap-10">
      <p ref={bounceRef} className=" text-lg">
        Hieu Ung Bounce
      </p>

      <p ref={fadeUpRef} className=" text-lg">
        Hiện từ dưới lên
      </p>

      <p ref={fadeLeftRef} className=" text-lg">
        Hiện từ trái qua (lặp lại nếu scroll ra + vào)
      </p>
    </div>
  );
};

export default TestScrollAnimation;
