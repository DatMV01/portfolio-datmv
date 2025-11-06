import { useEffect, useState, useMemo } from "react";

export function useScrollSpy(
  // Destructure options for better dependency tracking
  ids: string[],
  options = { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
) {
  const [activeId, setActiveId] = useState("");

  // 1. Solve the "complex expression" warning by using useMemo
  //    to stabilize the complex dependency (ids.join(','))
  const dependencyKey = useMemo(() => ids.join(","), [ids]);

  // Destructure options to ensure only the value properties are compared
  // if options were passed directly into the hook call.
  const { rootMargin, threshold } = options;

  useEffect(() => {
    // 2. The dependency array now correctly includes all external variables used
    //    inside the useEffect that are not state setters or refs.

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin, threshold }
    ); // Use the destructured options

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [dependencyKey, ids, rootMargin, threshold]); // Corrected Dependency Array

  return activeId;
}
