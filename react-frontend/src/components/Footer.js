function Footer() {
    return (
        <footer class="bg-rose-600">
            <div class="container px-6 py-8 mx-auto">
                <div class="flex flex-col items-center sm:flex-row sm:justify-between">
                    <p class="text-sm text-white">© Copyright 2022. All Rights Reserved.</p>

                    <div class="flex mt-3 -mx-2 sm:mt-0">
                        <a href="#" class="mx-2 text-sm text-white hover:text-gray-200" aria-label="Reddit"> My Profile </a>
                        <a href="#" class="mx-2 text-sm text-white hover:text-gray-200" aria-label="Reddit"> Add Recommendation </a>
                        <a href="#" class="mx-2 text-sm text-white hover:text-gray-200" aria-label="Reddit"> Add Friend </a>
                        <a href="#" class="mx-2 text-sm text-white hover:text-gray-200" aria-label="Reddit"> Sign Out </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;