const DarkIcon = ({ color }) => {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_i_2594_12570)">
                <path d="M11.0002 0.600098C9.6211 1.97922 8.84631 3.84972 8.84631 5.8001C8.84631 7.75047 9.6211 9.62097 11.0002 11.0001C12.3793 12.3792 14.2498 13.154 16.2002 13.154C18.1506 13.154 20.0211 12.3792 21.4002 11.0001C21.4002 13.057 20.7903 15.0678 19.6475 16.778C18.5047 18.4883 16.8805 19.8213 14.9801 20.6084C13.0798 21.3956 10.9887 21.6015 8.97128 21.2003C6.95388 20.799 5.10078 19.8085 3.64631 18.354C2.19185 16.8995 1.20134 15.0464 0.800057 13.029C0.398771 11.0116 0.604726 8.92054 1.39188 7.02019C2.17903 5.11984 3.51202 3.49558 5.22229 2.35281C6.93256 1.21005 8.9433 0.600098 11.0002 0.600098Z" fill={color} />
            </g>
            <defs>
                <filter id="filter0_i_2594_12570" x="0.60022" y="0.600098" width="22.9" height="22.7998" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="3" dy="2" />
                    <feGaussianBlur stdDeviation="1.05" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.698039 0 0 0 0 0.996078 0 0 0 0 0.65098 0 0 0 1 0" />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2594_12570" />
                </filter>
            </defs>
        </svg>

    );
}

export default DarkIcon;