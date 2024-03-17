interface Menu {
    title: string;
    // element 的图标组件
    icon: JSX.Element;
    // 权限 key
    key: string;
    children?: Menu[];
}

export type MenuList = Menu[];