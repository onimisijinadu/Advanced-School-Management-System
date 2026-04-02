// import { useEffect } from 'react';

// export const useScreenMood = () => {
//   useEffect(() => {
//     const currentMood = window.matchMedia("(prefers-color-scheme: dark)");

//     const handleMoodChange = (e) => {
//       if (e.matches) {
//         document.documentElement.setAttribute("data-theme", "dark");
//       } else {
//         document.documentElement.removeAttribute("data-theme");
//       }
//     };

//     handleMoodChange(currentMood);

//     currentMood.addEventListener("change", handleMoodChange);

//     return () => {
//       currentMood.removeEventListener("change", handleMoodChange);
//     };
//   }, []);
// };
