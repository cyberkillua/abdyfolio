const ProfileIcon = ({ color }) => {
    return (
        <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_i_2532_3389)">
                <path d="M6.05419 6.91892C7.96479 6.91892 9.51365 5.37007 9.51365 3.45946C9.51365 1.54885 7.96479 0 6.05419 0C4.14358 0 2.59473 1.54885 2.59473 3.45946C2.59473 5.37007 4.14358 6.91892 6.05419 6.91892Z" fill={`${color}`} />
            </g>
            <g filter="url(#filter1_i_2532_3389)">
                <path d="M0 13.6484C0 10.887 2.23858 8.64844 5 8.64844H7.10811C9.86953 8.64844 12.1081 10.887 12.1081 13.6484V13.9998C12.1081 15.1044 11.2127 15.9998 10.1081 15.9998H2C0.895433 15.9998 0 15.1044 0 13.9998V13.6484Z" fill={`${color}`} />
            </g>
            <defs>
                <filter id="filter0_i_2532_3389" x="2.59473" y="0" width="7.91895" height="6.91895" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="1" />
                    <feGaussianBlur stdDeviation="1.05" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.65098 0 0 0 0 0.878431 0 0 0 0 0.996078 0 0 0 1 0" />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2532_3389" />
                </filter>
                <filter id="filter1_i_2532_3389" x="0" y="8.64844" width="14.1079" height="8.35156" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="2" dy="1" />
                    <feGaussianBlur stdDeviation="1.05" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.649852 0 0 0 0 0.878315 0 0 0 0 0.996777 0 0 0 1 0" />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2532_3389" />
                </filter>
            </defs>
        </svg>

    );
}

export default ProfileIcon;