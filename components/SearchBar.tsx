import {useEffect, useState} from "react";

const SearchBar = ({searchTerm, onChange}) => {

    return (
        <>
            <div className={"flex justify-center my-20"}>
                <textarea className={"w-9/12 border-black border-2 h-8 whitespace-nowrap rounded-lg resize-none"}
                          value={searchTerm}
                          onChange={onChange}
                />
                <button></button>
            </div>
        </>
    )

}

export default SearchBar;