import PropTypes from 'prop-types';
import { Label, Percent, Stat, StatItem, StatList, StatTitle } from './Statistics.styled';

export const Statistics = ({ stats, title }) => {

  return <Stat>

{title && <StatTitle>Upload stats</StatTitle>}

    <StatList>{stats.map(item => 
        <StatItem key={item.id} className="item" >
        <Label className="label">{ item.label }</Label>
        <Percent className="percentage"> {item.percentage}%</Percent>
    </StatItem>
    )
  }
  </StatList>
</Stat>
}

Statistics.propTypes = {
  title: PropTypes.string,
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  })
}