import { View } from "react-native";
import NotificationHandler from "../util/Notification";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <NotificationHandler />
      {children}
    </View>
  );
};

export default Layout;
