<template>
    <div class="flex flex-col items-center text-center mt-20">
        <img src="../assets/seaweed.svg" width="128" height="128" />
        <h1 class="text-4xl mb-0">Seaweed</h1>
        <p class="mb-4 text-lg opacity-75">
            A CSS library focused on improving the default appearance of HTML.
        </p>
        <div>
            <a class="btn filled mx-1.5 py-4">Get started</a>
            <a
                class="btn hollow mx-1.5 py-4"
                href="https://github.com/akarachen/seaweed"
                target="_blank"
                >Github</a
            >
        </div>
        <div class="mt-8 card-list flex flex-wrap">
            <div>
                <article class="card">
                    <h2 class="card-title">Beautiful</h2>
                    <p class="card-para">
                        Simple, bright and consistent design. You and your
                        customers will love it!
                    </p>
                </article>
            </div>
            <div>
                <article class="card">
                    <h2 class="card-title">Easy to use</h2>
                    <p class="card-para">
                        Import, then copy and paste. No Web technology or Design
                        knowledge required.
                    </p>
                </article>
            </div>
            <div>
                <article class="card">
                    <h2 class="card-title">Customizable</h2>
                    <p class="card-para">
                        A large number of variables are provided and can be
                        customized to suit your needs.
                    </p>
                </article>
            </div>
            <div>
                <article class="card">
                    <h2 class="card-title">Lightweight</h2>
                    <p class="card-para">
                        Seaweed does not do anything needless, so it can stay
                        lightweight, forever.
                    </p>
                </article>
            </div>
        </div>
    </div>
</template>

<style lang="less">
@import '../src/util.less';

.card-list > * {
    width: 100%;
    margin-bottom: 16px;

    @media @tablet {
        width: 50%;
    }

    @media @desktop {
        width: 25%;
    }

    & .card {
        height: 100%;
    }
}
</style>
