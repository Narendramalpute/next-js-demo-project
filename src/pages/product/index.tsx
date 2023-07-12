
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import Layout from "../../layout/Layout";

type Repo = {
  name: string;
  stargazers_count: number;
};

export const getServerSideProps: GetServerSideProps<{
  repo: Repo;
}> = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const repo = await res.json();
  return { props: { repo } };
};

export default function Page({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const Newrepo = JSON.stringify(repo);
  const newRepoParsed = JSON.parse(Newrepo);

  const handleOnProductClick = (item: any) => {
    router.push(`/product/${item.id}`);
  };
  const Container  = styled.div`
      background-color: #F8F8FF;
      border: 1px solid black;
      padding: 10px;
      margin: 10px;
      cursor: pointer;
      display:flex
  `
  const Items = styled.div`
    margin-right:10px;
   `
  const Span = styled.span`
  `
  const SpanTitle = styled.span`
    font-weight: bold;
  `
  return (
    <>
    <Layout>
      <ul>
        {newRepoParsed &&
          newRepoParsed.length > 0 &&
          newRepoParsed.map((item: any) => {
            return (
              <>
                {/* <div
                  onClick={() => handleOnProductClick(item)}
                  className="d-flex card__post"
                >
                  <div className="margin__right">
                    <span key={item.id}>{item.id}</span>
                  </div>
                  <div>
                    <span>{item.title}</span>
                  </div>
                </div> */}
                <Container
                  onClick={() => handleOnProductClick(item)} 
                >
                  <Items>
                    <SpanTitle key={item.id}>{item.id}</SpanTitle>
                  </Items>
                  <Items>
                    <Span>{item.title}</Span>
                  </Items>
                </Container>
              </>
            );
          })}
      </ul>
      </Layout>
    </>
  );
}
