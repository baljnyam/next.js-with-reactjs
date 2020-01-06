// Copyright 2019 Google LLC.
// SPDX-License-Identifier: Apache-2.0

import React from "react";
import MyLink from "../components/MyLink";
import Header from "../components/Header";
import Content from "../components/Content";

export default () => (
  <div>
    <Header />
    <Content>
      <MyLink href="/margherita" title="Margherita" prefetch={true} />
      <MyLink
        href="/pineapple-pizza"
        title="Pineapple pizza"
        prefetch={false}
      />
    </Content>
  </div>
);
