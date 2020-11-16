import React from 'react';
import Tag from '../Atom/Tag';

function Tags({tags}) {
    return(
        <div className="tag-wrapper">
            {tags.map((tag) => {return <Tag tag={tag}></Tag>})}
        </div>
    );
}

export default Tags;