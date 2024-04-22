
const ContactIcon = ({color}) => {
    return (
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_2532_3397"  maskUnits="userSpaceOnUse" x="0" y="0" width="17" height="17">
                <path d="M15.1111 0H1.88889C0.845684 0 0 0.845684 0 1.88889V15.1111C0 16.1543 0.845684 17 1.88889 17H15.1111C16.1543 17 17 16.1543 17 15.1111V1.88889C17 0.845684 16.1543 0 15.1111 0Z" fill={color} />
            </mask>
            <g mask="url(#mask0_2532_3397)">
                <rect width="17" height="17" rx="3" fill={color} />
                <g filter="url(#filter0_i_2532_3397)">
                    <path d="M11.4425 8.85981C12.3116 7.9092 13.8396 8.01601 14.568 9.07829L16.5714 12L20 17H4L11.4425 8.85981Z" fill="white" />
                </g>
                <path d="M4.88889 6.77778C5.93209 6.77778 6.77778 5.93209 6.77778 4.88889C6.77778 3.84568 5.93209 3 4.88889 3C3.84568 3 3 3.84568 3 4.88889C3 5.93209 3.84568 6.77778 4.88889 6.77778Z" fill="#A6E0FE" />
                <path d="M4.88889 6.77778C5.93209 6.77778 6.77778 5.93209 6.77778 4.88889C6.77778 3.84568 5.93209 3 4.88889 3C3.84568 3 3 3.84568 3 4.88889C3 5.93209 3.84568 6.77778 4.88889 6.77778Z" fill={color} fill-opacity="0.2" />
            </g>
            <defs>
                <filter id="filter0_i_2532_3397" x="4" y="8.20947" width="18.5" height="8.79053" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="3" />
                    <feGaussianBlur stdDeviation="1.25" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.65098 0 0 0 0 0.878431 0 0 0 0 0.996078 0 0 0 1 0" />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2532_3397" />
                </filter>
            </defs>
        </svg>


    );
}

export default ContactIcon;