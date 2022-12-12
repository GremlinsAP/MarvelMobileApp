import {
  Text,
} from "react-native";
import { useEffect, useState } from "react";
import React from "react";
import { Comic } from "../util/interfaces/Comic";
import { Api } from "../util/Api";
import { ApiResponse } from "../util/ApiResponse";
import ComicCard from "../components/ComicCard";
import { FlatList } from "react-native-gesture-handler";
import Layout from "../components/Layout";

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

      setComic([...comic, ...actualResult]);
      setLoading(false);
      setFetchMore(false);
    };

    fetch();

    return () => data.controller.abort();
  }, [fetchMore]);

  return (
    <Layout>
      <FlatList
        data={comic}
        renderItem={(comic) => (
          <ComicCard key={comic.index} comic={comic.item} />
        )}
        onEndReached={(e) => !noMoreData && setFetchMore(true)}
      />

      {noMoreData && (
        <Text style={{ textAlign: "center", fontSize: 30 }}>
          There are no comics left!
        </Text>
      )}

      {loading && <Text>Loading...</Text>}
    </Layout>
  );
};

export default Comics;
