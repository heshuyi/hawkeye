import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Route,Switch,useHistory,BrowserRouter, } from 'react-router-dom';
import InTimeTable from '../InTimeTable';
import PeoplePage from '../PeoplePage/PeoplePage';
import ErrorBoundary from 'antd/es/alert/ErrorBoundary';
import ErrorTablePage from '../ErrorTablePage/ErrorTablePage';
import MonitoringIndex from '../MonitoringIndexPage/MonitoringIndex';
import './index.less';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('实时大盘', 'home', null, ),
  getItem('监控指标', 'monitor', null,),
  getItem('问题列表', 'errorTable', null, ),
  getItem('人员管理', 'people', null, ),
];
const Home = (props) => {
  let history = useHistory();
  console.log(history);
  function onClick (e) {
    console.log('click ', e);
    let path = e.keyPath.reverse().join('/')
    console.log(history);
    history.push('/'+path)

  };
  return (
    
    <div className='father-box home-page'>
      <div className='link-list-route'>
        <Menu
          onClick={(e)=>onClick(e)}
          style={{
            width: 256,
          }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          items={items}
        />
      </div>
      <div className='content-box'>
        <Switch>
          <Route path='/home' component={InTimeTable} />
          <Route path='/people' component ={PeoplePage}/>
          <Route path='/monitor' component={MonitoringIndex}/>
          <Route path='/errorTable' component={ErrorTablePage}/>
        </Switch>
       
      </div>
    </div>
  );
};
export default Home;