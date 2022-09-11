import PropTypes from 'prop-types';
import css from "./Statistics.module.css";

import { StatisticItem } from "./StatisticItem";

export const Statistics = ({title, stats }) => {
    return (<section className="statistics">
        <h2 className="title">{title}</h2>

  <ul className={css.statList}>
            {stats.map(stat => (
        <li className="item" key ={stat.id}>
    <StatisticItem label ={stat.label} percentage = {stat.percentage} />
    </li>
    ))}
  </ul>
</section>);
}
Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    percentage : PropTypes.number.isRequired
    }),
    ), 
}