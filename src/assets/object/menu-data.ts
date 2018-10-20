import { MenuItem } from '../../app/_models/menu-item';

export const MenuData: MenuItem[] = [
  {
    'menuId': 'MU_001',
    'text': '菜单项1',
    'link': 'home',
    'icon': 'anticon anticon-mail',
    'menuClass': [],
    'subMenu': []
  },
  {
    'menuId': 'MU_002',
    'text': '子菜单2',
    'link': 'home',
    'icon': 'anticon anticon-appstore',
    'menuClass': [],
    'subMenu': [
      {
        'menuId': 'MU_003',
        'text': '子菜单项2.1',
        'link': 'home',
        'icon': 'anticon anticon-setting',
        'menuClass': [],
        'subMenu': []
      },
      {
        'menuId': 'MU_004',
        'text': '子菜单项2.2',
        'link': 'home',
        'icon': 'anticon anticon-setting',
        'menuClass': [],
        'subMenu': []
      },
      {
        'menuId': 'MU_005',
        'text': '菜单项2.3',
        'link': 'home',
        'icon': 'anticon anticon-home',
        'menuClass': [],
        'subMenu': [
          {
            'menuId': 'MU_006',
            'text': '菜单项2.3.1',
            'link': 'home',
            'icon': '',
            'menuClass': [],
            'subMenu': [
              {
                'menuId': 'MU_007',
                'text': '菜单项2.3.1.1',
                'link': 'home',
                'icon': '',
                'menuClass': [],
                'subMenu': []
              },
              {
                'menuId': 'MU_008',
                'text': '菜单项2.3.1.2',
                'link': 'home',
                'icon': '',
                'menuClass': [],
                'subMenu': []
              },
            ]
          },
        ]
      },
    ]
  },
  {
    'menuId': 'MU_009',
    'text': '菜单项3',
    'link': 'home',
    'icon': 'anticon anticon-home',
    'menuClass': [],
    'subMenu': []
  }
];
