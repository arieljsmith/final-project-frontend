function Footer() {
    return (
        <footer class="bg-white dark:bg-gray-800">
            <div class="container px-6 py-8 mx-auto">
                <div class="flex flex-col items-center sm:flex-row sm:justify-between">
                    <p class="text-sm text-gray-400">© Copyright 2022. All Rights Reserved.</p>

                    <div class="flex mt-3 -mx-2 sm:mt-0">
                        <a href="#" class="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> My Profile </a>

                        <a href="#" class="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Add Recommendation </a>

                        <a href="#" class="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Add Friend </a>

                        <a href="#" class="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Sign Out </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;