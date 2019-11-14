import * as React from 'react';
import { Detail } from '@/components/detail';
import { CreateEle} from '@/components/react_create_ele';
import * as styles from './index.scss';
export class EventTransInfo extends React.Component {
  render () {
    return (
      <div>
        {
          React.createElement(
            'div', 
            {id: 'one', className: styles.div },
            React.createElement('span', { id: 'spanTwo', className: styles.span_tag}, 'event_trans_info标签'),
            React.createElement(CreateEle),
            React.createElement(Detail),
          )
        }
      </div>
    )
  }
}