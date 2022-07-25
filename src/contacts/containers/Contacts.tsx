/*
 * @Author: shenzhiwei
 * @Date: 2022-07-14 22:07:09
 * @Company: orientsec.com.cn
 * @Description: 容器组件 - Contacts
 */
import { useLoader } from '@modern-js/runtime';
import { useModel } from '@modern-js/runtime/model';
import { List } from 'antd';
import Item from '../components/Item';
import contacts from '../models/contacts';

const Contacts = ({ source }: { source: 'archived' | 'items' }) => {
  const [state, actions] = useModel(contacts);
  const { items, error, pending } = state;
  // // page init
  // useEffect(() => {
  //   if (!items.length && !error && !pending) {
  //     actions.load();
  //   }
  // });

  // hook of page init for serverless
  useLoader(
    async () => {
      if (!items.length && !error && !pending) {
        return actions.load();
      }
      return Promise.resolve();
    },
    {
      params: 'contacts',
    },
  );

  // computed props
  const data = state.items.filter(item =>
    source === 'archived' ? item.archived : true,
  );

  return (
    (items.length && (
      <List
        dataSource={data}
        renderItem={info => (
          <Item
            key={info.email}
            info={info}
            onArchive={() => {
              actions.archive(info.email);
            }}
          />
        )}
      />
    )) || (
      <div className="p-4 items-center border-gray-200 border-b border-t custom-text-gray">
        Pending...
      </div>
    )
  );
};

export default Contacts;