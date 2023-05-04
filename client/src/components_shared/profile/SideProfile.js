import React, { useEffect, useState } from 'react'
import { getRoleToken } from '../../components_login/Token'
import { url } from '../Request';

export default function SideProfile({ info, load, blogs }) {




    const renderBlogs = blogs && blogs.map((item, index) =>
        <li>
            {index > 5 ?
                <div> </div >
                :
                <div class="flex my-5 w-full overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <div class="flex items-center justify-center w-20 font-bold bg-emerald-500">
                        {item.handle}
                    </div>

                    <div class="px-1 py-2 ">
                        <div class="mx-3">
                            {item.title}
                        </div>
                    </div>
                </div>
            }
        </li>

    )

    return (
        <>
            <div class="w-full md:w-3/12 md:mx-2">
                <div class="bg-white p-3 border-t-4 border-green-400">
                    <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">{load ? "." : info.handle}</h1>
                    <h3 class="text-gray-600 font-lg text-semibold leading-6">{load ? "fetching.." : info.email}</h3>
                    <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">

                    </p>
                    <ul
                        class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li class="flex items-center py-3">
                            <span>Contributing as</span>
                            <span class="ml-auto">{getRoleToken() === "0" ? "Learner" : "Admin"}</span>
                        </li>
                    </ul>
                </div>
                <div class="my-4"></div>

                <div class="bg-white p-3 hover:shadow">
                    <div class="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                        <span class="text-green-500">
                            <svg class="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </span>
                        <span>Latest Blogs</span>
                    </div>
                    <div class="grid ">
                        <div class="text-center my-2">
                            {
                                load
                                    ?
                                    <>
                                        <p class="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

                                    </>
                                    :
                                    <>
                                        <ul>
                                            {renderBlogs}
                                        </ul>
                                        {/* renderBlogs */}
                                    </>
                            }
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
