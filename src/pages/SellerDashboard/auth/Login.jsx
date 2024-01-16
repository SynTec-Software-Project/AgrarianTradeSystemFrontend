function Login(){
    return(
        <>
            <section class=" font-poppins">
                <div class="max-w-6xl px-0 mx-auto lg:px-6">
                    <div class="flex flex-col items-center h-full md:flex-row">
                        <div
                            class="flex items-center justify-center h-screen max-w-full px-0 md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 lg:px-16 xl:px-12">
                            <div class="z-10 w-full p-10 bg-gray-100 dark:bg-gray-900 h-100">
                                <h2 class="text-xl font-bold leading-tight mb-7 md:text-3xl dark:text-gray-300">
                                    Login to your account</h2>
                                <form action="" class="mt-6">
                                    <div>
                                        <label for="" class="block text-gray-700 dark:text-gray-300">Email:</label>
                                        <input type="email"
                                            class="w-full px-4 py-3 mt-2 bg-white rounded-lg dark:text-gray-100 dark:bg-gray-800 dark:border dark:border-gray-800"
                                            name="" placeholder="Enter your email"/>
                                    </div>
                                    <div class="mt-5">
                                        <div>
                                            <label for="" class="text-gray-700 dark:text-gray-300 ">Password:</label>
                                            <div class="relative flex items-center mt-2">
                                                <input type="password"
                                                    class="w-full px-4 py-3 bg-white rounded-lg dark:text-gray-400 dark:bg-gray-800 dark:border dark:border-gray-800 "
                                                    name="" placeholder="Enter password"/>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    class="absolute right-0 mr-3 dark:text-gray-300 bi bi-eye-slash" fill="currentColor"
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                                                    <path
                                                        d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                                                    <path
                                                        d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-4 text-right">
                                        <a href="#" class="text-sm font-semibold text-blue-700 hover:underline">forgot
                                            password?</a>
                                    </div>
                                    <button
                                        class="w-full px-4 py-3 mt-6 font-semibold text-gray-200 bg-blue-600 rounded-lg hover:text-gray-700 hover:bg-blue-200 "
                                        type="submit">LOGIN</button>
                                    <p class="mt-6 text-gray-700 dark:text-gray-300"> Need an account?
                                        <a href="#" class="font-semibold text-blue-500 hover:text-blue-700"> Create an account
                                        </a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;