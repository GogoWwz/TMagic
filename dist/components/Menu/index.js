import Menu from './menu';
import SubMenu from './subMenu';
import MenuItem from './menuItem';
// 将MenuComponent组件断言为 IMenuComponent 类型
var MenuComponent = Menu;
MenuComponent.Item = MenuItem;
MenuComponent.SubMenu = SubMenu;
export default MenuComponent;
