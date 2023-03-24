import React from "react";
import Card from "../../Component/Card";

const ListView = (props) => {
  const { show, data } = props;
  if (!show) return;
  return (
    <div className='w-full flex flex-wrap justify-around'>
      {data && data.map((d) => <Card key={d.id} data={d} />)}
    </div>
  );
};

export default ListView;
