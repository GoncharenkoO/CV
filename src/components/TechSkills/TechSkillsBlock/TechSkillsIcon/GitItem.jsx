export default function GitItem() {
  return (
    <div>
      <svg display="none">
        <symbol id="git" viewBox="0 0 512 512">
          <path
            fill="#f05133"
            d="M440.8 238.9L273 71.2a24.7 24.7 0 00-35 0l-34.8 34.9l44.2 44.1a29.4 29.4 0 0137.2 37.5l42.5 42.5a29.4 29.4 0 11-17.6 16.6l-39.7-39.7v104.5a29.4 29.4 0 11-24.2-.9V205.3a29.4 29.4 0 01-16-38.6l-43.5-43.5l-115 115a24.7 24.7 0 000 34.9L239 440.8a24.7 24.7 0 0035 0l166.9-167a24.7 24.7 0 000-34.9"
          />
        </symbol>
      </svg>

      <svg className="icon" width="20" height="20">
        <use xlinkHref="#git"></use>
      </svg>
    </div>
  );
}