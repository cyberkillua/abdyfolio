
const ProjectIcon = ({ color }) => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_i_2532_3394)">
                <path d="M8.10329 0.816631C8.47013 0.0734626 9.52987 0.0734625 9.89671 0.816631L11.8576 4.78909C12.0031 5.08394 12.2843 5.2884 12.6096 5.33595L16.9962 5.97712C17.8161 6.09696 18.1429 7.1048 17.5493 7.68296L14.3768 10.773C14.1409 11.0027 14.0333 11.3339 14.0889 11.6584L14.8374 16.0226C14.9775 16.8396 14.12 17.4626 13.3864 17.0767L9.46545 15.0148C9.17407 14.8615 8.82593 14.8615 8.53455 15.0148L4.61363 17.0767C3.88 17.4626 3.02245 16.8396 3.16257 16.0226L3.91109 11.6584C3.96675 11.3339 3.85908 11.0027 3.62321 10.773L0.450678 7.68296C-0.142915 7.1048 0.183869 6.09696 1.00378 5.97712L5.39037 5.33595C5.71572 5.2884 5.99691 5.08394 6.14245 4.78909L8.10329 0.816631Z" fill={`${color}`} />
            </g>
            <defs>
                <filter id="filter0_i_2532_3394" x="0.147461" y="0.259277" width="18.7051" height="17.9346" filterUnits="userSpaceOnUse"colorinterpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="1" dy="1" />
                    <feGaussianBlur stdDeviation="1.05" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.65098 0 0 0 0 0.878431 0 0 0 0 0.996078 0 0 0 1 0" />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2532_3394" />
                </filter>
            </defs>
        </svg>

    );
}

export default ProjectIcon;