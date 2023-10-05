import React from "react";

function BackArrow({ size, color }) {
  const defaultColor = "currentColor";
  const fillColor = color || defaultColor;

  return (
    <svg
      width={size}
      height={size}
      fill={fillColor}
      viewBox="0 0 111 111"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M55.2342 0.692383C51.6168 0.692383 48.0404 1.04725 44.4912 1.75699C40.9557 2.45308 37.5158 3.50405 34.1714 4.88258C30.8407 6.26112 27.6601 7.96722 24.657 9.97361C21.6539 11.98 18.8692 14.2593 16.3165 16.8117C13.7638 19.364 11.4842 22.1484 9.47757 25.1511C7.47094 28.1539 5.76462 31.3341 4.38591 34.6644C3.00721 38.0084 1.95611 41.4479 1.25993 44.9829C0.550101 48.5316 0.19519 52.1076 0.19519 55.7246C0.19519 59.3415 0.550101 62.9175 1.25993 66.4662C1.95611 70.0013 3.00721 73.4408 4.38591 76.7848C5.76462 80.1287 7.47094 83.2953 9.47757 86.298C11.4842 89.3008 13.7638 92.0852 16.3165 94.6375C18.8692 97.1898 21.6539 99.4692 24.657 101.476C27.6601 103.482 30.8407 105.188 34.1714 106.567C37.5158 107.945 40.9557 108.996 44.4912 109.692C48.0404 110.402 51.6168 110.757 55.2342 110.757C58.8516 110.757 62.4281 110.402 65.9772 109.692C69.5127 108.996 72.9527 107.945 76.297 106.567C79.6278 105.188 82.8084 103.482 85.8115 101.476C88.8146 99.4692 91.5993 97.1898 94.152 94.6375C96.7046 92.0852 98.9843 89.3008 100.991 86.298C102.998 83.2953 104.704 80.1287 106.083 76.7848C107.461 73.4408 108.512 70.0013 109.209 66.4662C109.918 62.9175 110.273 59.3415 110.273 55.7246C110.273 52.1076 109.918 48.5316 109.209 44.9829C108.512 41.4479 107.461 38.0084 106.083 34.6644C104.704 31.3341 102.998 28.1539 100.991 25.1511C98.9843 22.1484 96.7046 19.364 94.152 16.8117C91.5993 14.2593 88.8146 11.98 85.8115 9.97361C82.8084 7.96722 79.6278 6.26112 76.297 4.88258C72.9527 3.50405 69.5127 2.45308 65.9772 1.75699C62.4281 1.04725 58.8516 0.692383 55.2342 0.692383ZM55.2342 103.414C52.1083 103.414 48.9959 103.113 45.9246 102.499C42.8532 101.885 39.8774 100.984 36.9834 99.7831C34.0895 98.582 31.3321 97.1216 28.7385 95.3745C26.1312 93.6411 23.7151 91.662 21.5037 89.4509C19.2923 87.2398 17.313 84.824 15.5794 82.217C13.8321 79.6237 12.3715 76.8667 11.1702 73.9731C9.96899 71.0796 9.06805 68.1041 8.45378 65.0331C7.8395 61.9621 7.53919 58.8502 7.53919 55.7246C7.53919 52.599 7.8395 49.4871 8.45378 46.4161C9.06805 43.3451 9.96899 40.3696 11.1702 37.4761C12.3715 34.5825 13.8321 31.8391 15.5794 29.2321C17.313 26.6252 19.2923 24.2094 21.5037 21.9983C23.7151 19.7871 26.1312 17.8081 28.7385 16.0746C31.3321 14.3276 34.0895 12.8672 36.9834 11.6661C39.8774 10.465 42.8532 9.56414 45.9246 8.94994C48.9959 8.33575 52.1083 8.03547 55.2342 8.03547C58.3602 8.03547 61.4725 8.33575 64.5439 8.94994C67.6153 9.56414 70.5911 10.465 73.485 11.6661C76.3789 12.8672 79.1364 14.3276 81.73 16.0746C84.3372 17.8081 86.7534 19.7871 88.9648 21.9983C91.1761 24.2094 93.1555 26.6252 94.8891 29.2321C96.6364 31.8391 98.097 34.5825 99.2982 37.4761C100.499 40.3696 101.4 43.3451 102.015 46.4161C102.629 49.4871 102.929 52.599 102.929 55.7246C102.929 58.8502 102.629 61.9621 102.015 65.0331C101.4 68.1041 100.499 71.0796 99.2982 73.9731C98.097 76.8667 96.6364 79.6237 94.8891 82.217C93.1555 84.824 91.1761 87.2398 88.9648 89.4509C86.7534 91.662 84.3372 93.6411 81.73 95.3745C79.1364 97.1216 76.3789 98.582 73.485 99.7831C70.5911 100.984 67.6153 101.885 64.5439 102.499C61.4725 103.113 58.3602 103.414 55.2342 103.414Z" />
      <path d="M62.5783 26.3789H51.5623V33.7083H62.5783C63.5338 33.7083 64.4893 33.8039 65.4312 33.995C66.3868 34.1861 67.3014 34.459 68.1886 34.8276C69.0759 35.1961 69.9223 35.6465 70.7276 36.1924C71.533 36.7247 72.2702 37.3253 72.9527 38.0077C73.6352 38.6902 74.2358 39.4272 74.7819 40.2325C75.3142 41.0378 75.7647 41.884 76.1333 42.7712C76.5018 43.6584 76.7748 44.5728 76.966 45.5283C77.1571 46.47 77.2526 47.4254 77.2526 48.3809C77.2526 49.3499 77.1571 50.3054 76.966 51.2471C76.7748 52.1889 76.5018 53.117 76.1333 54.0042C75.7647 54.8914 75.3142 55.7376 74.7819 56.5429C74.2358 57.3345 73.6352 58.0852 72.9527 58.7677C72.2702 59.4501 71.533 60.0506 70.7276 60.583C69.9223 61.1289 69.0759 61.5793 68.1886 61.9478C67.3014 62.3164 66.3868 62.5893 65.4312 62.7804C64.4893 62.9715 63.5338 63.067 62.5783 63.067H38.5396L45.8836 55.724L40.5599 50.6602L26.9503 64.3091L24.3704 66.8751L27.0186 69.523L40.5599 83.1718L45.7335 77.9989L38.212 70.3965H62.5783C64.0116 70.3965 65.4449 70.26 66.8645 69.9734C68.2842 69.7004 69.6629 69.2773 71.0007 68.7177C72.3384 68.1717 73.5943 67.4893 74.8092 66.684C76.0104 65.8924 77.1161 64.9779 78.1399 63.9542C79.1637 62.9306 80.0783 61.825 80.87 60.6102C81.6754 59.4091 82.3579 58.1398 82.9176 56.8159C83.4636 55.4783 83.8868 54.0997 84.1598 52.6803C84.4465 51.2608 84.583 49.8276 84.583 48.3809C84.583 46.9477 84.4465 45.5146 84.1598 44.0951C83.8868 42.6756 83.4636 41.2971 82.9176 39.9595C82.3579 38.6219 81.6754 37.3662 80.87 36.1515C80.0783 34.9504 79.1637 33.8448 78.1399 32.8212C77.1161 31.7975 76.0104 30.883 74.8092 30.0914C73.5943 29.2861 72.3384 28.6037 71.0007 28.0577C69.6629 27.4981 68.2842 27.075 66.8645 26.802C65.4449 26.5154 64.0116 26.3789 62.5783 26.3789Z" />
    </svg>
  );
}
export default BackArrow;
