import { View } from "react-native";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      {children}
    </View>
  );
};

export default Layout;
