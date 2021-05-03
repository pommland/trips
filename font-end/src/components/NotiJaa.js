import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
 
class NotiJaa extends React.Component {
  createNotification = (type,msg) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info(msg);
          break;
        case 'success':
          NotificationManager.success(msg);
          break;
        case 'warning':
          NotificationManager.warning(msg, 3000);
          break;
        case 'error':
          NotificationManager.error(msg, 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      }
    };
  };
 
  render() {
    return (
      <div>
        <button className='btn btn-info'
          onClick={this.createNotification('info')}>Info
        </button>
        <hr/>
        <button className='btn btn-success'
          onClick={this.createNotification('success')}>Success
        </button>
        <hr/>
        <button className='btn btn-warning'
          onClick={this.createNotification('warning')}>Warning
        </button>
        <hr/>
        <button className='btn btn-danger'
          onClick={this.createNotification('error')}>Error
        </button>
 
        <NotificationContainer/>
      </div>
    );
  }
}
export default NotiJaa;