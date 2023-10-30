const ICONS = {
  star: `<svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>`,
  halfstar: `<svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
  <path fill="#222325" fill-rule="evenodd" clip-rule="evenodd"
      d="M11.4056 8.74291L13.8772 6.37996L10.4535 5.88847L9.81872 5.79395L9.53021 5.22684L8.00107 2.18336V11.2854L8.56849 11.5785L11.6268 13.1664L11.0497 9.81096L10.9343 9.18715L11.4056 8.74291ZM15.7525 6.26654L12.2615 9.61248L13.0886 14.3384C13.1559 14.7543 13.002 15 12.7039 15C12.5981 15 12.4635 14.9622 12.3192 14.8866L8.00107 12.656L3.68295 14.8866C3.53869 14.9622 3.40405 15 3.29826 15C3.00013 15 2.84625 14.7543 2.91357 14.3384L3.74065 9.61248L0.239988 6.26654C-0.173552 5.86011 -0.0389107 5.46314 0.538122 5.37807L5.36596 4.68809L7.52983 0.387524C7.65485 0.132325 7.82796 0 8.00107 0C8.17418 0 8.33767 0.132325 8.47231 0.387524L10.6362 4.68809L15.464 5.37807C16.0411 5.46314 16.1757 5.86011 15.7525 6.26654Z">
  </path>
  </svg>`,
  emptystar: `<svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
  <path fill="#b2b8c0" fill-rule="evenodd" clip-rule="evenodd"
      d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z">
  </path>
  </svg>`,
  heart: `<svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_4_20)">
      <g filter="url(#filter0_d_4_20)">
          <path
              d="M5 11.333c0 2.193.926 4.223 2.399 5.515L17 26l9.55-9.155A7.374 7.374 0 0029 11.333C29 7.283 25.776 4 21.8 4A7.1 7.1 0 0017 5.867 7.1 7.1 0 0012.2 4C8.224 4 5 7.283 5 11.333z"
              fill="#404145" fill-opacity=".3" />
      </g>
      <g filter="url(#filter1_d_4_20)">
          <path
              d="M7.916 16.305l-.011-.01-.012-.01C6.592 15.141 5.75 13.32 5.75 11.332c0-3.649 2.9-6.583 6.45-6.583a6.35 6.35 0 014.295 1.672l.505.46.505-.46A6.35 6.35 0 0121.8 4.75c3.55 0 6.45 2.934 6.45 6.583a6.624 6.624 0 01-2.2 4.953l-.01.009-.01.009-9.032 8.658-9.082-8.657z"
              stroke="#fff" stroke-width="1.5" />
      </g>
    </g>
    <defs>
      <filter id="filter0_d_4_20" x="0" y="0" width="34" height="32" filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_4_20" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_4_20" result="shape" />
      </filter>
      <filter id="filter1_d_4_20" x="0" y="0" width="34" height="32" filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_4_20" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_4_20" result="shape" />
      </filter>
    </defs>
  </svg>`,

  heartLiked: `<svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_4_20)">
    <g filter="url(#filter0_d_4_20)">
        <path
            d="M5 11.333c0 2.193.926 4.223 2.399 5.515L17 26l9.55-9.155A7.374 7.374 0 0029 11.333C29 7.283 25.776 4 21.8 4A7.1 7.1 0 0017 5.867 7.1 7.1 0 0012.2 4C8.224 4 5 7.283 5 11.333z"
            fill="#F85D5D" />
    </g>
    <g filter="url(#filter1_d_4_20)">
        <path
            d="M7.916 16.305l-.011-.01-.012-.01C6.592 15.141 5.75 13.32 5.75 11.332c0-3.649 2.9-6.583 6.45-6.583a6.35 6.35 0 014.295 1.672l.505.46.505-.46A6.35 6.35 0 0121.8 4.75c3.55 0 6.45 2.934 6.45 6.583a6.624 6.624 0 01-2.2 4.953l-.01.009-.01.009-9.032 8.658-9.082-8.657z"
            stroke="#fff" stroke-width="1.5" />
    </g>
  </g>
  <defs>
    <filter id="filter0_d_4_20" x="0" y="0" width="34" height="32" filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="2.5" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_4_20" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_4_20" result="shape" />
    </filter>
    <filter id="filter1_d_4_20" x="0" y="0" width="34" height="32" filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="2.5" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_4_20" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_4_20" result="shape" />
    </filter>
  </defs>
  </svg>`,

  home: `<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.666 13.548H3.333a.667.667 0 01-.667-.666v-6h-2L7.552.621a.667.667 0 01.897 0l6.885 6.26h-2v6a.667.667 0 01-.667.666zm-4-1.333H12V5.653L8 2.017 4 5.653v6.562h3.333v-4h1.333v4z" fill="#404145"/></svg>`,

  homeBlack: `<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.666 13.548H3.333a.667.667 0 01-.667-.666v-6h-2L7.552.621a.667.667 0 01.897 0l6.885 6.26h-2v6a.667.667 0 01-.667.666zm-4-1.333H12V5.653L8 2.017 4 5.653v6.562h3.333v-4h1.333v4z" fill="#222325"/></svg>`,

  arrowDown: `<svg width="12" height="12" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg" fill="#222325"><path d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z"></path></svg>`,

  remove: `<svg width="10" height="10" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="m8.485 7 4.487-4.487.926-.925a.35.35 0 0 0 0-.495l-.99-.99a.35.35 0 0 0-.495 0L7 5.515 1.588.102a.35.35 0 0 0-.495 0l-.99.99a.35.35 0 0 0 0 .495L5.514 7 .102 12.413a.35.35 0 0 0 0 .495l.99.99a.35.35 0 0 0 .495 0L7 8.485l4.487 4.487.926.926a.35.35 0 0 0 .495 0l.99-.99a.35.35 0 0 0 0-.495L8.485 7Z"></path></svg>`,

  pageArrowLeft: `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#74767E"><path d="M5.093 13.031c.285.3.747.3 1.031 0a.801.801 0 0 0 0-1.09l-2.803-2.96h10.21c.402 0 .728-.345.728-.77 0-.426-.326-.77-.729-.77H3.173l2.951-3.118a.801.801 0 0 0 0-1.09.702.702 0 0 0-1.031 0L.97 7.589a.801.801 0 0 0 0 1.09l.07.072a.744.744 0 0 0 .01.01l4.043 4.271Z"></path></svg>`,

  pageArrowRight: `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#74767E"><path d="M9.923 2.969a.702.702 0 0 0-1.031 0 .801.801 0 0 0 0 1.09l2.804 2.96H1.486c-.403 0-.73.345-.73.77 0 .426.327.77.73.77h10.358l-2.952 3.118a.801.801 0 0 0 0 1.09c.285.3.747.3 1.031 0l4.123-4.355a.801.801 0 0 0 0-1.09l-.069-.072a1.422 1.422 0 0 0-.01-.01L9.923 2.969Z"></path></svg>`,

  headerDropdownWhite: `<svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19">
    <rect y="16" width="23" height="3" rx="1.5" fill="#fff" />
    <rect width="23" height="3" rx="1.5" fill="#fff" />
    <rect y="8" width="23" height="3" rx="1.5" fill="#fff" />
  </svg>`,

  headerDropdownGray: `<svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19">
    <rect y="16" width="23" height="3" rx="1.5" fill="#62646a" />
    <rect width="23" height="3" rx="1.5" fill="#62646a" />
    <rect y="8" width="23" height="3" rx="1.5" fill="#62646a" />
  </svg>`,

  checkmarkBlackIcon: `<svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="#222325">
    <path
      d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z">
    </path>
  </svg>`,

  questionMarkIcon: `<svg width="16" height="16" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd"
      d="M0 10C0 4.478 4.478 0 10 0c5.523 0 10 4.478 10 10 0 5.523-4.477 10-10 10-5.522 0-10-4.477-10-10zm11.125 2.002H8.989v-.141c.01-1.966.492-2.254 1.374-2.782.093-.056.19-.114.293-.178.73-.459 1.292-1.038 1.292-1.883 0-.948-.743-1.564-1.666-1.564-.851 0-1.657.398-1.712 1.533H6.304C6.364 4.693 8.18 3.5 10.294 3.5c2.306 0 3.894 1.447 3.894 3.488 0 1.382-.695 2.288-1.805 2.952l-.238.144c-.79.475-1.009.607-1.02 1.777V12zm.17 3.012a1.344 1.344 0 01-1.327 1.328 1.32 1.32 0 01-1.328-1.328 1.318 1.318 0 011.328-1.316c.712 0 1.322.592 1.328 1.316z"
      fill="#b5b6ba" />
  </svg>`,

  creditCardsIcon: `<svg height="20" fill="none" xmlns="http://www.w3.org/2000/svg" width="120" viewBox="0 0 120 20">
    <rect width="24" height="20" rx="2" fill="#1434CB" />
    <g clip-path="url(#a)">
      <path
          d="m9.42 6.299-2.809 6.7H4.78L3.397 7.652c-.084-.33-.157-.45-.412-.589-.416-.226-1.104-.438-1.71-.57l.042-.194h2.949c.376 0 .714.25.799.683l.73 3.877 1.804-4.56h1.82Zm7.178 4.512c.008-1.768-2.445-1.866-2.428-2.655.005-.24.234-.496.735-.562.248-.032.933-.057 1.709.3l.304-1.42a4.657 4.657 0 0 0-1.621-.298c-1.713 0-2.919.911-2.93 2.215-.01.965.861 1.503 1.518 1.823.676.329.902.54.9.833-.005.45-.539.648-1.038.656-.871.013-1.377-.236-1.78-.423l-.314 1.468c.405.185 1.153.347 1.928.356 1.82 0 3.012-.9 3.017-2.293ZM21.122 13h1.603l-1.4-6.7h-1.479a.789.789 0 0 0-.738.491L16.508 13h1.82l.361-1.001h2.224l.209 1Zm-1.934-2.374L20.1 8.11l.525 2.516h-1.437ZM11.896 6.3 10.463 13H8.729l1.434-6.7h1.733Z"
          fill="#fff" />
    </g>
    <rect x="32" width="24" height="20" rx="2" fill="#006" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M45.77 10.386a5.385 5.385 0 1 1-10.77 0 5.385 5.385 0 0 1 10.77 0Z"
      fill="#C00" />
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M47.616 5.001a5.366 5.366 0 0 0-4.16 1.964h1.089c.149.18.285.371.41.57h-1.909a5.4 5.4 0 0 0-.31.57h2.53c.086.185.162.375.228.57h-2.986a5.35 5.35 0 0 0-.156.57h3.298a5.423 5.423 0 0 1-.156 2.852h-2.986c.066.195.142.385.228.57h2.53a5.395 5.395 0 0 1-.311.57h-1.909c.125.2.262.39.41.57h1.089a5.387 5.387 0 0 1-.544.57A5.385 5.385 0 1 0 47.616 5Z"
      fill="#F90" />
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M39.127 10.976a1.02 1.02 0 0 0-.13-.01c-.331 0-.499.114-.499.339 0 .138.082.226.21.226.238 0 .41-.227.42-.556Zm.426.99h-.485l.011-.23c-.147.18-.345.268-.612.268-.317 0-.534-.248-.534-.607 0-.54.377-.856 1.026-.856.066 0 .151.006.238.017a.546.546 0 0 0 .023-.144c0-.147-.102-.203-.375-.203a1.946 1.946 0 0 0-.619.1c.007-.036.081-.5.081-.5.292-.085.484-.117.7-.117.502 0 .768.226.768.652 0 .114-.018.255-.048.44-.05.322-.16 1.011-.174 1.18Zm-1.865 0h-.585l.335-2.1-.747 2.1h-.399l-.05-2.088-.351 2.088h-.547l.457-2.731h.84l.051 1.529.513-1.53h.935l-.452 2.732Zm10.649-.99a1.014 1.014 0 0 0-.13-.01c-.332 0-.499.114-.499.339 0 .138.081.226.21.226.238 0 .41-.227.42-.556Zm.426.99h-.485l.011-.23c-.148.18-.345.268-.612.268-.317 0-.534-.248-.534-.607 0-.54.377-.856 1.026-.856.066 0 .151.006.238.017a.546.546 0 0 0 .023-.144c0-.147-.102-.203-.375-.203a1.951 1.951 0 0 0-.62.1c.007-.036.082-.5.082-.5.292-.085.484-.117.7-.117.502 0 .768.226.767.652.001.114-.017.255-.047.44-.05.322-.16 1.011-.174 1.18Zm-6.611-.034c-.16.05-.285.072-.42.072-.3 0-.462-.171-.462-.488-.004-.098.043-.356.08-.592l.253-1.516h.581l-.067.336h.35l-.079.534h-.352c-.067.423-.163.949-.165 1.019 0 .114.061.164.2.164a.474.474 0 0 0 .158-.02l-.077.491Zm1.781-.018c-.2.06-.392.09-.597.09-.65-.001-.99-.34-.99-.991 0-.76.432-1.319 1.018-1.319.479 0 .785.313.785.804 0 .163-.021.322-.072.546H42.92c-.04.323.167.457.505.457.208 0 .396-.043.604-.14l-.096.553Zm-.327-1.317c.003-.047.061-.397-.27-.397-.185 0-.318.141-.372.397h.642Zm-3.703-.151c0 .281.136.475.445.62.237.112.274.145.274.246 0 .138-.105.2-.336.2-.175 0-.337-.027-.524-.087l-.08.513c.133.029.25.056.608.066.617 0 .902-.235.902-.743 0-.305-.12-.484-.412-.619-.245-.112-.274-.137-.274-.241 0-.12.098-.182.286-.182.115 0 .272.013.42.034l.084-.516a3.949 3.949 0 0 0-.515-.043c-.654 0-.88.342-.878.752Zm6.873-.693c.163 0 .314.042.523.148l.096-.593c-.086-.034-.388-.231-.643-.231-.391 0-.722.194-.955.514-.34-.112-.479.115-.65.341l-.151.036c.011-.075.021-.149.018-.224h-.537c-.073.688-.203 1.384-.305 2.072l-.026.15h.584c.098-.635.151-1.04.184-1.316l.22-.122c.033-.123.136-.164.343-.159a2.486 2.486 0 0 0-.042.456c0 .727.393 1.179 1.022 1.179.162 0 .301-.021.517-.08l.102-.622c-.194.095-.352.14-.496.14-.34 0-.546-.251-.546-.666 0-.601.306-1.023.742-1.023Zm4.949-.518-.13.789c-.16-.21-.331-.363-.558-.363-.295 0-.563.224-.74.553a4.633 4.633 0 0 1-.497-.137v.002c.02-.184.028-.296.026-.334h-.537c-.073.688-.203 1.384-.305 2.072l-.027.15h.585c.08-.513.14-.94.184-1.277.2-.18.3-.338.502-.328a1.9 1.9 0 0 0-.142.721c0 .555.28.922.706.922a.69.69 0 0 0 .539-.245l-.028.206h.553l.446-2.731h-.577Zm-.731 2.218c-.199 0-.3-.147-.3-.438 0-.436.189-.746.454-.746.2 0 .31.153.31.435 0 .44-.192.75-.464.75Z"
      fill="#006" />
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M37.857 11.803h-.585l.336-2.1-.748 2.1h-.399l-.049-2.087-.352 2.087h-.547l.457-2.731h.84l.024 1.69.567-1.69h.908l-.452 2.731Zm1.439-.99a.963.963 0 0 0-.13-.01c-.331 0-.5.114-.5.339 0 .138.083.226.21.226.239 0 .41-.226.42-.555Zm.426.99h-.485l.011-.23c-.147.18-.345.268-.612.268-.317 0-.534-.248-.534-.607 0-.541.377-.856 1.026-.856.066 0 .151.006.238.017a.552.552 0 0 0 .023-.144c0-.147-.102-.202-.375-.202a1.944 1.944 0 0 0-.619.1l.081-.5a2.33 2.33 0 0 1 .7-.118c.502 0 .768.226.767.652.001.114-.017.255-.047.44a35.85 35.85 0 0 0-.174 1.18Zm7.841-2.657-.096.592c-.209-.104-.36-.147-.522-.147-.437 0-.743.422-.743 1.024 0 .414.206.665.546.665.144 0 .303-.045.496-.14l-.102.622c-.216.059-.355.08-.517.08-.63 0-1.022-.453-1.022-1.18 0-.976.542-1.658 1.317-1.658.256 0 .557.108.643.142Zm.942 1.667a.955.955 0 0 0-.13-.01c-.331 0-.5.114-.5.339 0 .138.083.226.21.226.238 0 .41-.226.42-.555Zm.425.99h-.484l.011-.23c-.148.18-.345.268-.612.268-.317 0-.535-.248-.535-.607 0-.541.378-.856 1.027-.856.066 0 .15.006.238.017a.55.55 0 0 0 .023-.144c0-.147-.102-.202-.375-.202a1.945 1.945 0 0 0-.619.1l.081-.5a2.33 2.33 0 0 1 .7-.118c.502 0 .768.226.767.652.001.114-.018.255-.047.44-.05.321-.16 1.012-.174 1.18Zm-6.61-.034c-.16.05-.285.072-.42.072-.299 0-.462-.172-.462-.488-.004-.098.043-.356.08-.592l.254-1.516h.58l-.067.336h.298l-.08.534h-.299c-.067.423-.163.949-.165 1.018 0 .115.062.165.2.165a.467.467 0 0 0 .158-.02l-.077.49Zm1.78-.018c-.199.061-.392.09-.596.09-.65 0-.99-.34-.99-.991 0-.76.432-1.319 1.017-1.319.48 0 .786.313.786.804 0 .163-.022.322-.072.547h-1.157c-.04.322.167.456.505.456.208 0 .395-.043.604-.14l-.096.553Zm-.326-1.317c.003-.047.062-.397-.27-.397-.185 0-.318.141-.372.397h.642Zm-3.702-.151c0 .282.136.475.445.62.237.112.273.145.273.246 0 .138-.104.2-.335.2-.175 0-.337-.026-.524-.087l-.08.513c.132.029.25.056.608.066.617 0 .902-.235.902-.743 0-.305-.12-.484-.412-.619-.245-.112-.274-.137-.274-.241 0-.12.098-.182.287-.182.114 0 .27.013.42.034l.083-.515a3.978 3.978 0 0 0-.515-.044c-.654 0-.88.342-.878.752Zm11.952 1.52h-.553l.028-.207a.69.69 0 0 1-.54.246c-.424 0-.705-.367-.705-.922 0-.74.436-1.362.951-1.362.227 0 .398.093.558.303l.13-.79h.577l-.446 2.732Zm-.862-.513c.272 0 .464-.309.464-.749 0-.282-.11-.435-.31-.435-.266 0-.454.31-.454.746 0 .29.101.438.3.438Zm-1.704-1.708c-.073.688-.203 1.384-.304 2.072l-.027.15h.585c.209-1.359.26-1.624.587-1.59.053-.279.15-.522.222-.645-.245-.051-.381.087-.56.35.014-.113.04-.224.035-.337h-.538Zm-4.813 0c-.073.688-.203 1.384-.305 2.072l-.027.15h.585c.21-1.359.26-1.624.587-1.59.053-.279.15-.522.223-.645-.245-.051-.382.087-.56.35.013-.113.04-.224.034-.337h-.537Z"
      fill="#fff" />
    <rect x="64" width="24" height="20" rx="2" fill="#0069AA" />
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M78.547 9.99a3.485 3.485 0 0 0-2.236-3.25v6.5a3.485 3.485 0 0 0 2.236-3.25Zm-4.728 3.248V6.74a3.488 3.488 0 0 0-2.235 3.249 3.487 3.487 0 0 0 2.235 3.248Zm1.247-8.742a5.494 5.494 0 1 0 .002 10.987 5.494 5.494 0 0 0-.002-10.987ZM75.052 16c-3.32.016-6.052-2.674-6.052-5.948C69 6.474 71.732 4 75.052 4h1.556c3.28 0 6.274 2.473 6.274 6.052 0 3.273-2.994 5.948-6.274 5.948h-1.556Z"
      fill="#fff" />
    <rect x="96.25" y=".25" width="23.5" height="19.5" rx="1.75" fill="#fff" />
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M100.396 10.008c-.168.143-.382.206-.725.206h-.142V8.498h.142c.343 0 .548.059.725.21a.872.872 0 0 1 0 1.3Zm-.619-1.95H99v2.596h.772c.412 0 .708-.094.969-.3.309-.245.492-.614.492-.997 0-.766-.598-1.298-1.456-1.298Zm1.7.001h.527v2.595h-.527V8.059Zm1.821.995c-.318-.112-.411-.186-.411-.326 0-.163.167-.287.395-.287.158 0 .289.06.428.209l.275-.345a1.21 1.21 0 0 0-.796-.289c-.48 0-.846.32-.846.742 0 .359.17.54.667.714.207.069.312.116.366.148a.304.304 0 0 1 .158.267c0 .211-.175.367-.411.367a.628.628 0 0 1-.577-.347l-.341.316c.244.342.536.494.939.494.549 0 .936-.351.936-.852 0-.413-.18-.6-.782-.811Zm.947.303c0 .763.626 1.355 1.432 1.355.227 0 .422-.043.662-.152v-.596c-.212.204-.398.284-.639.284-.532 0-.909-.369-.909-.895a.88.88 0 0 1 .886-.89c.251 0 .443.084.662.291V8.16a1.401 1.401 0 0 0-.651-.159c-.801 0-1.443.603-1.443 1.357Zm6.38.444-.723-1.742h-.577l1.15 2.66h.284l1.172-2.66h-.573l-.733 1.742Zm1.545.853h1.5v-.44h-.971v-.7h.934v-.44h-.934v-.576h.971v-.44h-1.5v2.596Zm2.533-1.402h-.153v-.785h.162c.331 0 .508.133.508.386 0 .26-.178.399-.517.399Zm1.061-.428c0-.486-.348-.765-.959-.765h-.785v2.595h.53V9.61h.069l.73 1.044H116l-.853-1.094c.399-.078.617-.339.617-.736Z"
      fill="#1A1918" />
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M109.399 9.362c0 .748-.633 1.353-1.414 1.353-.781 0-1.414-.605-1.414-1.353 0-.747.633-1.353 1.414-1.353.781 0 1.414.606 1.414 1.353Z"
      fill="#E7772F" />
    <path d="M97 20h21.788c.669 0 1.212-.544 1.212-1.215V12c-3 2.5-8 6-23 8Z" fill="#E7772F" />
    <rect x="96.25" y=".25" width="23.5" height="19.5" rx="1.75" stroke="#E7772F" stroke-width=".5" />
    <rect x="128.25" height="19.5" rx="1.75" stroke="#C5C6C9" stroke-width=".5" />
    <defs>
      <clipPath id="a">
          <path fill="#fff" d="M1 6h22v7.281H1z" />
      </clipPath>
    </defs>
  </svg>`,

  creditCardIcon: `<svg fill="#000000" width="24px" height="24px" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
    <path d="M 9.6249 47.7109 L 46.3751 47.7109 C 51.2735 47.7109 53.7344 45.2969 53.7344 40.4687 L 53.7344 15.5547 C 53.7344 10.7266 51.2735 8.2891 46.3751 8.2891 L 9.6249 8.2891 C 4.7265 8.2891 2.2656 10.7266 2.2656 15.5547 L 2.2656 40.4687 C 2.2656 45.2969 4.7265 47.7109 9.6249 47.7109 Z M 6.0390 15.7656 C 6.0390 13.3281 7.3515 12.0625 9.6952 12.0625 L 46.3280 12.0625 C 48.6484 12.0625 49.9607 13.3281 49.9607 15.7656 L 49.9607 17.7344 L 6.0390 17.7344 Z M 9.6952 43.9375 C 7.3515 43.9375 6.0390 42.6953 6.0390 40.2578 L 6.0390 23.0547 L 49.9607 23.0547 L 49.9607 40.2578 C 49.9607 42.6953 48.6484 43.9375 46.3280 43.9375 Z M 12.3905 37.0000 L 18.1327 37.0000 C 19.5156 37.0000 20.4296 36.0859 20.4296 34.7500 L 20.4296 30.4140 C 20.4296 29.1015 19.5156 28.1640 18.1327 28.1640 L 12.3905 28.1640 C 11.0078 28.1640 10.0937 29.1015 10.0937 30.4140 L 10.0937 34.7500 C 10.0937 36.0859 11.0078 37.0000 12.3905 37.0000 Z"/>
  </svg>`,

  paypalIcon: `<svg width="73" height="20" viewBox="0 0 73 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M8.70598 0H3.06309C2.67689 0 2.34848 0.282581 2.28816 0.666648L0.00590303 15.2398C-0.0393954 15.5275 0.181781 15.7866 0.471368 15.7866H3.16524C3.55143 15.7866 3.87984 15.5042 3.94016 15.1195L4.55562 11.1887C4.61502 10.8039 4.94413 10.5214 5.32962 10.5214H7.11591C10.8329 10.5214 12.9781 8.70972 13.5386 5.11997C13.791 3.54925 13.5492 2.31535 12.8189 1.45108C12.0169 0.502081 10.5944 0 8.70598 0ZM9.35539 5.32323C9.04685 7.36251 7.49977 7.36251 6.004 7.36251H5.15234L5.74977 3.55396C5.78537 3.32375 5.9832 3.1543 6.21431 3.1543H6.60467C7.62365 3.1543 8.58486 3.1543 9.08152 3.73924C9.37781 4.08816 9.46841 4.60677 9.35539 5.32323Z"
      fill="#28356A"></path>
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M25.5737 5.25605H22.8715C22.6414 5.25605 22.4424 5.4255 22.407 5.65571L22.2873 6.41686L22.0985 6.14103C21.5135 5.28584 20.2089 5 18.907 5C15.9208 5 13.3704 7.27787 12.8738 10.4731C12.6156 12.0668 12.9826 13.591 13.8805 14.6538C14.704 15.631 15.8822 16.0383 17.2839 16.0383C19.69 16.0383 21.024 14.4802 21.024 14.4802L20.9036 15.2364C20.8583 15.5255 21.0795 15.7849 21.3675 15.7849H23.8013C24.1884 15.7849 24.5152 15.5023 24.5762 15.1175L26.0367 5.80282C26.0829 5.51605 25.8624 5.25605 25.5737 5.25605ZM21.8065 10.5531C21.5458 12.1077 20.3207 13.1514 18.7579 13.1514C17.9733 13.1514 17.3462 12.898 16.9434 12.4178C16.544 11.9408 16.3924 11.2618 16.5193 10.5056C16.7629 8.96418 18.0086 7.88623 19.5476 7.88623C20.3149 7.88623 20.9387 8.14321 21.3496 8.62736C21.7612 9.11688 21.9246 9.80005 21.8065 10.5531Z"
      fill="#28356A"></path>
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M39.965 5.25781H37.2494C36.9903 5.25781 36.747 5.38746 36.6002 5.6044L32.855 11.1603L31.2675 5.82111C31.1676 5.48709 30.8617 5.25781 30.515 5.25781H27.8468C27.5223 5.25781 27.2972 5.57694 27.4002 5.88442L30.3913 14.7245L27.5794 18.7225C27.3582 19.0375 27.581 19.4704 27.963 19.4704H30.6751C30.9326 19.4704 31.1734 19.344 31.3195 19.1315L40.351 6.00151C40.5673 5.6875 40.3452 5.25781 39.965 5.25781Z"
      fill="#28356A"></path>
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M48.9557 0H43.3122C42.9269 0 42.5985 0.282581 42.5382 0.666648L40.2559 15.2398C40.2106 15.5275 40.4318 15.7866 40.7198 15.7866H43.6158C43.8846 15.7866 44.1148 15.589 44.1569 15.3196L44.8047 11.1887C44.8641 10.8039 45.1934 10.5214 45.5787 10.5214H47.3643C51.082 10.5214 53.2265 8.70972 53.7877 5.11997C54.041 3.54925 53.7976 2.31535 53.0673 1.45108C52.266 0.502081 50.8444 0 48.9557 0ZM49.6084 5.32274C49.3005 7.36202 47.7534 7.36202 46.2568 7.36202H45.4063L46.0044 3.55347C46.0397 3.32326 46.2362 3.15381 46.468 3.15381H46.8583C47.8764 3.15381 48.8385 3.15381 49.3352 3.73875C49.6315 4.08767 49.7214 4.60628 49.6084 5.32274Z"
      fill="#298FC2"></path>
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M65.8201 5.25605H63.1195C62.8877 5.25605 62.6906 5.4255 62.6559 5.65571L62.5362 6.41686L62.3465 6.14103C61.7615 5.28584 60.4578 5 59.1557 5C56.1697 5 53.6203 7.27787 53.1236 10.4731C52.8661 12.0668 53.2315 13.591 54.1292 14.6538C54.9545 15.631 56.1309 16.0383 57.5328 16.0383C59.9387 16.0383 61.2729 14.4802 61.2729 14.4802L61.1525 15.2364C61.1072 15.5255 61.3282 15.7849 61.618 15.7849H64.0512C64.4364 15.7849 64.7648 15.5023 64.8252 15.1175L66.2863 5.80282C66.3309 5.51605 66.1097 5.25605 65.8201 5.25605ZM62.0534 10.5529C61.7943 12.1076 60.5674 13.1513 59.0046 13.1513C58.2215 13.1513 57.5929 12.8978 57.1901 12.4176C56.7909 11.9407 56.6407 11.2617 56.766 10.5054C57.0112 8.96406 58.2553 7.88611 59.7943 7.88611C60.5616 7.88611 61.1854 8.14308 61.5963 8.62724C62.0095 9.11675 62.1729 9.79993 62.0534 10.5529Z"
      fill="#298FC2"></path>
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M69.0055 0.400594L66.6895 15.2405C66.6442 15.5282 66.8651 15.7873 67.1531 15.7873H69.4816C69.8687 15.7873 70.1969 15.5049 70.2563 15.1202L72.5402 0.547704C72.5857 0.260002 72.3645 0 72.0766 0H69.4693C69.2392 0.000698305 69.0411 0.170386 69.0055 0.400594Z"
      fill="#298FC2"></path>
  </svg>`,

  clock: `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#62646a">
    <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z">
    </path>
    <path d="M9 4H7v5h5V7H9V4z"></path>
  </svg>`,

  lockIcon: `<svg width="15px" height="15px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 3.5V6H12.5C13.3284 6 14 6.67157 14 7.5V13.5C14 14.3284 13.3284 15 12.5 15H2.5C1.67157 15 1 14.3284 1 13.5V7.5C1 6.67157 1.67157 6 2.5 6H4V3.5C4 1.567 5.567 0 7.5 0C9.433 0 11 1.567 11 3.5ZM5 3.5C5 2.11929 6.11929 1 7.5 1C8.88071 1 10 2.11929 10 3.5V6H5V3.5Z" fill="#000000"/>
  </svg>`,

  airplaneIcon: `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0)">
      <path fill="#62646a" d="M3.60004 9.60012V14.5001C3.60004 15.2001 4.40004 15.5001 4.90004 15.0001L7.20004 12.3001L11.9 15.8001C12.3 16.1001 12.9 15.9001 13 15.4001L16 0.900122C16.1 0.300122 15.6 -0.0998784 15 0.100122L0.500041 5.90012C4.0561e-05 6.10012 -0.0999594 6.80012 0.300041 7.20012L1.90004 8.40012L6.50004 6.20012C6.90004 6.00012 7.20004 6.50012 6.90004 6.70012L3.60004 9.60012Z"/>
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="16" height="16" fill="white"/>
      </clipPath>
    </defs>
  </svg>`,

  refresh: `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#62646a">
    <path
      d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z">
    </path>
    <path
      d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z">
    </path>
  </svg>`,

  checked: `<svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="#222325">
    <path
      d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z">
    </path>
  </svg>`,

  unchecked: `<svg width="16" height="16" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="#dadbdd"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg>`,

  error: `<svg height="550" width="550" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xml:space="preserve">
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zM64 256c0-106.1 86-192 192-192 42.1 0 81 13.7 112.6 36.7L100.7 368.6C77.7 337 64 298.1 64 256zm192 192c-42.1 0-81-13.7-112.6-36.7l267.9-267.9c23 31.7 36.7 70.5 36.7 112.6 0 106.1-86 192-192 192z"/>
  </svg>`,

  success: `<svg xmlns="http://www.w3.org/2000/svg" width="448" height="448" viewBox="0 0 448 448" fill="#e0e0e0">
    <g style="font-style:normal;font-variant:normal;font-weight:400;font-size:13.8125px;line-height:125%;font-family:Calibri;text-align:start;letter-spacing:0;word-spacing:0;text-anchor:start;fill:#000;fill-opacity:1;stroke:none" transform="translate(-1463.923 -17599.681) scale(22.11728)"/>
    <path style="fill-opacity:1;stroke:none;stroke-opacity:1" d="M224 0A224 224 0 0 0 0 224a224 224 0 0 0 224 224 224 224 0 0 0 224-224A224 224 0 0 0 224 0zm116 80 44 43.428L175 384 32 232l44-43.428 99 97.713L340 80z"/>
  </svg>`,

  location: `<svg width="12" height="16" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg" fill="#62646a">
    <g clip-path="url(#clip0)">
      <path
          d="M5.38338 15.6772C0.842813 9.09472 0 8.41916 0 6C0 2.68628 2.68628 0 6 0C9.31372 0 12 2.68628 12 6C12 8.41916 11.1572 9.09472 6.61662 15.6772C6.31866 16.1076 5.68131 16.1076 5.38338 15.6772ZM6 8.5C7.38072 8.5 8.5 7.38072 8.5 6C8.5 4.61928 7.38072 3.5 6 3.5C4.61928 3.5 3.5 4.61928 3.5 6C3.5 7.38072 4.61928 8.5 6 8.5Z">
      </path>
    </g>
    <defs>
      <clipPath id="clip0">
          <rect width="12" height="16"></rect>
      </clipPath>
    </defs>
  </svg>`,
  user: `<svg width="14" height="16" viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg" fill="#62646a">
  <path
      d="M7 8C9.20938 8 11 6.20937 11 4C11 1.79063 9.20938 0 7 0C4.79063 0 3 1.79063 3 4C3 6.20937 4.79063 8 7 8ZM9.8 9H9.27812C8.58437 9.31875 7.8125 9.5 7 9.5C6.1875 9.5 5.41875 9.31875 4.72188 9H4.2C1.88125 9 0 10.8813 0 13.2V14.5C0 15.3281 0.671875 16 1.5 16H12.5C13.3281 16 14 15.3281 14 14.5V13.2C14 10.8813 12.1187 9 9.8 9Z">
  </path>
  </svg>` ,

  newuser: `<svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" fill-rule="evenodd">
      <path d="M32 64C14.327 64 0 49.674 0 32S14.327 0 32 0c17.674 0 32 14.326 32 32S49.673 64 32 64z" fill="#777" />
      <path
          d="M44.179 39.028c0 2.802-1.869 4.48-4.62 4.48H24.44c-2.75 0-4.619-1.678-4.619-4.48 0-3.91.917-9.913 5.986-9.913.536 0 2.802 2.405 6.193 2.405 3.39 0 5.657-2.405 6.193-2.405 5.069 0 5.986 6.003 5.986 9.913zM38.643 23.58c0 3.667-2.976 6.643-6.643 6.643s-6.643-2.976-6.643-6.643c0-3.668 2.976-6.643 6.643-6.643s6.643 2.975 6.643 6.643z"
          fill="#FFF" />
      <path
          d="M61.583 31.932c0 16.376-13.275 29.651-29.652 29.651-16.375 0-29.65-13.275-29.65-29.651 0-16.376 13.275-29.65 29.65-29.65 16.377 0 29.652 13.274 29.652 29.65z"
          stroke="#FFF" stroke-width=".5" />
  </g>
  </svg>`,

  level1: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <circle fill="#00B0B2" cx="100" cy="100" r="100" />
  <path fill="#00A6A8" d="M100 0c55.2 0 100 44.8 100 100s-44.8 100-100 100" />
  <circle cx="100" cy="100" r="90" fill="none" stroke="white" stroke-width="2" />
  <text x="100" y="95" font-family="Arial" font-size="40" fill="white" text-anchor="middle"
      font-weight="bold">LEVEL</text>
  <text x="100" y="140" font-family="Arial" font-size="40" fill="white" text-anchor="middle"
      font-weight="bold">ONE</text>
  </svg>`,

  level2: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <circle fill="#B322FF" cx="100" cy="100" r="100" />
  <path fill="#9D1FDF" d="M100 0c55.2 0 100 44.8 100 100s-44.8 100-100 100" />
  <circle cx="100" cy="100" r="90" fill="none" stroke="white" stroke-width="2" />
  <text x="100" y="95" font-family="Arial" font-size="40" fill="white" text-anchor="middle"
      font-weight="bold">LEVEL</text>
  <text x="105" y="140" font-family="Arial" font-size="40" fill="white" text-anchor="middle"
      font-weight="bold">TWO</text>
  </svg>`,

  topuser: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="200" height="200"
  viewBox="00 0 200 200" xml:space="preserve">
  <style>
      .st10 {
          fill: #fff
      }
  </style>
  <path
      d="M200 100c0 12.9-12.3 23.2-17 34.4-4.8 11.6-3.5 27.6-12.3 36.3-8.7 8.7-24.7 7.5-36.3 12.3-11.2 4.6-21.5 17-34.4 17s-23.2-12.3-34.4-17c-11.6-4.8-27.6-3.5-36.3-12.3-8.7-8.7-7.5-24.7-12.3-36.3-4.6-11.2-17-21.5-17-34.4s12.3-23.2 17-34.4c4.8-11.6 3.5-27.6 12.3-36.3 8.7-8.7 24.7-7.5 36.3-12.3 11.2-4.6 21.5-17 34.4-17s23.2 12.4 34.4 17c11.6 4.8 27.6 3.5 36.3 12.3 8.7 8.7 7.5 24.7 12.3 36.3 4.6 11.2 17 21.5 17 34.4z"
      fill="#FFC200" />
  <path
      d="M100 0c11.2 0, 21.5 12.4, 34.4 17c11.6 4.8, 27.6 3.5, 36.3 12.3c8.7 8.7, 7.5 24.7, 12.3 36.3c4.6 11.2, 17 21.5, 17 34.4c0 12.9-12.3 23.2-17 34.4c-4.8 11.6-3.5 27.6-12.3 36.3c-8.7 8.7-24.7 7.5-36.3 12.3c-11.2 4.6-21.5 17-34.4 17v-200z"
      fill="#F7BC00" />
  <path
      d="M131.5 175.9c-3.9 1.6-7.7 4.2-11.5 6.8-1.3.9-2.6 1.8-3.9 2.6-5.1 3.4-10.4 6.2-16.1 6.2-5.8 0-11-2.8-16.1-6.1-1.3-.9-2.7-1.8-4-2.7-3.7-2.6-7.5-5.2-11.3-6.8-4.1-1.7-8.7-2.6-13.3-3.4-1.5-.3-3-.6-4.4-.9-6-1.3-11.6-3-15.4-6.9-3.9-3.9-5.6-9.4-6.9-15.4-.3-1.5-.6-2.9-.9-4.4-.9-4.6-1.8-9.3-3.5-13.4-1.6-3.9-4.2-7.7-6.8-11.5-.9-1.3-1.8-2.6-2.6-3.9-3.4-5.1-6.2-10.4-6.2-16.1 0-5.8 2.8-11 6.1-16.1.9-1.3 1.8-2.7 2.7-4 2.6-3.7 5.2-7.5 6.8-11.3 1.7-4.1 2.6-8.7 3.4-13.3.3-1.5.6-3 .9-4.4 1.3-6 3-11.6 6.9-15.4 3.9-3.9 9.4-5.6 15.4-6.9 1.5-.3 2.9-.6 4.4-.9 4.6-.9 9.3-1.8 13.4-3.5 3.9-1.6 7.7-4.2 11.5-6.8 1.3-.9 2.6-1.8 3.9-2.6 5.1-3.4 10.4-6.2 16.1-6.2s11 2.8 16.1 6.2c1.3.8 2.6 1.7 3.9 2.6 3.8 2.6 7.6 5.2 11.5 6.8 4.1 1.7 8.7 2.6 13.3 3.4 1.5.3 3 .6 4.4.9 6 1.3 11.6 3 15.4 6.9 3.9 3.9 5.6 9.4 6.9 15.4.3 1.5.6 2.9.9 4.4.9 4.6 1.8 9.3 3.5 13.4 1.6 3.9 4.2 7.7 6.8 11.5.9 1.3 1.8 2.6 2.6 3.9 3.4 5.1 6.2 10.4 6.2 16.1 0 5.8-2.8 11-6.1 16.1-.9 1.3-1.8 2.7-2.7 4-2.6 3.7-5.2 7.5-6.8 11.3-1.7 4.1-2.6 8.7-3.4 13.3-.3 1.5-.6 3-.9 4.4-1.3 6-3 11.6-6.9 15.4-3.9 3.9-9.4 5.6-15.4 6.9-1.5.3-2.9.6-4.4.9-4.8.9-9.5 1.8-13.5 3.5z"
      style="fill:none;stroke:#fff" />
  <text x="100" y="90" font-family="Arial" font-size="40" fill="white" text-anchor="middle"
      font-weight="bold">TOP</text>
  <text x="100" y="135" font-family="Arial" font-size="40" fill="white" text-anchor="middle"
      font-weight="bold">RATED</text>
  </svg>`,

  orderDropdownIcon: `<svg fill="#404145" width="64" height="64" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
    <path d="M156,128a28,28,0,1,1-28-28A28.02769,28.02769,0,0,1,156,128ZM128,76a28,28,0,1,0-28-28A28.02769,28.02769,0,0,0,128,76Zm0,104a28,28,0,1,0,28,28A28.02769,28.02769,0,0,0,128,180Z"/>
  </svg>`
}

function getIcon(svgName) {
  return ICONS[svgName]
}

export const svgService = {
  getIcon,
}
