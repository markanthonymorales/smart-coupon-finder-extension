<script setup lang="ts">
    import { ref, type Ref } from "vue";
    import { useRouter } from "vue-router";

    const router = useRouter();
    const username: Ref<string> = ref('');
    const password: Ref<string> = ref('');
    const isLoggen: Ref<boolean> = ref(false);
</script>
<template>
 <div id="login" class="h-full w-full container mx-auto font-inter p-2">
    <article class="">
        <header class="py-2 text-[17px] text-black tracking-[-0.41px] leading-[22px] font-sf-pro-display font-medium md:text-[28px] md:font-normal md:leading-[33.41px] md:tracking-[0.36px]">Administrator access only.</header>
        <section class="py-2">
            <form method="get" action="#">
                <div class="form-group">
                    <div class="mb-2">
                        <input v-model="username" type="text" id="hs-trailing-button-add-on-with-icon-and-button" name="hs-trailing-button-add-on-with-icon-and-button" class="py-3 px-4 block w-full border-gray-200 shadow-sm rounded text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                    </div>
                    <div class="mb-2">
                        <input v-model="password" type="password" id="hs-trailing-button-add-on-with-icon-and-button" name="hs-trailing-button-add-on-with-icon-and-button" class="py-3 px-4 block w-full border-gray-200 shadow-sm rounded text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                    </div>
                    <button type="submit" class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Login</button>
                </div>
            </form>
        </section>
    </article>
 </div>
</template>