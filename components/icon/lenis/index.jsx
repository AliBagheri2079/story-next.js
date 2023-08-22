'use client';
import { motion } from 'framer-motion';

const icon = {
  hidden: {
    strokeWidth: '0.1rem',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeDasharray: 4900,
    strokeDashoffset: 4900,
    fill: 'hsl(var(--foreground) / 0)',
    stroke: 'hsl(var(--foreground) / 1)',
  },
  visible: i => {
    const delay = 1 + i * 0.5;
    return {
      strokeDashoffset: 1,
      fill: 'hsl(var(--foreground) / 1)',
      // stroke: 'hsl(var(--foreground) / 0)',
      transition: {
        default: { delay, type: 'spring', duration: 2, bounce: 0 },
        fill: { delay: delay + 0.5 },
      },
    };
  },
};

const Lenis = () => {
  return (
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1900 400'
      fill='none'
    >
      <motion.g>
        <motion.path
          variants={icon}
          initial='hidden'
          animate='visible'
          custom={1.5}
          d='M873.916 269.237l-.715-.715-2.689 2.699c-10.595 10.594-28.904 4.512-30.777-10.353a73.348 73.348 0 01-.554-9.215V.353h-.957v25.036a3.016 3.016 0 01-2.159 2.893 3.02 3.02 0 01-3.389-1.241 40.231 40.231 0 00-33.778-18.35h-76.147l-58.552 58.553a5.038 5.038 0 01-7.743-.77 5.038 5.038 0 01-.847-2.795V.353h-1.008v28.913a3.023 3.023 0 01-2.366 2.954 3.021 3.021 0 01-3.394-1.675c-8.057-17.291-20.394-21.833-20.394-21.833L570.68 65.804l.715.715L573.943 64c10.595-10.454 28.672-4.4 30.686 10.353.431 3.262.64 6.55.625 9.84v187.178l-63.276 63.276.715.705 3.182-3.173a17.81 17.81 0 0112.76-5.035h124.336l48.622-49.277 8.168-8.168-.705-.715-3.152 3.152a18.137 18.137 0 01-12.82 5.318h-49.731a5.04 5.04 0 01-4.652-3.112 5.037 5.037 0 011.097-5.489l110.489-110.488a5.03 5.03 0 015.48-1.087 5.037 5.037 0 013.11 4.642v108.635c0 46.588 27.191 56.538 27.191 56.538l1.592-1.591 56.256-56.266zM674.924 57.908h52.903a5.036 5.036 0 013.565 8.6l-67.193 67.234a5.033 5.033 0 01-5.493 1.096 5.036 5.036 0 01-3.108-4.661V77.265l19.326-19.357zm-19.366 85.855l10.786-10.766v77.285l-10.806 10.806.02-77.325zm-46.407 125.131l48.623-48.622a5.03 5.03 0 015.485-1.085 5.034 5.034 0 013.105 4.65v44.937a5.036 5.036 0 01-1.48 3.555l-5.157 5.166h-47.031a5.032 5.032 0 01-4.926-6.025 5.039 5.039 0 011.381-2.576zm107.558-60.526V82.642l24.734-24.734h29.326a18.13 18.13 0 0118.128 18.128v72.39l-63.537 63.537a5.037 5.037 0 01-8.651-3.595z'
        />

        <motion.path
          variants={icon}
          initial='hidden'
          animate='visible'
          custom={2}
          d='M1113.42 269.237l-.71-.715-3.63 3.625c-3.4 3.397-8 5.306-12.81 5.308h-95.19a5.04 5.04 0 01-4.937-6.013 5.034 5.034 0 011.374-2.578l60.913-60.909-.71-.715-7.17 7.171c-.42.422-.96.709-1.55.825a3 3 0 01-1.74-.172 3.084 3.084 0 01-1.36-1.111 3.036 3.036 0 01-.51-1.678V64.031l6.41-6.415h35.7v-.06L1144.08.977l-.72-.715-3.13 3.142a18.076 18.076 0 01-5.88 3.929c-2.2.91-4.56 1.379-6.94 1.378H927.413l-57.102 57.123.715.715 3.464-3.414a18.127 18.127 0 0112.699-5.227l89.924-.151a5.034 5.034 0 013.575 8.59l-60.083 60.084.715.715 7.11-7.12a3.018 3.018 0 014.65.464c.332.498.508 1.083.506 1.681v147.902l-7.392 7.382h-30.756l-57.858 57.243.715.715 3.021-3.021a18.125 18.125 0 0112.71-5.237h201.954l57.44-57.918zM990.729 57.747l47.421-.08c1 0 1.97.295 2.8.847a5.001 5.001 0 011.85 2.258c.38.919.48 1.93.29 2.907a5.026 5.026 0 01-1.37 2.578l-49.189 49.196a5.035 5.035 0 01-8.6-3.565V64.555l6.798-6.808zm-6.798 67.717l11.078-11.078v94.284l-11.078 11.078v-94.284zm2.518 93.237a5.024 5.024 0 012.577-1.382 5.038 5.038 0 016.023 4.937v47.666l-7.553 7.553H939.81a5.037 5.037 0 01-3.565-8.591l50.204-50.183z'
        />

        <motion.path
          variants={icon}
          initial='hidden'
          animate='visible'
          custom={0.5}
          d='M312.612 124.618L159.947 277.283h-30.646a5.038 5.038 0 01-4.653-3.112 5.04 5.04 0 011.098-5.488l43.144-43.174a18.13 18.13 0 005.297-12.811v-127.9a5.034 5.034 0 011.48-3.566l23.315-23.314a18.126 18.126 0 0117.997 18.128v36.406a12.081 12.081 0 01-3.536 8.551l-3.313 3.313.615.806 56.568-56.539V.393h-1.007v25.026a3.025 3.025 0 01-2.158 2.877 3.022 3.022 0 01-3.381-1.225 40.288 40.288 0 00-33.778-18.34h-47.333l-41.392 41.543-16.114 16.114a5.028 5.028 0 01-5.485 1.084 5.037 5.037 0 01-3.105-4.65V.383h-1.007v28.884a3.018 3.018 0 01-2.367 2.954 3.018 3.018 0 01-3.394-1.675C98.736 13.254 86.399 8.711 86.399 8.711L28.642 65.805l.705.715L31.895 64c10.614-10.464 28.682-4.38 30.686 10.393.43 3.248.64 6.522.624 9.8V271.07L0 334.275l.715.715 2.477-2.478a18.128 18.128 0 0112.79-5.327H198.72l99.581-100.186a18.129 18.129 0 005.308-12.81v-71.776a18.125 18.125 0 015.307-12.81l4.28-4.28-.584-.705zM113.671 129.1V76.318l18.409-18.41h53.306a5.036 5.036 0 013.565 8.6l-66.7 66.701a5.033 5.033 0 01-7.755-.763 5.036 5.036 0 01-.845-2.803l.02-.543zm0 14.099l10.191-10.202v77.486l-10.211 10.212.02-77.496zm2.014 134.054H70.678a5.033 5.033 0 01-3.565-8.6l48.149-48.139a5.031 5.031 0 015.489-1.098 5.038 5.038 0 013.111 4.653v44.946l-8.177 8.238zm137.69-7.905a3.027 3.027 0 01-.886 2.135l-4.875 4.884a3.021 3.021 0 01-2.135.886h-71.987a5.035 5.035 0 01-3.565-8.6l74.857-74.848a5.039 5.039 0 017.743.77c.553.828.847 1.8.848 2.795v71.978z'
        />

        <motion.path
          variants={icon}
          initial='hidden'
          animate='visible'
          custom={1}
          d='M563.56 268.774l-.715-.716-3.968 3.978a18.128 18.128 0 01-12.821 5.308H439.818a5.034 5.034 0 01-4.928-6.015 5.038 5.038 0 011.373-2.576L571.626 133.38l-.705-.715-4.773 4.763a18.129 18.129 0 01-25.762-.131l-32.861-33.506a5.034 5.034 0 010-7.05l95.674-95.673-.715-.715-3.152 3.162a18.134 18.134 0 01-12.831 5.307H448.046L398.809 58.06l-8.389 8.39a5.037 5.037 0 01-7.751-.757 5.032 5.032 0 01-.849-2.799V.453h-1.007v28.813a3.021 3.021 0 01-5.751 1.28c-8.057-17.292-20.404-21.834-20.404-21.834l-57.757 57.092.705.715L300.164 64c10.595-10.454 28.662-4.4 30.676 10.353.435 3.262.647 6.549.635 9.84V271.27l-63.215 63.215.715.705 2.971-2.971a18.126 18.126 0 0112.789-5.307h220.464l58.361-58.139zm-63.941-64.807l-73.377 73.377h-29.054a5.036 5.036 0 01-3.555-8.591l43.688-43.687a18.126 18.126 0 005.307-12.841v-50.596l11.078-11.078 45.933 46.326a5.036 5.036 0 01-.02 7.09zm-57.011-55.863V81.313l23.516-23.516 66.961-.17a5.035 5.035 0 013.575 8.6l-85.431 85.432a5.037 5.037 0 01-8.621-3.555zM400.31 57.969l52.167-.131a5.04 5.04 0 014.658 3.1 5.039 5.039 0 01-1.082 5.49l-65.583 65.119a5.032 5.032 0 01-5.477 1.074 5.036 5.036 0 01-3.103-4.639v-49.52a5.035 5.035 0 011.48-3.554l16.94-16.94zm-18.42 84.011l10.373-10.332v78.936l-10.393 10.403.02-79.007zm10.403 82.179v44.584l-8.651 8.651h-44.594a5.034 5.034 0 01-3.565-8.59l48.199-48.2a5.039 5.039 0 017.73.725c.558.821.861 1.788.871 2.78l.01.05z'
        />

        <motion.path
          variants={icon}
          initial='hidden'
          animate='visible'
          custom={2.5}
          d='M1324.15 128.415l-69.91-10.444a5.003 5.003 0 01-2.5-1.132 5.01 5.01 0 01-1.65-5.014c.21-.906.68-1.735 1.34-2.394L1360.1.715l-.71-.715-3.4 3.404a18.076 18.076 0 01-5.88 3.929c-2.2.91-4.56 1.379-6.94 1.378h-133.84l-107.48 107.477v7.755a33.846 33.846 0 0028.81 33.456c.79.12 1.52.455 2.13.967a4.3 4.3 0 011.4 4.267 4.35 4.35 0 01-1.14 2.037l-53.17 53.175.71.715 3.15-3.153a12.1 12.1 0 0110.35-3.404l85.5 12.881c.92.141 1.78.534 2.49 1.135a5.14 5.14 0 011.54 2.274c.29.885.32 1.833.11 2.739a5.056 5.056 0 01-1.34 2.392l-101.64 101.274.72.715 2.94-2.941c3.4-3.381 8-5.278 12.79-5.277h147.43c.26-.001.51-.106.7-.292l113.76-112.734V168.99c0-9.827-3.52-19.328-9.94-26.775a41.005 41.005 0 00-25-13.8zm-81.03-12.085l-42.56-6.365a4.99 4.99 0 01-2.5-1.129 4.973 4.973 0 01-1.54-2.273 5.015 5.015 0 011.22-5.138l43.69-43.698 48.23-.121c1-.002 1.97.292 2.8.844a5.015 5.015 0 011.86 2.257c.39.92.49 1.931.29 2.909a5.032 5.032 0 01-1.37 2.58l-50.12 50.134zm-78.75-11.773a11.375 11.375 0 01-6.93-3.816 11.394 11.394 0 01-2.76-7.414V64.424l6.57-6.486 66.56-.171c1-.002 1.97.292 2.8.844a5.08 5.08 0 011.86 2.257c.38.92.48 1.932.29 2.909a4.976 4.976 0 01-1.38 2.58l-41.94 41.946-25.07-3.746zm-32.11 62.359l8.05-8.057 90.32 13.576c1.05.158 2.04.606 2.85 1.294a5.774 5.774 0 011.76 2.599c.33 1.012.37 2.096.12 3.131a5.63 5.63 0 01-1.53 2.734l-101.57-15.277zm58.41 59.66l43.97 6.627c.92.14 1.78.534 2.49 1.137a4.895 4.895 0 011.53 2.279 5.046 5.046 0 01-1.23 5.134l-35.92 35.621h-49.63a5.032 5.032 0 01-2.8-.848 5.032 5.032 0 01-.75-7.763l42.34-42.187zm20.92 42.187l71.36-71.04a5.056 5.056 0 001.34-2.392 5.1 5.1 0 00-.12-2.739 5.04 5.04 0 00-4.02-3.409l-45.09-6.838 7.72-7.695c.12-.111.25-.195.4-.244.15-.049.31-.062.47-.038l45.57 6.849c3.54.532 6.76 2.315 9.1 5.024a14.935 14.935 0 013.61 9.74v72.772l-8.66 8.581h-78.09a5.065 5.065 0 01-2.79-.857 5.06 5.06 0 01-2.13-5.161c.2-.974.67-1.869 1.38-2.573l-.05.02z'
        />
      </motion.g>
    </motion.svg>
  );
};

export default Lenis;
