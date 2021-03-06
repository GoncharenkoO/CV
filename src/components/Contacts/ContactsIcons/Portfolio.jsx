import PropTypes from 'prop-types';

const GitHubItem = ({ color, className }) => {
  return (
    <svg
      className={className}
      width="17"
      height="17"
      viewBox="0 0 32 32"
      fill={color}
    >
      <path
        d="M10 6c0-3.314 2.686-6 6-6s6 2.686 6 6c0 3.314-2.686 6-6 6s-6-2.686-6-6zM24.002 14h-1.107l-6.222 12.633 2.327-11.633-3-3-3 3 2.327 11.633-6.222-12.633h-1.107c-3.998 0-3.998 2.687-3.998 6v10h24v-10c0-3.313 0-6-3.998-6z"
        color="#fff"
      ></path>
    </svg>
  );
};

export default GitHubItem;

GitHubItem.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};
