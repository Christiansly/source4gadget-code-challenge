import React from "react";
import styledComponents from "styled-components";
import Card from "../components/Card/Card";
import Table from "../components/Table/Table";
import UserTable from "../components/Table/UserTable/UserTable";
import Tag from "../components/Tags/Tag";

function Dashboard() {
  const DotContainer = styledComponents.div`
    background-color: #9991E5;
  `;
  const PopularTagsContainer = styledComponents.div`

    border: 1px solid #FFF;
    box-shadow: 0px 0px 7px rgba(40, 40, 40, 0.17);
    border-radius: 4px
`;
  return (
    <div className="pl-16 pr-16 pt-12">
      <div className="flex gap-1 flex-row-reverse mb-3">
        <DotContainer className="h-2 w-2 rounded-full" />{" "}
        <DotContainer className="h-2 w-2 rounded-full" />{" "}
        <DotContainer className="h-2 w-2 rounded-full" />
      </div>
      <div className="flex gap-6 mb-12">
        <div className="flex-col flex gap-3">
          <div className="gap-4 flex flex-row">
            <Card label="User" number={100} main={true} />
            <Card label="Posts" number={60} main={false} />
          </div>
          <div className="gap-4 flex flex-row">
            <Card label="Comments" number={307} main={false} />
            <Card label="Tags" number={21} main={false} />
          </div>
        </div>
        <PopularTagsContainer className="pl-5 pt-4 flex-grow text-left">
          <h1 className="font-bold text-md mb-4">Popular Tags</h1>
          <div>
            <div className="flex gap-4">
              <Tag active={true} title="Dog" number="345" />
              <Tag title="Water" number="20" />
            </div>
            <div className="flex gap-4">
              <Tag title="Natutre" number="18" />
              <Tag title="Private info requests" number="17" />
            </div>
            <div className="flex gap-4">
              <Tag title="Winter" number="12" />
            </div>
          </div>
        </PopularTagsContainer>
      </div>
      <div className="flex w-full">
        <UserTable />
        
      </div>
    </div>
  );
}

export default Dashboard;
