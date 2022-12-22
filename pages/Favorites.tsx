import { ScrollView } from "react-native-gesture-handler";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { Favorites } from "../util/interfaces/Favorites";
import { getData } from "../util/LocalStorage";
import NamedSection from "../components/NamedSection";
import FavoriteEntry from "../components/FavoriteEntry";

const FavoritesPage = () => {

  const [loading, setLoading] = useState<boolean>(true);
  const [favorites, setFavorites] = useState<Favorites>();

  useEffect(() => {
    const fetch = async () => {
      setFavorites(await getData());
      setLoading(false);
    }

    fetch();
  }, []);

  return <Layout>
    <ScrollView>
      {!loading && <NamedSection title="Characters">
        {favorites?.favoriteCharacters.map((c, i) => <FavoriteEntry key={i} type="character" id={c.id} />)}
      </NamedSection>}

      {!loading && <NamedSection title="Comics">
        {favorites?.favoriteComics.map((c, i) => <FavoriteEntry key={i} type="comic" id={c.id} />)}
      </NamedSection>}
    </ScrollView>
  </Layout>;
};

export default FavoritesPage;
