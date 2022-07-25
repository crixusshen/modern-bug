/*
 * @Author: shenzhiwei
 * @Date: 2022-07-11 14:54:10
 * @Company: orientsec.com.cn
 * @Description: 页面入口
 */
import { useState } from 'react';
import { PreRender } from '@modern-js/runtime/ssr';
import { Radio, RadioChangeEvent } from 'antd';
import { Route, useHistory } from '@modern-js/runtime/router';
import { Helmet } from '@modern-js/runtime/head';
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';
import './styles/utils.css';
import Contacts from './containers/Contacts';

function App() {
  const history = useHistory();
  const [currentList, setList] = useState(history.location.pathname || '/');
  const handleSetList = (e: RadioChangeEvent) => {
    const { value } = e.target;
    setList(value);
    history.push(value);
  };

  return (
    <div className="container lg mx-auto">
      <PreRender interval={8} />
      <div className="h-16 p-2 flex items-center justify-center">
        <Radio.Group onChange={handleSetList} value={currentList}>
          <Radio value="/">All</Radio>
          <Radio value="/archives">Archives</Radio>
        </Radio.Group>
      </div>
      <Route path="/" exact={true}>
        <Helmet>
          <title>All</title>
        </Helmet>
        <Contacts source="items" />
      </Route>
      <Route path="/archives" exact={true}>
        <Helmet>
          <title>Archives</title>
        </Helmet>
        <Contacts source="archived" />
      </Route>
    </div>
  );
}

export default App;
