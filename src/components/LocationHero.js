function LocationHero() {
    return (
        <header className="mb-16">
            <div className="w-full bg-center bg-cover h-[20rem]" style={{backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/20190616154621%21Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg/2880px-20190616154621%21Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg')"}}>
            <button className="absolute left-0 w-auto px-4 py-2 mt-4 ml-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-white text-slate-400 rounded-full lg:w-auto hover:bg-slate-200 hover:text-slate-700 focus:outline-none focus:bg-slate-200 focus:text-slate-700">&lt;</button>
            </div>
        </header>
    );
}

export default LocationHero;