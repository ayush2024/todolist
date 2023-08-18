import React from "react";

const List = (Props) => {

    return (
        <>
            <div className="list_style">
                {/* <i class="fa fa-times" aria-hidden="true"/> */}
                <i className="fa fa-times" aria-hidden="true"
                    onClick={()=>{
                        Props.onSelect(Props.id);
                    }}
                />
                <li>{Props.text}</li>
            </div>
        </>
    );
}

export default List;