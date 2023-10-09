import React from "react";

const HeadlineCards = () => {
    return (
        <div className="max-w-[1640px] m-auto px-4 py-12">
            <h1 className="text-orange-600 font-bold text-4xl text-center">Best Seller</h1>
        <div className="max-w-[1640px] mx-auto p-4 py-12 grid sm:grid-cols-3 gap-6">
            {/* card */}
            <div className="rounded-xl relative ">
                {/* overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="fnt-bold text-2xl px-2 pt-4">Bacon Cheeseburger</p>
                    <p className="px-2">Ready</p>
                    <button className="border-white border-2 bg-transparent hover:bg-orange-600 hover:border-orange-600 duration-500 text-white mx-2 absolute bottom-4 rounded-lg p-1">Order Now </button>
                </div>
                <img className="max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl " src="https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60" alt="" />
            </div>
            {/* card */}
            <div className="rounded-xl relative ">
                {/* overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="fnt-bold text-2xl px-2 pt-4">Meat Lover Pizza</p>
                    <p className="px-2">Ready</p>
                    <button className="border-white border-2 bg-transparent hover:bg-orange-600 hover:border-orange-600 duration-500 text-white  mx-2 absolute bottom-4 rounded-lg p-1">Order Now </button>
                </div>
                <img className="max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl " src="https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" />
            </div>
            {/* card */}
            <div className="rounded-xl relative ">
                {/* overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="fnt-bold text-2xl px-2 pt-4">Caesar Salad</p>
                    <p className="px-2">Ready</p>
                    <button className="border-white border-2 bg-transparent hover:bg-orange-600 hover:border-orange-600 duration-500 text-white mx-2 absolute bottom-4 rounded-lg p-1">Order Now </button>
                </div>
                <img className="max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl " src="https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2FsYWQlMjBjZWFzYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="" />
            </div>
        </div>
    </div>
    )
}

export default HeadlineCards