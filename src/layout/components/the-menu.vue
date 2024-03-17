<script lang="jsx">
import { ref } from 'vue';
import { defineComponent, inject } from 'vue';

export default defineComponent({
  setup() {
    const isCollapse = ref(true);
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };

    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };

    const lastItem = ({ key, icon, title }) => (
      <ElMenuItem index={key}>
        {icon ? (
          <>
            <ElIcon> {icon()}</ElIcon>
            <span>{title}</span>
          </>
        ) : (
          <>{title}</>
        )}
      </ElMenuItem>
    );

    const getItem = (item) => {
      if (item.children) {
        return (
          <ElSubMenu
            index={item.key}
            v-slots={{
              title: () => {
                if (item.icon) {
                  return (
                    <>
                      <ElIcon>{item.icon()}</ElIcon>
                      <span>{item.title}</span>
                    </>
                  );
                }
                return item.title;
              },
            }}
          >
            {item.children.map((child) => {
              return getItem(child);
            })}
          </ElSubMenu>
        );
      } else {
        return lastItem(item);
      }
    };

    const data = inject('menus', []);
    return () => (
      <ElMenu
        defaultActive='2'
        class='el-menu-vertical-demo'
        collapse={isCollapse.value}
        onOpen={handleOpen}
        onClose={handleClose}
      >
        {data.map((item) => {
          return getItem(item);
        })}
      </ElMenu>
    );
  },
});
</script>

<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  border: none;
}
</style>
