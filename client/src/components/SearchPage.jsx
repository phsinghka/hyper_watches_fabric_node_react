const SearchPage = () => {
    return (
        <form class="w-full max-w-lg">
            <h1 className="block uppercase text-gray-700 text-lg font-bold mb-2 justify-center pb-4">Search</h1>

            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Watch ID
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Watch ID" />
                </div>
            </div>
            <div class="flex pt-10 justify-center w-full">
                <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                    Transfer
                </button>
            </div>

        </form>
    );
};

export default SearchPage;
