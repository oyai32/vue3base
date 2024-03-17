import {
  Document,
  Location,
  Setting,
} from '@element-plus/icons-vue';
import { type MenuList } from '@/constants/types';
import { h } from 'vue';

const menus: MenuList = [
  {
    title: 'Navigator One',
    icon: ()=>h(Document),
    key: '1',
    children: [
      {
        title: 'item two',
        key: '1-2',
      },
      {
        title: 'item two',
        key: '1-3',
      },
      {
        title: 'item four',
        key: '1-4',
        children: [
          {
            title: 'item one',
            key: '1-4-1',
          },
        ],
      },
    ],
  },
  {
    title: 'Navigator Two',
    icon: ()=>h(Location),
    key: '2',
  },
  {
    title: 'Navigator Four',
    icon: ()=>h(Setting),
    key: '4',
  },
];

export default menus;
