import { Text } from "react-native";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { Comic } from "../util/interfaces/Comic";
import { Api } from "../util/Api";
import { ApiResponse } from "../util/ApiResponse";
import ComicCard from "../components/ComicCard";
import { FlatList } from "react-native-gesture-handler";
import Layout from "../components/Layout";
import InteractiveLoadingText from "../components/InteractiveLoadingText";
import BackToTop from "../components/BackToTop";

const Comics = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [comic, setComic] = useState<Comic[]>([]);
  const [fetchMore, setFetchMore] = useState<boolean>(false);
  const [noMoreData, setNoMoreData] = useState<boolean>(false);

  useEffect(() => {
    const data: ApiResponse<Comic> = Api.INSTANCE.getComics(comic.length);

    const fetch = async () => {
      const dataResult = await data.process();

      const actualResult = dataResult.data;

      if (actualResult.length === 0) setNoMoreData(true);
      else {
        const filtered = actualResult.filter(c => comic.findIndex(r => r.id == c.id) == -1);

        setComic([...comic, ...filtered]);
        setLoading(false);
        setFetchMore(false);
      }
    };

    fetch();
  }, [fetchMore]);


  const scrollRef = useRef<FlatList>(null);
  const [scrollOffset, setScrollOffset] = useState<number>(0);

  return (
    <Layout>
      {!loading && <FlatList
        ref={scrollRef}
        data={comic}
        renderItem={(comic) => (
          <ComicCard key={comic.index} comic={comic.item} />
        )}
        onScroll={(e) => setScrollOffset(e.nativeEvent.contentOffset.y)}
        onEndReached={(e) => !noMoreData && setFetchMore(true)}
      />}

      {noMoreData && (
        <Text style={{ textAlign: "center", fontSize: 30 }}>
          There are no comics left!
        </Text>
      )}

      {scrollOffset > 15 && <BackToTop onPress={() => {
        scrollRef.current!.scrollToOffset({
          animated: true,
          offset: 0
        })
      }} />}

      {(loading || fetchMore) && <InteractiveLoadingText style={{ textAlign: "center", fontSize: 30, marginTop: loading ? 20 : -20 }} />}
    </Layout>
  );
};

export default Comics;
