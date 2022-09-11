import PropTypes from 'prop-types';

export const StatisticItem = ({ label, percentage }) => {
    return (
        <>
    <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
        </>
     );
}
StatisticItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage : PropTypes.number.isRequired,
}