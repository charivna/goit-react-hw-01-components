import PropTypes from 'prop-types';

export const Statistics = ({ stats, title }) => {

  return <section className="statistics">

{title && <h2 className="task-title">Upload stats</h2>}

    <ul className="stat-list">{stats.map(item => 
        <li key={item.id} className="item" >
        <span className="label">{ item.label }</span>
        <span className="percentage">{ item.percentage }</span>
    </li>
    )
  }
  </ul>
</section>
}

Statistics.propTypes = {
  title: PropTypes.string,
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  })
}