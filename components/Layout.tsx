import { ScrollView, Image, Text, View } from "react-native";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      {children}
      <Footer footer={"Data provided by Marvel. © 2014 Marvel"} />
    </View>
  );
};

export default Layout;
