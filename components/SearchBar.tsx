import {useEffect, useState} from "react";

const SearchBar = ({searchTerm, onChange}) => {

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="w-9/12">
                    <input
                        className="flex justify-center mt-20 w-full border-black border-2 h-8 whitespace-nowrap rounded-lg resize-none"
                        value={searchTerm}
                        onChange={onChange}
                    />
                    <div className="flex my-5">
                        <button className="bg-fuchsia-600 p-2 px-3 mr-2 rounded-full font-bold">Projects</button>
                        <button className="bg-fuchsia-600 p-2 px-3 mx-2 rounded-full font-bold">Internships</button>
                        <button className="bg-fuchsia-600 p-2 px-3 mx-2 rounded-full font-bold">Art</button>
                        <button className="bg-fuchsia-600 p-2 px-3 mx-2 rounded-full font-bold">Misc</button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default SearchBar;