<script>
    import Paragraph from "./Paragraph.svelte";
</script>

<div class="w-full px-16">
    <p class="text-red-500 font-medium text-2xl text-center tracking-wide">Workflow</p>
    <h2 class="text-6xl font-semibold tracking-wide text-gray-700 text-center mb-16">How does Iconify work?</h2>
    <div class="flex flex-col gap-16 relative">
        <div class="big-arrow"></div>
        <div class="flex gap-12">
            <div class="w-full">
                <div class="bg-gray-100 text-gray-700 py-4 px-5 rounded-md shadow-md">
                    <code>
                        &lt;<span style="all: inherit; color: rgb(49, 141, 225)">span</span> class="<span style="all: inherit; color: rgb(225, 62, 49);">iconify</span>" data-icon="<span style="all: inherit; color: rgb(225, 62, 49);">fa:home</span>"&gt;&lt;/<span style="all: inherit; color: rgb(49, 141, 225)">span</span>&gt;
                        <br/>
                        &lt;<span style="all: inherit; color: rgb(49, 141, 225)">span</span> class="<span style="all: inherit; color: rgb(225, 62, 49);">iconify</span>" data-icon="<span style="all: inherit; color: rgb(225, 62, 49);">mdi:alert"</span>&gt;&lt/<span style="all: inherit; color: rgb(49, 141, 225)">span</span>&gt;
                    </code>
                </div>
            </div>
            <div class="bg-blue-500 text-white font-medium text-3xl rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">01</div>
            <div class="w-full mt-4">
                <Paragraph isHTML content="Script looks for icon placeholders.
                <br/><br/>
                See <a>how to use Iconify tutorial</a>. " />
            </div>
        </div>
        <div class="flex gap-12">
            <div class="w-full inline-flex gap-2 justify-end mt-2">
                <div class="px-4 py-2 h-12 bg-red-1000 rounded-md shadow-md text-white font-medium text-lg tracking-wide">fa:home</div>
                <div class="px-4 py-2 h-12 bg-red-1000 rounded-md shadow-md text-white font-medium text-lg tracking-wide">mdi:alert</div>
            </div>
            <div class="bg-blue-500 text-white font-medium text-3xl rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">02</div>
            <div class="w-full mt-4">
                <Paragraph isHTML content="Script retrieves icon names from placeholders. " />
            </div>
        </div>
        <div class="flex gap-12">
            <div class="w-full flex gap-4 justify-between -mt-20">
                <div class="flex-shrink-0 flex flex-col justify-center items-center ">
                    <p class="text-gray-700 font-medium text-2xl tracking-wide mb-4">Client</p>
                    <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29 3.625C29 2.66359 29.3819 1.74156 30.0617 1.06174C30.7416 0.381919 31.6636 0 32.625 0L54.375 0C55.3364 0 56.2584 0.381919 56.9383 1.06174C57.6181 1.74156 58 2.66359 58 3.625V54.375C58 55.3364 57.6181 56.2584 56.9383 56.9383C56.2584 57.6181 55.3364 58 54.375 58H32.625C31.6636 58 30.7416 57.6181 30.0617 56.9383C29.3819 56.2584 29 55.3364 29 54.375V3.625ZM32.625 52.5625C32.625 53.0432 32.816 53.5042 33.1559 53.8441C33.4958 54.184 33.9568 54.375 34.4375 54.375C34.9182 54.375 35.3792 54.184 35.7191 53.8441C36.059 53.5042 36.25 53.0432 36.25 52.5625C36.25 52.0818 36.059 51.6208 35.7191 51.2809C35.3792 50.941 34.9182 50.75 34.4375 50.75C33.9568 50.75 33.4958 50.941 33.1559 51.2809C32.816 51.6208 32.625 52.0818 32.625 52.5625ZM39.875 52.5625C39.875 53.0432 40.066 53.5042 40.4059 53.8441C40.7458 54.184 41.2068 54.375 41.6875 54.375C42.1682 54.375 42.6292 54.184 42.9691 53.8441C43.309 53.5042 43.5 53.0432 43.5 52.5625C43.5 52.0818 43.309 51.6208 42.9691 51.2809C42.6292 50.941 42.1682 50.75 41.6875 50.75C41.2068 50.75 40.7458 50.941 40.4059 51.2809C40.066 51.6208 39.875 52.0818 39.875 52.5625ZM34.4375 3.625C33.9568 3.625 33.4958 3.81596 33.1559 4.15587C32.816 4.49578 32.625 4.9568 32.625 5.4375C32.625 5.9182 32.816 6.37922 33.1559 6.71913C33.4958 7.05904 33.9568 7.25 34.4375 7.25H52.5625C53.0432 7.25 53.5042 7.05904 53.8441 6.71913C54.184 6.37922 54.375 5.9182 54.375 5.4375C54.375 4.9568 54.184 4.49578 53.8441 4.15587C53.5042 3.81596 53.0432 3.625 52.5625 3.625H34.4375ZM32.625 12.6875C32.625 13.1682 32.816 13.6292 33.1559 13.9691C33.4958 14.309 33.9568 14.5 34.4375 14.5H52.5625C53.0432 14.5 53.5042 14.309 53.8441 13.9691C54.184 13.6292 54.375 13.1682 54.375 12.6875C54.375 12.2068 54.184 11.7458 53.8441 11.4059C53.5042 11.066 53.0432 10.875 52.5625 10.875H34.4375C33.9568 10.875 33.4958 11.066 33.1559 11.4059C32.816 11.7458 32.625 12.2068 32.625 12.6875ZM5.4375 7.25C3.99539 7.25 2.61234 7.82288 1.59261 8.84261C0.572878 9.86234 0 11.2454 0 12.6875L0 38.0625C0 39.5046 0.572878 40.8877 1.59261 41.9074C2.61234 42.9271 3.99539 43.5 5.4375 43.5H21.75V50.75H19.9375C19.4568 50.75 18.9958 50.941 18.6559 51.2809C18.316 51.6208 18.125 52.0818 18.125 52.5625C18.125 53.0432 18.316 53.5042 18.6559 53.8441C18.9958 54.184 19.4568 54.375 19.9375 54.375H25.375V39.875H5.4375C4.9568 39.875 4.49578 39.684 4.15587 39.3441C3.81596 39.0042 3.625 38.5432 3.625 38.0625V12.6875C3.625 12.2068 3.81596 11.7458 4.15587 11.4059C4.49578 11.066 4.9568 10.875 5.4375 10.875H25.375V7.25H5.4375Z" fill="#318DE1"/>
                        </svg>                        
                </div>
                <div class="w-full flex flex-col justify-center items-center gap-8 mt-12">
                    <div class="flex flex-col justify-center items-center gap-2">
                        <p class="text-gray-500 text-lg tracking-wide">List of icons</p>
                        <div class="arrow"><svg class="arrow-stroke" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="350" height="2" preserveAspectRatio="xMidYMid meet" viewBox="0 0 350 2" data-icon="website:process-line" data-height="auto" data-icon-inline="false" style="vertical-align: -0.125em; transform: rotate(360deg);"><line x1="1" y1="1" x2="351" y2="1" stroke="#DDDDDD" stroke-width="2"></line></svg></div>
                    </div>
                    <div class="flex flex-col justify-center items-center gap-2">
                        <div class="arrow reverse"><svg class="arrow-stroke reverse" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="350" height="2" preserveAspectRatio="xMidYMid meet" viewBox="0 0 350 2" data-icon="website:process-line" data-height="auto" data-icon-inline="false" style="vertical-align: -0.125em; transform: rotate(360deg);"><line x1="1" y1="1" x2="351" y2="1" stroke="#DDDDDD" stroke-width="2"></line></svg></div>
                        <p class="text-gray-500 text-lg tracking-wide">SVG data (in bulk)</p>
                    </div>
                </div>
                <div class="flex-shrink-0 flex flex-col items-center justify-center">
                    <p class="text-gray-700 font-medium text-2xl tracking-wide mb-4">Server</p>
                    <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.83215 9.66787C4.83215 4.32825 15.6528 0 29 0C42.3473 0 53.1679 4.32825 53.1679 9.66787V14.5C53.1679 19.8396 42.3473 24.1679 29 24.1679C15.6528 24.1679 4.83215 19.8396 4.83215 14.5V9.66787Z" fill="#318DE1"/>
                        <path d="M4.83215 22.9609V33.8359C4.83215 39.1683 15.6528 43.5002 29 43.5002C42.3473 43.5002 53.1679 39.1719 53.1679 33.8323V22.9609C51.5354 24.1369 49.7593 25.0993 47.8826 25.8247C42.8113 27.8547 36.1304 29.0002 29 29.0002C21.8733 29.0002 15.1924 27.8511 10.121 25.8247C8.24437 25.0994 6.46821 24.137 4.83578 22.9609H4.83215Z" fill="#318DE1"/>
                        <path d="M53.1679 42.2966C51.5352 43.4713 49.7591 44.4325 47.8826 45.1567C42.8076 47.1867 36.1304 48.3322 28.9964 48.3322C21.8697 48.3322 15.1888 47.1867 10.1174 45.1567C8.24078 44.4313 6.46462 43.4689 4.83215 42.293V48.3322C4.83215 53.6718 15.6528 58.0001 29 58.0001C42.3473 58.0001 53.1679 53.6718 53.1679 48.3322V42.2966Z" fill="#318DE1"/>
                        </svg>                        
                </div>
            </div>
            <div class="bg-blue-500 text-white font-medium text-3xl rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">03</div>
            <div class="w-full mt-4">
                <Paragraph isHTML content="Script connects to Iconify API and retrieves SVG data for all icons found on page.
                <br/><br/>
                Iconify API is hosted on network of servers spread across the world, so data would load in fraction of a second from any location." />
            </div>
        </div>
        <div class="flex gap-12">
            <div class="w-full">
                <div class="bg-gray-100 text-gray-700 py-4 px-5 rounded-md shadow-md">
                    <code>
                        &lt;p&gt;This is a sample icon <span style="all: inherit; color: rgb(225, 62, 49);">&lt;svg class="iconify" data-icon="fa:home" ...&gt;...&lt;/svg&gt;</span>&lt;/p&gt;
                        <br/><br/>
                        &lt;div class="icon-on-left"&gt;
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span style="all: inherit; color: rgb(225, 62, 49);">&lt;svg data-icon="mdi:alert" ...&gt;...&lt;/svg&gt;</span>
                        <br/>
                        &lt;/div&gt;
                    </code>
                </div>
            </div>
            <div class="bg-blue-500 text-white font-medium text-3xl rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">04</div>
            <div class="w-full mt-4">
                <Paragraph isHTML content="Script replaces placeholders with SVG.
                <br/><br/>
                More detailed description is <a>available in documentation</a>." />
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    .arrow {
        position: relative;

        &::before, &::after {
                content: "";
                position: absolute;
                bottom: 0;
                width: .8rem;
                height: 2px;
                background-color: #DDDDDD;
                border-radius: 2px;
            }

        &::before {
            transform: rotate(-45deg);
        }

        &::after {
            transform: rotate(45deg);
        }

        &.reverse {
            &::before, &::after {
                left: 0;
            }

            &::before {
                transform-origin: bottom left;
            }

            &::after {
                transform-origin: top left;
            }
        }

        &:not(.reverse) {
            &::before, &::after {
                right: 0;
            }

            &::before {
                transform-origin: top right;
            }

            &::after {
                transform-origin: bottom right;
            }
        }

        &-stroke {
            stroke-dasharray: 8;
            animation: stroke-anim 0.5s linear infinite;
            animation-direction: normal;

            &.reverse {
                animation-direction: reverse;
            }
        }
    }

    .big-arrow {
        position: absolute;
        top: -2rem;
        left: 50%;
        transform: translateX(-50%);
        width: 2px;
        height: calc(100% + 4rem);
        background-color: #E8E8E8;
        border-radius: 2px;
        z-index: -1;

        &::before, &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 2px;
            height: 1rem;
            background-color: #E8E8E8;
            border-radius: 2px;
        }

        &::before {
            transform: rotate(-45deg);
            transform-origin: bottom right;
        }

        &::after {
            transform: rotate(45deg);
            transform-origin: bottom left;
        }
    }

    @keyframes stroke-anim {
        0% {
            stroke-dashoffset: 0;
        }

        100% {
            stroke-dashoffset: -16;
        }
    }
</style>