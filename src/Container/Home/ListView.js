import React from "react";
import Card from "../../Component/Card";

const ListView = (props) => {
    const { data } = props;
    return (
        <div className='w-full flex flex-wrap'>
            {data && data.map(d => <Card key={d.id} data={d} />)}
        </div>
    )
}

export default ListView;