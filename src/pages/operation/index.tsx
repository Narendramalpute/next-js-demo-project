import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../../layout/Layout";
import { useDispatch,useSelector } from "react-redux";
import { RootState } from '../../redux/store';
import addValue from "../../redux/slices/counter";

const index = () => {
  // const [count, setCount] = useState<any>(0);
  const count = useSelector((state: RootState) => state.Counter);
   const dispatch = useDispatch();
  const handleAdd = () => {
   dispatch(addValue(count + 1));
    // setCount(count + 1);
  };

  const handleSub = () => {
    dispatch(addValue(count - 1));
    // setCount(count - 1);
  };

  const Container = styled.div`
    text-align: center;
  `;

  const CountText = styled.p`
    font-size: 24px;
    margin-bottom: 16px;
  `;

  const Button = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    margin: 0 8px;
  `;

  return (
    <Layout>
      <Container>
        <CountText>Count: {count}</CountText>
        <Button onClick={handleAdd}>Add</Button>
        <Button onClick={handleSub}>Subtract</Button>
      </Container>
    </Layout>
  );
};

export default index;
