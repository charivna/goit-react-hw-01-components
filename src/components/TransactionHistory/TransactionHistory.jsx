import PropTypes from 'prop-types';
import { HeadBlock, Item, Line, Table, TableHead } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {

    return <Table className="transaction-history">
        <thead>
            <TableHead>
                <HeadBlock>Type</HeadBlock>
                <HeadBlock>Amount</HeadBlock>
                <HeadBlock>Currency</HeadBlock>
            </TableHead>
        </thead>
        <tbody>
            {items.map(item => 
                <Line key={item.id}>
                    <Item>{item.type}</Item>
                    <Item>{item.amount}</Item>
                    <Item>{item.currency}</Item>
                </Line>
            )}</tbody>
    </Table>
}

TransactionHistory.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
   })
}
