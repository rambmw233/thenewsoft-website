export interface NavigationItem {
  label: string;
  route: string;
  children?: NavigationItem[];
  isExternal?: boolean;
  isCta?: boolean;
}
