/* eslint-disable react/no-unescaped-entities */
import Avatar from "@/components/ui/avatar";
import { FunctionComponent } from "react";

export const Introduce: FunctionComponent = () => {
  return (
    <div className="mt-8 dark:divide-gray-700 md:mt-8">
      <div className="flex text-3xl font-extrabold leading-9 tracking-tight sm:text-3xl sm:leading-10 md:text-4xl md:leading-14 pb-2 text-gray-900 dark:text-gray-100">
        Hi There👋🏻
      </div>
      <div className="flex flex-col justify-between md:my-4 md:pb-8 xl:flex-row">
        <Avatar />
        {/* <div className="max-h-[430px] overflow-hidden rounded-md">
            <Image src={'/static/images/avatar.jpg'} alt="avatar" width={430} height={350} />
          </div> */}
        <div className="mt-10 max-w-2xl md:my-auto md:ml-20 flex flex-col text-lg leading-8 text-gray-600 dark:text-gray-400">
          <h1 className="font-medium">
            I'm <strong className="text-lg">Xuan Loc</strong> - a{" "}
            <span className="bg-yellow-400 text-black px-1 py-1 rounded ">
              full-stack developer
            </span>{" "}
            from Ha Noi
          </h1>
          <div className="mb-4 mt-4">
            <p>
              This is my personal website and blog where I share my thoughts on
              various topics including tutorials, notes, and personal
              experiences.
            </p>
            <p>
              I have a passion for technology, history, Eastern philosophy and
              literature.
            </p>
            <p>
              Explore my site to learn more about my Journey and hope it brings
              value to you.
            </p>
          </div>
          <hr className="border-0 h-[1px] w-1/2  bg-gray-500 my-6" />
          <strong className="text-lg">Contact me:</strong>
          <div className=" w-full h-auto py-3 flex items-center justify-center gap-4 flex-wrap">
            <a href="https://www.facebook.com/kunbindz" target="blank">
              <button className="group transition-all duration-500 hover:-translate-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 93 92"
                  fill="none"
                >
                  <rect
                    x="1.13867"
                    width="91.5618"
                    height="91.5618"
                    rx="15"
                    fill="#337FFF"
                  />
                  <path
                    d="M57.4233 48.6403L58.7279 40.3588H50.6917V34.9759C50.6917 32.7114 51.8137 30.4987 55.4013 30.4987H59.1063V23.4465C56.9486 23.1028 54.7685 22.9168 52.5834 22.8901C45.9692 22.8901 41.651 26.8626 41.651 34.0442V40.3588H34.3193V48.6403H41.651V68.671H50.6917V48.6403H57.4233Z"
                    fill="white"
                  />
                </svg>
              </button>
            </a>
            <a href="https://www.facebook.com/trinhdkz/" target="blank">
              <button className="group transition-all duration-500 hover:-translate-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 93 93"
                  fill="none"
                >
                  <rect
                    x="0.138672"
                    y="1"
                    width="91.5618"
                    height="91.5618"
                    rx="15"
                    fill="url(#paint0_radial_7092_54410)"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M46.4114 21C32.0561 21 20.9307 31.317 20.9307 45.2508C20.9307 52.5396 23.9761 58.8375 28.9338 63.1887C29.3491 63.5559 29.6003 64.0639 29.6208 64.6122L29.7592 69.059C29.8054 70.4775 31.2973 71.398 32.62 70.8296L37.6752 68.6414C38.1058 68.4553 38.5826 68.4201 39.0338 68.5408C41.3563 69.1696 43.8326 69.5016 46.4114 69.5016C60.7668 69.5016 71.8922 59.1846 71.8922 45.2508C71.8922 31.317 60.7668 21 46.4114 21ZM61.7102 39.6572L54.2249 51.3072C53.0354 53.1584 50.4822 53.6211 48.698 52.3082L42.7457 47.9269C42.1971 47.5245 41.4486 47.5295 40.9051 47.9319L32.8661 53.9179C31.7946 54.7177 30.3898 53.4551 31.1127 52.3384L38.598 40.6884C39.7875 38.8372 42.3407 38.3745 44.1248 39.6874L50.0772 44.0687C50.6258 44.4711 51.3743 44.4661 51.9177 44.0637L59.9567 38.0777C61.0283 37.2779 62.433 38.5405 61.7102 39.6572Z"
                    fill="white"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_7092_54410"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(15.4753 92.5593) scale(100.718 100.715)"
                    >
                      <stop stop-color="#0099FF" />
                      <stop offset="0.6" stop-color="#A033FF" />
                      <stop offset="0.9" stop-color="#FF5280" />
                      <stop offset="1" stop-color="#FF7061" />
                    </radialGradient>
                  </defs>
                </svg>
              </button>
            </a>

            <a href="mailto:8598loctran@gmail.com">
              <button className="group transition-all duration-500 hover:-translate-y-2">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 92 92"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.638672"
                    y="0.5"
                    width="90.5618"
                    height="90.5618"
                    rx="14.5"
                    fill="white"
                    stroke="#C4CFE3"
                  />
                  <path
                    d="M22.0065 66.1236H30.4893V45.5227L18.3711 36.4341V62.4881C18.3711 64.4997 20.001 66.1236 22.0065 66.1236Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M59.5732 66.1236H68.056C70.0676 66.1236 71.6914 64.4937 71.6914 62.4881V36.4341L59.5732 45.5227"
                    fill="#34A853"
                  />
                  <path
                    d="M59.5732 29.7693V45.5229L71.6914 36.4343V31.587C71.6914 27.0912 66.5594 24.5282 62.9663 27.2245"
                    fill="#FBBC04"
                  />
                  <path
                    d="M30.4893 45.5227V29.769L45.0311 40.6754L59.5729 29.769V45.5227L45.0311 56.429"
                    fill="#EA4335"
                  />
                  <path
                    d="M18.3711 31.587V36.4343L30.4893 45.5229V29.7693L27.0962 27.2245C23.4971 24.5282 18.3711 27.0912 18.3711 31.587Z"
                    fill="#C5221F"
                  />
                </svg>
              </button>
            </a>
          </div>

          {/* // */}
        </div>
      </div>
    </div>
  );
};
